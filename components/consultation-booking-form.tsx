'use client'

import { useEffect, useState, type FormEvent } from 'react'
import { ArrowRight, CalendarDays, Clock3, Mail, MessageCircle } from 'lucide-react'
import { contactEmail, whatsappNumber } from '../lib/contact'

type BookingDate = { value: string; label: string }
type BookingDrafts = { whatsapp: string; email: string }

const consultationTopics = [
  'Business strategy and planning',
  'Website and digital presence',
  'Digital marketing and social media',
  'E-commerce setup',
  'B2B business setup',
  'Other',
]

const consultationSlots = Array.from({ length: 16 }, (_, index) => {
  const startMinutes = 10 * 60 + index * 30
  const endMinutes = startMinutes + 30
  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const minute = minutes % 60
    const period = hours >= 12 ? 'PM' : 'AM'
    const displayHour = hours % 12 || 12
    return `${displayHour}:${String(minute).padStart(2, '0')} ${period}`
  }

  return `${formatTime(startMinutes)} – ${formatTime(endMinutes)}`
})

function getUpcomingDates(): BookingDate[] {
  const indiaDateParts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(new Date())
  const datePart = (type: string) => indiaDateParts.find((part) => part.type === type)?.value ?? ''
  const today = new Date(`${datePart('year')}-${datePart('month')}-${datePart('day')}T00:00:00Z`)
  const dates: BookingDate[] = []

  for (let offset = 1; dates.length < 21; offset += 1) {
    const date = new Date(today)
    date.setUTCDate(today.getUTCDate() + offset)

    if (date.getUTCDay() === 0) continue

    dates.push({
      value: date.toISOString().slice(0, 10),
      label: new Intl.DateTimeFormat('en-IN', {
        timeZone: 'UTC',
        weekday: 'long',
        day: 'numeric',
        month: 'short',
      }).format(date),
    })
  }

  return dates
}

export function ConsultationBookingForm() {
  const [dates, setDates] = useState<BookingDate[]>([])
  const [drafts, setDrafts] = useState<BookingDrafts | null>(null)
  const [clientType, setClientType] = useState<'Business' | 'Individual'>('Business')

  useEffect(() => {
    setDates(getUpcomingDates())
  }, [])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const value = (name: string) => String(formData.get(name) ?? '').trim()
    const selectedDate = dates.find((date) => date.value === value('slotDate'))
    const message = [
      'Hi BizEngine, I would like to request a business consultation booking.',
      '',
      `Consultation for: ${value('clientType')}`,
      `Name: ${value('name')}`,
      `Phone: ${value('phone')}`,
      `Email: ${value('email')}`,
      `Business name: ${value('businessName') || 'Not applicable'}`,
      `Industry: ${value('industry') || 'Not provided'}`,
      `Website: ${value('website') || 'Not provided'}`,
      `Consultation topic: ${value('topic')}`,
      `Preferred slot: ${selectedDate?.label ?? value('slotDate')} at ${value('slotTime')} (India time, 30 minutes)`,
      `Goals or questions: ${value('goals')}`,
      '',
      'Please confirm whether this preferred slot is available.',
    ].join('\n')

    setDrafts({
      whatsapp: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      email: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactEmail)}&su=${encodeURIComponent('Business consultation booking request')}&body=${encodeURIComponent(message)}`,
    })
  }

  return (
    <div className="consultation-booking">
      {drafts ? (
        <div className="consultation-drafts" role="status" aria-live="polite">
          <div className="consultation-drafts-copy">
            <span className="consultation-booking-icon"><CalendarDays size={20} /></span>
            <div>
              <h3>Your booking request is ready</h3>
              <p>Choose WhatsApp or email to send your details. BizEngine will confirm the slot with you.</p>
            </div>
          </div>
          <div className="consultation-draft-actions">
            <a className="button button-primary" href={drafts.whatsapp} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={17} /> Send on WhatsApp
            </a>
            <a className="button button-ghost" href={drafts.email} target="_blank" rel="noopener noreferrer">
              <Mail size={17} /> Open Gmail draft
            </a>
            <button className="consultation-edit" type="button" onClick={() => setDrafts(null)}>Edit booking details</button>
          </div>
        </div>
      ) : (
        <form className="consultation-form" onSubmit={handleSubmit}>
          <div className="consultation-fields">
            <label>
              I&apos;m booking as
              <select
                name="clientType"
                value={clientType}
                onChange={(event) => {
                  const selectedType = event.currentTarget.value
                  if (selectedType === 'Business' || selectedType === 'Individual') setClientType(selectedType)
                }}
                required
              >
                <option value="Business">Business</option>
                <option value="Individual">Individual</option>
              </select>
            </label>
            <label>
              Full name
              <input autoComplete="name" name="name" placeholder="Your name" required />
            </label>
            <label>
              Phone number
              <input autoComplete="tel" name="phone" type="tel" inputMode="tel" placeholder="Your phone number" required />
            </label>
            <label>
              Email address
              <input autoComplete="email" name="email" type="email" placeholder="you@example.com" required />
            </label>
            {clientType === 'Business' && (
              <>
                <label className="consultation-business-field">
                  Business name
                  <input autoComplete="organization" name="businessName" placeholder="Your business name" required />
                </label>
                <label className="consultation-business-field">
                  Industry <span className="optional-label">Optional</span>
                  <input name="industry" placeholder="e.g. Retail, manufacturing" />
                </label>
                <label className="consultation-business-field consultation-full-width">
                  Business website <span className="optional-label">Optional</span>
                  <input autoComplete="url" name="website" type="url" placeholder="https://" />
                </label>
              </>
            )}
            <label className="consultation-full-width">
              What would you like help with?
              <select name="topic" defaultValue="" required>
                <option value="" disabled>Select a consultation topic</option>
                {consultationTopics.map((topic) => <option key={topic}>{topic}</option>)}
              </select>
            </label>
            <label>
              Preferred date <span className="consultation-field-note">India time</span>
              <select name="slotDate" defaultValue="" required>
                <option value="" disabled>{dates.length ? 'Select an available date' : 'Loading dates...'}</option>
                {dates.map((date) => <option value={date.value} key={date.value}>{date.label}</option>)}
              </select>
            </label>
            <label>
              Preferred time <span className="consultation-field-note"><Clock3 size={12} /> 30 minutes</span>
              <select name="slotTime" defaultValue="" required>
                <option value="" disabled>Select a time slot</option>
                {consultationSlots.map((slot) => <option key={slot}>{slot}</option>)}
              </select>
            </label>
            <label className="consultation-full-width">
              Goals or questions for the consultation
              <textarea name="goals" rows={4} placeholder="Share a little context so we can make the most of our time..." required />
            </label>
          </div>
          <p className="consultation-notice">Slots run Monday–Saturday, 10:00 AM–6:00 PM IST. This is a booking request, not a confirmed reservation; we&apos;ll check availability and confirm with you.</p>
          <button className="button button-primary consultation-submit" type="submit">
            Prepare booking request <ArrowRight size={17} />
          </button>
          <p className="consultation-draft-note">Your details will be added to a WhatsApp or Gmail draft for you to review and send.</p>
        </form>
      )}
    </div>
  )
}
