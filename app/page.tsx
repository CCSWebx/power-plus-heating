import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Hero, Services, BoilerFeature, PlumbingSection, AboutSection, BrandTransition, ProblemRoute } from "@/components/home-sections"
import { QuoteSection } from "@/components/quote-section"

export default function Page() {
  return <>
    <SiteHeader />
    <main id="main">
      <Hero />
      <Services />
      <BoilerFeature />
      <PlumbingSection />
      <ProblemRoute />
      <AboutSection />
      <BrandTransition />
      <QuoteSection />
    </main>
    <SiteFooter />
  </>
}
