import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'
import { StatusBar, HomeIndicator, TabBar, PersistCart } from '../components/chrome'
import { useApp } from '../store'
import { imgSrc } from '../data/coupang'

const CATS = [
  ['cat_dujjim', '두찜'], ['cat_1person', '딱1인분'], ['cat_tang', '찜/탕'],
  ['cat_hansik', '한식'], ['cat_salad', '샐러드'],
]
const QUICK = [
  ['q_shop', '장보기·쇼핑\n더보기'], ['q_coupon', '미사용\n쿠폰함'], ['q_gs25', 'GS25'],
  ['q_emart', '이마트슈퍼'], ['q_gsfresh', 'GS더프레시'],
]

export default function Home() {
  const navigate = useNavigate()
  const { foodsFor, setDetailFood, showToast } = useApp()
  const carousel = foodsFor('치킨')

  const openFood = (c) => {
    setDetailFood({
      mn: c.mn, img: c.img, pr: c.pr, st: c.st, good: c.good || '', rev: c.rev || '',
      sub: '', cat: c.cat || '치킨',
    })
    navigate('/food')
  }

  return (
    <>
      <div className="top"><StatusBar /></div>
      <div className="scroll">
        <div className="home-loc">
          <div className="loc">
            <Icon name="location_on" className="pin" fill />집
            <Icon name="keyboard_arrow_down" className="chev" />
          </div>
          <div className="bell">
            <Icon name="notifications" />
            <span className="dot" />
          </div>
        </div>
        <div className="searchbar" onClick={() => showToast('준비 중인 기능이에요')}>
          <Icon name="search" />
          <span>정희재님, 치킨 어때요?</span>
        </div>
        <div className="cat-row">
          {CATS.map(([k, l]) => (
            <div className="cat" key={k}>
              <img src={imgSrc(k)} alt="" />
              <span>{l}</span>
            </div>
          ))}
        </div>
        <div className="quick-row">
          {QUICK.map(([k, l]) => (
            <div className="quick" key={k}>
              <div className="ic"><img src={imgSrc(k)} alt="" /></div>
              <span>{l}</span>
            </div>
          ))}
        </div>
        <div className="banner">
          <img src={imgSrc('banner')} alt="" />
          <span className="pg">2 / 38 전체보기</span>
        </div>
        <div className="fav-home-head">
          <h3>희재님이 즐겨찾은 치킨</h3>
          <span onClick={() => navigate('/fav/food')}><Icon name="arrow_forward" /></span>
        </div>
        <div className="fav-carousel">
          {carousel.map((c, i) => (
            <div className="fav-card" key={i} onClick={() => openFood(c)}>
              <img src={imgSrc(c.img)} alt="" />
              <div className="grad" />
              <div className="txt">
                <div className="st">{c.st}</div>
                <div className="mn">{c.mn}</div>
                <div className="pr">{c.pr}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="dock"><PersistCart /><TabBar active={0} /><HomeIndicator /></div>
    </>
  )
}
