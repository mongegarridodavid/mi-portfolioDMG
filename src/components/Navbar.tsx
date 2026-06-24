'use client'
import { useEffect, useState } from 'react'
import { Home, Briefcase, FolderGit2, User, Mail } from 'lucide-react'

const NAV_ITEMS = [
  { id: 'inicio', label: 'Inicio', key: '1', icon: Home },
  { id: 'experiencia', label: 'Experiencia', key: '2', icon: Briefcase },
  { id: 'proyectos', label: 'Proyectos', key: '3', icon: FolderGit2 },
  { id: 'sobre-mi', label: 'Sobre Mí', key: '4', icon: User },
  { id: 'contacto', label: 'Contacto', key: '5', icon: Mail },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('inicio')

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
    }
  }

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    const sectionVisibility: Record<string, number> = {}

    NAV_ITEMS.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (!element) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            sectionVisibility[id] = entry.intersectionRatio
            const mostVisible = Object.entries(sectionVisibility).reduce(
              (max, [key, ratio]) => (ratio > max.ratio ? { id: key, ratio } : max),
              { id: 'inicio', ratio: 0 }
            )
            if (mostVisible.ratio > 0) setActiveSection(mostVisible.id)
          })
        },
        { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0] }
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') return
      const target = NAV_ITEMS.find(item => item.key === e.key)
      if (target) {
        e.preventDefault()
        scrollToSection(target.id)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <style>{`
        .nav-btn-label {
          font-family: monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #ffffff;
          transition: opacity 0.3s;
        }
        .nav-separator {
          color: rgba(255,255,255,0.12);
          font-size: 18px;
          user-select: none;
        }
        .nav-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          border-radius: 9999px;
          transition: all 0.3s;
          padding: 4px 55px;
          width: 100%;
          background: transparent;
          border: none;
          outline: none;
          cursor: pointer;
        }

        @media (max-width: 640px) {
          .nav-btn {
            padding: 8px 10px;
            min-width: unset;
          }
          .nav-btn-label {
            display: none;
          }
          .nav-separator {
            display: none;
          }
          .nav-icon {
            margin-bottom: 0 !important;
          }
        }
      `}</style>

      <header className="fixed top-16 left-1/2 -translate-x-1/2 z-50 w-max max-w-[95vw]">
        <div
          className="relative rounded-full p-[1.5px]"
          style={{ background: 'linear-gradient(90deg, #00f5d4, #00e5ff, #9333ea)' }}
        >
          <div
            className="flex items-center rounded-full"
            style={{ background: '#020b1e', padding: '2px 5px' }}
          >
            <nav className="flex items-center gap-2 md:gap-4">
              {NAV_ITEMS.map((item, index) => {
                const Icon = item.icon
                const isActive = activeSection === item.id

                return (
                  <div key={item.id} className="flex items-center gap-2 md:gap-4">
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="nav-btn"
                    >
                      <Icon
                        className="nav-icon"
                        style={{
                          width: 22,
                          height: 22,
                          color: '#ffffff',
                          opacity: isActive ? 1 : 0.4,
                          marginBottom: 10,
                          transition: 'opacity 0.3s, transform 0.3s',
                        }}
                      />
                      <span
                        className="nav-btn-label"
                        style={{
                          opacity: isActive ? 1 : 0.5,
                          fontWeight: isActive ? 700 : 400,
                        }}
                      >
                        {item.label}
                      </span>
                    </button>

                    {index < NAV_ITEMS.length - 1 && (
                      <span className="nav-separator">|</span>
                    )}
                  </div>
                )
              })}
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}