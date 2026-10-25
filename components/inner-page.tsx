'use client'

import { ArrowRight, Check } from 'lucide-react'
import { whatsappUrl } from '../lib/contact'
import { InquiryForm } from './inquiry-form'
import { SiteFooter } from './site-footer'
import { SiteHeader } from './site-header'

export function InnerPage({ eyebrow, title, accent, intro, items, showInquiry = false }: { eyebrow: string; title: string; accent: string; intro: string; items: { title: string; text: string }[]; showInquiry?: boolean }) {
  return <main className="inner-page">
    <SiteHeader />
    <section className="inner-hero"><div className="container"><div className="section-kicker">{eyebrow}</div><h1>{title} <em>{accent}</em></h1><p>{intro}</p><a className="button button-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Start a conversation <ArrowRight size={17} /></a></div></section>
    <section className="inner-content"><div className="container inner-grid">{items.map((item) => <article className="inner-card" key={item.title}><div className="icon-tile"><Check size={19} /></div><h2>{item.title}</h2><p>{item.text}</p></article>)}</div></section>
    {showInquiry && <InquiryForm />}
    <SiteFooter />
  </main>
}
