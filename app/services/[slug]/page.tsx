import { ArrowLeft, ArrowRight, CheckCircle2, Clock3, Sparkles } from 'lucide-react'
import { notFound } from 'next/navigation'
import { ConsultationBookingForm } from '../../../components/consultation-booking-form'
import { SiteFooter } from '../../../components/site-footer'
import { SiteHeader } from '../../../components/site-header'
import { services, serviceList } from '../../../lib/services'
import { whatsappNumber } from '../../../lib/contact'

export function generateStaticParams() {
  return serviceList.map(({ slug }) => ({ slug }))
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = serviceList.find((item) => item.slug === slug)

  if (!service) notFound()

  const isConsultation = service.slug === services['business-consultation'].slug
  const serviceMessageUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi BizEngine, I'd like to know more about ${service.title}.`)}`

  return (
    <main className="service-detail-page">
      <SiteHeader />
      <section className="service-detail-hero">
        <div className="container service-detail-hero-grid">
          <div className="service-detail-copy">
            <a className="service-back-link" href="/services"><ArrowLeft size={15} /> All services</a>
            <span className="section-kicker">BizEngine services</span>
            <h1>{service.title}<em> built around your goals.</em></h1>
            <p>{service.overview}</p>
            <div className="service-detail-actions">
              {isConsultation ? (
                <a className="button button-primary" href="#book-consultation">Choose a consultation slot <ArrowRight size={17} /></a>
              ) : (
                <a className="button button-primary" href={serviceMessageUrl} target="_blank" rel="noopener noreferrer">
                  Talk about this service <ArrowRight size={17} />
                </a>
              )}
              <span><Sparkles size={15} /> Practical support for your next step</span>
            </div>
          </div>
          <div className="service-detail-visual" aria-hidden="true">
            <div className="service-detail-orbit service-detail-orbit-one" />
            <div className="service-detail-orbit service-detail-orbit-two" />
            <div className="service-detail-visual-card">
              <span className="service-detail-visual-icon"><Sparkles size={22} /></span>
              <small>YOUR NEXT STEP</small>
              <strong>{service.title}</strong>
              <span className="service-detail-visual-line" />
              <span className="service-detail-visual-caption">Clear direction. Thoughtful execution.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail-content">
        <div className="container service-detail-content-grid">
          <div className="service-detail-heading">
            <span className="section-kicker">What this includes</span>
            <h2>Focused help.<br /><span>Clear next steps.</span></h2>
            <p>{service.shortDescription}</p>
          </div>
          <div className="service-detail-highlights">
            {service.highlights.map((highlight, index) => (
              <article className="service-detail-highlight" key={highlight}>
                <span className="service-detail-highlight-number">0{index + 1}</span>
                <CheckCircle2 size={20} />
                <p>{highlight}</p>
              </article>
            ))}
            <div className="service-detail-audience">
              <strong>Who it&apos;s for</strong>
              <p>{service.bestFor}</p>
            </div>
          </div>
        </div>
      </section>

      {isConsultation ? (
        <section className="consultation-booking-section" id="book-consultation">
          <div className="container">
            <div className="consultation-section-heading">
              <span className="section-kicker">Business consultation</span>
              <h2>Choose a time to <span>talk it through.</span></h2>
              <p>Share a few details and request a 30-minute slot. We&apos;ll confirm the time with you.</p>
              <span className="consultation-hours"><Clock3 size={15} /> Monday–Saturday · 10:00 AM–6:00 PM IST</span>
            </div>
            <ConsultationBookingForm />
          </div>
        </section>
      ) : (
        <section className="service-detail-cta">
          <div className="container service-detail-cta-panel">
            <div><span className="section-kicker">Ready to get started?</span><h2>Let&apos;s discuss your {service.title.toLowerCase()} goals.</h2><p>Tell us what you have in mind and we&apos;ll help you find a practical next step.</p></div>
            <a className="button button-primary" href={serviceMessageUrl} target="_blank" rel="noopener noreferrer">Message BizEngine <ArrowRight size={17} /></a>
          </div>
        </section>
      )}
      <SiteFooter />
    </main>
  )
}
