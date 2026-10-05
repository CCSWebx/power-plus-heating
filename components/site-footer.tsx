import Link from "next/link"
import { Wordmark } from "@/components/wordmark"
import { SITE, navigation } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Wordmark />
            <p>Plumbing. Heating. Home.</p>
          </div>
          <div className="footer-contact">
            <span>{SITE.location}</span>
            <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
            <a href={`mailto:${SITE.enquiryEmail}`}>{SITE.enquiryEmail}</a>
          </div>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          {navigation.map(({ label, id }) => (
            <Link key={id} href={`/#${id}`}>{label}</Link>
          ))}
          <Link href="/privacy">Privacy</Link>
        </nav>
        <div className="footer-bottom">
          <p>{SITE.name}</p>
          <p>Independent design concept · Illustrative images, not company projects</p>
        </div>
      </div>
    </footer>
  )
}
