import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StatusBar, HomeIndicator } from '../components/chrome'
import { useApp } from '../store'

// 숨김 화면: 앱 어디에도 링크 없음. 모더레이터가 주소(/reset)로만 진입.
export default function Reset() {
  const navigate = useNavigate()
  const { resetFavorites } = useApp()
  const [status, setStatus] = useState('idle') // idle | working | done | error

  const doReset = async () => {
    setStatus('working')
    const { error } = await resetFavorites()
    if (error) { setStatus('error'); return }
    setStatus('done')
    setTimeout(() => navigate('/'), 1200)
  }

  return (
    <>
      <div className="top"><StatusBar /></div>
      <div className="scroll" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 28px', textAlign: 'center' }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--blue)', letterSpacing: 1, marginBottom: 10 }}>MODERATOR ONLY</div>
        <h2 style={{ fontSize: 21, fontWeight: 800, marginBottom: 12 }}>테스트 초기화</h2>
        <p style={{ fontSize: 14, color: 'var(--gray-6)', lineHeight: 1.7, marginBottom: 28 }}>
          즐겨찾기를 <b>처음 상태</b>로 되돌립니다.<br />다음 참가자 시작 전에 누르세요.
        </p>

        {status === 'done' ? (
          <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--green)' }}>초기화 완료! 홈으로 이동합니다…</div>
        ) : status === 'error' ? (
          <>
            <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--red)', marginBottom: 16 }}>초기화 실패 — 인터넷/Supabase를 확인하세요.</div>
            <div className="btn btn-primary" style={{ width: '100%', cursor: 'pointer' }} onClick={doReset}>다시 시도</div>
          </>
        ) : (
          <div
            className="btn btn-primary"
            style={{ width: '100%', cursor: 'pointer', opacity: status === 'working' ? 0.6 : 1, pointerEvents: status === 'working' ? 'none' : 'auto' }}
            onClick={doReset}
          >
            {status === 'working' ? '초기화 중…' : '초기 상태로 되돌리기'}
          </div>
        )}

        <div style={{ marginTop: 18, fontSize: 13, color: 'var(--gray-5)', cursor: 'pointer' }} onClick={() => navigate('/')}>취소하고 홈으로</div>
      </div>
      <div className="dock"><HomeIndicator /></div>
    </>
  )
}
