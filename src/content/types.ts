export interface ContentType {
  section1: Section
  section2: Section
  section3: Section
  section4: Section
  section5: Section
  thankYou: ThankYou
  faq: FAQ
  contact: Contact
}

export interface Contact {
  title: string
  subtitle: string
  description: string
  email: string
  phones: Phone[]
  address: string
  www: string
}

export interface Phone {
  title: string
  value: string
}

export interface FAQ {
  title: string
  description: string
  content: string
}
export interface ThankYou {
  title: string
  content: string[]
}

export interface Section {
  title: string
  subtitle: string
  description: string
  items: SectionItem[]
}

export interface SectionItem {
  title?: string
  icon?: string
  keys?: string[]
}
