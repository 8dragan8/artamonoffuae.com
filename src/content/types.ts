export interface ContentType {
  section1: Section
  section2: Section
  section3: Section
  section4: Section
  section5: Section
  thankYou: string[]
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

export interface Section {
  title: string
  subtitle: string
  description: string
  items: SectionItem[]
}
export interface Section1 {
  title: string
  subtitle: string
  items: Section1Item[]
}

export interface SectionItem {
  title?: string
  icon?: string
  keys?: string[]
}
export interface Section1Item {
  title: string
  icon: string
  keys: string[]
}

export interface Section2 {
  title: string
  items: Section2Item[]
}

export interface Section2Item {
  title: string
  keys: string[]
}

export interface Section3 {
  title: string
  subtitle: string
  description: string
  items: Section3Item[]
}

export interface Section3Item {
  icon: string
  keys: string[]
}

export interface Section4 {
  title: string
  subtitle: string
  items: Section4Item[]
}

export interface Section4Item {
  title: string
  subtitle?: string
  keys: string[]
}

export interface Section5 {
  title: string
  items: Section5Item[]
}

export interface Section5Item {
  keys: string[]
}
