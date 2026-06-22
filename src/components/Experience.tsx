'use client'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const EXPERIENCIAS = [
  {
    puesto: "Desarrollador Full Stack",
    empresa: "Cámara de Comercio Oficial de Madrid",
    periodo: "2022 — Actualidad",
    ubicacion: "Madrid, España",
    descripcion: "Especializado en el ciclo completo de desarrollo de software con fuerte enfoque en seguridad, optimización de sistemas críticos y automatización de infraestructura.",
    detalles: [
      "Backend & APIs: Node.js, PHP ,arquitecturas escalables y APIs REST/GraphQL para alto volumen de tráfico.",
      "Frontend Moderno: Next.js, Laravel, Codeigniter, React, Tailwind CSS, MUI y React Bootstrap para interfaces UX/UI de alta fidelidad.",
      "Infraestructura & DevOps: Docker, Apache HTTP Server y Apache Tomcat para entornos.",
      "Datos & Seguridad: SQL Server, MySQL y MongoDB bajo ciclo de vida de desarrollo seguro.",
      "Refactorización: Modernización de código herdado y conexión de microservicios y APIs de terceros.",
    ]
  },
]

export default function Experience() {
  return (
    <>
      <style>{`
        .exp-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          background: #020b1e;
          padding: 28px;
          transition: border-color 0.3s;
          display: flex;
          gap: 0;
          z-index: 1;
        }
        .exp-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #00e5ff, transparent);
          opacity: 0.6;
        }
        .exp-card:hover { border-color: rgba(0,229,255,0.25); }
        .exp-left {
          width: 200px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding-right: 24px;
          border-right: 1px solid rgba(255,255,255,0.05);
        }
        .exp-right {
          flex: 1;
          padding-left: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .exp-tag {
          font-size: 9px;
          color: #475569;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 6px;
          padding: 3px 8px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-family: monospace;
          transition: border-color 0.2s, color 0.2s;
          cursor: default;
        }
        .exp-tag:hover { border-color: rgba(0,229,255,0.3); color: #00e5ff; }
      `}</style>

      <section id="experiencia" style={{ maxWidth: 768, width: '100%', margin: '0 auto', padding: '80px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* Título */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 32 }}>
          <h2 style={{ fontFamily: 'monospace', fontWeight: 900, fontSize: 20, color: '#ffffff', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: 10, margin: 0 }}>
            <Briefcase size={24} color="#00e5ff" />
            EXPERIENCIA LABORAL
          </h2>
          <div style={{ width: 200, height: 2, background: 'linear-gradient(90deg, #00f5d4, #9333ea)', marginTop: 10, borderRadius: 2 }} />
        </div>

        {/* Cards */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 20 }}>
          {EXPERIENCIAS.map((exp, index) => (
            <div key={index} className="exp-card">

              {/* COLUMNA IZQUIERDA */}
            <div className="exp-left">
  <p style={{ fontFamily: 'monospace', fontWeight: 900, fontSize: 13, color: '#ffffff', letterSpacing: '0.05em', margin: 0, lineHeight: 1.4 }}>
    ·{exp.puesto}
  </p>
  <p style={{ fontFamily: 'monospace', fontSize: 12, color: '#00e5ff', letterSpacing: '0.06em', margin: 0, lineHeight: 1.5 }}>
    {exp.empresa}
  </p>
  <div style={{ width: '100%', height: 1, background: 'rgb(189, 189, 189)', margin: '4px 0' }} />
  <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'monospace', fontSize: 15, color: '#d1d1d1' }}>
    <Calendar size={15} color="#00e5ff" />
    {exp.periodo}
  </div>
  <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'monospace', fontSize: 15, color: '#475569' }}>
    <MapPin size={15} />
    {exp.ubicacion}
  </div>
  <div style={{ width: '100%', height: 1, background: 'rgb(189, 189, 189)', margin: '0px 0' }} />

  {/* Botón proyectos */}
  <button
    onClick={() => {
      const el = document.getElementById('proyectos')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }}
    style={{
      marginTop: 30,
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'monospace',
      fontSize: 9,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: '#00e5ff',
      background: 'rgba(0,229,255,0.05)',
      border: '1px solid rgba(0,229,255,0.2)',
      borderRadius: 8,
      padding: '8px 12px',
      cursor: 'pointer',
      width: '100%',
      justifyContent: 'center',
      transition: 'background 0.2s, border-color 0.2s',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.background = 'rgba(0,229,255,0.1)'
      e.currentTarget.style.borderColor = 'rgba(0,229,255,0.4)'
    }}
    onMouseLeave={e => {
      e.currentTarget.style.background = 'rgba(0,229,255,0.05)'
      e.currentTarget.style.borderColor = 'rgba(0,229,255,0.2)'
    }}
  >
    <svg viewBox="0 0 24 24" width={11} height={11} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
    </svg>
    Ver proyectos corporativos
  </button>
</div>

              {/* COLUMNA DERECHA */}
              <div className="exp-right">

                {/* Descripción */}
                <p style={{ fontFamily: 'monospace', fontSize: 13, color: '#ffffff', lineHeight: 1.8, letterSpacing: '0.02em', borderLeft: '2px solid rgba(0,229,255,0.2)', paddingLeft: 12, margin: 0, borderRadius: 0 }}>
                  {exp.descripcion}
                </p>
                <div style={{ width: '100%', height: 1, background: 'rgb(189, 189, 189)', margin: '0px 0' }} />
                {/* Detalles */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                  <p style={{ fontFamily: 'monospace', textAlign:'center' ,fontSize: 12, color: '#9ea8ff', letterSpacing: '0.15em', textTransform: 'uppercase', margin: 0 }}>
                    ·Implementaciones
                  </p>
                  <div style={{ width: '100%', height: 1, background: 'rgb(189, 189, 189)', margin: '4px 0' }} />
                  {exp.detalles.map((detalle, dIndex) => {
                    const [titulo, cuerpo] = detalle.split(': ')
                    return (
                      <div key={dIndex} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontFamily: 'monospace', fontSize: 11 }}>
                        <div style={{ width: 3, height: 3, borderRadius: '50%', background: '#00e5ff', marginTop: 5, flexShrink: 0 }} />
                        <div>
                          <span style={{ color: '#ffffff', fontWeight: 600, fontSize:13 }}>{titulo}: </span>
                          <span style={{ color: '#b6b6b6' }}>{cuerpo}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>
    </>
  )
}