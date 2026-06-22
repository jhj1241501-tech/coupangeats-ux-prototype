import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './coupang.css'
import App from './App.jsx'
import { AppProvider } from './store'

// BrowserRouter = 화면 이동(엘리베이터), AppProvider = 공유 기억 상자
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </StrictMode>,
)
