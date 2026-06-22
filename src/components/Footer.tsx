'use client'

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-wrap {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: #020b1e;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .footer-line {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #00f5d4, #00e5ff, #9333ea, transparent);
          opacity: 0.7;
        }
        .footer-glow {
          position: absolute;
          top: -40px;
          left: 50%;
          transform: translateX(-50%);
          width: 300px;
          height: 80px;
          background: radial-gradient(ellipse, rgba(0,229,255,0.06), transparent 70%);
          pointer-events: none;
        }
        .footer-inner {
          position: relative;
          max-width: 768px;
          margin: 0 auto;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .footer-copy {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: monospace;
          font-size: 11px;
          color: #334155;
          letter-spacing: 0.08em;
        }
        .footer-name {
          color: #ffffff;
          font-weight: 700;
        }
        .footer-role {
          color: #00e5ff;
          opacity: 0.7;
        }
        .footer-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(0,229,255,0.4);
          flex-shrink: 0;
        }
        .footer-badge {
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #1e293b;
          background: linear-gradient(90deg, #00f5d4, #00e5ff);
          padding: 5px 12px;
          border-radius: 9999px;
          white-space: nowrap;
          font-weight: 700;
        }
      `}</style>

      <footer className="footer-wrap">
        <div className="footer-line" />
        <div className="footer-glow" />
        <div className="footer-inner">
          <div className="footer-copy">
            <span>© 2026</span>
            <div className="footer-dot" />
            <span className="footer-name">David Monge Garrido</span>
            <div className="footer-dot" />
            <span className="footer-role">Desarrollador Full-Stack</span>
          </div>
        </div>
      </footer>
    </>
  )
}