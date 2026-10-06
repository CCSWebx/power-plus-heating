import { REVIEWS, type Review } from "@/lib/reviews"

/** Compact editorial reviews. Renders nothing until real, attributable reviews are added in lib/reviews.ts. */
export function ReviewsSection({ reviews = REVIEWS }: { reviews?: readonly Review[] }) {
  if (reviews.length === 0) return null
  return <section className="section reviews-section" id="reviews" aria-labelledby="reviews-title"><div className="container">
    <div className="section-heading"><div><p className="eyebrow"><span className="accent-line" />Reviews</p><h2 id="reviews-title">What customers say.</h2></div></div>
    <div className="reviews-list">{reviews.map(({ quote, author, source, sourceUrl }) => <figure key={`${author}-${quote.slice(0, 24)}`}>
      <blockquote><p>{quote}</p></blockquote>
      <figcaption><cite>{author}</cite><span>{sourceUrl ? <a href={sourceUrl} rel="noopener noreferrer">{source}</a> : source}</span></figcaption>
    </figure>)}</div>
  </div></section>
}
