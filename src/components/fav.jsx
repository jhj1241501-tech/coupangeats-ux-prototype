import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Icon from './Icon'
import { useApp } from '../store'
import { imgSrc, REORDERS, STORE_BY_NAME, STORE_CAT, CATS, priceNum } from '../data/coupang'

// 즐겨찾기 상단 헤더(뒤로가기 / 제목 / 수정)
export function FavHeader() {
  const navigate = useNavigate()
  return (
    <div className="fav-top">
      <span onClick={() => navigate(-1)}><Icon name="arrow_back" className="back" /></span>
      <h2>즐겨찾기</h2>
      <span className="edit">수정</span>
    </div>
  )
}

// 음식 N / 가게 M 탭
export function FavTabs({ active }) {
  const navigate = useNavigate()
  const { favMenus } = useApp()
  const food = favMenus.length
  const store = Object.keys(STORE_BY_NAME).length
  return (
    <div className="fav-tabs">
      <div className={`ft ${active === 'food' ? 'on' : ''}`} onClick={() => navigate('/fav/food')}>음식 {food}</div>
      <div className={`ft ${active === 'store' ? 'on' : ''}`} onClick={() => navigate('/fav/store')}>가게 {store}</div>
    </div>
  )
}

// 카테고리 칩 (전체/한식/치킨/...)
export function Chips({ cat, setCat }) {
  return (
    <div className="chips">
      {CATS.map((c) => {
        const on = c === cat
        return (
          <div key={c} className={`chip ${on ? 'on' : ''} ${on && c === '전체' ? 'blue' : ''}`} onClick={() => setCat(c)}>
            {c}
          </div>
        )
      })}
    </div>
  )
}

// 정렬 바
export function SortBar({ sort, onOpen }) {
  return (
    <div className="sortbar" onClick={onOpen}>
      {sort}<Icon name="keyboard_arrow_down" />
    </div>
  )
}

// 정렬 바텀시트
export function SortSheet({ current, onSelect, onClose }) {
  const opts = ['자주 주문한 순', '최근 주문한 순', '최근 추가한 순']
  return (
    <div className="sheet-wrap sort-sheet" onClick={(e) => { if (e.target.classList.contains('sheet-wrap')) onClose() }}>
      <div className="sheet">
        <div className="grab" />
        <div className="sh-head"><b>즐겨찾기 정렬</b><span onClick={onClose}><Icon name="close" /></span></div>
        {opts.map((o) => (
          <div key={o} className={`opt ${o === current ? 'sel' : ''}`} onClick={() => onSelect(o)}>
            {o === current ? <Icon name="check" /> : null}{o}
          </div>
        ))}
      </div>
    </div>
  )
}

function RatingLine({ good, rev }) {
  return (
    <div className="rt">
      <span className="it"><Icon name="thumb_up" />{good}</span>
      <span className="dot">·</span>
      <span className="it"><Icon name="rate_review" />{rev}</span>
    </div>
  )
}

// 음식 카드
export function FoodCard({ d }) {
  const navigate = useNavigate()
  const { setDetailFood, showToast, requestAddToCart } = useApp()
  const [added, setAdded] = useState(false)
  const open = () => {
    setDetailFood({
      mn: d.mn, img: d.img, pr: d.pr, st: d.st, good: d.good || '', rev: d.rev || '',
      sub: '', cat: d.cat || STORE_CAT[d.st] || '치킨',
    })
    navigate('/food')
  }
  const badge = d.qty ? (
    <div className="qty">{d.qty}</div>
  ) : d.cart ? (
    <div className={`addcart ${added ? 'added' : ''}`} onClick={(e) => { e.stopPropagation(); setAdded(true); requestAddToCart({ mn: d.mn, fin: priceNum(d.pr), st: d.st, qty: 1 }) }}>
      {added ? '1' : <Icon name="add_shopping_cart" fill />}
    </div>
  ) : null
  return (
    <div className="fg" onClick={open}>
      <div className="thumb"><img src={imgSrc(d.img)} alt="" />{badge}</div>
      <div className="st">{d.st}</div>
      <div className="mn">{d.mn}</div>
      <div className="pr">{d.pr}</div>
      <RatingLine good={d.good} rev={d.rev} />
    </div>
  )
}

// 가게 카드 (펼치면 지점별 재주문 메뉴)
export function StoreCard({ d, expandedInit }) {
  const navigate = useNavigate()
  const { setDetailStore, showToast, requestAddToCart } = useApp()
  const [expanded, setExpanded] = useState(!!expandedInit)
  const orders = REORDERS[d.nm] || [
    { mn: d.nm + ' 대표 메뉴', qty: 1, date: '2026-05-01 오후 07:16', opts: ['기본 구성'], pay: '—' },
  ]
  const goDetail = () => {
    setDetailStore(STORE_BY_NAME[d.nm] || d)
    navigate('/store/' + encodeURIComponent(d.nm))
  }
  return (
    <div className={`store-card ${expanded ? 'expanded' : ''}`}>
      <div className="row">
        <div className="simg" onClick={goDetail}>
          <img src={imgSrc(d.img)} alt="" />
          {d.ord ? <div className="ord">{d.ord}</div> : null}
          {d.ovl ? <div className="ovl">{d.ovl.split('\n').map((t, i) => <div key={i}>{t}</div>)}</div> : null}
          <div className="wow">{d.wow}</div>
        </div>
        <div className="info">
          <div className="nm">
            <b onClick={goDetail}>{d.nm}</b>
            <span className="nm-toggle" onClick={() => setExpanded((v) => !v)}><Icon name={expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'} /></span>
          </div>
          <div className="rev"><Icon name="star" fill />{d.star}<em>({d.cnt})</em></div>
          <div className="meta">{d.meta}</div>
          {d.tags && d.tags.length ? (
            <div className="tags">
              {d.tags.map(([t, c], i) => (t ? <span key={i} className={`tag ${c}`}>{t}</span> : null))}
            </div>
          ) : null}
        </div>
      </div>
      <div className="reorder">
        {orders.map((o, i) => (
          <div key={i}>
            <div className="ro-it">
              <div className="ro-h">{o.mn} <span style={{ color: '#888', fontWeight: 500 }}>{o.qty}개</span></div>
              <div className="ro-date">{o.date}</div>
              <div className="ro-opt">{o.opts.map((op, j) => <span key={j}>{op}{j < o.opts.length - 1 ? <br /> : null}</span>)}</div>
              <div className="ro-pay"><span>결제 금액</span><b>{o.pay}</b></div>
              <div className="btn btn-primary" onClick={() => requestAddToCart({ mn: o.mn, fin: priceNum(o.pay), st: d.nm, qty: o.qty }, () => navigate('/cart'))}>재주문하기</div>
            </div>
            {i < orders.length - 1 ? <div className="divider2" /> : null}
          </div>
        ))}
      </div>
    </div>
  )
}
