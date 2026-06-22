import { useState } from 'react'
import { StatusBar, HomeIndicator, PersistCart } from '../components/chrome'
import { FavHeader, FavTabs, Chips, SortBar, SortSheet, FoodCard } from '../components/fav'
import { useApp } from '../store'
import { sortList, numRev } from '../data/coupang'

export default function FoodTab() {
  const { foodsFor } = useApp()
  const [cat, setCat] = useState('전체')
  const [sort, setSort] = useState('최근 주문한 순')
  const [sheet, setSheet] = useState(false)
  const list = sortList(foodsFor(cat), sort, numRev)

  return (
    <>
      <div className="top">
        <StatusBar />
        <FavHeader />
        <FavTabs active="food" />
        <Chips cat={cat} setCat={setCat} />
        <SortBar sort={sort} onOpen={() => setSheet(true)} />
      </div>
      <div className="scroll">
        <div className="food-grid">{list.map((d, i) => <FoodCard key={i} d={d} />)}</div>
      </div>
      <div className="dock"><PersistCart /><HomeIndicator /></div>
      {sheet ? (
        <SortSheet current={sort} onSelect={(o) => { setSort(o); setSheet(false) }} onClose={() => setSheet(false)} />
      ) : null}
    </>
  )
}
