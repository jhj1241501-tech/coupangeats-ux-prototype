import { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react'
import { buildInitialFavMenus, STORE_CAT } from './data/coupang'
import { supabase } from './supabaseClient'

const AppCtx = createContext(null)
export function useApp() { return useContext(AppCtx) }

// favMenus 항목 → DB 행(저장용 컬럼만)
const toRow = (m) => ({ mn: m.mn, st: m.st || '', img: m.img, pr: m.pr, good: m.good, rev: m.rev, cat: m.cat })

export function AppProvider({ children }) {
  // 처음엔 기본 목록을 보여주고(빈 화면 방지), 곧바로 DB값으로 교체
  const [favMenus, setFavMenus] = useState(() => buildInitialFavMenus())
  const [cart, setCart] = useState({ active: false, fin: 0, qty: 1, mn: '', st: '' })
  const [detailFood, setDetailFood] = useState({
    mn: '뿌링클', img: 'bburingkle', st: 'BHC 신설점', pr: '23,000원',
    good: '96% (26개)', rev: '리뷰 (70)', sub: '뿌링뿌링! 세상에 없던 마법의 맛 뿌링클', cat: '치킨',
  })
  const [detailStore, setDetailStore] = useState(null)
  const [toast, setToastState] = useState('')
  const [conflict, setConflict] = useState(null)
  const toastTimer = useRef(null)

  // ===== Supabase에서 즐겨찾기 불러오기 (첫 실행이면 기본목록을 DB에 심기) =====
  useEffect(() => {
    let cancelled = false
    ;(async () => {
      const { data, error } = await supabase.from('favorites').select('*').order('id')
      if (cancelled) return
      if (error) { console.error('[favorites] 불러오기 실패 → 메모리 기본값 사용:', error.message); return }
      if (!data || data.length === 0) {
        const seed = buildInitialFavMenus()
        const seen = new Set()
        const rows = seed.map(toRow).filter((r) => { const k = r.mn + '|' + r.st; if (seen.has(k)) return false; seen.add(k); return true })
        const { error: insErr } = await supabase
          .from('favorites')
          .upsert(rows, { onConflict: 'mn,st', ignoreDuplicates: true })
        if (insErr) console.error('[favorites] 초기 저장 실패:', insErr.message)
        if (!cancelled) setFavMenus(seed)
      } else {
        if (!cancelled) {
          setFavMenus(data.map((r) => ({ mn: r.mn, st: r.st, img: r.img, pr: r.pr, good: r.good, rev: r.rev, cat: r.cat, cart: true })))
        }
      }
    })()
    return () => { cancelled = true }
  }, [])

  const isFav = useCallback(
    (mn, st) => favMenus.some((m) => m.mn === mn && (m.st || '') === (st || '')),
    [favMenus]
  )

  // 추가: 화면 즉시 반영 + DB 저장
  const addFav = useCallback((m) => {
    setFavMenus((prev) =>
      prev.some((x) => x.mn === m.mn && (x.st || '') === (m.st || '')) ? prev : [...prev, m]
    )
    supabase.from('favorites').upsert(toRow(m), { onConflict: 'mn,st' }).then(({ error }) => {
      if (error) console.error('[favorites] 저장 실패:', error.message)
    })
  }, [])

  // 삭제: 화면 즉시 반영 + DB 삭제
  const removeFav = useCallback((mn, st) => {
    setFavMenus((prev) => prev.filter((m) => !(m.mn === mn && (m.st || '') === (st || ''))))
    supabase.from('favorites').delete().eq('mn', mn).eq('st', st || '').then(({ error }) => {
      if (error) console.error('[favorites] 삭제 실패:', error.message)
    })
  }, [])

  const foodsFor = useCallback(
    (cat) => (cat === '전체' ? favMenus.slice() : favMenus.filter((m) => m.cat === cat)),
    [favMenus]
  )
  const showToast = useCallback((msg) => {
    setToastState(msg)
    if (toastTimer.current) clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToastState(''), 1700)
  }, [])

  const commitAdd = useCallback((item, after) => {
    setCart({ active: true, fin: item.fin, qty: item.qty || 1, mn: item.mn, st: item.st })
    showToast('장바구니에 담았어요')
    if (after) after()
  }, [showToast])

  const requestAddToCart = useCallback((item, after) => {
    setCart((cur) => {
      if (cur.active && cur.st && item.st && cur.st !== item.st) {
        setConflict({ onOk: () => commitAdd(item, after) })
        return cur
      }
      showToast('장바구니에 담았어요')
      if (after) setTimeout(after, 0)
      return { active: true, fin: item.fin, qty: item.qty || 1, mn: item.mn, st: item.st }
    })
  }, [commitAdd, showToast])

  const resolveConflict = useCallback((ok) => {
    setConflict((c) => { if (ok && c) c.onOk(); return null })
  }, [])

  // 참가자 사이 초기화: favorites 표를 비우고 기본 목록을 다시 심음 (/reset 화면 전용)
  const resetFavorites = useCallback(async () => {
    const seed = buildInitialFavMenus()
    const seen = new Set()
    const rows = seed.map(toRow).filter((r) => { const k = r.mn + '|' + r.st; if (seen.has(k)) return false; seen.add(k); return true })
    const { error: delErr } = await supabase.from('favorites').delete().gte('id', 0)
    if (delErr) { console.error('[reset] 삭제 실패:', delErr.message); return { error: delErr } }
    const { error: insErr } = await supabase.from('favorites').upsert(rows, { onConflict: 'mn,st', ignoreDuplicates: true })
    if (insErr) { console.error('[reset] 재시드 실패:', insErr.message); return { error: insErr } }
    setFavMenus(seed)
    return { error: null }
  }, [])

  const value = {
    favMenus, setFavMenus, cart, setCart, detailFood, setDetailFood,
    detailStore, setDetailStore, toast, isFav, addFav, removeFav, foodsFor, showToast,
    STORE_CAT, requestAddToCart, conflict, resolveConflict, resetFavorites,
  }
  return <AppCtx.Provider value={value}>{children}</AppCtx.Provider>
}
