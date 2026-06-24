'use client'
import { User, Code2, Briefcase, Cpu } from 'lucide-react'

const SKILLS = [
  { nombre: "React",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { nombre: "Next.js",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { nombre: "Node.js",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { nombre: "TypeScript",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { nombre: "PHP",          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { nombre: "Laravel",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { nombre: "Docker",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { nombre: "MySQL",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { nombre: "SQL Server",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
  { nombre: "MongoDB",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { nombre: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { nombre: "Git",          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { nombre: "Apache",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
  { nombre: "JavaScript",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { nombre: "CodeIgniter",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg" },
  { nombre: "Tomcat",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tomcat/tomcat-original.svg" },
  { nombre: "Windows",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" },
  { nombre: "CMD",          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
  { nombre: "REST APIs",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" }, 
  { nombre: "VS Code",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
]

const TRACK = [...SKILLS, ...SKILLS]

export default function Info() {
  return (
    <>
      <style>{`
        .info-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(60, 255, 239, 0.4);
          border-radius: 16px;
          background: #020b1e;
          padding: 38px 0 0 0; /* Padding lateral 0 para que el ticker toque los extremos */
          transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease; 
          display: flex;
          flex-wrap: wrap; /* Permite que el bloque inferior baje y ocupe el 100% */
          gap: 0; 
          z-index: 1;
          width: 100%;
        }
        .info-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #cd78ff, transparent);
          opacity: 0.6;
        }
        .info-card:hover {
          border-color: rgb(77, 89, 255);
          transform: translateY(-7px); 
          box-shadow: 0 10px 30px rgba(77, 89, 255, 0.2); 
        }

        /* Contenedor superior para agrupar Izquierda y Derecha */
        .info-main-content {
          display: flex;
          width: 100%;
          padding: 0 38px 32px 38px; /* Aplicamos el padding original solo aquí arriba */
          gap: 10px;
        }

        /* Bloque Izquierdo */
        .info-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 12px; 
          padding-right: 32px;
          border-right: 1px solid rgba(255,255,255,0.08); 
        }

        /* Bloque Derecho*/
        .info-right {
          width: 260px; 
          flex-shrink: 0;
          padding-left: 32px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        /* ── Tarjetas Internas de Métricas  */
        .stat-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
          transition: all 0.25s ease;
          cursor: default;
        }
        .stat-item:hover {
          border-color: rgba(0, 229, 255, 0.4);
          background: rgba(0, 229, 255, 0.04);
          transform: translateX(4px);
        }
        .stat-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
        }

        /* ── Sección del Ticker Inferior Completo ── */
        .bottom-ticker-wrapper {
          width: 100%;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(0, 0, 0, 0.15);
          padding: 24px 0;
        }

        .ticker-title {
          font-family: 'monospace';
          font-size: 9px;
          color: #cecece;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin: 0 0 16px;
          padding-left: 38px; /* Alineado perfectamente con el bloque 'quién soy' */
        }

        .ticker-outer {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        .ticker-outer::before,
        .ticker-outer::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 80px;
          z-index: 2;
          pointer-events: none;
        }
        .ticker-outer::before {
          left: 0;
          background: linear-gradient(to right, #020b1e, transparent);
        }
        .ticker-outer::after {
          right: 0;
          background: linear-gradient(to left, #020b1e, transparent);
        }
        .ticker-track {
          display: flex;
          gap: 12px;
          width: max-content;
          animation: ticker-scroll 40s linear infinite;
        }
        .ticker-track:hover { animation-play-state: paused; }
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .skill-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          white-space: nowrap;
          transition: all 0.2s ease;
          cursor: default;
          flex-shrink: 0;
        }
        .skill-pill:hover {
          border-color: rgba(0,229,255,0.5);
          color: #00e5ff;
          background: rgba(0,229,255,0.05);
        }
        .skill-pill img {
          width: 16px;
          height: 16px;
          object-fit: contain;
          filter: brightness(0.9);
        }
        .skill-pill span {
          font-family: monospace;
          font-size: 10px;
          color: #94a3b8;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        /* ── Comportamiento Mobile Adaptativo ── */
        @media (max-width: 640px) {
          .info-section {
            padding: 60px 16px !important;
          }
          .info-card {
            padding-top: 24px;
          }
          .info-main-content {
            flex-direction: column;
            padding: 0 24px 24px 24px;
            gap: 24px;
          }
          .info-card:hover {
            transform: translateY(-2px); 
          }
          .info-left {
            width: 100%;
            padding-right: 0;
            padding-bottom: 24px;
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.08);
          }
          .info-right {
            width: 100%;
            padding-left: 0;
          }
          .bottom-ticker-wrapper {
            padding: 20px 0;
          }
          .ticker-title {
            padding-left: 24px; 
          }
        }
      `}</style>

      <section
        id="sobre-mi"
        className="info-section"
        style={{ maxWidth: 900, width: '100%', margin: '0 auto', padding: '80px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        {/* Título de Sección */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'monospace', fontWeight: 900, fontSize: 20, color: '#ffffff', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: 10, margin: 0 }}>
            <User size={20} color="#00e5ff" />
            SOBRE MÍ
          </h2>
          <div style={{ width: 78, height: 2, background: 'linear-gradient(90deg, #00f5d4, #9333ea)', marginTop: 10, borderRadius: 2 }} />
        </div>

        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 20 }}>
          

          <div className="info-card">
            
            <div className="info-main-content">
              

              <div className="info-left">
                <p style={{ fontFamily: 'monospace', fontSize: 9, color: '#cecece', letterSpacing: '0.18em', textTransform: 'uppercase', margin: '0 0 4px' }}>quién soy</p>
                <p style={{ fontFamily: 'monospace', fontSize: 12, color: '#94a3b8', lineHeight: 2, letterSpacing: '0.02em', margin: 0, borderLeft: '2px solid rgba(0,229,255,0.2)', paddingLeft: 14 }}>
                  Desarrollador <span style={{ color: '#ffffff', fontWeight: 700 }}>Full Stack</span> con sólida trayectoria en el diseño, arquitectura y despliegue de aplicaciones web escalables de extremo a extremo. Combino interfaces de alta fidelidad con backends robustos y una gestión eficiente de datos, garantizando ciclos de desarrollo <span style={{ color: '#00e5ff' }}>seguros, mantenibles y preparados para el crecimiento del negocio</span>. Trabajo bajo metodologías ágiles con mentalidad proactiva y capacidad de adaptación rápida a nuevos ecosistemas.
                </p>
              </div>

              <div className="info-right">
                <p style={{ fontFamily: 'monospace', fontSize: 9, color: '#cecece', letterSpacing: '0.18em', textTransform: 'uppercase', margin: '0 0 2px' }}>Ecosistema</p>
                
                <div className="stat-item">
                  <div className="stat-icon-wrapper">
                    <Briefcase size={14} color="#00f5d4" />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'monospace', fontSize: 14, fontWeight: 900, color: '#ffffff', lineHeight: 1 }}>+4 Años</div>
                    <div style={{ fontFamily: 'monospace', fontSize: 9, color: '#64748b', marginTop: 4, letterSpacing: '0.05em' }}>EXPERIENCIA</div>
                  </div>
                </div>

                <div className="stat-item">
                  <div className="stat-icon-wrapper">
                    <Code2 size={14} color="#00e5ff" />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'monospace', fontSize: 14, fontWeight: 900, color: '#ffffff', lineHeight: 1 }}>10+ Proyectos</div>
                    <div style={{ fontFamily: 'monospace', fontSize: 9, color: '#64748b', marginTop: 4, letterSpacing: '0.05em' }}>DESPLEGADOS</div>
                  </div>
                </div>

                <div className="stat-item">
                  <div className="stat-icon-wrapper">
                    <Cpu size={14} color="#cd78ff" />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'monospace', fontSize: 14, fontWeight: 900, color: '#ffffff', lineHeight: 1 }}>Full Stack</div>
                    <div style={{ fontFamily: 'monospace', fontSize: 9, color: '#64748b', marginTop: 4, letterSpacing: '0.05em' }}>FRONT / BACK</div>
                  </div>
                </div>
              </div>

            </div>

      
            <div className="bottom-ticker-wrapper">
             
              <div className="ticker-outer">
                <div className="ticker-track">
                  {TRACK.map((skill, i) => (
                    <div key={i} className="skill-pill">
                      <img src={skill.logo} alt={skill.nombre} />
                      <span>{skill.nombre}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}