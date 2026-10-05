import Image from "next/image"
import { ArrowDown, ArrowUpRight, Droplets, Flame, Gauge, MapPin, Phone, Thermometer, type LucideIcon } from "lucide-react"
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
  { number: "02", icon: Thermometer, label: "Central heating · Radiators · Power flushing", title: "Heating", id: "central-heating-card", details: "Central heating, radiator repairs and power flushing.", href: "#central-heating" },
  { number: "03", icon: Droplets, label: "Drains · Sinks · Toilets · Taps", title: "Plumbing", id: "plumbing-card", details: "Blocked drains, sinks, toilets, dripping taps and bathroom plumbing.", href: "#plumbing" },
  { number: "04", icon: Flame, label: "Cookers · Gas fires", title: "Gas appliances", id: "gas-appliances", details: "Gas cooker installation and repairs, plus gas fires.", href: serviceHref("Gas cooker installation/repairs") },
]

/** Each service gets its own three-step route; the labels (Start / Assess / Next step) stay constant. */
const stepLabels = ["Start", "Assess", "Next step"] as const

const serviceGroups: { number: string; title: string; covers: string; steps: [string, string, string] }[] = [
  { number: "01", title: "Boilers", covers: "Servicing, repairs, installation and replacement.", steps: ["Tell us what the boiler is doing.", "Describe the service or issue.", "Discuss the appropriate next step."] },
  { number: "02", title: "Heating", covers: "Central heating, radiators and power flushing.", steps: ["Tell us where the heating problem is.", "Identify whether it\u2019s central heating, radiators or power flushing.", "Discuss the appropriate next step."] },
  { number: "03", title: "Plumbing", covers: "Drains, sinks, toilets, taps and bathroom plumbing.", steps: ["Tell us what needs attention.", "Describe the blocked drain, sink, toilet, tap or bathroom issue.", "Discuss the appropriate repair or next step."] },
  { number: "04", title: "Gas appliances", covers: "Gas cookers and gas fires.", steps: ["Tell us about the appliance.", "Describe the issue or service required.", "Discuss the appropriate next step."] },
]

export function Services() {
  return <section className="section services-section" id="services"><div className="container">
    <div className="section-heading"><div><p className="eyebrow">Services <span className="service-route" aria-hidden="true" /></p><h2>Plumbing, heating, boilers &amp; gas services.</h2></div><p>Choose the area you need help with, then contact Power Plus Heating to discuss the work.</p></div>
    <div className="services-grid">
      <a className="featured-service" href="#boilers" id="boilers-card"><div className="featured-service-top"><span>01</span><Gauge size={22} strokeWidth={1.5} aria-hidden="true" /></div><div><p className="service-tag">Servicing · Repairs · Installation</p><h3>Boilers</h3><p className="featured-service-desc">Boiler servicing, repairs and installation or replacement.</p></div><span className="featured-service-link">Boiler services<ArrowUpRight size={22} aria-hidden="true" /></span></a>
      <div className="service-list">{services.map(({ number, icon: Icon, label, title, id, details, href }) => <a href={href} className="service-row" id={id} key={id}><span className="service-number">{number}</span><Icon className="service-icon" size={26} strokeWidth={1.5} aria-hidden="true" /><div><span className="service-tag">{label}</span><h3>{title}</h3><span className="service-details">{details}</span></div><ArrowUpRight className="service-arrow" size={23} aria-hidden="true" /></a>)}</div>
    </div>
    <section className="service-process" aria-labelledby="what-to-expect-title">
      <div className="service-process-heading">
        <div><p className="eyebrow">What happens next</p><h3 id="what-to-expect-title">A simple way to start.</h3></div>
        <p>Tell us what you need help with, and we&rsquo;ll discuss the appropriate next step.</p>
      </div>
      <SingleOpenAccordion className="service-process-grid">
        {serviceGroups.map(({ number, title, covers, steps }) => <details className="process-item" key={title}>
          <summary><span className="process-number">{number}</span><span className="process-title">{title}</span><span className="process-toggle" aria-hidden="true" /></summary>
          <p className="process-covers">{covers}</p>
          <ol>{steps.map((text, index) => <li key={stepLabels[index]}><span>{String(index + 1).padStart(2, "0")}</span><p><em className="step-label">{stepLabels[index]}</em>{text}</p></li>)}</ol>
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

export function ProblemRoute() {
  const branches = [{ number: "02", label: "Heating" }, { number: "03", label: "Plumbing" }, { number: "04", label: "Gas appliances" }]
  return <section className="signature-section" id="start" aria-labelledby="signature-title"><div className="container signature-grid">
    <div className="signature-copy"><p className="eyebrow"><span className="accent-line" />Start with the problem</p><h2 id="signature-title">Tell us what&rsquo;s going wrong.</h2><p>Boiler issue, heating problem, blocked drain or everyday plumbing repair &mdash; tell us what you need help with and we&rsquo;ll discuss the appropriate next step.</p></div>
    {/* Purely graphic: an abstract route through the service areas. It states no technical relationship, size or rating. */}
    <div className="pipe-route" aria-hidden="true">
      <div className="pipe-node pipe-start"><span className="pipe-label">Start</span><i className="pipe-leader" /><span className="pipe-index">00</span></div>
      <div className="pipe-node pipe-boiler"><span className="pipe-label">Boilers</span><i className="pipe-leader" /><span className="pipe-index">01</span></div>
      <ul className="pipe-branches">{branches.map(({ number, label }) => <li className="pipe-node pipe-branch" key={label}><span className="pipe-label">{label}</span><i className="pipe-leader" /><span className="pipe-index">{number}</span></li>)}</ul>
      <div className="pipe-node pipe-end"><span className="pipe-label">Request a quote</span><i className="pipe-leader" /><ArrowDown className="pipe-index" size={15} strokeWidth={1.5} /></div>
    </div>
    <div className="signature-cta"><a href="#contact" className={buttonVariants({ variant: "warm", size: "cta" })}>Request a Quote<ArrowUpRight data-icon="inline-end" /></a></div>
  </div></section>
}

export function AboutSection() {
  return <section className="about-section" id="about"><div className="container about-grid"><div><p className="eyebrow"><MapPin size={16} aria-hidden="true" />About Power Plus Heating Ltd</p><h2>Plumbing, heating, boilers and gas-related services.</h2></div><div className="about-copy"><p className="about-intro">Based in Birmingham, Power Plus Heating Ltd provides services across plumbing, heating, boilers and gas-related appliances.</p><p>Contact the business to check availability in your area.</p><a href={SITE.phoneHref} className="text-link"><Phone size={17} aria-hidden="true" />{SITE.phoneDisplay}</a></div></div></section>
}
