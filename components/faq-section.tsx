import type { ReactNode } from "react"
import { SingleOpenAccordion } from "@/components/single-open-accordion"
import { SITE } from "@/lib/site"

const faqs: { question: string; answer: ReactNode }[] = [
  { question: "What plumbing services do you provide?", answer: <p>Blocked drains, sinks and toilets, dripping taps and bathroom plumbing.</p> },
  { question: "Do you service, repair and install boilers?", answer: <p>Yes. Boiler servicing, repairs, installation and replacement are all listed services. When you get in touch, tell us what the boiler is doing or what you need.</p> },
  { question: "What heating services do you provide?", answer: <p>Central heating, radiator repairs and power flushing, alongside boiler work.</p> },
  { question: "Do you work on gas appliances?", answer: <p>Gas cooker installation and repairs, and gas fires, are listed services.</p> },
  { question: "What areas do you cover?", answer: <p>Power Plus Heating Ltd is based in Birmingham, West Midlands. Contact the business to check availability in your area.</p> },
  { question: "How can I request a quote or contact Power Plus Heating?", answer: <p>Use the quote form on this page, call <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a> or email <a href={`mailto:${SITE.enquiryEmail}`}>{SITE.enquiryEmail}</a>. The form on this demo site only prepares an email draft; nothing is sent until you send it yourself.</p> },
]

export function FaqSection() {
  return <section className="section faq-section" id="faq" aria-labelledby="faq-title"><div className="container faq-grid">
    <div className="faq-intro"><p className="eyebrow"><span className="accent-line" />FAQ</p><h2 id="faq-title">Common questions.</h2><p>Short answers about the services Power Plus Heating lists.</p></div>
    <SingleOpenAccordion className="faq-list">
      {faqs.map(({ question, answer }, index) => <details className="faq-item" key={question} open={index === 0}>
        <summary><span className="faq-number">{String(index + 1).padStart(2, "0")}</span><span className="faq-question">{question}</span><span className="faq-toggle" aria-hidden="true" /></summary>
        <div className="faq-answer">{answer}</div>
      </details>)}
    </SingleOpenAccordion>
  </div></section>
}
