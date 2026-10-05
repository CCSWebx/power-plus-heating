import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SITE } from "@/lib/site"

export const metadata: Metadata = {
  title: "Demo Privacy Notice | Power Plus Heating Ltd",
  alternates: { canonical: "/privacy" },
}

export default function PrivacyPage() {
  return <>
    <SiteHeader />
    <main className="privacy-page" id="main">
      <Link href="/">Back to the homepage</Link>
      <h1>Demo privacy notice</h1>
      <p>This is an independent commercial website design concept for Power Plus Heating Ltd, not a live company enquiry service. Photographs are illustrative, not company projects. No customer reviews or unverified accreditation are displayed.</p>
      <h2>Your enquiry details</h2>
      <p>The quote form prepares a draft in your browser. It does not submit your details to a server, save them to a database or use browser storage. Refreshing or leaving the page clears the form state. Please avoid including sensitive personal information.</p>
      <h2>Email and telephone links</h2>
      <p>Choosing “Open in email app” passes your enquiry to your own email application. Nothing is sent until you choose to send it there. Email and phone enquiries are handled outside this demo by your chosen provider and the recipient. Contact details shown on this demo: <a href={`mailto:${SITE.enquiryEmail}`}>{SITE.enquiryEmail}</a> or <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>.</p>
      <h2>Technical information</h2>
      <p>This demo does not add marketing cookies or an analytics tracker. The hosting platform may process technical request information, such as IP addresses and server logs, to deliver and secure the website.</p>
      <h2>Before a live launch</h2>
      <p>A company-approved privacy notice, confirmed enquiry handling and any required retention and cookie information must be supplied before this design is used as a live business website.</p>
    </main>
    <SiteFooter />
  </>
}
