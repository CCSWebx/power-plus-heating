/**
 * Single source of truth for business details, navigation and service options.
 * Only facts supplied for the demo live here; do not add unverified claims.
 */
export const SITE = {
  name: "Power Plus Heating Ltd",
  phoneDisplay: "07305 928834",
  phoneHref: "tel:07305928834",
  location: "Birmingham, West Midlands",
  /** Business enquiry address, as published by the business. Also the recipient of the demo email draft. */
  enquiryEmail: "powerplusheating0121@gmail.com",
} as const

export const navigation = [
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Areas We Cover", id: "areas" },
  { label: "Contact", id: "contact" },
] as const

export const serviceOptions = [
  "Boiler service",
  "Boiler repairs",
  "Boiler installation",
  "Boiler replacement",
  "Central heating",
  "Bathroom plumbing",
  "Blocked drains",
  "Blocked sinks",
  "Blocked toilets",
  "Dripping taps",
  "Radiator repairs",
  "Power flushing",
  "Gas cooker installation/repairs",
  "Gas fires",
  "Other",
] as const

export type ServiceOption = (typeof serviceOptions)[number]

/** Deep link that preselects a service in the contact form. */
export function serviceHref(service: ServiceOption) {
  return `/?service=${encodeURIComponent(service)}#contact`
}
