import { SITE } from "@/lib/site"

export type Areas = {
  /** Where the business is based. */
  base: string
  /** Wider region, taken from SITE.location. */
  region: string
  /**
   * Towns or districts the business CONFIRMS it covers. Leave empty until the
   * client supplies them: never guess or copy from a competitor.
   */
  locations: readonly string[]
}

const [base, region] = SITE.location.split(",").map(part => part.trim())

export const AREAS: Areas = { base, region, locations: [] }
