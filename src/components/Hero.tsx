'use client'
import Image from 'next/image'
import { FileText } from 'lucide-react'

export default function Hero() {
  return (
    <>
      <style>{`
        .hero-btn {
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.04);
          color: #ffffff;
          font-family: monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-decoration: none;
          text-transform: uppercase;
          padding: 10px 22px;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: border-color 0.25s, color 0.25s;
        }
        .hero-btn:hover {
          border-color: rgba(0,229,255,0.5);
          color: #00e5ff;
        }
        .hero-btn-cv:hover {
          border-color: rgba(0,245,212,0.5);
          color: #00f5d4;
        }
      `}</style>

      <section
        id="inicio"
        className="min-h-[60vh] flex flex-col items-center justify-center relative w-full">
        <div className="flex flex-row items-center gap-0">

         <div
  className="relative flex-shrink-0"
  style={{
    width: 120,
    height: 120,
    borderRadius: '50%',
    padding: 3,
    background: 'linear-gradient(135deg, #00f5d4, #00e5ff, #9333ea)',
    boxShadow: '0 0 18px rgba(0,229,255,0.25), 0 0 32px rgba(147,51,234,0.15)'
  }}
>
  <div
    className="relative w-full h-full rounded-full overflow-hidden"
    style={{ background: '#0f172a' }}
  >
    <Image
  src="/personal/David.png"
  alt="Foto de perfil"
  fill
  sizes="120px"
  className="object-cover object-[center_25%]"
  priority
/>
  </div>
</div>

          {/* DIVIDER */}
          <div style={{
            width: 1,
            alignSelf: 'stretch',
            background: 'linear-gradient(to bottom, transparent, rgba(0,229,255,0.3), transparent)',
            margin: '0 32px',
            flexShrink: 0,
          }} />

          {/* TEXTO */}
          <div className="flex flex-col items-start">
            <h1 className="font-mono font-black leading-tight" style={{ fontSize: 'clamp(20px, 3.2vw, 32px)' }}>
              <span style={{ color: '#ffffff', display: 'block' }}>
                David Monge Garrido
              </span>
              <span
                className="block mt-1"
                style={{
                  background: 'linear-gradient(90deg, #00f5d4, #00e5ff, #9333ea)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Desarrollador Full Stack
              </span>
            </h1>

            <p
              className="font-mono leading-relaxed"
              style={{
                fontSize: 13,
                color: '#cacaca',
                maxWidth: 380,
                letterSpacing: '0.03em',
                borderLeft: '2px solid rgba(0,229,255,0.25)',
                paddingLeft: 12,
                marginTop:1
              }}
            >
              <b><u>Con +4 años de experiencia</u></b> especializado en liderar el ciclo completo de desarrollo: desde el modelado de bases de datos y APIs optimizadas en el backend, hasta interfaces modernas y fluidas en el frontend, priorizando siempre la escalabilidad, la seguridad y el rendimiento en producción.
            </p>

         <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24, marginTop: 20 }}>
<a href="https://www.linkedin.com/in/david-monge-garrido-8aa102417/" target="_blank" rel="noopener noreferrer" className="hero-btn">
  <Image 
    src="/in.png" 
    alt="LinkedIn Icon" 
    width={20} 
    height={20} 
  />
  LinkedIn
</a>

  <a href="/personal/CV_DAVID_MONGE.docx" target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn-cv">
    <FileText size={20} />
    CV
  </a>
</div>
          </div>

        </div>
      </section>
    </>
  )
}