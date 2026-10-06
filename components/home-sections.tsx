import Image from "next/image"
import { ArrowUpRight, Droplets, Flame, Gauge, MapPin, Phone, Thermometer, type LucideIcon } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { SITE, serviceHref, type ServiceOption } from "@/lib/site"
import { AREAS, type Areas } from "@/lib/areas"

export function Hero() {
  return <section className="hero" aria-labelledby="hero-title">
    <div className="container hero-grid">
      <div className="hero-copy">
        <p className="eyebrow"><span className="accent-line route-mark" />Power Plus Heating Ltd · Birmingham</p>
        <h1 id="hero-title">Reliable Plumbing &amp; Heating Services in Birmingham</h1>
        <p className="hero-description">Boiler servicing, repairs and installation, central heating and everyday plumbing.</p>
        <div className="hero-actions">
          <a href="#contact" className={buttonVariants({ variant: "warm", size: "cta" })}>Request a Quote<ArrowUpRight data-icon="inline-end" /></a>
          <a href={SITE.phoneHref} className="hero-phone"><Phone size={17} aria-hidden="true" /><span>Call {SITE.phoneDisplay}</span></a>
        </div>
        <p className="hero-signature">Plumbing. Heating. Home.</p>
      </div>
      <figure className="hero-figure">
        <div className="hero-image"><Image src="/images/engineer-boiler.webp" alt="Illustrative image of an engineer checking a boiler in a domestic kitchen, not a Power Plus Heating employee or project" fill priority sizes="(max-width: 820px) 100vw, 54vw" /></div>
        <figcaption><span>Plumbing &amp; heating · Birmingham</span><span>Illustrative image · Design demo</span></figcaption>
      </figure>
    </div>
  </section>
}

/** Trust strip: factual information only (location and services). No ratings, counts or badges. */
export function TrustStrip() {
  const items = ["Birmingham-based", "Plumbing & heating", "Boilers", "Central heating", "Plumbing", "Gas appliances"]
  return <div className="container"><ul className="trust-strip" aria-label="Power Plus Heating at a glance">{items.map((item, index) => <li key={item}>{index === 0 && <MapPin size={14} aria-hidden="true" />}{item}</li>)}</ul></div>
}

const services: { number: string; icon: LucideIcon; label: string; title: string; id: string; details: string; href: string }[] = [
  { number: "02", icon: Thermometer, label: "Central heating · Radiators · Power flushing", title: "Heating", id: "central-heating-card", details: "Central heating, radiator repairs and power flushing.", href: "#central-heating" },
  { number: "03", icon: Droplets, label: "Drains · Sinks · Toilets · Taps", title: "Plumbing", id: "plumbing-card", details: "Blocked drains, sinks, toilets, dripping taps and bathroom plumbing.", href: "#plumbing" },
  { number: "04", icon: Flame, label: "Cookers · Gas fires", title: "Gas appliances", id: "gas-appliances", details: "Gas cooker installation and repairs, plus gas fires.", href: serviceHref("Gas cooker installation/repairs") },
]

export function Services() {
  return <section className="section services-section" id="services"><div className="container">
    <div className="section-heading"><div><p className="eyebrow">Services <span className="service-route" aria-hidden="true" /></p><h2>Plumbing, heating, boilers &amp; gas services.</h2></div><p>Choose the area you need help with, then contact Power Plus Heating to discuss the work.</p></div>
    <div className="services-grid">
      <a className="featured-service" href="#boilers" id="boilers-card"><div className="featured-service-top"><span>01</span><Gauge size={22} strokeWidth={1.5} aria-hidden="true" /></div><div><p className="service-tag">Servicing · Repairs · Installation</p><h3>Boilers</h3><p className="featured-service-desc">Boiler servicing, repairs and installation or replacement.</p></div><span className="featured-service-link">Boiler services<ArrowUpRight size={22} aria-hidden="true" /></span></a>
      <div className="service-list">{services.map(({ number, icon: Icon, label, title, id, details, href }) => <a href={href} className="service-row" id={id} key={id}><span className="service-number">{number}</span><Icon className="service-icon" size={26} strokeWidth={1.5} aria-hidden="true" /><div><span className="service-tag">{label}</span><h3>{title}</h3><span className="service-details">{details}</span></div><ArrowUpRight className="service-arrow" size={23} aria-hidden="true" /></a>)}</div>
    </div>
  </div></section>
}

export function BoilerFeature() {
  return <section className="section boiler-section" id="boilers"><div className="container boiler-grid">
    <figure className="boiler-figure"><div className="boiler-image"><span className="boiler-tick boiler-tick-tl" aria-hidden="true" /><span className="boiler-tick boiler-tick-br" aria-hidden="true" /><span className="boiler-dimension" aria-hidden="true"><i />Boilers · Heating<i /></span><Image src="/images/pipework.webp" alt="Illustrative image of domestic boiler pipework, not a Power Plus Heating project" fill sizes="(max-width: 820px) 100vw, 48vw" /></div><figcaption>Boiler &amp; heating work<span>Illustrative image · Design demo</span></figcaption></figure>
    <div className="boiler-copy"><p className="eyebrow">Boilers &amp; heating</p><h2>Boiler servicing, repairs &amp; installation</h2><p>Power Plus Heating provides boiler servicing, boiler repairs, installation and boiler replacement.</p><div id="central-heating" className="anchor-target"><h3>Central heating</h3><p>Central heating work includes radiator repairs and power flushing, alongside boiler and heating system work.</p></div><ul className="heating-list"><li><span>01</span><strong>Servicing</strong></li><li><span>02</span><strong>Repairs</strong></li><li><span>03</span><strong>Installation</strong></li><li><span>04</span><strong>Replacement</strong></li></ul><div className="boiler-actions"><a className={buttonVariants({ variant: "warm", size: "cta" })} href={serviceHref("Boiler service")}>Request a Quote<ArrowUpRight data-icon="inline-end" aria-hidden="true" /></a><a className="text-link text-link-quiet" href={SITE.phoneHref}><Phone size={17} aria-hidden="true" />Call {SITE.phoneDisplay}</a></div></div>
  </div></section>
}


export function PlumbingSection() {
  const problems: ServiceOption[] = ["Blocked drains", "Blocked sinks", "Blocked toilets", "Dripping taps", "Bathroom plumbing", "Radiator repairs"]
  return <section className="section plumbing-section" id="plumbing"><div className="container plumbing-grid"><div><p className="eyebrow">Plumbing</p><h2>Blocked drains, dripping taps &amp; plumbing repairs</h2><p>Everyday plumbing help for common household problems, including bathroom plumbing and blockages.</p></div><div className="problems-grid">{problems.map((title) => <a href={serviceHref(title)} className="problem-link" key={title}><span>{title}</span><ArrowUpRight size={20} aria-hidden="true" /></a>)}</div></div></section>
}

const reasons = [
  { title: "Four service areas, one business", text: "Boilers, central heating, plumbing and gas appliances, so one contact covers the work listed here." },
  { title: "The actual jobs, named", text: "Boiler servicing, radiator repairs, power flushing, blocked drains, gas cookers: the work is spelled out, not buried." },
  { title: "A straightforward way to start", text: "Call, email or use the quote form, describe the job, then discuss the appropriate next step." },
  { title: "Birmingham-based", text: "Power Plus Heating Ltd is based in Birmingham. Contact the business to check availability in your area." },
]
/** About + "Why Power Plus Heating?" in one band, so the page does not repeat itself. */
export function AboutSection() {
  return <section className="about-section" id="about" aria-labelledby="about-title"><div className="container">
    <div className="about-grid"><div><p className="eyebrow"><MapPin size={16} aria-hidden="true" />About Power Plus Heating Ltd</p><h2 id="about-title">Why Power Plus Heating?</h2></div><div className="about-copy"><p className="about-intro">Based in Birmingham, Power Plus Heating Ltd provides services across plumbing, heating, boilers and gas-related appliances.</p><a href={SITE.phoneHref} className="text-link"><Phone size={17} aria-hidden="true" />{SITE.phoneDisplay}</a></div></div>
    <ol className="why-list">{reasons.map(({ title, text }, index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
  </div></section>
}

const steps = [
  { number: "01", title: "Tell us what you need", text: "Call, email or use the quote form to describe the job." },
  { number: "02", title: "We assess the job", text: "We look at what you have described and what the work involves." },
  { number: "03", title: "Agree the next step", text: "Discuss the work and agree how to go ahead." },
  { number: "04", title: "Get it sorted", text: "Go ahead with the work you have agreed." },
]

/** One process for every service: the same four steps, shown once. */
export function HowItWorks() {
  return <section className="section how-section" id="how-it-works" aria-labelledby="how-title"><div className="container">
    <div className="section-heading"><div><p className="eyebrow"><span className="accent-line" />How it works</p><h2 id="how-title">A simple way to get started.</h2></div><p>Here is what happens when you get in touch: tell us what you need help with, and we&rsquo;ll discuss the appropriate next step.</p></div>
    <ol className="steps-list">{steps.map(({ number, title, text }) => <li key={number}><span className="step-number">{number}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
  </div></section>
}

/**
 * Areas: a compact coverage block. Only Birmingham (the verified base) is claimed.
 * Add confirmed towns to `locations` in lib/areas.ts, or pass `areas` from a
 * future location page, and they appear as a list without a redesign.
 */
export function AreasSection({ areas = AREAS }: { areas?: Areas }) {
  return <section className="areas-section" id="areas" aria-labelledby="areas-title"><div className="container areas-panel">
    <div className="areas-copy"><p className="eyebrow"><MapPin size={16} aria-hidden="true" />Areas we cover</p><h2 id="areas-title">{areas.base} &amp; {areas.region}</h2><p>Based in {areas.base}, {areas.region}.</p><p className="areas-note">Contact Power Plus Heating to check availability for your location.</p></div>
    <div className="areas-actions"><a href="#contact" className={buttonVariants({ variant: "warm", size: "cta" })}>Request a Quote<ArrowUpRight data-icon="inline-end" aria-hidden="true" /></a><a href={SITE.phoneHref} className="call-button"><Phone size={17} aria-hidden="true" />Call {SITE.phoneDisplay}</a></div>
    {areas.locations.length > 0 && <ul className="areas-locations" aria-label="Confirmed areas">{areas.locations.map(name => <li key={name}>{name}</li>)}</ul>}
  </div></section>
}

const ctaServices = [
  { number: "01", label: "Boilers", href: "#boilers" },
  { number: "02", label: "Heating", href: "#central-heating" },
  { number: "03", label: "Plumbing", href: "#plumbing" },
  { number: "04", label: "Gas appliances", href: serviceHref("Gas cooker installation/repairs") },
]

/** Closing conversion block: quote and phone on the left, a plain service list on the right. */
export function FinalCta() {
  return <section className="final-cta" aria-labelledby="final-cta-title"><div className="container final-cta-grid">
    <div className="final-cta-copy"><p className="eyebrow"><span className="accent-line" />Get started</p><h2 id="final-cta-title">Need a plumber or heating specialist in Birmingham?</h2><p>Tell us what you need help with and request a quote.</p>
      <div className="final-cta-actions"><a href="#contact" className={buttonVariants({ variant: "warm", size: "cta" })}>Request a Quote<ArrowUpRight data-icon="inline-end" aria-hidden="true" /></a><a href={SITE.phoneHref} className="final-cta-call"><Phone size={17} aria-hidden="true" />Call {SITE.phoneDisplay}</a></div></div>
    <ul className="cta-services" aria-label="Services">{ctaServices.map(({ number, label, href }) => <li key={label}><a href={href}><span>{number}</span><strong>{label}</strong><ArrowUpRight size={20} aria-hidden="true" /></a></li>)}</ul>
  </div></section>
}
