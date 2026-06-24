'use client'
import { FolderGit2, CalendarDays, BarChart3, Database, Users, ShieldCheck, MailCheck, Wrench, Banknote, Landmark } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const PROYECTOS = [
  {
    titulo: "Gestión de Cobros y TPV Virtual",
    subtitulo: "Dashboard Financiero",
    descripcion: "Ecosistema integral de facturación con generación de payment links dinámicos, conciliación automatizada y flujos de cobro desatendidos.",
    tags: ["Next.js", "React", "Node.js", "Material UI", "LDAP", "SQL Server", "OAuth 2.0", "TPV", "REST APIs", "Integración con terceros", "Exportación a Excel", "Estadísticas Automáticas"],
    color: "#00f5d4",
    icono: Landmark,
    imagenes: [
      "/projects/tpv/tpv1-2.png",
      "/projects/tpv/tpv2-2.png",
      "/projects/tpv/tpv3-2.png",
      "/projects/tpv/tpv4-2.png",
      "/projects/tpv/tpv5-2.png",
      "/projects/tpv/tpv6.png",
      "/projects/tpv/tpv7.png",
      "/projects/tpv/tpv8.png",
      "/projects/tpv/tpv9.png"
    ],
  },
  {
    titulo: "Web Docentes",
    subtitulo: "Almacenamiento información docentes",
    descripcion: "Web a gran escala de información, a la cual solo se puede acceder por invitación, una vez me invitan, valido mi usuario e inicio sesión, rellenaré mis datos para optar a ser seleccionado como docente válido.",
    tags: ["Laravel", "PHP", "Node.js", "SQL Server", "LDAP", "OAuth 2.0", "Validación", "Envío de emails", "Securización", "Bootstrap"],
    color: "#00e5ff",
    icono: Users,
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
    descripcion: "Solicitudes de visitas online con gestión de calendario para ello, disponible para móvil o escritorio.",
    tags: ["React", "Tailwind CSS", "Material UI", "Next.js", "Node.js", "OAuth 2.0", "CRON Jobs"],
    color: "#00f5d4",
    icono: CalendarDays,
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
    tags: ["Laravel", "PHP", "Node.js", "SQL Server", "LDAP", "OAuth 2.0", "Validación", "Envío de emails", "Securización", "Bootstrap"],
    color: "#00e5ff",
    icono: Database,
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
    tags: ["React", "Tailwind CSS", "Node.js", "OAuth 2.0", "CRON Jobs", "Envío de Emails", "SQL Server", "Material UI"],
    color: "#00f5d4",
    icono: MailCheck,
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
    tags: ["React", "Node.js", "Bootstrap", "SQL Server", "Dashboard", "Exportación a Excel", "Seguridad"],
    color: "#9333ea",
    icono: Wrench,
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
    tags: ["Next.js", "React", "Material UI", "Node.js", "SQL Server", "Analítica", "LDAP"],
    color: "#00e5ff",
    icono: BarChart3,
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
    tags: ["Node.js", "PHP", "Bootstrap", "CodeIgniter", "OAuth 2.0", "REST APIs", "Envío de emails", "Integración con terceros", "SQL Server"],
    color: "#00f5d4",
    icono: Landmark,
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
    tags: ["React", "Next.js", "Bootstrap", "Node.js", "LDAP", "SQL Server"],
    color: "#9333ea",
    icono: ShieldCheck,
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
    icono: Banknote,
    imagenes: [
      "/projects/fl/fl2-2.png",
      "/projects/fl/fl1-2.png",
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
        .proj-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr); /* Actualizado a 3 columnas para PC */
          gap: 24px;
          width: 100%;
        }
        .proj-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          background: #020b1e;
          display: flex;
          flex-direction: column;
          transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
          z-index: 1;
          height: 100%; /* Asegura consistencia de altura en la fila */
        }
        .proj-card:hover {
          border-color: rgba(0,229,255,0.2);
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        .proj-img-wrap {
          width: 100%;
          height: 170px;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .proj-img-placeholder {
          width: 100%;
          height: 170px;
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
          z-index: 12; /* Corregido: por encima de capas degradadas */
          background: rgba(2,11,30,0.85);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #fff;
          transition: background 0.2s, border-color 0.2s, transform 0.2s, opacity 0.2s;
          opacity: 0;
        }
        .proj-card:hover .slide-btn { opacity: 1; }
        .slide-btn:hover { background: rgba(0,229,255,0.2); border-color: rgba(0,229,255,0.5); transform: translateY(-50%) scale(1.08); }
        
        .slide-dots {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 5px;
          z-index: 12; /* Corregido para evitar bloqueos de clicks */
          padding: 4px 10px;
          background: rgba(2,11,30,0.7);
          border-radius: 12px;
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255,255,255,0.05);
        }
        .slide-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }
        .slide-dot.active { background: #00e5ff; transform: scale(1.2); }
        
        .proj-body {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }
        .proj-desc {
          font-family: sans-serif; 
          font-size: 11px; 
          color: #94a3b8; 
          line-height: 1.7; 
          letter-spacing: 0.01em; 
          margin: 4px 0 0;
        }
        .proj-tags-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          padding-top: 12px;
          margin-top: auto;
        }
        .proj-tag {
          font-size: 10px;
          color: #94a3b8;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 6px;
          padding: 3px 7px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          font-family: monospace;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
          cursor: default;
        }
        .proj-tag:hover { border-color: rgba(0,229,255,0.3); color: #00e5ff; background: rgba(0,229,255,0.02); }
        .icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          flex-shrink: 0;
        }

        /* ── Tablets ── */
        @media (max-width: 1024px) {
          .proj-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        /* ── Móviles Grandes ── */
        @media (max-width: 768px) {
          .proj-grid {
            grid-template-columns: 1fr;
          }
          .proj-img-wrap,
          .proj-img-placeholder {
            height: 200px;
          }
        }
        /* ── Móviles Pequeños ── */
        @media (max-width: 640px) {
          .proj-section {
            padding: 60px 16px !important;
          }
          .proj-title-area {
            margin-bottom: 34px !important;
          }
          .proj-title {
            font-size: 18px !important;
          }
        }
      `}</style>

      <section
        id="proyectos"
        className="proj-section"
        style={{ maxWidth: 1140, width: '100%', margin: '0 auto', padding: '100px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >

        <div className="proj-title-area" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 50 }}>
          <h2 className="proj-title" style={{ fontFamily: 'monospace', fontWeight: 900, fontSize: 22, color: '#ffffff', letterSpacing: '0.12em', display: 'flex', alignItems: 'center', gap: 12, margin: 0 }}>
            <FolderGit2 size={28} color="#00e5ff" />
            PROYECTOS
          </h2>
          <div style={{ width: 120, height: 2, background: 'linear-gradient(90deg, #00f5d4, #00e5ff, #9333ea)', marginTop: 12, borderRadius: 2 }} />
          <p style={{ color: '#94a3b8', fontSize: '13px', marginTop: 16, marginBottom: 0, textAlign: 'center', fontStyle: 'italic', maxWidth: '90%', lineHeight: 1.6 }}>
            * Toda la información y datos personales han sido anonimizados o eliminados para proteger la confidencialidad.
          </p>
        </div>

        <div className="proj-grid">
          {PROYECTOS.map((proj, index) => {
            const currentSlide = getSlide(index)
            const hasImages = proj.imagenes.length > 0
            const IconComponent = proj.icono || FolderGit2;

            return (
              <div key={index} className="proj-card">
                {/* Haz de luz de color dinámico superior */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${proj.color}, transparent)`, opacity: 0.8, zIndex: 5 }} />

                {/* Zona imagen */}
                {hasImages ? (
                  <div className="proj-img-wrap">
                    <Image
                      src={proj.imagenes[currentSlide]}
                      alt={`${proj.titulo} ${currentSlide + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 360px"
                      className="object-cover object-top transition-opacity duration-300"
                      priority={index < 3}
                    />

                    {proj.imagenes.length > 1 && (
                      <>
                        <button className="slide-btn" style={{ left: 10 }} onClick={() => prevSlide(index, proj.imagenes.length)}>
                          <svg viewBox="0 0 24 24" width={14} height={14} fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6" />
                          </svg>
                        </button>
                        <button className="slide-btn" style={{ right: 10 }} onClick={() => nextSlide(index, proj.imagenes.length)}>
                          <svg viewBox="0 0 24 24" width={14} height={14} fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </button>
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

                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 40, background: 'linear-gradient(to top, #020b1e, transparent)', zIndex: 2 }} />
                  </div>
                ) : (
                  <div className="proj-img-placeholder" style={{ background: `radial-gradient(ellipse at 50% 120%, ${proj.color}15, transparent 70%)`, position: 'relative' }}>
                    <div className="proj-img-grid">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} style={{ background: proj.color }} />
                      ))}
                    </div>
                    <IconComponent size={32} color={proj.color} style={{ opacity: 0.3, position: 'relative' }} />
                  </div>
                )}

                {/* Cuerpo de la tarjeta */}
                <div className="proj-body">
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <div className="icon-box">
                      <IconComponent size={18} color={proj.color} style={{ opacity: 0.9 }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontFamily: 'monospace', fontWeight: 900, fontSize: 13, color: '#ffffff', letterSpacing: '0.02em', margin: 0, lineHeight: 1.4 }}>
                        {proj.titulo}
                      </p>
                      <p style={{ fontFamily: 'monospace', fontSize: 10, color: proj.color, letterSpacing: '0.06em', margin: '4px 0 0', opacity: 0.9, textTransform: 'uppercase' }}>
                        {proj.subtitulo}
                      </p>
                    </div>
                  </div>

                  <p className="proj-desc">
                    {proj.descripcion}
                  </p>

                  <div className="proj-tags-wrap" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
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