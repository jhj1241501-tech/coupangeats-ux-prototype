import { useNavigate } from 'react-router-dom'
import Icon from './Icon'
import { useApp } from '../store'
import { won } from '../data/coupang'

export function StatusBar({ dark = false }) {
  return (
    <div className={`statusbar ${dark ? 'onimg' : ''}`}>
      <span>9:41</span>
      <div className="sb-right">
        <span className="sb-bars"><i /><i /><i /><i /></span>
        <Icon name="wifi" />
        <span className="sb-batt"><span /></span>
      </div>
    </div>
  )
}

export function HomeIndicator({ dark = false }) {
  return <div className={`home-ind ${dark ? 'dark' : ''}`} />
}

export function TabBar({ active = 0 }) {
  const navigate = useNavigate()
  const { showToast } = useApp()
  const tabs = [
    ['home', '홈', '/'],
    ['search', '검색', null],
    ['favorite', '즐겨찾기', '/fav/food'],
    ['event_available', '주문내역', null],
    ['person', 'My 이츠', null],
  ]
  return (
    <div className="tabbar">
      {tabs.map(([ic, label, to], i) => (
        <div
          key={i}
          className={`tab ${active === i ? 'on' : ''}`}
          onClick={() => (to ? navigate(to) : showToast('준비 중인 기능이에요'))}
        >
          <Icon name={ic} fill={active === i} />
          <span>{label}</span>
        </div>
      ))}
    </div>
  )
}

// 화면 하단에 떠 있는 "카트 보기" 바 (카트에 뭔가 담겼을 때만)
export function PersistCart() {
  const { cart } = useApp()
  const navigate = useNavigate()
  if (!cart.active) return null
  return (
    <div className="persist-cart" onClick={() => navigate('/cart')}>
      <div className="cbtn cartview">
        <span className="cv-left"><span className="qbadge">{cart.qty}</span>카트 보기</span>
        <span className="cv-price">{won(cart.fin * cart.qty)}</span>
      </div>
    </div>
  )
}

// 다른 가게 메뉴를 담으려 할 때 뜨는 경고창
export function ConflictDialog() {
  const { conflict, resolveConflict } = useApp()
  if (!conflict) return null
  return (
    <div className="dim" onClick={(e) => { if (e.target.classList.contains('dim')) resolveConflict(false) }}>
      <div className="dialog">
        <h4>같은 가게의 메뉴만 담을 수 있습니다.</h4>
        <p>주문할 가게를 변경하실 경우 이전에 담은 메뉴가 삭제됩니다.</p>
        <div className="acts">
          <b onClick={() => resolveConflict(false)}>취소</b>
          <b onClick={() => resolveConflict(true)}>새로 담기</b>
        </div>
      </div>
    </div>
  )
}
