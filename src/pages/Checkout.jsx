import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'
import { StatusBar, HomeIndicator } from '../components/chrome'
import { useApp } from '../store'

const KEYS = ['4', '0', '5', '3', '8', '2', '6', '7', '1', '', '9', 'del']

export default function Checkout() {
  const navigate = useNavigate()
  const { setCart } = useApp()
  const [entered, setEntered] = useState('')
  const [done, setDone] = useState(false)

  const press = (k) => {
    if (done) return
    setEntered((prev) => {
      let v = prev
      if (k === 'del') v = v.slice(0, -1)
      else if (v.length < 6) v = v + k
      if (v.length === 6) {
        setDone(true)
        setTimeout(() => { setCart({ active: false, fin: 0, qty: 1, mn: '', st: '' }); navigate('/') }, 1000)
      }
      return v
    })
  }

  return (
    <>
      <div className="top">
        <StatusBar />
        <div className="pw-top"><span onClick={() => navigate(-1)}><Icon name="arrow_back" /></span><h2>비밀번호</h2></div>
      </div>
      <div className="scroll pw-body">
        {done ? (
          <div className="pp-done"><Icon name="check" /><div>결제가 완료되었어요</div></div>
        ) : (
          <>
            <div className="pw-msg">결제 비밀번호 6자리를 입력해주세요.</div>
            <div className="pp-dots">
              {[0, 1, 2, 3, 4, 5].map((i) => <span key={i} className={`pp-dot ${i < entered.length ? 'on' : ''}`} />)}
            </div>
          </>
        )}
      </div>
      <div className="dock">
        <div className="pw-reset">비밀번호 재설정 <Icon name="chevron_right" /></div>
        <div className="pw-keys">
          {KEYS.map((k, i) =>
            k === '' ? <div key={i} className="pk empty" /> : (
              <div key={i} className="pk" onClick={() => press(k)}>{k === 'del' ? <Icon name="backspace" /> : k}</div>
            )
          )}
        </div>
        <HomeIndicator />
      </div>
    </>
  )
}
