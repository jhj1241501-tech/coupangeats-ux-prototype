import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabaseClient'

// 3번 화면 — 메모장 (Supabase에 저장하고 불러오기)
function Page3() {
  const navigate = useNavigate()
  const [text, setText] = useState('')   // 입력칸에 적은 글자
  const [notes, setNotes] = useState([]) // 창고에서 불러온 메모 목록

  // 창고에서 메모들을 불러오는 함수
  async function loadNotes() {
    const { data, error } = await supabase
      .from('notes')                              // notes 표에서
      .select('*')                                // 모든 칸을
      .order('created_at', { ascending: false })  // 최신순으로
    if (error) {
      console.error(error)
      alert('불러오기 실패: ' + error.message)
      return
    }
    setNotes(data) // 가져온 데이터를 화면에 보관
  }

  // 화면이 처음 열릴 때 한 번 자동으로 목록 불러오기
  useEffect(() => {
    loadNotes()
  }, [])

  // 저장 버튼을 눌렀을 때
  async function saveNote() {
    if (text.trim() === '') return // 빈 메모는 무시
    const { error } = await supabase
      .from('notes')
      .insert({ content: text }) // content 칸에 입력한 글자를 넣기
    if (error) {
      console.error(error)
      alert('저장 실패: ' + error.message)
      return
    }
    setText('')   // 입력칸 비우기
    loadNotes()   // 목록 새로고침
  }

  return (
    <div className="screen">
      <h1>3번 화면 — 메모장</h1>
      <p>메모를 입력하고 저장하면 Supabase 창고에 저장돼요.</p>

      <div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="메모를 입력하세요"
          style={{
            padding: '10px',
            width: '60%',
            marginRight: '6px',
            borderRadius: '8px',
            border: '1px solid #ccc',
          }}
        />
        <button onClick={saveNote}>저장</button>
      </div>

      {/* 불러온 메모 목록 */}
      <ul style={{ textAlign: 'left', marginTop: '24px', lineHeight: '1.8' }}>
        {notes.map((note) => (
          <li key={note.id}>{note.content}</li>
        ))}
      </ul>

      <button onClick={() => navigate('/')}>처음으로 ⟲</button>
    </div>
  )
}

export default Page3
