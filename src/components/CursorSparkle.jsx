import { useEffect, useRef } from 'react'

export default function CursorSparkle() {
  const canvas = useRef(null)

  useEffect(() => {
    const cvs = canvas.current
    if (!cvs) return
    const ctx = cvs.getContext('2d')
    let particles = []
    let mouse = { x: -100, y: -100 }
    let raf

    const resize = () => {
      cvs.width = window.innerWidth
      cvs.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const handleMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY

      for (let i = 0; i < 2; i++) {
        particles.push({
          x: mouse.x + (Math.random() - 0.5) * 8,
          y: mouse.y + (Math.random() - 0.5) * 8,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5 - 0.8,
          life: 1,
          size: Math.random() * 3 + 1.5,
          type: Math.random() > 0.5 ? 'circle' : 'star',
        })
      }
    }

    window.addEventListener('mousemove', handleMove)

    const drawStar = (x, y, r) => {
      ctx.beginPath()
      for (let i = 0; i < 4; i++) {
        const angle = (i * Math.PI) / 2
        ctx.moveTo(x, y)
        ctx.lineTo(x + Math.cos(angle) * r, y + Math.sin(angle) * r)
      }
      ctx.stroke()
    }

    const loop = () => {
      ctx.clearRect(0, 0, cvs.width, cvs.height)

      particles = particles.filter((p) => p.life > 0)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.life -= 0.018
        p.size *= 0.995

        const alpha = p.life * 0.8
        if (p.type === 'circle') {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(212, 175, 55, ${alpha})`
          ctx.fill()
        } else {
          ctx.lineWidth = 1
          ctx.strokeStyle = `rgba(245, 222, 150, ${alpha})`
          drawStar(p.x, p.y, p.size * 1.5)
        }
      }

      raf = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <canvas
      ref={canvas}
      className="pointer-events-none fixed inset-0 z-[9999]"
      aria-hidden="true"
    />
  )
}
