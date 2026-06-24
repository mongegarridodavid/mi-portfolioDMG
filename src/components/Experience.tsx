'use client'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import Image from 'next/image'

const EXPERIENCIAS = [
  {
    puesto: "Desarrollador Full Stack",
    empresa: "Cámara de Comercio Oficial de Madrid",
    periodo: "2022 — Actualidad",
    ubicacion: "Madrid, España",
    descripcion: "Especializado en el ciclo completo de desarrollo de software con fuerte enfoque en seguridad, optimización de sistemas críticos y automatización de infraestructura.",
    detalles: [
      "Backend & APIs: Node.js, PHP, arquitecturas escalables y APIs REST/GraphQL para alto volumen de tráfico.",
      "Frontend Moderno: React, Next.js, Laravel, Codeigniter, Tailwind CSS, MUI y React Bootstrap para interfaces UX/UI de alta fidelidad.",
      "Infraestructura & DevOps: Docker, Apache HTTP Server y Apache Tomcat para entornos.",
      "Datos & Seguridad: SQL Server, MySQL y MongoDB bajo ciclo de vida de desarrollo seguro.",
      "Refactorización: Modernización de código heredado y conexión de microservicios y APIs de terceros.",
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
          border: 1px solid rgba(60, 255, 239, 0.4);
          border-radius: 16px;
          background: #020b1e;
          padding: 38px;
          transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease; 
          display: flex;
          gap: 10px; 
          z-index: 1;
        }
        .exp-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #cd78ff, transparent);
          opacity: 0.6;
        }
        .exp-card:hover {
          border-color: rgb(77, 89, 255);
          transform: translateY(-7px); 
          box-shadow: 0 10px 30px rgba(77, 89, 255, 0.2); 
        }
        .exp-left {
          width: 300px; 
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          gap: 12px; 
          padding-right: 24px;
          border-right: 1px solid rgba(255,255,255,0.08); 
        }
        .exp-right {
          flex: 1;
          padding-left: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .exp-tag {
          font-size: 10px; 
          color: #94a3b8; 
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 6px;
          padding: 4px 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-family: monospace;
          transition: all 0.2s ease;
          cursor: default;
        }
        .exp-tag:hover {
          border-color: rgba(0,229,255,0.5);
          color: #00e5ff;
          background: rgba(0,229,255,0.05);
        }
        .exp-projects-btn {
          margin-top: auto; 
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: monospace;
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #00e5ff;
          background: rgba(0,229,255,0.05);
          border: 1px solid rgba(0,229,255,0.2);
          border-radius: 8px;
          padding: 10px 16px; 
          cursor: pointer;
          width: 100%;
          justify-content: center;
          transition: all 0.3s ease; 
        }
        .exp-projects-btn:hover {
          background: rgba(0,229,255,0.1);
          border-color: rgba(0,229,255,0.6);
          color: #ffffff;
          transform: translateY(-2px); 
        }

        /* ── Mobile ── */
        @media (max-width: 640px) {
          .exp-section {
            padding: 60px 16px !important;
          }
          .exp-card {
            flex-direction: column;
            padding: 24px; 
            gap: 20px;
          }
          .exp-card:hover {
            transform: translateY(-2px); 
          }
          .exp-left {
            width: 100%;
            padding-right: 0;
            padding-bottom: 20px;
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.08);
          }
          .exp-right {
            padding-left: 0;
            padding-top: 0; 
          }
          .exp-projects-btn {
            margin-top: 16px !important;
          }
        }
      `}</style>

      <section
        id="experiencia"
        className="exp-section"
        style={{ maxWidth: 860, width: '100%', margin: '0 auto', padding: '100px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }} 
      >

        {/* Título */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 48 }}> {/* Más espacio inferior */}
          <h2 style={{ fontFamily: 'monospace', fontWeight: 900, fontSize: 24, color: '#ffffff', letterSpacing: '0.12em', display: 'flex', alignItems: 'center', gap: 12, margin: 0 }}>
            <Briefcase size={28} color="#00e5ff" />
            EXPERIENCIA LABORAL
          </h2>
          <div style={{ width: 140, height: 3, background: 'linear-gradient(90deg, #00f5d4, #9333ea)', marginTop: 12, borderRadius: 2 }} /> 
        </div>

        {/* Cards */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 24 }}> 
          {EXPERIENCIAS.map((exp, index) => (
            <div key={index} className="exp-card">

              {/* COLUMNA IZQUIERDA */}
              <div className="exp-left">
  <p style={{ fontFamily: 'monospace', fontWeight: 900, fontSize: 14, color: '#ffffff', letterSpacing: '0.05em', margin: 0, lineHeight: 1.4, borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 8 }}> 
    {exp.puesto}
  </p>
  <p style={{ fontFamily: 'monospace', fontSize: 13, color: '#00e5ff', letterSpacing: '0.06em', margin: 0, lineHeight: 1.5, opacity: 0.9 }}> 
    {exp.empresa}
  </p>
  <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.05)', margin: '4px 0' }} /> 
  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'monospace', fontSize: 12, color: '#e2e8f0', opacity: 0.9 }}> 
    <Calendar size={14} color="#00e5ff" />
    {exp.periodo}
  </div>
  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'monospace', fontSize: 12, color: '#94a3b8' }}> 
    <MapPin size={14} />
    {exp.ubicacion}
  </div>


  <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', marginTop: 35, borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
    <Image
      src="/projects/cod/cod2-2.png"
      alt="Fondo COD"
      fill
      priority
      style={{ objectFit: 'cover' }}
    />
  </div>

  <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.05)', margin: '12px 0 0px 0' }} /> 

  {/* Botón proyectos */}
  <button
    className="exp-projects-btn"
    onClick={() => {
      const el = document.getElementById('proyectos')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }}
  >
    <svg viewBox="0 0 24 24" width={12} height={12} fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
    </svg>
    Ver proyectos corporativos
  </button>
</div>

              {/* COLUMNA DERECHA */}
              <div className="exp-right">

                {/* Descripción */}
                <p style={{ fontFamily: 'monospace', fontSize: 14, color: '#e2e8f0', lineHeight: 1.8, letterSpacing: '0.02em', borderLeft: '3px solid #9333ea', paddingLeft: 16, margin: 0, borderRadius: 0 }}> 
                  {exp.descripcion}
                </p>
                <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.05)', margin: '0px 0' }} /> 

                {/* Detalles */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}> 
                  <p style={{ fontFamily: 'monospace', textAlign: 'center', fontSize: 12, color: '#a78bfa', letterSpacing: '0.18em', textTransform: 'uppercase', margin: 0, fontWeight: 700 }}> 
                    ·Implementaciones
                  </p>
                  <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.05)', margin: '4px 0' }} /> 
                  {exp.detalles.map((detalle, dIndex) => {
                    const [titulo, cuerpo] = detalle.split(': ')
                    return (
                      <div key={dIndex} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontFamily: 'monospace', fontSize: 12 }}> 
                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#00e5ff', marginTop: 6, flexShrink: 0, boxShadow: '0 0 6px #00e5ff' }} /> 
                        <div style={{ lineHeight: 1.6 }}>
                          <span style={{ color: '#ffffff', fontWeight: 600, fontSize: 13 }}>{titulo}: </span>
                          <span style={{ color: '#cbd5e1' }}>{cuerpo}</span> 
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