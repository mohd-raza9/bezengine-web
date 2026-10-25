'use client'

import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  ExternalLink,
  Globe2,
  Layers3,
  MapPin,
  MessageCircle,
  Megaphone,
  Monitor,
  Search,
  ShoppingBag,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from 'lucide-react'
import { SiteHeader } from '../components/site-header'
import { InquiryForm } from '../components/inquiry-form'
import { SiteFooter } from '../components/site-footer'
import { feedbackUrl, mapEmbedUrl, mapUrl, whatsappUrl } from '../lib/contact'

const services = [
  { icon: BriefcaseBusiness, title: 'Business Consultation', text: 'Expert consultation and strategic guidance to grow your business.', featured: true },
  { icon: Layers3, title: 'Complete Business Solutions', text: 'One place for all your online business and branding needs.' },
  { icon: Users, title: 'B2B Business Setup', text: 'IndiaMART and other B2B platform account setup & management.' },
  { icon: ShoppingBag, title: 'E-Commerce Setup', text: 'Amazon, Flipkart, Meesho and online store setup services.' },
  { icon: Megaphone, title: 'Digital Marketing', text: 'Grow your business through social media and online marketing.' },
  { icon: MessageCircle, title: 'Social Media Management', text: 'Professional management of Facebook, Instagram and other platforms.' },
  { icon: Monitor, title: 'Website Development', text: 'Professional business and company websites with responsive design.' },
  { icon: Check, title: 'GST Services', text: 'Quick and hassle-free GST registration and related services.' },
]

const pillars = [
  { icon: Globe2, title: 'Digital presence', text: 'Build a strong, credible presence that works around the clock.' },
  { icon: BarChart3, title: 'Growth focused', text: 'Turn the right digital channels into measurable business momentum.' },
  { icon: Sparkles, title: 'One trusted partner', text: 'Get strategy, execution and ongoing guidance in one place.' },
]

const reviewPrinciples = [
  { icon: ShieldCheck, title: 'Only genuine voices', text: 'We share feedback only when it comes from real clients and is approved to be published.' },
  { icon: MessageCircle, title: 'Your experience matters', text: 'Tell us what went well or where we can do better. Every conversation helps us improve.' },
  { icon: Star, title: 'Help others choose', text: 'Your honest feedback can help another local business find the right digital partner.' },
]

export default function Page() {
  return (
    <main className="site-shell">
      <SiteHeader />

      <section className="hero" id="home">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> Complete online business solutions</div>
            <h1>Build a business<br /><em>that moves</em> forward.</h1>
            <p className="hero-text">We help startups, entrepreneurs and growing businesses build their digital presence, reach the right customers and scale with confidence.</p>
            <div className="hero-actions"><a className="button button-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Get a free quote <ArrowRight size={17} /></a><a className="button button-ghost" href="#services">Explore services</a></div>
            <div className="hero-note"><span className="avatar-stack"><i /><i /><i /></span><span>Helping businesses grow online, one smart move at a time.</span></div>
          </div>
          <div className="hero-visual" aria-label="BizEngine growth dashboard illustration">
            <div className="orb orb-one" /><div className="orb orb-two" />
            <div className="dashboard-card">
              <div className="dash-top"><span className="dash-label">Business overview</span><span className="dash-menu">•••</span></div>
              <div className="dash-title">Your growth, in motion <span>↗</span></div>
              <div className="metric-row"><div><small>Online reach</small><strong>84.6k</strong><b>+24.8%</b></div><div><small>New enquiries</small><strong>1,284</strong><b>+18.2%</b></div></div>
              <div className="chart"><div className="chart-grid" /><svg viewBox="0 0 420 150" role="img" aria-label="Upward growth chart"><defs><linearGradient id="area" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#f08a47" stopOpacity=".35" /><stop offset="1" stopColor="#f08a47" stopOpacity="0" /></linearGradient></defs><path d="M0 122 C35 115 45 94 76 101 S112 114 142 82 S181 89 211 69 S252 81 279 51 S320 66 346 35 S385 42 420 11 V150 H0Z" fill="url(#area)" /><path d="M0 122 C35 115 45 94 76 101 S112 114 142 82 S181 89 211 69 S252 81 279 51 S320 66 346 35 S385 42 420 11" fill="none" stroke="#ed7c3a" strokeWidth="4" strokeLinecap="round" /></svg></div>
              <div className="dash-footer"><span><i className="legend-dot orange" /> Reach</span><span><i className="legend-dot navy" /> Enquiries</span><span>Last 30 days <ChevronDown size={13} /></span></div>
            </div>
            <div className="float-card float-card-one"><span className="mini-icon"><Search size={15} /></span><div><strong>More visibility</strong><small>SEO & marketing</small></div></div>
            <div className="float-card float-card-two"><span className="mini-icon green"><Check size={15} /></span><div><strong>Strategy delivered</strong><small>Ready to grow</small></div></div>
          </div>
        </div>
      </section>

      <section className="trust-strip"><div className="container trust-inner"><span>Everything you need to build a stronger business online</span><div className="trust-items"><b>Websites</b><b>Marketing</b><b>E-Commerce</b><b>B2B Growth</b></div></div></section>

      <section className="section about" id="about"><div className="container about-grid"><div><div className="section-kicker">Why BizEngine</div><h2>Smart solutions for <span>ambitious businesses.</span></h2></div><div><p className="lead">BizEngine helps startups, entrepreneurs and businesses establish a powerful online presence through strategy, technology and hands-on execution.</p><a className="text-link" href="#services">Discover what we do <ArrowRight size={16} /></a></div></div><div className="container pillars">{pillars.map(({ icon: Icon, title, text }) => <article className="pillar" key={title}><div className="icon-tile"><Icon size={20} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="section services" id="services"><div className="container"><div className="services-heading"><div><div className="section-kicker">Our services</div><h2>Everything to move<br /><span>your business forward.</span></h2></div><p>From your first idea to your next milestone, we bring the expertise and execution to help you grow online.</p></div><div className="service-grid">{services.map(({ icon: Icon, title, text, featured }) => <article className={`service-card ${featured ? 'featured' : ''}`} key={title}><div className="service-icon"><Icon size={21} /></div><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Learn more about ${title}`}><ArrowRight size={17} /></a></article>)}</div></div></section>

      <section className="section reviews" id="reviews">
        <div className="container">
          <div className="reviews-heading">
            <div>
              <div className="section-kicker">Reviews & testimonials</div>
              <h2>Trust should be earned,<br /><span>never invented.</span></h2>
            </div>
            <p>We only publish genuine client feedback with permission. If you&apos;ve worked with BizEngine, your honest experience can help another business make a confident choice.</p>
          </div>
          <div className="review-principles">
            {reviewPrinciples.map(({ icon: Icon, title, text }) => (
              <article className="review-principle" key={title}>
                <span className="review-icon"><Icon size={20} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="review-invite">
            <div><strong>Worked with us?</strong><span>We&apos;d love to hear how your experience went.</span></div>
            <a className="button button-ghost" href={feedbackUrl} target="_blank" rel="noopener noreferrer">Share your feedback <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="section process" id="process"><div className="container process-panel"><div><div className="section-kicker light">Our process</div><h2>A simpler path<br />to <span>better growth.</span></h2><p>Clear thinking, thoughtful execution and a partner who stays with you through every step.</p><a className="button button-light" href="#contact">Let&apos;s talk <ArrowRight size={17} /></a></div><div className="steps"><div><span>01</span><h3>Understand</h3><p>We learn your goals, audience and opportunities.</p></div><div><span>02</span><h3>Build</h3><p>We turn the strategy into a polished digital presence.</p></div><div><span>03</span><h3>Grow</h3><p>We refine what works and keep your momentum moving.</p></div></div></div></section>

      <InquiryForm />

      <section className="location-section" id="location">
        <div className="container location-panel">
          <div className="location-copy">
            <span className="section-kicker">Visit BizEngine</span>
            <h2>Rooted in Meerut.<br /><span>Ready to go further.</span></h2>
            <p>Find us at Grand Square, Meerut. Drop by or get in touch before your visit—we&apos;ll be happy to talk through your business goals.</p>
            <div className="location-address"><MapPin size={19} /><div><strong>BizEngine</strong><span>Grand Square, Meerut, Uttar Pradesh, India</span></div></div>
            <a className="button button-primary" href={mapUrl} target="_blank" rel="noopener noreferrer">Get directions <ExternalLink size={16} /></a>
          </div>
          <div className="location-map">
            <iframe
              title="Map showing Grand Square in Meerut"
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a className="map-caption" href={mapUrl} target="_blank" rel="noopener noreferrer"><MapPin size={15} /> Open location in Google Maps <ExternalLink size={14} /></a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
