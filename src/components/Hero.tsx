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

        /* ── Divider: vertical en desktop, horizontal en móvil ── */
        .hero-divider {
          width: 1px;
          align-self: stretch;
          background: linear-gradient(to bottom, transparent, rgba(0,229,255,0.3), transparent);
          margin: 0 32px;
          flex-shrink: 0;
        }

        /* ── Animación Efecto Mecanografía (Typing Effect) ── */
        .typewriter-name {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          border-right: 2px solid #00e5ff; /* Cursor inicial */
          width: 0;
          animation: 
            typing-name 1.5s steps(19) forwards,
            blink-cursor 0.75s step-end 3 forwards; /* Pestañea un momento y se apaga */
        }

        .typewriter-role {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          border-right: 2px solid transparent;
          width: 0;
          /* Empieza tras los 1.5s del nombre */
          animation: 
            typing-role 1.8s steps(24) 1.8s forwards,
            blink-cursor-infinite 0.75s step-end 1.8s infinite;
        }

        @keyframes typing-name {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes typing-role {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink-cursor {
          from, to { border-color: transparent }
          50% { border-color: #00e5ff; }
        }

        @keyframes blink-cursor-infinite {
          from, to { border-color: transparent }
          50% { border-color: #9333ea; }
        }

        @media (max-width: 640px) {
          .hero-inner {
            flex-direction: column !important;
            align-items: center !important;
          }
          .hero-divider {
            width: 60px;
            height: 1px;
            align-self: auto;
            background: linear-gradient(to right, transparent, rgba(0,229,255,0.3), transparent);
            margin: 16px 0;
          }
          .hero-text {
            align-items: center !important;
            text-align: center;
          }
          .hero-text p {
            text-align: left;
          }
        }
      `}</style>

      <section
        id="inicio"
        className="min-h-[60vh] flex flex-col items-center justify-center relative w-full px-4"
      >
        <div className="hero-inner flex flex-row items-center gap-0">
          <div
            style={{
              position: 'relative',
              width: '320px',
              height: '245px',
              borderRadius: '24px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',      
              justifyContent: 'center',  
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              border: '1px solid rgb(98, 250, 255)',
              flexShrink: 0,
            }}
          >
            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
              <Image
                src="/projects/cod/cod.jpg"
                alt="Fondo COD"
                fill
                priority
                style={{ objectFit: 'cover' }}
              />

              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(2, 11, 30, 0.65)',
                }}
              />
            </div>

            <div style={{ position: 'relative', zIndex: 10 }}>
              <div
                className="relative flex-shrink-0"
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: '50%',
                  padding: 3,
                  background: 'linear-gradient(135deg, #80ffee, #48edff, #6600c5)',
                  boxShadow: '0 0 18px rgba(0,229,255,0.25), 0 0 32px rgba(147,51,234,0.15)',
                }}
              >
                {/* FOTO DE PERFIL */}
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
            </div>
          </div>

          {/* DIVIDER */}
          <div className="hero-divider" />

          {/* TEXTO */}
          <div className="hero-text flex flex-col items-start">
            <h1 className="font-mono font-black leading-tight" style={{ fontSize: 'clamp(20px, 3.2vw, 32px)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              
              {/* Bloque Nombre Animado */}
              <span className="typewriter-name" style={{ color: '#ffffff' }}>
                David Monge Garrido
              </span>
              
              {/* Bloque Rol Animado */}
              <span
                className="typewriter-role mt-1"
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
                marginTop: 14 /* Ajustado un poco para dar aire tras la animación */
              }}
            >
              <b><u>Con +4 años de experiencia</u></b> especializado en liderar el ciclo completo de desarrollo: desde el modelado de bases de datos y APIs optimizadas en el backend, hasta interfaces modernas y fluidas en el frontend, priorizando siempre la escalabilidad, la seguridad y el rendimiento en producción.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24, marginTop: 16 }}>
              
              {/* Botón LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/david-monge-garrido-8aa102417/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hero-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 6,
                  fontFamily: 'monospace',
                  fontSize: 15,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#00e5ff',
                  background: 'rgba(0,229,255,0.05)',
                  border: '1px solid rgba(0,229,255,0.2)',
                  borderRadius: 6,
                  padding: '4px 8px',
                  cursor: 'pointer',
                  transition: 'background 0.2s, border-color 0.2s, color 0.2s',
                  verticalAlign: 'middle',
                  marginLeft: 4,
                  textDecoration: 'none' 
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#c084fc'                
                  e.currentTarget.style.background = 'rgba(192, 132, 252, 0.1)'  
                  e.currentTarget.style.borderColor = 'rgba(192, 132, 252, 0.4)' 
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#00e5ff'               
                  e.currentTarget.style.background = 'rgba(0,229,255,0.05)'
                  e.currentTarget.style.borderColor = 'rgba(0,229,255,0.2)'
                }}
              >
                <Image src="/in.png" alt="LinkedIn Icon" width={16} height={17} />
                LinkedIn
              </a>

              {/* Botón CV */}
              <a 
                href="/personal/CV_DAVID_MONGE.docx" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hero-btn hero-btn-cv"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 6,
                  fontFamily: 'monospace',
                  fontSize: 15,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#00e5ff',
                  background: 'rgba(0,229,255,0.05)',
                  border: '1px solid rgba(0,229,255,0.2)',
                  borderRadius: 6,
                  padding: '4px 8px',
                  cursor: 'pointer',
                  transition: 'background 0.2s, border-color 0.2s, color 0.2s',
                  verticalAlign: 'middle',
                  marginLeft: 4,
                  textDecoration: 'none'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#c084fc'                 
                  e.currentTarget.style.background = 'rgba(192, 132, 252, 0.1)' 
                  e.currentTarget.style.borderColor = 'rgba(192, 132, 252, 0.4)' 
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#00e5ff'                
                  e.currentTarget.style.background = 'rgba(0,229,255,0.05)'
                  e.currentTarget.style.borderColor = 'rgba(0,229,255,0.2)'
                }}
              >
                <FileText size={17} />
                CV
              </a>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}