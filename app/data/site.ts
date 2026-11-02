const addressText =
  'Dining District, Patancheru Industrial Area, Hyderabad, Telangana 502319, India'

export const site = {
  name: "90's South Kitchen",
  shortDescription:
    "A South Indian restaurant serving vegetarian and non-vegetarian classics at Dining District, Patancheru, Hyderabad.",
  phoneDisplay: '086394 08555',
  phoneHref: 'tel:+918639408555',
  addressLines: [
    'Patancheru Industrial Area',
    'Hyderabad, Telangana 502319',
    'India',
  ],
  addressText,
  diningDistrictUrl: 'https://diningdistrict.in/',
  mapsLink: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressText)}`,
  mapsEmbed: `https://www.google.com/maps?q=${encodeURIComponent(addressText)}&output=embed`,
  images: {
    hero: '/images/hero-banana-leaf-meals.jpg',
    dining: '/images/interior-dining-hall.jpg',
    detail: '/images/interior-brass-and-clay.jpg',
  },
} as const

export interface NavItem {
  label: string
  to: string
}

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
]

export const quoteLink: NavItem = { label: 'Request a Quote', to: '/request-a-quote' }
