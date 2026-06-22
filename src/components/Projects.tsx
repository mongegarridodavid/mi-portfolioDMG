'use client'
import { FolderGit2 } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const PROYECTOS = [
  {
    titulo: "Gestión de Cobros y TPV Virtual",
    subtitulo: "Dashboard Financiero",
    descripcion: "Ecosistema integral de facturación con generación de payment links dinámicos, conciliación automatizada y flujos de cobro desatendidos.",
    tags: [ "Next.js","React", "Node.js", "Material ui" , "LDAP" ,"SQL SERVER", "OAuth 2.0", "TPV", "REST APIs" , "INTEGRACIÓN CON TERCEROS" , "EXPORTACIÓN A EXCEL", "ESTADÍSTICAS AUTOMÁTICAS"],
    color: "#00f5d4",
    imagenes: [
      "/projects/tpv/tpv1-2.png",
      "/projects/tpv/tpv2-2.png",
      "/projects/tpv/tpv3-2.png",
      "/projects/tpv/tpv4-2.png",
      "/projects/tpv/tpv5.png",
      "/projects/tpv/tpv6.png",
      "/projects/tpv/tpv7.png",
      "/projects/tpv/tpv8.png",
      "/projects/tpv/tpv9.png"
    ],
  },
    {
    titulo: "Web Docentes",
    subtitulo: "Almecenamiento información docentes",
    descripcion: "Web a gran escala de información , a la cual solo se puede acceder por invitación , una vez me invitan , valido mi usuario y inicio sesión , rellenare mis datos para optar a ser seleccionado como docente valido.",
    tags: ["Laravel", "PHP", "Node.js", "SQL Server", "LDAP", "OAuth 2.0", "Validación" , "Envio de emails" , "Securización", "BOOSTRAP"],
    color: "#00e5ff",
    imagenes: [
      "/projects/wdoc/wdoc1.png",
      "/projects/wdoc/wdoc3.png",
      "/projects/wdoc/wdoc2.png",
      "/projects/wdoc/wdoc.png",
      "/projects/wdoc/wdoc4.png",
      "/projects/wdoc/wdoc5.png",
      "/projects/wdoc/wdoc6.png",
      "/projects/wdoc/wdoc7.png",
      "/projects/wdoc/wdoc8.png",
      "/projects/wdoc/wdoc9.png",
      "/projects/wdoc/wdoc10.png"
    ],
  },
    {
    titulo: "Web de Reserva de Visitas",
    subtitulo: "Solicitud de visitas a centro de formación",
    descripcion: "Solicitudes de visitas online con gestión de calendario para ello , disponible para móvil o escritorio.",
    tags: ["React", "Tailwind CSS", "MATERIAL UI","NEXT.JS", "Node.js", "OAuth 2.0", "CRON Jobs"],
    color: "#00f5d4",
    imagenes: [
       "/projects/wvis/wvis1.png",
      "/projects/wvis/wvis2.png",
      "/projects/wvis/wvis3.png",
    ],
  },
  {
    titulo: "Sistema gestión Homologación Docentes",
    subtitulo: "Sistema de gestión docentes",
    descripcion: "Plataforma de gestión interna a gran escala para administración de departamentos, personal docente y automatización de onboarding.",
      tags: ["Laravel", "PHP", "Node.js", "SQL Server", "LDAP", "OAuth 2.0", "Validación" , "Envio de emails" , "Securización", "boostrap"],
    color: "#00e5ff",
    imagenes: [
      "/projects/doc/doc1.png",
      "/projects/doc/doc2.png",
      "/projects/doc/doc3.png",
      "/projects/doc/doc4.png",
      "/projects/doc/doc5.png",
      "/projects/doc/doc6.png",
      "/projects/doc/doc7.png",
      "/projects/doc/doc8.png",
      "/projects/doc/doc9.png",
      "/projects/doc/doc10.png",
      "/projects/doc/doc11.png",
      "/projects/doc/doc12.png",
      "/projects/doc/doc13.png",
      "/projects/doc/doc15.png",
      "/projects/doc/doc16.png"
    ],
  },
    {
    titulo: "Sistema de Reserva de Visitas",
    subtitulo: "Automatización de Agenda",
    descripcion: "Solución web para automatizar el flujo completo de solicitud y confirmación de visitas con recordatorios automáticos y gestión de estados.",
    tags: ["React", "Tailwind CSS", "Node.js", "OAuth 2.0", "CRON Jobs", "Envío de Emails" , "SQL SERVER", "Material ui"],
    color: "#00f5d4",
    imagenes: [
      "/projects/vis/vis1.png",
      "/projects/vis/vis2.png",
      "/projects/vis/vis3.png",
       "/projects/vis/vis4.png",
      "/projects/vis/vis5.png",
      "/projects/vis/vis6.png"
    ],
  },
  {
    titulo: "Orquestador de Infraestructura IT",
    subtitulo: "CMDB Corporativa",
    descripcion: "Plataforma interna de gobernanza tecnológica para mapeo, control y auditoría en tiempo real de servidores, servicios y accesos.",
    tags: ["React", "Node.js", "BOOSTRAP", "SQL Server", "Dashboard", "EXPORTACIÓN A EXCEL","Seguridad"],
    color: "#9333ea",
    imagenes: [
      "/projects/gis/gis2-2.png",
      "/projects/gis/gis3-2.png",
      "/projects/gis/gis4-2.jpeg",
      "/projects/gis/gis5-2.jpeg",
      "/projects/gis/gis6-2.jpeg",
      "/projects/gis/gis7-2.jpeg",
      "/projects/gis/gis8-2.jpeg",
      "/projects/gis/gis9-2.jpeg"
    ],
  },
  {
    titulo: "Panel de Control de Siniestros",
    subtitulo: "Análisis Multi-Sede",
    descripcion: "Backoffice centralizado para registro, seguimiento y análisis estadístico de incidencias en múltiples infraestructuras corporativas.",
    tags: ["NEXT.JS","React", "Material ui", "Node.js", "SQL Server", "Analítica", "LDAP"],
    color: "#00e5ff",
    imagenes: [
      "/projects/sin/sin3.png",
       "/projects/sin/sin1.png",
      "/projects/sin/sin2.png",
      "/projects/sin/sin4.png",
    ],
  },
  {
    titulo: "Módulo de Onboarding Automatizado",
    subtitulo: "Alta en un Click",
    descripcion: "Microservicio inteligente de registro y verificación de identidad en un paso que orquesta múltiples plataformas externas en tiempo real.",
    tags: ["Node.js", "PHP","boostrap", "CodeIgniter", "OAuth 2.0", "REST APIs", "Envío de emails", "INTEGRACIÓN CON TERCEROS" , "SQL SERVER"],
    color: "#00f5d4",
    imagenes: [
       "/projects/ac/ac1.png",
       "/projects/ac/ac2.png",
      "/projects/ac/ac3.png",
      "/projects/ac/ac6.png",  
      "/projects/ac/ac4.png",
    ],
  },
  {
    titulo: "Sistema IAM y Control de Accesos",
    subtitulo: "Gestión de Identidades",
    descripcion: "Plataforma core de ciberseguridad con sincronización LDAP en tiempo real, auditoría de permisos y motor analítico de consumo de software.",
    tags: ["React", "NEXT.JS", "Bootstrap", "Node.js", "LDAP", "SQL Server"],
    color: "#9333ea",
    imagenes: [
       "/projects/ojo/gis1.png",
       "/projects/ojo/gis6.png",
      "/projects/ojo/gis2.png",
      "/projects/ojo/gis3.png",
      "/projects/ojo/gis4.png",
      "/projects/ojo/gis5.png"
    ],
  },
  {
    titulo: "Pasarela de Pagos Internacionales",
    subtitulo: "Flywire API Integration",
    descripcion: "Automatización del flujo de cobros internacionales transfronterizos con conversión de divisas en tiempo real y panel de administración interno.",
    tags: ["Node.js", "React", "Flywire API", "Webhooks", "OAuth 2.0", "SDLC"],
    color: "#00e5ff",
    imagenes: [
          "/projects/fl/fl1.png",
       "/projects/fl/fl2.png",
       "/projects/tpv/tpv9.png"
    ],
  }
]

export default function Projects() {
  const [activeSlide, setActiveSlide] = useState<Record<number, number>>({})

  const getSlide = (index: number) => activeSlide[index] ?? 0

  const prevSlide = (index: number, total: number) =>
    setActiveSlide(prev => ({ ...prev, [index]: (getSlide(index) - 1 + total) % total }))

  const nextSlide = (index: number, total: number) =>
    setActiveSlide(prev => ({ ...prev, [index]: (getSlide(index) + 1) % total }))

  return (
    <>
      <style>{`
        .proj-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          background: #020b1e;
          display: flex;
          flex-direction: column;
          transition: border-color 0.3s, transform 0.3s;
          z-index: 1;
        }
        .proj-card:hover {
          border-color: rgba(0,229,255,0.2);
          transform: translateY(-2px);
        }
        .proj-img-wrap {
          width: 100%;
          height: 160px;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .proj-img-placeholder {
          width: 100%;
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          flex-shrink: 0;
        }
        .proj-img-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 4px;
          width: 80%;
          height: 70%;
          opacity: 0.12;
          position: absolute;
        }
        .proj-img-grid div { border-radius: 3px; }
        .slide-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          background: rgba(2,11,30,0.7);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 50%;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #fff;
          transition: background 0.2s, border-color 0.2s;
        }
        .slide-btn:hover { background: rgba(0,229,255,0.15); border-color: rgba(0,229,255,0.4); }
        .slide-dots {
          position: absolute;
          bottom: 6px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 4px;
          z-index: 10;
        }
        .slide-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
          cursor: pointer;
          transition: background 0.2s;
        }
        .slide-dot.active { background: #00e5ff; }
        .proj-body {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }
        .proj-tag {
          font-size: 9px;
          color: #475569;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 5px;
          padding: 3px 7px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-family: monospace;
          transition: border-color 0.2s, color 0.2s;
          cursor: default;
        }
        .proj-tag:hover { border-color: rgba(0,229,255,0.3); color: #00e5ff; }
        .proj-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #64748b;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 9999px;
          padding: 7px 14px;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s;
          align-self: flex-start;
          margin-top: auto;
        }
        .proj-btn:hover { border-color: rgba(0,229,255,0.4); color: #00e5ff; }
        .proj-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          width: 100%;
        }
      `}</style>

      <section id="proyectos" style={{ maxWidth: 768, width: '100%', margin: '0 auto', padding: '80px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 40 }}>
  <h2 style={{ fontFamily: 'monospace', fontWeight: 900, fontSize: 20, color: '#ffffff', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: 10, margin: 0 }}>
    <FolderGit2 size={25} color="#00e5ff" />
    PROYECTOS
  </h2>
  <div style={{ width: 100, height: 2, background: 'linear-gradient(90deg, #00f5d4, #9333ea)', marginTop: 10, borderRadius: 2 }} />
  
  <p style={{ color: '#a3a3a3', fontSize: '12px', marginTop: 12, marginBottom: 0, textAlign: 'center', fontStyle: 'italic', maxWidth: '80%' }}>
    * Toda la información y datos personales han sido anonimizados o eliminados para proteger la confidencialidad.
  </p>
</div>
  <p style={{ fontFamily: 'monospace', fontWeight: 900, fontSize: 12, color: '#ffffff', letterSpacing: '0.05em', margin: 0, lineHeight: 1.4 }}></p>
        <div className="proj-grid">
          {PROYECTOS.map((proj, index) => {
            const currentSlide = getSlide(index)
            const hasImages = proj.imagenes.length > 0

            return (
              <div key={index} className="proj-card">
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${proj.color}, transparent)`, opacity: 0.6 }} />

                {/* Zona imagen */}
                {hasImages ? (
                  <div className="proj-img-wrap">
                    <Image
                      src={proj.imagenes[currentSlide]}
                      alt={`${proj.titulo} ${currentSlide + 1}`}
                      fill
                      sizes="384px"
                      className="object-cover object-top"
                    />

                    {/* Flechas */}
                    {proj.imagenes.length > 1 && (
                      <>
                        <button className="slide-btn" style={{ left: 6 }} onClick={() => prevSlide(index, proj.imagenes.length)}>
                          <svg viewBox="0 0 24 24" width={12} height={12} fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"/>
                          </svg>
                        </button>
                        <button className="slide-btn" style={{ right: 6 }} onClick={() => nextSlide(index, proj.imagenes.length)}>
                          <svg viewBox="0 0 24 24" width={12} height={12} fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"/>
                          </svg>
                        </button>

                        {/* Dots */}
                        <div className="slide-dots">
                          {proj.imagenes.map((_, i) => (
                            <div
                              key={i}
                              className={`slide-dot${i === currentSlide ? ' active' : ''}`}
                              onClick={() => setActiveSlide(prev => ({ ...prev, [index]: i }))}
                            />
                          ))}
                        </div>
                      </>
                    )}


                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 40, background: 'linear-gradient(to top, #020b1e, transparent)' }} />
                  </div>
                ) : (
                  <div className="proj-img-placeholder" style={{ background: `radial-gradient(ellipse at 50% 120%, ${proj.color}0a, transparent 70%)`, height: 160, position: 'relative' }}>
                    <div className="proj-img-grid">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} style={{ background: proj.color }} />
                      ))}
                    </div>
                    <FolderGit2 size={28} color={proj.color} style={{ opacity: 0.2, position: 'relative' }} />
                  </div>
                )}

                {/* Cuerpo */}
                <div className="proj-body">
                  <div>
                    <p style={{ fontFamily: 'monospace', fontWeight: 900, fontSize: 12, color: '#ffffff', letterSpacing: '0.05em', margin: 0, lineHeight: 1.4 }}>
                      {proj.titulo}
                    </p>
                    <p style={{ fontFamily: 'monospace', fontSize: 10, color: proj.color, letterSpacing: '0.06em', margin: '3px 0 0', opacity: 0.8 }}>
                      {proj.subtitulo}
                    </p>
                  </div>

                  <p style={{ fontFamily: 'monospace', fontSize: 10, color: '#64748b', lineHeight: 1.7, letterSpacing: '0.02em', margin: 0 }}>
                    {proj.descripcion}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, paddingTop: 8, borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                    {proj.tags.map((tag, tIndex) => (
                      <span key={tIndex} className="proj-tag">{tag}</span>
                    ))}
                  </div>

                 
                </div>
              </div>
            )
          })}
        </div>

      </section>
    </>
  )
}