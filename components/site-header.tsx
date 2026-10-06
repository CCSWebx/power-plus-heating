"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Menu, Phone, X, ArrowUpRight } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { Wordmark } from "@/components/wordmark"
import { SITE, navigation } from "@/lib/site"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const menuTriggerRef = useRef<HTMLButtonElement>(null)

  // The mobile menu is hidden by CSS above 1000px; keep state in sync so
  // aria-expanded never reports an open menu that is not visible.
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1001px)")
    const sync = () => { if (desktop.matches) setOpen(false) }
    desktop.addEventListener("change", sync)
    return () => desktop.removeEventListener("change", sync)
  }, [])

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="utility-bar">
      <div className="container">
        <span><span className="map-dot" aria-hidden="true" />Based in Birmingham.</span>
        <a href={`mailto:${SITE.enquiryEmail}`}>{SITE.enquiryEmail} <ArrowUpRight size={12} aria-hidden="true" /></a>
      </div>
    </div>
    <header
      className="site-header"
      onKeyDown={e => {
        if (e.key === "Escape" && open) { setOpen(false); menuTriggerRef.current?.focus() }
      }}
    >
      <div className="container header-inner">
        <Wordmark priority />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(({ label, id }) => <Link key={id} href={`/#${id}`}>{label}</Link>)}
        </nav>
        <div className="header-actions">
          <a className="header-phone" href={SITE.phoneHref}><Phone size={16} aria-hidden="true" /><span>Call {SITE.phoneDisplay}</span></a>
          <Link className={buttonVariants({ variant: "warm", size: "lg" })} href="/#contact">Request a Quote <ArrowUpRight data-icon="inline-end" aria-hidden="true" /></Link>
        </div>
        <div className="mobile-header-actions">
          <a href={SITE.phoneHref} aria-label={`Call ${SITE.phoneDisplay}`}><Phone size={20} aria-hidden="true" /></a>
          <Button
            ref={menuTriggerRef}
            variant="ghost"
            size="icon-lg"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(o => !o)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </div>
      {open && (
        <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation">
          {navigation.map(({ label, id }) => (
            <Link href={`/#${id}`} key={id} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={16} aria-hidden="true" /></Link>
          ))}
          <a href={SITE.phoneHref}>Call {SITE.phoneDisplay} <Phone size={16} aria-hidden="true" /></a>
        </nav>
      )}
    </header>
    <div className="mobile-contact-bar">
      <a href={SITE.phoneHref} className={buttonVariants({ variant: "outline", size: "lg" })}><Phone data-icon="inline-start" aria-hidden="true" />Call</a>
      <Link href="/#contact" className={buttonVariants({ variant: "warm", size: "lg" })}>Request a Quote<ArrowUpRight data-icon="inline-end" aria-hidden="true" /></Link>
    </div>
  </>
}
