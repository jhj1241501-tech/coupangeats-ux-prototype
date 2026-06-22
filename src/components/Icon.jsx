import { ICONS } from '../data/coupang'

// Icon = 원본의 material 아이콘(SVG path)을 그려주는 컴포넌트
export default function Icon({ name, fill = false, className = '' }) {
  const e = ICONS[name]
  let d = e
  if (e && typeof e === 'object') d = fill && e.f ? e.f : e.o || e.f
  return (
    <svg
      className={`material-symbols-rounded ${className}`}
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      aria-hidden="true"
    >
      <path d={d || ''} />
    </svg>
  )
}
