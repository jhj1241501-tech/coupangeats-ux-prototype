import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useApp } from '../store'
import { ConflictDialog } from './chrome'

export default function PhoneFrame() {
  const { toast } = useApp()

  useEffect(() => {
    function fit() {
      const dev = document.querySelector('.device')
      if (!dev) return
      if (window.matchMedia('(max-width:560px)').matches) { dev.style.transform = ''; return }
      const s = Math.min((window.innerWidth - 40) / 360, (window.innerHeight - 40) / 800, 1.6)
      dev.style.transform = 'scale(' + Math.max(s, 0.5).toFixed(3) + ')'
    }
    fit()
    window.addEventListener('resize', fit)
    return () => window.removeEventListener('resize', fit)
  }, [])

  useEffect(() => {
    const stage = document.getElementById('protoSection')
    if (!stage) return
    let ch = null, x0 = 0, l0 = 0, moved = false
    const down = (e) => {
      const c = e.target.closest('.chips, .fav-carousel')
      if (!c) return
      ch = c; x0 = e.clientX; l0 = c.scrollLeft; moved = false
      c.style.cursor = 'grabbing'
    }
    const move = (e) => { if (!ch) return; const d = e.clientX - x0; if (Math.abs(d) > 4) moved = true; ch.scrollLeft = l0 - d }
    const up = () => { if (ch) { ch.style.cursor = ''; ch = null } }
    const clickCapture = (e) => { if (moved) { e.stopPropagation(); e.preventDefault(); moved = false } }
    stage.addEventListener('mousedown', down)
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseup', up)
    stage.addEventListener('click', clickCapture, true)
    return () => {
      stage.removeEventListener('mousedown', down)
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseup', up)
      stage.removeEventListener('click', clickCapture, true)
    }
  }, [])

  return (
    <div className="stage" id="protoSection">
      <div className="device">
        <div className="phone">
          <div className="screen screen-anim" id="screen">
            <Outlet />
            {toast ? <div className="fd-toast flash-toast show"><span>{toast}</span></div> : null}
            <ConflictDialog />
          </div>
        </div>
      </div>
    </div>
  )
}
