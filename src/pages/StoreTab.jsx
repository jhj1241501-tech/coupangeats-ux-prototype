import { useState } from 'react'
import { StatusBar, HomeIndicator, PersistCart } from '../components/chrome'
import { FavHeader, FavTabs, Chips, SortBar, SortSheet, StoreCard } from '../components/fav'
import { STORES, sortList, numOrd } from '../data/coupang'

export default function StoreTab() {
  const [cat, setCat] = useState('전체')
  const [sort, setSort] = useState('최근 주문한 순')
  const [sheet, setSheet] = useState(false)
  const list = sortList(STORES[cat] || STORES['전체'], sort, numOrd)

  return (
    <>
      <div className="top">
        <StatusBar />
        <FavHeader />
        <FavTabs active="store" />
        <Chips cat={cat} setCat={setCat} />
        <SortBar sort={sort} onOpen={() => setSheet(true)} />
      </div>
      <div className="scroll">
        <div className="store-list">{list.map((d, i) => <StoreCard key={d.nm + i} d={d} />)}</div>
      </div>
      <div className="dock"><PersistCart /><HomeIndicator /></div>
      {sheet ? (
        <SortSheet current={sort} onSelect={(o) => { setSort(o); setSheet(false) }} onClose={() => setSheet(false)} />
      ) : null}
    </>
  )
}
