'use client'

import type { FormEvent } from 'react'
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react'

const inquiryServices = [
  'Website Designing',
  'Digital Marketing',
  'Social Media Management',
  'E-commerce Solutions',
  'B2B Business Setup',
  'Business Consulting',
  'Other',
]

export function InquiryForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const message = [
      'Hi BizEngine, I would like to enquire.',
      `Name: ${formData.get('name')}`,
      `Phone: ${formData.get('phone')}`,
      `Email: ${formData.get('email') || 'Not provided'}`,
      `Service required: ${formData.get('service')}`,
      `Project details: ${formData.get('details')}`,
    ].join('\n')

    window.open(`https://wa.me/917895230520?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="section inquiry" id="contact">
      <div className="container">
        <div className="inquiry-heading">
          <div className="section-kicker">Your next step starts here</div>
          <h2>Tell us what you&apos;re <span>building.</span></h2>
          <p>Share a few details and we&apos;ll help you find the right solution for your business.</p>
        </div>
        <div className="inquiry-panel">
          <div className="inquiry-pitch">
            <span className="inquiry-label"><MessageCircle size={15} /> A better way to get started</span>
            <h3>One conversation.<br />A clearer way forward.</h3>
            <p>Choose what you need help with. We&apos;ll take it from there—no long forms or confusing steps.</p>
            <div className="inquiry-offerings">
              {inquiryServices.slice(0, 4).map((service) => (
                <div className="inquiry-offering" key={service}>
                  <CheckCircle2 size={18} />
                  <span>{service}</span>
                </div>
              ))}
            </div>
            <div className="inquiry-pitch-footer">
              <span className="inquiry-online-dot" />
              <span>Local support in Meerut, serving businesses everywhere.</span>
            </div>
          </div>
          <form className="inquiry-form" onSubmit={handleSubmit}>
            <div className="inquiry-form-heading">
              <span className="section-kicker">Project enquiry</span>
              <h3>Let&apos;s talk about your goals.</h3>
              <p>Fill this in and continue securely in WhatsApp.</p>
            </div>
            <div className="inquiry-fields">
              <label>
                Full name
                <input autoComplete="name" name="name" placeholder="Enter your name" required />
              </label>
              <label>
                Phone number
                <input autoComplete="tel" name="phone" type="tel" inputMode="tel" placeholder="Enter your phone number" required />
              </label>
              <label>
                Email address <span className="optional-label">Optional</span>
                <input autoComplete="email" name="email" type="email" placeholder="Enter your email" />
              </label>
              <label>
                Service required
                <select name="service" defaultValue="" required>
                  <option value="" disabled>Select a service</option>
                  {inquiryServices.map((service) => <option key={service}>{service}</option>)}
                </select>
              </label>
              <label className="inquiry-details">
                Project details
                <textarea name="details" placeholder="Tell us a little about your goals and requirements..." rows={4} required />
              </label>
            </div>
            <button className="button button-primary inquiry-submit" type="submit">
              Send enquiry on WhatsApp <ArrowRight size={17} />
            </button>
            <p className="inquiry-privacy">Your details are used only to respond to this enquiry.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
