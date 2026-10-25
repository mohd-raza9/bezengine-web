import Image from 'next/image'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { mapUrl, whatsappUrl } from '../lib/contact'

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cta">
          <div>
            <span className="footer-eyebrow">Have a project in mind?</span>
            <h2>Let&apos;s make your next move count.</h2>
          </div>
          <a className="footer-cta-link" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Start a conversation <ArrowRight size={17} />
          </a>
        </div>
        <div className="footer-grid">
          <div className="footer-brand-column">
            <a className="brand footer-brand" href="/" aria-label="BizEngine home">
              <Image src="/BZ%20Logo.png" alt="BizEngine logo" width={1536} height={1024} />
            </a>
            <p>Complete online business solutions for ambitious businesses—built with clear thinking and practical support.</p>
            <a className="footer-location-chip" href={mapUrl} target="_blank" rel="noopener noreferrer">
              <MapPin size={15} /> Grand Square, Meerut
            </a>
          </div>
          <div>
            <h3>Explore</h3>
            <a href="/#about">About BizEngine</a>
            <a href="/#services">Our services</a>
            <a href="/#process">How we work</a>
            <a href="/#reviews">Reviews & feedback</a>
          </div>
          <div>
            <h3>What we do</h3>
            <a href="/services">Website designing</a>
            <a href="/services">Digital marketing</a>
            <a href="/services">E-commerce solutions</a>
            <a href="/services">Business consulting</a>
          </div>
          <div className="footer-contact">
            <h3>Talk to our team</h3>
            <a href="tel:+917895230520"><Phone size={16} /> +91 78952 30520</a>
            <a href="mailto:hello@bizengine.in"><Mail size={16} /> hello@bizengine.in</a>
            <a href={mapUrl} target="_blank" rel="noopener noreferrer"><MapPin size={16} /> Find us in Meerut</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} BizEngine. All rights reserved.</span>
          <span>Built for better business.</span>
        </div>
      </div>
    </footer>
  )
}
