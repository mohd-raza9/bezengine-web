import {
  ArrowDownRight,
  ArrowRight,
  BarChart3,
  Compass,
  Lightbulb,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from 'lucide-react'
import { SiteFooter } from '../../components/site-footer'
import { SiteHeader } from '../../components/site-header'
import { whatsappUrl } from '../../lib/contact'

const principles = [
  {
    icon: Target,
    number: '01',
    title: 'Start with your goal',
    text: 'We begin by understanding what you want your business to achieve, who you want to reach, and what is getting in the way.',
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Keep the plan practical',
    text: 'Digital work should make sense to the people running the business. We explain the options clearly and focus on useful next steps.',
  },
  {
    icon: BarChart3,
    number: '03',
    title: 'Build for progress',
    text: 'A website, campaign, or online store is a starting point. The real aim is to create a stronger foundation for what comes next.',
  },
]

const values = [
  { icon: ShieldCheck, title: 'Honest guidance', text: 'Clear conversations about what is useful, what can wait, and what the next step involves.' },
  { icon: MessageCircle, title: 'Open communication', text: 'Straightforward updates and a collaborative approach from the first discussion onward.' },
  { icon: Sparkles, title: 'Thoughtful execution', text: 'Careful attention to the details that make a digital experience feel polished and easy to use.' },
  { icon: Users, title: 'People-first partnership', text: 'Solutions shaped around real business needs, not a one-size-fits-all checklist.' },
]

const capabilities = [
  'Business websites and landing pages',
  'Digital marketing and social media',
  'E-commerce setup and training',
  'B2B platform setup and support',
  'Business consultation and guidance',
  'Complete online business solutions',
]

const founders = ['Noman Khan', 'Mohammad Aman']
const team = [
  { name: 'Rza', role: 'Technical Head' },
  { name: 'Abu Bakr', role: 'Technical Head' },
  { name: 'Amir', role: 'Marketing Head' },
  { name: 'Sadia', role: 'Marketing Head' },
]

export default function AboutPage() {
  return (
    <main className="about-page">
      <SiteHeader />
      <section className="about-hero">
        <div className="container about-hero-grid">
          <div className="about-hero-copy">
            <span className="about-eyebrow"><i /> About BizEngine</span>
            <h1>Good business deserves a <em>stronger digital engine.</em></h1>
            <p>We help businesses make sense of their online next steps—from building a professional presence to setting up the tools that help them reach more customers.</p>
            <div className="about-hero-actions">
              <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Talk to our team <ArrowRight size={17} /></a>
              <a className="about-scroll-link" href="#our-approach">Discover our approach <ArrowDownRight size={17} /></a>
            </div>
          </div>
          <div className="about-hero-art" aria-label="BizEngine's approach to digital business growth">
            <div className="about-art-glow" />
            <div className="about-art-card">
              <div className="about-art-top"><span><Compass size={17} /> The BizEngine approach</span><i>01—03</i></div>
              <div className="about-art-line" />
              <div className="about-art-step"><b>01</b><div><strong>Understand</strong><small>Your business and goals</small></div><Target size={19} /></div>
              <div className="about-art-step"><b>02</b><div><strong>Build</strong><small>The right digital foundation</small></div><Lightbulb size={19} /></div>
              <div className="about-art-step"><b>03</b><div><strong>Grow</strong><small>With clear next steps</small></div><BarChart3 size={19} /></div>
              <div className="about-art-bottom"><span /> Strategy <span /> Execution <span /> Progress</div>
            </div>
            <div className="about-art-note"><span className="about-note-icon"><Sparkles size={17} /></span><span><strong>Built around you</strong><small>No one-size-fits-all plans</small></span></div>
          </div>
        </div>
      </section>

      <section className="about-intro">
        <div className="container about-intro-grid">
          <div>
            <span className="section-kicker">Who we are</span>
            <h2>A practical partner for your <span>online journey.</span></h2>
          </div>
          <div className="about-intro-copy">
            <p>Growing a business online can feel like a lot to take on at once. You may need a website, better visibility, an online store, or simply a clearer plan for where to start.</p>
            <p>BizEngine brings these needs together in one place. We listen first, explain your options in plain language, and help you move forward with solutions that fit your goals.</p>
            <p>Based in Meerut and working with businesses at different stages, we want digital growth to feel more approachable, more useful, and easier to act on.</p>
          </div>
        </div>
      </section>

      <section className="about-story" id="our-story">
        <div className="container about-story-grid">
          <div className="about-story-copy">
            <span className="section-kicker">Our story</span>
            <h2>Making digital growth feel <span>within reach.</span></h2>
            <p>BizEngine brings practical digital support together in one place. Founded by Noman Khan and Mohammad Aman, our goal is to help businesses find a clear path from their next idea to their next opportunity.</p>
            <p>Today, our technical and marketing team works together to make that journey simpler—with thoughtful solutions, open communication, and a focus on what helps each business move forward.</p>
          </div>
          <div className="about-people">
            <div className="about-people-group">
              <span className="about-people-label">Founders</span>
              <div className="about-founder-list">
                {founders.map((name, index) => (
                  <article className="about-person-card" key={name}>
                    <span className="about-person-monogram">{name.split(' ').map((part) => part[0]).join('')}</span>
                    <span><strong>{name}</strong><small>Founder</small></span>
                    <span className="about-person-number">0{index + 1}</span>
                  </article>
                ))}
              </div>
            </div>
            <div className="about-people-group">
              <span className="about-people-label">The team</span>
              <div className="about-team-grid">
                {team.map(({ name, role }) => (
                  <article className="about-team-card" key={name}>
                    <span className="about-person-monogram">{name[0]}</span>
                    <strong>{name}</strong>
                    <small>{role}</small>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-approach" id="our-approach">
        <div className="container">
          <div className="about-section-heading">
            <span className="section-kicker">How we think</span>
            <h2>Clarity first.<br /><span>Then meaningful progress.</span></h2>
            <p>Every engagement can look different. Our approach stays grounded in understanding your needs and making the next step clear.</p>
          </div>
          <div className="about-principles">
            {principles.map(({ icon: Icon, number, title, text }) => (
              <article className="about-principle" key={number}>
                <div className="about-principle-top"><span>{number}</span><Icon size={21} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <div className="about-values-heading">
            <div><span className="section-kicker">What you can expect</span><h2>Good work starts with <span>good principles.</span></h2></div>
            <p>Technology matters. So does the way we plan, communicate, and work together along the way.</p>
          </div>
          <div className="about-values-grid">
            {values.map(({ icon: Icon, title, text }) => (
              <article className="about-value-card" key={title}>
                <span><Icon size={20} /></span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-capabilities">
        <div className="container about-capabilities-grid">
          <div className="about-capabilities-copy">
            <span className="section-kicker">What we can help with</span>
            <h2>Connected solutions for <span>real business needs.</span></h2>
            <p>Whether you need one focused service or help connecting several pieces, we can talk through what makes sense for your business.</p>
            <a className="text-link" href="/services">Explore our services <ArrowRight size={16} /></a>
          </div>
          <div className="about-capability-list">
            {capabilities.map((capability, index) => (
              <div className="about-capability-item" key={capability}>
                <span>0{index + 1}</span><strong>{capability}</strong><ArrowRight size={17} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container about-cta-panel">
          <div className="about-cta-icon"><MessageCircle size={22} /></div>
          <div><span className="section-kicker">Let&apos;s get to know your goals</span><h2>Have a next step in mind?</h2><p>Tell us what you&apos;re working on. We&apos;ll help you explore a clear, practical way forward.</p></div>
          <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Start a conversation <ArrowRight size={17} /></a>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
