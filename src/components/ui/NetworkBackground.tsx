// src/components/ui/NetworkBackground.tsx
'use client'
import { useEffect, useRef } from 'react'

const AZUL = { rgba: 'rgba(0, 229, 255', hex: '#00e5ff' }      
const VERDE = { rgba: 'rgba(0, 245, 212', hex: '#00f5d4' }      
const MORADO = { rgba: 'rgba(147, 51, 234', hex: '#9333ea' }    

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let points: Array<{ 
      x: number; 
      y: number; 
      vx: number; 
      vy: number; 
      radius: number;
    }> = []
    
    const maxPoints = 60 
    const connectionDistance = 180 

    const resizeCanvas = () => {
      canvas.width = 450 
      canvas.height = window.innerHeight
      initPoints()
    }

    const initPoints = () => {
      points = []
      for (let i = 0; i < maxPoints; i++) {
        const isAlphaNode = Math.random() > 0.85 
        
        points.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3, 
          vy: (Math.random() - 0.5) * 0.3,
          radius: isAlphaNode ? 4 : 2
        })
      }
    }

    const getColorByPosition = (y: number, height: number) => {
      if (y < height / 3) return AZUL          
      if (y < (height / 3) * 2) return VERDE   
      return MORADO                            
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      points.forEach((p, index) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        const activeColor = getColorByPosition(p.y, canvas.height)

        ctx.save()
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `${activeColor.rgba}, 0.85)`
        ctx.shadowBlur = p.radius * 4 
        ctx.shadowColor = activeColor.hex
        ctx.fill()
        ctx.restore()

        for (let j = index + 1; j < points.length; j++) {
          const p2 = points[j]
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y)

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.25
            const activeColor2 = getColorByPosition(p2.y, canvas.height)
            
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)

            const gradient = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y)
            gradient.addColorStop(0, `${activeColor.rgba}, ${alpha})`)
            gradient.addColorStop(1, `${activeColor2.rgba}, ${alpha})`)

            ctx.strokeStyle = gradient
            ctx.lineWidth = (1 - dist / connectionDistance) * 1.2 
            ctx.stroke()
          }
        }
      })

      animationFrameId = requestAnimationFrame(draw)
    }

    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()
    draw()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
  <canvas
  ref={canvasRef}
  className="fixed top-0 right-0 left-auto h-screen w-[450px] pointer-events-none z-0 opacity-70 md:opacity-100"
/>
  )
}