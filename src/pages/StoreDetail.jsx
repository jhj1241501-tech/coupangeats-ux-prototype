import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Icon from '../components/Icon'
import { StatusBar, HomeIndicator } from '../components/chrome'
import { useApp } from '../store'
import { imgSrc, FOODS, STORE_CAT, STORE_BY_NAME, won, priceNum } from '../data/coupang'

export default function StoreDetail() {
  const { name } = useParams()
  const navigate = useNavigate()
  const { detailStore, setDetailFood, isFav, addFav, removeFav, showToast, cart, requestAddToCart } = useApp()
  const s =
    detailStore ||
    STORE_BY_NAME[decodeURIComponent(name || '')] ||
    STORE_BY_NAME['BHC 신설점'] ||
    { nm: 'BHC 신설점', star: '4.9', cnt: '1,023', img: 'greenbg' }
  const cat = STORE_CAT[s.nm] || '치킨'
  const menu = FOODS[cat] || FOODS['치킨']
  const pop = menu.slice(0, 3)
  const newm = menu.slice(3)
  const [heroFav, setHeroFav] = useState(false)

  const openFood = (m) => {
    setDetailFood({ mn: m.mn, img: m.img, pr: m.pr, st: s.nm, good: m.good || '', rev: m.rev || '', sub: '', cat })
    navigate('/food')
  }
  const toggleFav = (m, e) => {
    e.stopPropagation()
    if (isFav(m.mn, s.nm)) { removeFav(m.mn, s.nm); showToast('즐겨찾기에서 뺐어요') }
    else { addFav({ mn: m.mn, img: m.img, pr: m.pr, st: s.nm, good: m.good, rev: m.rev, cat, cart: true }); showToast('음식을 즐겨찾기했어요') }
  }
  const Heart = ({ m }) => (
    <span className={`m-heart ${isFav(m.mn, s.nm) ? 'faved' : ''}`} onClick={(e) => toggleFav(m, e)}>
      <Icon name="favorite" fill={isFav(m.mn, s.nm)} />
    </span>
  )
  const AddCart = ({ m }) => (
    <div className="addcart" onClick={(e) => { e.stopPropagation(); requestAddToCart({ mn: m.mn, fin: priceNum(m.pr), st: s.nm, qty: 1 }) }}>
      <Icon name="add_shopping_cart" fill />
    </div>
  )

  return (
    <>
      <div className="scroll">
        <div className="detail-hero">
          <img src={imgSrc(s.img || 'greenbg')} alt="" />
          <StatusBar dark />
          <div className="topbar">
            <span onClick={() => navigate(-1)}><Icon name="arrow_back" /></span>
            <div className="right-ic">
              <Icon name="ios_share" />
              <span className={`hero-fav ${heroFav ? 'faved' : ''}`} onClick={() => setHeroFav((v) => !v)}>
                <Icon name="favorite" fill={heroFav} />
              </span>
            </div>
          </div>
          <span className="pgn">3 / 6</span>
        </div>
        <div className="dt-head">
          <h2>{s.nm}</h2>
          <div className="rt">
            <Icon name="star" fill /><span style={{ color: '#1A8CFF' }}>{s.star || '4.9'}</span>
            <em>({s.cnt || '1,023'})</em><em> · WOW · 사은품</em>
          </div>
        </div>
        <div className="dt-toggle"><div className="on">배달 52분</div><div>포장 24분</div></div>
        <div className="dt-info">
          <div className="li"><b>도착예정</b><span>약 52분</span><span style={{ marginLeft: 'auto', color: '#999' }}>매장·원산지 정보</span></div>
          <div className="li"><b>최소주문</b><span>18,000원</span></div>
          <div className="li"><b>배달팁</b><span>무료배달</span></div>
        </div>
        <div className="dt-promo"><span>WOW! 와우회원 배달비 0원 + 4,500원 즉시할인</span><Icon name="chevron_right" /></div>
        <div className="dt-sub"><span>와우전용 결제 시 최대 4% 적립</span><span style={{ color: 'var(--gold)' }}>★★★★★ 상상메뉴</span></div>
        <div className="dt-menutabs"><span className="on">인기메뉴</span><span>신메뉴</span><span>세트</span><span>사이드</span></div>
        <div className="dt-sech">인기메뉴</div>
        <div className="pop-grid">
          {pop.map((m, i) => (
            <div className="pop" key={i} onClick={() => openFood(m)}>
              <div className="pimg"><img src={imgSrc(m.img)} alt="" /><span className="rank">{i+1}위</span><div className="m-actions"><AddCart m={m} /></div></div>
              <div className="nm">{m.mn}</div><div className="pr">{m.pr}</div>
            </div>
          ))}
        </div>
        {newm.length ? (
          <>
            <div className="dt-sech">신메뉴</div>
            {newm.map((m, i) => (
              <div className="menu-li" key={i} onClick={() => openFood(m)}>
                <div className="ml-txt">
                  <div className="nm" style={{display:'flex',alignItems:'center',gap:'6px'}}>
                    <span>{m.mn}</span>
                    <span className={`m-heart-inline ${isFav(m.mn, s.nm) ? 'faved' : ''}`} onClick={(e) => toggleFav(m, e)}>
                      <Icon name="favorite" fill={isFav(m.mn, s.nm)} />
                    </span>
                  </div>
                  <div className="pr">{m.pr}</div>
                  <div className="rt"><Icon name="thumb_up" />{m.good || ''}</div>
                </div>
                <div className="mimg"><img src={imgSrc(m.img)} alt="" /><div className="m-actions"><AddCart m={m} /></div></div>
              </div>
            ))}
          </>
        ) : null}
      </div>
      <div className="dock">
        <div className="cartbar">
          <div className="promo">WOW 와우회원 배달비 0원 + 4,500원 즉시할인 적립혜택</div>
          <div className="cbtn cartview" onClick={() => navigate('/cart')}>
            <span className="cv-left"><span className="qbadge">{cart.active ? cart.qty : 1}</span>카트 보기</span>
            <span className="cv-price">
              {cart.active ? (
                <><span className="old">{won(cart.fin + 5000)}</span>{won(cart.fin)}</>
              ) : (
                <><span className="old">28,000원</span>23,000원</>
              )}
            </span>
          </div>
        </div>
        <HomeIndicator />
      </div>
    </>
  )
}
