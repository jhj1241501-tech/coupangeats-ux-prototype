import { Routes, Route } from 'react-router-dom'
import PhoneFrame from './components/PhoneFrame'
import Home from './pages/Home'
import FoodTab from './pages/FoodTab'
import StoreTab from './pages/StoreTab'
import StoreDetail from './pages/StoreDetail'
import FoodDetail from './pages/FoodDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Reset from './pages/Reset'

export default function App() {
  return (
    <Routes>
      <Route element={<PhoneFrame />}>
        <Route path="/" element={<Home />} />
        <Route path="/fav/food" element={<FoodTab />} />
        <Route path="/fav/store" element={<StoreTab />} />
        <Route path="/store/:name" element={<StoreDetail />} />
        <Route path="/food" element={<FoodDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* 숨김: 모더레이터 전용 초기화 (앱 내 링크 없음) */}
        <Route path="/reset" element={<Reset />} />
      </Route>
    </Routes>
  )
}
