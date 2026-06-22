import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Icon from '../components/Icon'
import { StatusBar, HomeIndicator } from '../components/chrome'
import { useApp } from '../store'
import { imgSrc, STORE_CAT, priceNum, won } from '../data/coupang'

export default function FoodDetail() {
  const navigate = useNavigate()
  const { detailFood, setDetailStore, isFav, addFav, removeFav, showToast, cart, requestAddToCart } = useApp()
  const f = detailFood
  const faved = isFav(f.mn, f.st)
  const [favToast, setFavToast] = useState(false)
  const [qty, setQty] = useState(1)

  const inThisCart = cart.active && cart.mn === f.mn && cart.st === f.st

  const toggleFav = () => {
    if (faved) { removeFav(f.mn, f.st); showToast('즐겨찾기에서 뺐어요') }
    else {
      addFav({ mn: f.mn, img: f.img, pr: f.pr, st: f.st, good: f.good, rev: f.rev, cat: f.cat || STORE_CAT[f.st] || '치킨', cart: true })
      setFavToast(true)
      setTimeout(() => setFavToast(false), 1900)
    }
  }
  const goStore = () => { if (!f.st) return; setDetailStore(null); navigate('/store/' + encodeURIComponent(f.st)) }
  const addToCart = () => requestAddToCart({ mn: f.mn, fin: priceNum(f.pr), st: f.st, qty })

  return (
    <>
      <div className="scroll">
        <div className="fd-hero">
          <img src={imgSrc(f.img)} alt="" />
          <StatusBar dark />
          <div className="topbar"><span onClick={() => navigate(-1)}><Icon name="arrow_back" /></span><Icon name="ios_share" /></div>
        </div>
        <div className="fd-body">
          <div className="ttl">
            <h2>{f.mn}</h2>
            <div className={`heart ${faved ? 'faved' : ''}`} onClick={toggleFav}><Icon name="favorite" fill={faved} /></div>
          </div>
          {f.st ? <div className="fd-store" onClick={goStore}>{f.st}<Icon name="chevron_right" /></div> : null}
          <div className="sub">{f.sub || '매장 인기 메뉴'}</div>
          <div className="infochip">원산지·알레르기/영양성분 정보 보기</div>
          <div className="rt">
            <Icon name="thumb_up" />{f.good || '100% (0개)'}<span style={{ color: '#ccc' }}>·</span>
            <Icon name="rate_review" />{f.rev || '리뷰 (0)'}<Icon name="chevron_right" />
          </div>
        </div>
        <div className="fd-row"><span className="lbl">가격</span><span className="price">{f.pr}</span></div>
        <div className="fd-row">
          <span className="lbl">수량</span>
          <div className="stepper">
            <div className="sbtn" onClick={() => setQty((q) => Math.max(1, q - 1))}><Icon name="remove" /></div>
            <span className="n">{qty}</span>
            <div className="sbtn" onClick={() => setQty((q) => q + 1)}><Icon name="add" /></div>
          </div>
        </div>
        <div className="fd-sec">
          <div className="sh"><b>음료선택</b><em>필수선택</em></div>
          <div className="fd-opt"><Icon name="radio_button_unchecked" />서비스음료 미제공</div>
        </div>
      </div>
      <div className="dock">
        <div className="fd-cta">
          {inThisCart ? (
            <div className="cbtn cartview" onClick={() => navigate('/cart')}>
              <span className="cv-left"><span className="qbadge">{cart.qty}</span>카트 보기</span>
              <span className="cv-price">{won(cart.fin * cart.qty)}</span>
            </div>
          ) : (
            <div className="cbtn" onClick={addToCart}>배달 카트에 담기</div>
          )}
        </div>
        <HomeIndicator />
      </div>
      {favToast ? (
        <div className="fd-toast t-fav show">
          <span>음식을 즐겨찾기했어요.</span>
          <span className="go" onClick={() => navigate('/fav/food')}>바로가기</span>
        </div>
      ) : null}
    </>
  )
}
