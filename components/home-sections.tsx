import Image from "next/image"
import { ArrowUpRight, Droplets, Flame, Gauge, MapPin, Phone, Thermometer, type LucideIcon } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { SingleOpenAccordion } from "@/components/single-open-accordion"
import { SITE, serviceHref, type ServiceOption } from "@/lib/site"

export function Hero() {
  return <section className="hero" aria-labelledby="hero-title">
    <div className="container hero-grid">
      <div className="hero-copy">
        <p className="eyebrow"><span className="accent-line route-mark" />Power Plus Heating Ltd · Birmingham</p>
        <h1 id="hero-title">Plumbing &amp; heating in Birmingham</h1>
        <p className="hero-description">Boiler servicing, repairs and installation, central heating and everyday plumbing.</p>
        <div className="hero-actions">
          <a href="#contact" className={buttonVariants({ variant: "warm", size: "cta" })}>Request a Quote<ArrowUpRight data-icon="inline-end" /></a>
          <a href={SITE.phoneHref} className="hero-phone"><Phone size={17} aria-hidden="true" /><span>{SITE.phoneDisplay}</span></a>
        </div>
        <p className="hero-signature">Plumbing. Heating. Home.</p>
      </div>
      <figure className="hero-figure">
        <div className="hero-image"><Image src="/images/engineer-boiler.webp" alt="Illustrative image of an engineer checking a boiler in a domestic kitchen, not a Power Plus Heating employee or project" fill priority sizes="(max-width: 820px) 100vw, 54vw" /></div>
        <figcaption><span>Plumbing &amp; heating · Birmingham</span><span>Illustrative image · Design demo</span></figcaption>
      </figure>
    </div>
    <div className="container hero-baseline"><span>POWER PLUS HEATING LTD</span><span className="baseline-location"><MapPin size={15} aria-hidden="true" />Based in Birmingham</span></div>
  </section>
}

const services: { number: string; icon: LucideIcon; label: string; title: string; id: string; details: string; href: string }[] = [
  { number: "02", icon: Thermometer, label: "Heating", title: "Central Heating", id: "central-heating-card", details: "Central heating · Radiator repairs · Power flushing", href: "#central-heating" },
  { number: "03", icon: Droplets, label: "Plumbing", title: "Plumbing", id: "plumbing-card", details: "Bathroom plumbing · Blocked drains, sinks & toilets · Dripping taps", href: "#plumbing" },
  { number: "04", icon: Flame, label: "Gas", title: "Gas Appliances", id: "gas-appliances", details: "Gas cooker installation & repairs · Gas fires", href: serviceHref("Gas cooker installation/repairs") },
]

const serviceGroups: { number: string; icon: LucideIcon; title: string; covers: string }[] = [
  { number: "01", icon: Gauge, title: "Boilers", covers: "Servicing, repairs, installation and replacement." },
  { number: "02", icon: Thermometer, title: "Heating", covers: "Central heating, radiators and power flushing." },
  { number: "03", icon: Droplets, title: "Plumbing", covers: "Drains, sinks, toilets, taps and bathroom plumbing." },
  { number: "04", icon: Flame, title: "Gas appliances", covers: "Gas cookers and gas fires." },
]

const expectSteps = [
  { label: "Understand", title: "Understand the issue", text: "Tell us what is happening or what you need." },
  { label: "Assess", title: "Assess what is required", text: "The work depends on the issue, appliance or heating system." },
  { label: "Discuss", title: "Discuss the appropriate next step", text: "Talk through the sensible way forward." },
]

export function Services() {
  return <section className="section services-section" id="services"><div className="container">
    <div className="section-heading"><div><p className="eyebrow">Services <span className="service-route" aria-hidden="true" /></p><h2>Plumbing, heating, boilers &amp; gas services.</h2></div><p>Choose the area you need help with, then contact Power Plus Heating to discuss the work.</p></div>
    <div className="services-grid">
      <a className="featured-service" href="#boilers" id="boilers-card"><div className="featured-service-top"><span>01</span><Gauge size={22} strokeWidth={1.5} aria-hidden="true" /></div><div><p className="service-tag">Servicing · Repairs · Installation</p><h3>Boilers</h3><ul><li>Boiler servicing</li><li>Boiler repairs</li><li>Installation &amp; replacement</li></ul></div><span className="featured-service-link">Boiler services<ArrowUpRight size={22} aria-hidden="true" /></span></a>
      <div className="service-list">{services.map(({ number, icon: Icon, label, title, id, details, href }) => <a href={href} className="service-row" id={id} key={id}><span className="service-number">{number}</span><Icon className="service-icon" size={26} strokeWidth={1.5} aria-hidden="true" /><div><span className="service-tag">{label}</span><h3>{title}</h3><span className="service-details">{details}</span></div><ArrowUpRight className="service-arrow" size={23} aria-hidden="true" /></a>)}</div>
    </div>
    <section className="service-process" aria-labelledby="what-to-expect-title">
      <div className="service-process-heading">
        <div><p className="eyebrow">Service approach</p><h3 id="what-to-expect-title">What to expect</h3></div>
        <p>What happens when you get in touch. This is a general guide; the exact work depends on the issue, appliance or heating system.</p>
      </div>
      <SingleOpenAccordion className="service-process-grid">
        {serviceGroups.map(({ number, title, covers }) => <details className="process-item" key={title}>
          <summary><span className="process-number">{number}</span><span className="process-title">{title}</span><span className="process-toggle" aria-hidden="true" /></summary>
          <p className="process-covers">{covers}</p>
          <ol>{expectSteps.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><p><em className="step-label">{step.label}</em><strong>{step.title}</strong>{step.text}</p></li>)}</ol>
        </details>)}
      </SingleOpenAccordion>
    </section>
  </div></section>
}

export function BoilerFeature() {
  return <section className="section boiler-section" id="boilers"><div className="container boiler-grid">
    <figure className="boiler-figure"><div className="boiler-image"><span className="boiler-tick boiler-tick-tl" aria-hidden="true" /><span className="boiler-tick boiler-tick-br" aria-hidden="true" /><span className="boiler-dimension" aria-hidden="true"><i />Boilers · Heating<i /></span><Image src="/images/pipework.webp" alt="Illustrative image of domestic boiler pipework, not a Power Plus Heating project" fill sizes="(max-width: 820px) 100vw, 48vw" /></div><figcaption>Boiler &amp; heating work<span>Illustrative image · Design demo</span></figcaption></figure>
    <div className="boiler-copy"><p className="eyebrow">Boilers &amp; heating</p><h2>Boiler servicing, repairs &amp; installation</h2><p>Power Plus Heating provides boiler servicing, boiler repairs, installation and boiler replacement.</p><div id="central-heating" className="anchor-target"><h3>Central heating</h3><p>Central heating work includes radiator repairs and power flushing, alongside boiler and heating system work.</p></div><ul className="heating-list"><li><span>01</span><strong>Servicing</strong></li><li><span>02</span><strong>Repairs</strong></li><li><span>03</span><strong>Installation</strong></li><li><span>04</span><strong>Replacement</strong></li></ul><a className="text-link" href={serviceHref("Boiler service")}>Request a Quote<ArrowUpRight size={20} aria-hidden="true" /></a></div>
  </div></section>
}


export function BrandTransition() {
  return <section className="brand-transition" aria-hidden="true"><div className="container"><div className="transition-rule" aria-hidden="true"><span /></div><div className="transition-signature"><span className="transition-brand">POWER PLUS HEATING LTD</span><span className="transition-services">PLUMBING <i>·</i> HEATING <i>·</i> BOILERS <i>·</i> BIRMINGHAM</span></div><div className="transition-footer"><span>POWER PLUS HEATING LTD</span><span className="route-mark route-mark-large" aria-hidden="true" /></div></div></section>
}

export function PlumbingSection() {
  const problems: ServiceOption[] = ["Blocked drains", "Blocked sinks", "Blocked toilets", "Dripping taps", "Bathroom plumbing", "Radiator repairs"]
  return <section className="section plumbing-section" id="plumbing"><div className="container plumbing-grid"><div><p className="eyebrow">Plumbing</p><h2>Blocked drains, dripping taps &amp; plumbing repairs</h2><p>Everyday plumbing help for common household problems, including bathroom plumbing and blockages.</p></div><div className="problems-grid">{problems.map((title) => <a href={serviceHref(title)} className="problem-link" key={title}><span>{title}</span><ArrowUpRight size={20} aria-hidden="true" /></a>)}</div></div></section>
}

export function AboutSection() {
  return <section className="about-section" id="about"><div className="container about-grid"><div><p className="eyebrow"><MapPin size={16} aria-hidden="true" />About &amp; location</p><h2>About Power Plus Heating Ltd</h2></div><div className="about-copy"><p className="about-intro">Based in Birmingham.</p><p>Power Plus Heating Ltd provides plumbing, heating, boiler and gas-related services. Contact us to check availability in your area.</p><a href={SITE.phoneHref} className="text-link"><Phone size={17} aria-hidden="true" />{SITE.phoneDisplay}</a></div></div></section>
}
