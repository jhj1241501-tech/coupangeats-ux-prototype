import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'
import { StatusBar, HomeIndicator } from '../components/chrome'

// Placeholder = 다음 단계에서 구현할 화면의 임시 자리
export default function Placeholder({ title = '화면' }) {
  const navigate = useNavigate()
  return (
    <>
      <div className="top">
        <StatusBar />
        <div className="fav-top">
          <span onClick={() => navigate(-1)}><Icon name="arrow_back" className="back" /></span>
          <h2>{title}</h2>
        </div>
      </div>
      <div className="scroll" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '24px' }}>
        <div style={{ color: '#8A8A8E', fontWeight: 600, lineHeight: 1.8 }}>
          “{title}”<br />다음 단계에서 구현할 화면이에요.
        </div>
      </div>
      <div className="dock"><HomeIndicator /></div>
    </>
  )
}
