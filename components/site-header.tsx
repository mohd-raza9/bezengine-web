'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'
import { whatsappUrl } from '../lib/contact'
import { serviceList } from '../lib/services'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
    setServicesOpen(false)
  }

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="/" aria-label="Bizengine home">
          <Image src="/BZ%20Logo.png" alt="BizEngine logo" width={1536} height={1024} priority />
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="/" onClick={closeMenu}>Home</a>
          <div
            className={`nav-dropdown ${servicesOpen ? 'is-open' : ''}`}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="nav-dropdown-trigger"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services <ChevronDown size={15} />
            </button>
            <div className="service-menu">
              {serviceList.map(({ slug, title, shortDescription }) => (
                <a className="service-menu-link" href={`/services/${slug}`} key={slug} onClick={closeMenu}>
                  <span>{title}</span>
                  <small>{shortDescription}</small>
                </a>
              ))}
            </div>
          </div>
          <a href="/about" onClick={closeMenu}>About Us</a>
          <a href="/contact" onClick={closeMenu}>Contact</a>
          <a
            className="nav-cta"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Get a Quote <ArrowRight size={16} />
          </a>
        </div>
      </nav>
    </header>
  )
}
