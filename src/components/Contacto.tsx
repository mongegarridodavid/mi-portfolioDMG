'use client'
import { Mail, Phone, Send, X } from 'lucide-react'
import { useState } from 'react'

export default function Contacto() {
  const [modalOpen, setModalOpen] = useState(false)
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })
  const [enviado, setEnviado] = useState(false)

  const handleEnviar = () => {
    const subject = encodeURIComponent(`Mensaje de Contacto de ${form.nombre}`)
    const body = encodeURIComponent(`Hola soy: ${form.nombre}\nTe contacto desde el Email: ${form.email}\n\n${form.mensaje}`)
    window.location.href = `mailto:mongegarridodavid@gmail.com?subject=${subject}&body=${body}`
    setEnviado(true)
    setTimeout(() => {
      setModalOpen(false)
      setEnviado(false)
      setForm({ nombre: '', email: '', mensaje: '' })
    }, 2000)
  }

  return (
    <div>
      <style>{`
        .contact-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          background: #020b1e;
          padding: 28px;
          transition: border-color 0.3s;
          z-index: 1;
          width: 100%;
        }
        .contact-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #00e5ff, transparent);
          opacity: 0.5;
        }
        .contact-row {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .contact-row:last-of-type { border-bottom: none; }
        .contact-icon-wrap {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .contact-value {
          font-family: monospace;
          font-size: 12px;
          color: #e2e8f0;
          word-break: break-all;
        }
        .contact-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 50%;
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;
  padding: 13px;
  border-radius: 12px;
  border: 1px solid rgba(0,229,255,0.25);
  background: rgba(0,229,255,0.05);
  color: #00e5ff;
  font-family: monospace;
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
}
        .contact-btn:hover { background: rgba(0,229,255,0.1); border-color: rgba(0,229,255,0.5); }

        /* ── Modal ── */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(2,7,30,0.85);
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          backdrop-filter: blur(4px);
        }
        .modal-box {
          position: relative;
          background: #020b1e;
          border: 1px solid rgb(142, 244, 255);
          border-radius: 20px;
          padding: 32px;
          width: 100%;
          max-width: 480px;
          overflow: hidden;
          max-height: 90vh;
          overflow-y: auto;
        }
        .modal-box::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear(90deg, transparent, #00e5ff, transparent);
        }
        .modal-input {
          width: 100%;
          background: rgba(207, 207, 207, 0.37);
          border: 1px solid rgba(105, 245, 255, 0.99);
          border-radius: 10px;
          padding: 11px 14px;
          font-family: monospace;
          font-size: 11px;
          color: #ffffff;
          outline: none;
          transition: border-color 0.2s;
          box-sizing: border-box;
          resize: none;
        }
        .modal-input::placeholder { color: #ffffff; }
        .modal-input:focus { border-color: rgb(132, 105, 255); }
        .modal-send {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          border: none;
          background: linear-gradient(90deg, #00f5d4, #00e5ff);
          color: #020b1e;
          font-family: monospace;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          transition: opacity 0.2s;
        }
        .modal-send:hover { opacity: 0.85; }
        .modal-close {
          position: absolute;
          top: 16px; right: 16px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          width: 30px; height: 30px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          color: #475569;
          transition: color 0.2s, border-color 0.2s;
        }
        .modal-close:hover { color: #ffffff; border-color: rgba(255,255,255,0.2); }

        /* ── Mobile ── */
        @media (max-width: 640px) {
          .contact-section {
            padding: 60px 16px !important;
          }
          .contact-card {
            padding: 20px 16px;
          }
          .modal-box {
            padding: 24px 20px;
            border-radius: 16px;
          }
        }
      `}</style>

      <section
        id="contacto"
        className="contact-section"
        style={{ maxWidth: 768, width: '100%', margin: '0 auto', padding: '80px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'monospace', fontWeight: 900, fontSize: 20, color: '#ffffff', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: 10, margin: 0 }}>
            <Mail size={20} color="#00e5ff" />
            CONTACTO
          </h2>
          <div style={{ width: 48, height: 2, background: 'linear-gradient(90deg, #00f5d4, #9333ea)', marginTop: 10, borderRadius: 2 }} />
        </div>

        <div className="contact-card">
          <p style={{ fontFamily: 'monospace', fontSize: 9, color: '#ffffff', letterSpacing: '0.18em', textTransform: 'uppercase', margin: '0 0 20px' }}>
            disponible para proyectos y oportunidades
          </p>

          <div className="contact-row">
            <div className="contact-icon-wrap">
              <Mail size={15} color="#00e5ff" />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontFamily: 'monospace', fontSize: 9, color: '#818181', letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 0 3px' }}>Email</p>
              <span className="contact-value">mongegarridodavid@gmail.com</span>
            </div>
          </div>

          <div className="contact-row">
            <div className="contact-icon-wrap">
              <Phone size={15} color="#00f5d4" />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontFamily: 'monospace', fontSize: 9, color: '#818181', letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 0 3px' }}>Teléfono</p>
              <span className="contact-value">+34 666638972</span>
            </div>
          </div>

          <button className="contact-btn" onClick={() => setModalOpen(true)}>
            <Send size={13} />
            Enviar mensaje
          </button>
        </div>
      </section>

      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalOpen(false)}>
              <X size={14} />
            </button>

            <p style={{ fontFamily: 'monospace', fontWeight: 900, fontSize: 14, color: '#ffffff', letterSpacing: '0.08em', margin: '0 0 6px' }}>
              Enviar mensaje
            </p>
            <p style={{ fontFamily: 'monospace', fontSize: 10, color: '#334155', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 24px' }}>
              se abrirá Gmail con los datos
            </p>

            {enviado ? (
              <div style={{ textAlign: 'center', padding: '32px 0', fontFamily: 'monospace', fontSize: 12, color: '#00f5d4', letterSpacing: '0.08em' }}>
                Abriendo Gmail...
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <input
                  className="modal-input"
                  placeholder="Tu nombre"
                  value={form.nombre}
                  onChange={e => setForm(p => ({ ...p, nombre: e.target.value }))}
                />
                <input
                  className="modal-input"
                  placeholder="Tu email"
                  type="email"
                  value={form.email}
                  onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                />
                <textarea
                  className="modal-input"
                  placeholder="Tu mensaje..."
                  rows={5}
                  value={form.mensaje}
                  onChange={e => setForm(p => ({ ...p, mensaje: e.target.value }))}
                />
                <button className="modal-send" onClick={handleEnviar}>
                  <Send size={13} />
                  Abrir en Gmail
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}