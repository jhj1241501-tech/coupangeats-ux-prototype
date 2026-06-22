import { useNavigate } from 'react-router-dom'

// 2번 화면
function Page2() {
  const navigate = useNavigate()

  return (
    <div className="screen">
      <h1>2번 화면</h1>
      <p>두 번째 화면이에요. 앞으로도, 뒤로도 갈 수 있어요.</p>

      <button onClick={() => navigate('/')}>
        ← 1번 화면으로
      </button>
      <button onClick={() => navigate('/page3')}>
        3번 화면으로 →
      </button>
    </div>
  )
}

export default Page2
