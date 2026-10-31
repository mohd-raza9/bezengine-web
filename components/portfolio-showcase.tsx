import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Globe2,
  Megaphone,
  Monitor,
  ShoppingBag,
  Store,
  Users,
} from 'lucide-react'

const sampleProjects = [
  { title: 'Local Retail Website', category: 'Website design', icon: Store, theme: 'retail', detail: 'A clear storefront for a growing local brand.' },
  { title: 'Online Store Launch', category: 'E-commerce', icon: ShoppingBag, theme: 'commerce', detail: 'A polished catalogue and a simpler shopping journey.' },
  { title: 'B2B Supplier Profile', category: 'B2B setup', icon: BriefcaseBusiness, theme: 'business', detail: 'A stronger product showcase for business buyers.' },
  { title: 'Social Campaign Concept', category: 'Digital marketing', icon: Megaphone, theme: 'social', detail: 'A consistent campaign direction across channels.' },
  { title: 'Business Growth Plan', category: 'Consultation', icon: BarChart3, theme: 'growth', detail: 'A practical roadmap for the next stage.' },
  { title: 'Brand Social Presence', category: 'Social media', icon: Users, theme: 'presence', detail: 'A coordinated look and feel for social content.' },
  { title: 'Service Business Website', category: 'Website design', icon: Monitor, theme: 'service', detail: 'A focused web experience built to invite enquiries.' },
  { title: 'Digital Presence Refresh', category: 'Online growth', icon: Globe2, theme: 'digital', detail: 'Connected touchpoints for a more confident brand.' },
]

function ProjectCard({ project }: { project: (typeof sampleProjects)[number] }) {
  const Icon = project.icon

  return (
    <article className="portfolio-card">
      <div className={`portfolio-preview portfolio-preview-${project.theme}`}>
        <div className="portfolio-preview-window">
          <div className="portfolio-preview-top"><i /><i /><i /><span>bizengine.preview</span></div>
          <div className="portfolio-preview-content">
            <span className="portfolio-preview-icon"><Icon size={20} /></span>
            <span className="portfolio-preview-lines"><i /><i /><i /></span>
            <span className="portfolio-preview-tiles"><i /><i /><i /></span>
          </div>
        </div>
        <span className="portfolio-preview-glow" />
      </div>
      <div className="portfolio-card-copy">
        <span className="portfolio-category">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.detail}</p>
        <span className="portfolio-sample-tag">Sample concept <ArrowRight size={13} /></span>
      </div>
    </article>
  )
}

export function PortfolioShowcase() {
  return (
    <section className="portfolio-showcase" id="selected-work" aria-labelledby="portfolio-heading">
      <div className="container">
        <div className="portfolio-heading">
          <div>
            <span className="section-kicker">Selected work</span>
            <h2 id="portfolio-heading">Ideas brought to <span>digital life.</span></h2>
          </div>
          <p>Explore sample project concepts that show the kinds of digital experiences we can create. These are illustrative previews, not published client projects.</p>
        </div>
      </div>
      <div className="portfolio-marquee" aria-label="Automatically scrolling sample project concepts">
        <div className="portfolio-track">
          <div className="portfolio-group">
            {sampleProjects.map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
          <div className="portfolio-group" aria-hidden="true">
            {sampleProjects.map((project) => <ProjectCard key={`duplicate-${project.title}`} project={project} />)}
          </div>
        </div>
      </div>
      <div className="container portfolio-footnote">
        <span><i /> Sample concepts · Real client projects coming soon</span>
      </div>
    </section>
  )
}
