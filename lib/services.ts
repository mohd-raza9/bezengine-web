export const services = {
  'business-consultation': {
    slug: 'business-consultation',
    title: 'Business Consultation',
    shortDescription: 'Get practical guidance and a clear plan for your next business move.',
    overview: 'Bring your business questions to a focused one-to-one consultation. We will understand your goals, discuss the challenges in front of you, and help you identify practical next steps across your digital presence and growth plans.',
    highlights: [
      'Review your goals, audience, and current business priorities.',
      'Discuss digital presence, marketing, e-commerce, or B2B opportunities.',
      'Leave with clear recommendations and actionable next steps.',
    ],
    bestFor: 'Individuals, founders, and business teams looking for direction before investing time or budget in their next step.',
  },
  'complete-business-solutions': {
    slug: 'complete-business-solutions',
    title: 'Complete Business Solutions',
    shortDescription: 'Bring your online presence, marketing, and business setup together.',
    overview: 'Coordinate the digital essentials your business needs with one practical partner. We help you understand which pieces matter now, connect the right services, and keep the work aligned with your goals.',
    highlights: [
      'Map the digital services that fit your business stage and goals.',
      'Coordinate website, marketing, e-commerce, and B2B support.',
      'Prioritise a clear, manageable plan rather than disconnected tasks.',
    ],
    bestFor: 'New and growing businesses that want joined-up help across several online business needs.',
  },
  'b2b-business-setup': {
    slug: 'b2b-business-setup',
    title: 'B2B Business Setup',
    shortDescription: 'Set up and manage your presence on B2B platforms such as IndiaMART.',
    overview: 'Make it easier for business buyers to discover and enquire about your products or services. We can guide your B2B platform setup and help organise your business profile and catalogue information.',
    highlights: [
      'Plan the business information and product details for your profile.',
      'Get guidance with account setup on suitable B2B platforms.',
      'Improve how your catalogue and business offering are presented.',
    ],
    bestFor: 'Manufacturers, wholesalers, suppliers, and service providers who want to reach more business buyers online.',
  },
  'ecommerce-setup': {
    slug: 'ecommerce-setup',
    title: 'E-commerce Setup',
    shortDescription: 'Get help setting up your online store and marketplace presence.',
    overview: 'Start selling online with a store or marketplace setup shaped around your products and how you want to operate. We help you plan the essentials and understand the tools involved in managing your online sales.',
    highlights: [
      'Review store and marketplace options for your products.',
      'Organise product, catalogue, and storefront information.',
      'Get practical guidance for managing your online store.',
    ],
    bestFor: 'Businesses and creators preparing to sell products through an online store or marketplace.',
  },
  'digital-marketing': {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    shortDescription: 'Reach the right people with focused digital marketing support.',
    overview: 'Build a marketing approach around your audience, goals, and available resources. We help you make sense of the digital channels and plan activity that supports awareness and enquiries.',
    highlights: [
      'Clarify your audience, message, and marketing objectives.',
      'Explore suitable digital channels and campaign priorities.',
      'Create a practical plan for improving online visibility.',
    ],
    bestFor: 'Businesses that want a clearer online marketing direction and a more consistent way to reach customers.',
  },
  'social-media-management': {
    slug: 'social-media-management',
    title: 'Social Media Management',
    shortDescription: 'Build a consistent, professional presence across social platforms.',
    overview: 'Show up consistently where your customers spend time. We help your business plan a social presence that reflects your brand, communicates what you offer, and gives people a clear way to get in touch.',
    highlights: [
      'Align your social profiles with your business and brand.',
      'Plan useful, consistent content themes for your audience.',
      'Keep your online presence organised across social channels.',
    ],
    bestFor: 'Teams looking for a more consistent and considered approach to their social media presence.',
  },
  'website-development': {
    slug: 'website-development',
    title: 'Website Development',
    shortDescription: 'Create a responsive business website that builds trust and invites enquiries.',
    overview: 'Give customers a clear place to learn about your business and take the next step. We shape responsive websites around your content, audience, and business goals.',
    highlights: [
      'Plan the pages and information your customers need.',
      'Create a responsive website experience for mobile and desktop.',
      'Make key services and contact options easy to find.',
    ],
    bestFor: 'Businesses that need a new website or want to improve how their existing online presence works.',
  },
  'gst-services': {
    slug: 'gst-services',
    title: 'GST Services',
    shortDescription: 'Get guidance with GST registration and related service requirements.',
    overview: 'Understand the information and next steps involved in GST registration and related services. We help you get started and discuss what may be needed for your situation.',
    highlights: [
      'Discuss your registration needs and basic requirements.',
      'Understand the information and documents to prepare.',
      'Get guidance on practical next steps for your request.',
    ],
    bestFor: 'Individuals and businesses who want help understanding GST registration and related service requirements.',
  },
} as const

export type Service = (typeof services)[keyof typeof services]
export type ServiceSlug = keyof typeof services

export const serviceList = Object.values(services)
