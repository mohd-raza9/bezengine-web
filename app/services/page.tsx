import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { SiteFooter } from '../../components/site-footer'
import { SiteHeader } from '../../components/site-header'
import { serviceList } from '../../lib/services'

export default function ServicesPage() {
  return (
    <main className="services-page">
      <SiteHeader />
      <section className="services-page-hero">
        <div className="container">
          <span className="section-kicker">Our services</span>
          <h1>Everything to move <em>your business forward.</em></h1>
          <p>From a clear first step to a stronger digital presence, find the support that fits your business and goals.</p>
        </div>
      </section>
      <section className="services-page-content">
        <div className="container">
          <div className="services-page-heading">
            <div><span className="section-kicker">Explore what we do</span><h2>One team for your <span>next move.</span></h2></div>
            <p>Choose a service to see what it includes, who it can help, and how to get started.</p>
          </div>
          <div className="services-page-grid">
            {serviceList.map((service, index) => (
              <a className="services-page-card" href={`/services/${service.slug}`} key={service.slug}>
                <span className="services-page-card-top"><span>0{index + 1}</span><ArrowUpRight size={18} /></span>
                <span className="services-page-card-icon"><CheckCircle2 size={20} /></span>
                <h3>{service.title}</h3>
                <p>{service.shortDescription}</p>
                <span className="services-page-card-link">Explore service <ArrowRight size={15} /></span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
