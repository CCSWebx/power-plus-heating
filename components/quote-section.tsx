"use client"

import { useEffect, useRef, useState, type FormEvent } from "react"
import Link from "next/link"
import { ArrowUpRight, Mail, Phone, MapPin, ArrowLeft } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { SITE, serviceOptions, type ServiceOption } from "@/lib/site"

type FieldName = "name" | "phone" | "email" | "service" | "description"
type Errors = Partial<Record<FieldName, string>>
type ContactMethod = "Phone" | "Email"
type Draft = { mailtoHref: string }

const FIELD_ORDER: FieldName[] = ["name", "phone", "email", "service", "description"]
const DESCRIPTION_MAX = 1000
/** Some mail clients and browsers truncate or reject very long mailto: URLs. */
const MAILTO_MAX_LENGTH = 1900
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_CHARS = /^[+0-9()\s.\-]+$/

const text = (data: FormData, key: string) => String(data.get(key) ?? "").trim()

function validate(v: Record<FieldName, string>, method: ContactMethod): Errors {
  const errors: Errors = {}
  if (!v.name) errors.name = "Enter your name."

  const digits = v.phone.replace(/\D/g, "")
  if (!v.phone) errors.phone = "Enter a phone number so we can call you back."
  else if (!PHONE_CHARS.test(v.phone) || digits.length < 7 || digits.length > 15) errors.phone = "Enter a valid phone number, for example 07123 456789."

  if (!v.email) {
    if (method === "Email") errors.email = "Enter your email address, or choose phone as your preferred contact method."
  } else if (!EMAIL_PATTERN.test(v.email)) errors.email = "Enter a valid email address, for example name@example.com."

  if (!v.service) errors.service = "Select the service you need."
  else if (!serviceOptions.includes(v.service as ServiceOption)) errors.service = "Select a service from the list."

  if (v.description.length < 10) errors.description = "Add a short description of the work (at least 10 characters)."
  else if (v.description.length > DESCRIPTION_MAX) errors.description = `Shorten your description to ${DESCRIPTION_MAX} characters or fewer.`
  return errors
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return <p id={id} className="field-error"><span className="sr-only">Error: </span>{message}</p>
}

export function QuoteSection() {
  const [draft, setDraft] = useState<Draft | null>(null)
  const [contactMethod, setContactMethod] = useState<ContactMethod>("Phone")
  const [errors, setErrors] = useState<Errors>({})
  const resultRef = useRef<HTMLDivElement>(null)

  // Deep links such as /?service=Blocked%20toilets#contact preselect the service.
  // Unknown values are ignored. The select is uncontrolled, so set it directly.
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("service")
    const match = serviceOptions.find(option => option === requested)
    const select = document.getElementById("service")
    if (match && select instanceof HTMLSelectElement) select.value = match
  }, [])

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const method: ContactMethod = text(data, "contactMethod") === "Email" ? "Email" : "Phone"
    const values: Record<FieldName, string> = {
      name: text(data, "name"),
      phone: text(data, "phone"),
      email: text(data, "email"),
      service: text(data, "service"),
      description: text(data, "description"),
    }

    const found = validate(values, method)
    if (Object.keys(found).length === 0) {
      const body = [
        "Quote enquiry",
        "",
        `Name: ${values.name}`,
        `Phone: ${values.phone}`,
        `Email: ${values.email || "Not provided"}`,
        `Service: ${values.service}`,
        `Preferred contact: ${method}`,
        "",
        values.description,
      ].join("\n")
      const mailtoHref = `mailto:${SITE.enquiryEmail}?subject=${encodeURIComponent(`Quote enquiry: ${values.service}`)}&body=${encodeURIComponent(body)}`
      if (mailtoHref.length > MAILTO_MAX_LENGTH) {
        found.description = "This is too long to open reliably in an email app. Please shorten your description."
      } else {
        setErrors({})
        setDraft({ mailtoHref })
        requestAnimationFrame(() => {
          resultRef.current?.focus({ preventScroll: true })
          resultRef.current?.scrollIntoView({ block: "start" })
        })
        return
      }
    }

    setErrors(found)
    const first = FIELD_ORDER.find(field => found[field])
    if (first) document.getElementById(first)?.focus()
  }

  function clearError(field: string) {
    setErrors(previous => {
      if (!(field in previous)) return previous
      const next = { ...previous }
      delete next[field as FieldName]
      return next
    })
  }

  const invalid = (field: FieldName) => (errors[field] ? true : undefined)
  const describedBy = (field: FieldName) => (errors[field] ? `${field}-error` : undefined)

  return <section className="quote-section" id="contact"><div className="container quote-grid">
    <div className="quote-copy">
      <p className="eyebrow">Contact</p>
      <h2>Tell us what you<br />need help with.</h2>
      <p>Choose a service and add a short description, or call Power Plus Heating directly.</p>
      <div className="quote-contact">
        <a className="quote-phone" href={SITE.phoneHref}><Phone aria-hidden="true" /><div><span>Call Power Plus Heating</span><strong>{SITE.phoneDisplay}</strong></div><ArrowUpRight aria-hidden="true" /></a>
        <a href={`mailto:${SITE.enquiryEmail}`}><Mail size={18} aria-hidden="true" />{SITE.enquiryEmail}</a>
        <span><MapPin size={18} aria-hidden="true" />{SITE.location}</span>
      </div>
    </div>
    <div className="quote-form-panel">
      <div ref={resultRef} tabIndex={-1} hidden={!draft} className="enquiry-result" role="status">
        {draft && <>
          <span className="eyebrow">Your enquiry draft</span>
          <h3>Email draft prepared — your enquiry has not been sent.</h3>
          <p>This demo only prepares an email draft. The button below opens your email app with the draft; review it there and send it yourself, or call the company directly.</p>
          <a className={buttonVariants({ size: "cta" })} href={draft.mailtoHref}><Mail data-icon="inline-start" aria-hidden="true" />Open in email app<ArrowUpRight data-icon="inline-end" aria-hidden="true" /></a>
          <Button variant="ghost" size="lg" onClick={() => { setDraft(null); requestAnimationFrame(() => document.getElementById("name")?.focus()) }}><ArrowLeft data-icon="inline-start" aria-hidden="true" />Back to your enquiry</Button>
          <small>No email app? Call <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>.</small>
        </>}
      </div>
      <form
        noValidate
        onSubmit={submit}
        hidden={!!draft}
        aria-label="Prepare an email enquiry"
        onChange={e => {
          const control = e.nativeEvent.target
          if (control instanceof HTMLInputElement || control instanceof HTMLSelectElement || control instanceof HTMLTextAreaElement) clearError(control.name)
        }}
        onKeyDown={e => { if (e.key === "Enter" && e.nativeEvent.isComposing) e.preventDefault() }}
      >
        <div className="demo-notice" role="note">Demo form — prepares an email draft; nothing is sent.</div>
        <div className="form-heading"><h3>A little about your enquiry</h3><span>Fields marked * are required</span></div>
        <FieldGroup className="quote-fields">
          <p className="form-group-label form-full" aria-hidden="true"><span>A</span>Your details</p>
          <Field data-invalid={invalid("name")}>
            <FieldLabel htmlFor="name">Name *</FieldLabel>
            <Input id="name" name="name" placeholder="Your full name" autoComplete="name" required aria-invalid={invalid("name")} aria-describedby={describedBy("name")} maxLength={100} />
            <FieldError id="name-error" message={errors.name} />
          </Field>
          <Field data-invalid={invalid("phone")}>
            <FieldLabel htmlFor="phone">Phone *</FieldLabel>
            <Input id="phone" name="phone" type="tel" placeholder="Your phone number" autoComplete="tel" required aria-invalid={invalid("phone")} aria-describedby={describedBy("phone")} maxLength={30} />
            <FieldError id="phone-error" message={errors.phone} />
          </Field>
          <Field data-invalid={invalid("email")}>
            <FieldLabel htmlFor="email">Email {contactMethod === "Email" ? "*" : <span className="optional">(optional)</span>}</FieldLabel>
            <Input id="email" name="email" type="email" placeholder="Your email address" autoComplete="email" required={contactMethod === "Email"} aria-invalid={invalid("email")} aria-describedby={describedBy("email")} maxLength={254} />
            <FieldError id="email-error" message={errors.email} />
          </Field>
          <p className="form-group-label form-full" aria-hidden="true"><span>B</span>The work</p>
          <Field data-invalid={invalid("service")}>
            <FieldLabel htmlFor="service">Service required *</FieldLabel>
            <NativeSelect id="service" name="service" defaultValue="" required aria-invalid={invalid("service")} aria-describedby={describedBy("service")} className="w-full">
              <NativeSelectOption value="" disabled>Select a service</NativeSelectOption>
              {serviceOptions.map(option => <NativeSelectOption value={option} key={option}>{option}</NativeSelectOption>)}
            </NativeSelect>
            <FieldError id="service-error" message={errors.service} />
          </Field>
          <Field className="form-full" data-invalid={invalid("description")}>
            <FieldLabel htmlFor="description">Brief description *</FieldLabel>
            <Textarea id="description" name="description" placeholder="A few details about the work you need help with…" required aria-invalid={invalid("description")} aria-describedby={describedBy("description")} maxLength={DESCRIPTION_MAX} rows={4} />
            <FieldError id="description-error" message={errors.description} />
          </Field>
          <Field className="form-full">
            <FieldLabel htmlFor="contactMethod">Preferred contact method</FieldLabel>
            <NativeSelect id="contactMethod" name="contactMethod" value={contactMethod} className="w-full" onChange={e => setContactMethod(e.target.value === "Email" ? "Email" : "Phone")}>
              <NativeSelectOption value="Phone">Phone</NativeSelectOption>
              <NativeSelectOption value="Email">Email (email address required)</NativeSelectOption>
            </NativeSelect>
          </Field>
          <Field className="form-full">
            <Button variant="warm" size="cta" type="submit">Prepare email enquiry<ArrowUpRight data-icon="inline-end" aria-hidden="true" /></Button>
            <p className="form-disclaimer">Nothing is sent or stored by this form. <Link href="/privacy">Privacy</Link></p>
          </Field>
        </FieldGroup>
      </form>
    </div>
  </div></section>
}
