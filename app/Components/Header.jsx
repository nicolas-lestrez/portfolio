'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isActive = (href) => pathname === href;

  return (
    <header>
      <nav className="navbar navbar-dark navbar-expand-md bg-dark fixed-top">

        <div className="container-fluid">

          <Link href="/" className="navbar-brand fw-bold text-uppercase">
            JOHN DOE
          </Link>


          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Afficher le menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/" className={`nav-link px-3 ${isActive('/') ? 'active' : ''}`}>HOME</Link>
              </li>
              <li className="nav-item">
                <Link href="/services" className={`nav-link px-3 ${isActive('/services') ? 'active' : ''}`}>SERVICES</Link>
              </li>
              <li className="nav-item">
                <Link href="/portfolio" className={`nav-link px-3 ${isActive('/portfolio') ? 'active' : ''}`}>PORTFOLIO</Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className={`nav-link px-3 ${isActive('/contact') ? 'active' : ''}`}>CONTACT</Link>
              </li>
              <li className="nav-item">
                <Link href="/mentions-legales" className={`nav-link px-3 ${isActive('/mentions-legales') ? 'active' : ''}`}>
                  MENTIONS LÉGALES
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div style={{ height: 56 }} />
    </header>
  );
}
