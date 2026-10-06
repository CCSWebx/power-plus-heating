import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Hero, TrustStrip, Services, AboutSection, BoilerFeature, PlumbingSection, HowItWorks, AreasSection, FinalCta } from "@/components/home-sections"
import { ReviewsSection } from "@/components/reviews-section"
import { FaqSection } from "@/components/faq-section"
import { QuoteSection } from "@/components/quote-section"
import { SITE } from "@/lib/site"
import { AREAS } from "@/lib/areas"

/** LocalBusiness data: only facts already published in lib/site.ts. No ratings, reviews, hours or service areas. */
const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  telephone: "+44 7305 928834",
  email: SITE.enquiryEmail,
  address: { "@type": "PostalAddress", addressLocality: AREAS.base, addressRegion: AREAS.region, addressCountry: "GB" },
}

export default function Page() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c") }} />
    <SiteHeader />
    <main id="main">
      <Hero />
      <TrustStrip />
      <Services />
      <AboutSection />
      <BoilerFeature />
      <PlumbingSection />
      <HowItWorks />
      <ReviewsSection />
      <AreasSection />
      <FaqSection />
      <FinalCta />
      <QuoteSection />
    </main>
    <SiteFooter />
  </>
}
