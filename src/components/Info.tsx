'use client'
import { User, Code2, Server, Shield, Zap } from 'lucide-react'

const AREAS = [
  {
    icon: Code2,
    titulo: "Frontend",
    desc: "React, Next.js, Tailwind CSS, MUI — interfaces de alta fidelidad centradas en UX.",
    color: "#00e5ff",
  },
  {
    icon: Server,
    titulo: "Backend & APIs",
    desc: "Node.js, REST/GraphQL, PHP/Laravel — arquitecturas escalables y servicios de alto rendimiento.",
    color: "#00f5d4",
  },
  {
    icon: Shield,
    titulo: "Datos & Seguridad",
    desc: "SQL Server, MySQL, SDLC — gestión, optimización y protección de la información.",
    color: "#9333ea",
  },
  {
    icon: Zap,
    titulo: "Infraestructura",
    desc: "Docker, Apache, Tomcat — entornos contenedorizados y despliegues estables en producción.",
    color: "#00e5ff",
  },
]

export default function Info() {
  return (
    <>
      <style>{`
        .info-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          background: #020b1e;
          padding: 20px;
          transition: border-color 0.3s;
          z-index: 1;
        }
        .info-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #00e5ff, transparent);
          opacity: 0.4;
        }
        .info-card:hover { border-color: rgba(0,229,255,0.2); }
        .area-card {
          position: relative;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          background: rgba(255,255,255,0.02);
          padding: 16px;
          transition: border-color 0.25s;
        }
        .area-card:hover { border-color: rgba(0,229,255,0.18); }
      `}</style>

      <section id="sobre-mi" style={{ maxWidth: 768, width: '100%', margin: '0 auto', padding: '80px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* Título */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'monospace', fontWeight: 900, fontSize: 20, color: '#ffffff', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: 10, margin: 0 }}>
            <User size={20} color="#00e5ff" />
            SOBRE MÍ
          </h2>
          <div style={{ width: 48, height: 2, background: 'linear-gradient(90deg, #00f5d4, #9333ea)', marginTop: 10, borderRadius: 2 }} />
        </div>

        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>

          {/* Texto principal */}
          <div className="info-card">
            <p style={{ fontFamily: 'monospace', fontSize: 9, color: '#cecece', letterSpacing: '0.18em', textTransform: 'uppercase', margin: '0 0 14px' }}> quién soy</p>
            <p style={{ fontFamily: 'monospace', fontSize: 12, color: '#94a3b8', lineHeight: 2, letterSpacing: '0.02em', margin: 0, borderLeft: '2px solid rgba(0,229,255,0.2)', paddingLeft: 14, borderRadius: 0 }}>
              Desarrollador <span style={{ color: '#ffffff', fontWeight: 700 }}>Full Stack</span> con sólida trayectoria en el diseño, arquitectura y despliegue de aplicaciones web escalables de extremo a extremo. Combino interfaces de alta fidelidad con backends robustos y una gestión eficiente de datos, garantizando ciclos de desarrollo <span style={{ color: '#00e5ff' }}>seguros, mantenibles y preparados para el crecimiento del negocio</span>. Trabajo bajo metodologías ágiles con mentalidad proactiva y capacidad de adaptación rápida a nuevos ecosistemas.
            </p>
          </div>

          {/* Grid de áreas */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {AREAS.map((area, i) => {
              const Icon = area.icon
              return (
                <div key={i} className="area-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <Icon size={14} color={area.color} style={{ flexShrink: 0 }} />
                    <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#ffffff', fontWeight: 700, letterSpacing: '0.06em' }}>
                      {area.titulo}
                    </span>
                  </div>
                  <p style={{ fontFamily: 'monospace', fontSize: 10, color: '#64748b', lineHeight: 1.7, letterSpacing: '0.02em', margin: 0 }}>
                    {area.desc}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Fila inferior: integraciones + metodologías */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>

            <div className="info-card" style={{ padding: 18 }}>
              <p style={{ fontFamily: 'monospace', fontSize: 9, color: '#d6d6d6', letterSpacing: '0.18em', textTransform: 'uppercase', margin: '0 0 10px' }}> integraciones</p>
              <p style={{ fontFamily: 'monospace', fontSize: 10, color: '#64748b', lineHeight: 1.7, margin: 0 }}>
                Pasarelas de pago, sistemas de emailing OAuth 2.0, LDAP/SSO, CRMs y APIs de terceros. Especialista en refactorización de código legacy.
              </p>
            </div>

            <div className="info-card" style={{ padding: 18 }}>
              <p style={{ fontFamily: 'monospace', fontSize: 9, color: '#d3d3d3', letterSpacing: '0.18em', textTransform: 'uppercase', margin: '0 0 10px' }}> metodología</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['Scrum', 'Agile', 'CI/CD', 'SDLC', 'Code Review', 'Git Flow'].map((m, i) => (
                  <span key={i} style={{ fontFamily: 'monospace', fontSize: 9, color: '#475569', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 5, padding: '3px 8px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {m}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}