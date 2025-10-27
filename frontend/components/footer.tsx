"use client"

export function Footer() {
  return (
    <footer className="mt-12 border-t border-(--color-border)">
      <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold mb-2">Quick Links</h3>
          <ul className="grid gap-1">
            <li>
              <a href="#about" className="footer-link">
                About
              </a>
            </li>
            <li>
              <a href="#events" className="footer-link">
                Events
              </a>
            </li>
            <li>
              <a href="#team" className="footer-link">
                Team
              </a>
            </li>
            <li>
              <a href="#sponsors" className="footer-link">
                Sponsors
              </a>
            </li>
            <li>
              <a href="#certificates" className="footer-link">
                Certificates
              </a>
            </li>
            <li>
              <a href="#contact" className="footer-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Programs</h3>
          <ul className="grid gap-1">
            <li>
              <a
                href="https://developers.google.com/community/gdg"
                target="_blank"
                className="footer-link"
                rel="noreferrer"
              >
                GDG Program
              </a>
            </li>
            <li>
              <a href="https://www.womentechmakers.com/" target="_blank" className="footer-link" rel="noreferrer">
                Women Techmakers
              </a>
            </li>
            <li>
              <a
                href="https://developers.google.com/programs/experts"
                target="_blank"
                className="footer-link"
                rel="noreferrer"
              >
                Google Developer Experts
              </a>
            </li>
            <li>
              <a href="https://www.googleforstartups.com/" target="_blank" className="footer-link" rel="noreferrer">
                Google for Startups
              </a>
            </li>
          </ul>
        </div>
        <div className="text-sm opacity-80">
          <p>© 2025 GDG On Campus MMMUT. All rights reserved.</p>
          <p>Powered by Google Developers.</p>
        </div>
      </div>
    </footer>
  )
}
