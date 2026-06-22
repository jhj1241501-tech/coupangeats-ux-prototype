import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'
import { StatusBar, HomeIndicator } from '../components/chrome'
import { useApp } from '../store'
import { won } from '../data/coupang'

export default function Cart() {
  const navigate = useNavigate()
  const { cart, setCart } = useApp()
  const it = cart.active
    ? { mn: cart.mn, fin: cart.fin, st: cart.st, qty: cart.qty || 1 }
    : { mn: '뿌링클', fin: 23000, st: 'BHC 신설점', qty: 1 }
  const total = it.fin * it.qty
  const dec = () => setCart((c) => ({ ...c, active: true, qty: Math.max(1, (c.qty || 1) - 1) }))
  const inc = () => setCart((c) => ({ ...c, active: true, qty: (c.qty || 1) + 1 }))

  return (
    <>
      <div className="top">
        <StatusBar />
        <div className="cart-top">
          <span onClick={() => navigate(-1)}><Icon name="close" /></span>
          <div className="cart-toggle"><div className="on">배달</div><div>포장</div></div>
        </div>
      </div>
      <div className="scroll">
        <div className="addr">
          <div className="a1">서울특별시 동대문구 전농로 123길 4동 가나다라따</div>
          <div className="a2">현관 앞에 놓아주세요 · 도착 후 연락주세요</div>
          <div className="wow"><Icon name="verified" fill /><b>와우회원</b> 배달비 0원<span className="free">0원</span></div>
        </div>
        <div className="cart-store">{it.st}</div>
        <div className="cart-item">
          <div className="ci-txt"><div className="nm">{it.mn}</div><div className="pr">{won(it.fin)}</div></div>
          <div className="stepper">
            <span onClick={dec}><Icon name="remove" /></span>
            <span className="n">{it.qty}</span>
            <span onClick={inc}><Icon name="add" /></span>
          </div>
        </div>
        <div className="cart-add" onClick={() => navigate(-1)}>＋ 메뉴 추가</div>
        <div className="pay-sec">
          <h4>결제금액</h4>
          <div className="pay-li"><span className="l">주문금액</span><span className="v">{won(total)}</span></div>
          <div className="pay-li"><span className="l">배달팁</span><span className="v">0원</span></div>
          <div className="pay-total"><b>총 결제금액</b><span className="amt">{won(total)}</span></div>
        </div>
        <div className="pay-method"><Icon name="account_balance_wallet" />쿠팡캐시 · 토스페이<Icon name="chevron_right" className="chev" /></div>
        <div className="req-sec">
          <h4>요청사항</h4>
          <div className="req-field">가게 사장님께 (선택) 예) 덜 맵게 해주세요<Icon name="chevron_right" /></div>
          <div className="req-check"><Icon name="check_box_outline_blank" />일회용 수저·포크 안 받기</div>
        </div>
      </div>
      <div className="dock">
        <div className="pay-cta">
          <div className="promo">WOW 와우회원 배달비 0원 + 4,500원 즉시할인 적용됨</div>
          <div className="cbtn" onClick={() => navigate('/checkout')}>{won(total)} 결제하기</div>
        </div>
        <HomeIndicator />
      </div>
    </>
  )
}
