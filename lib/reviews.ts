export type Review = {
  /** Exact wording as published by the reviewer. */
  quote: string
  /** Name or initials exactly as shown at the source. */
  author: string
  /** Where it was published, e.g. "Google". */
  source: string
  /** Link to the original review, so it can be checked. */
  sourceUrl?: string
}

/**
 * PRODUCTION PLACEHOLDER. Intentionally empty: while it is empty the reviews
 * section renders nothing, so the public demo shows no testimonials.
 *
 * Only add reviews that are real and attributable (source link or screenshot
 * from the client). Do not add ratings or review counts unless they come from
 * the same verified source. Never emit review/AggregateRating schema from
 * unverified data.
 */
export const REVIEWS: readonly Review[] = []
