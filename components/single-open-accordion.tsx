"use client"

import { useEffect, useRef, type ReactNode } from "react"

/**
 * Keeps the native <details>/<summary> semantics and markup untouched.
 * On narrow screens (same 820px breakpoint as globals.css) only one item can be
 * open at a time; on wider screens the existing multi-open behaviour is kept.
 */
export function SingleOpenAccordion({ className, children }: { className?: string; children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const narrow = window.matchMedia("(max-width: 820px)")

    // `toggle` does not bubble, so listen in the capture phase.
    const onToggle = (event: Event) => {
      const target = event.target
      if (!narrow.matches || !(target instanceof HTMLDetailsElement) || !target.open) return
      root.querySelectorAll<HTMLDetailsElement>("details[open]").forEach(item => {
        if (item !== target) item.open = false
      })
    }
    // Resizing from desktop to mobile with several items open: keep only the first.
    const onBreakpoint = () => {
      if (!narrow.matches) return
      root.querySelectorAll<HTMLDetailsElement>("details[open]").forEach((item, index) => {
        if (index > 0) item.open = false
      })
    }

    root.addEventListener("toggle", onToggle, true)
    narrow.addEventListener("change", onBreakpoint)
    return () => {
      root.removeEventListener("toggle", onToggle, true)
      narrow.removeEventListener("change", onBreakpoint)
    }
  }, [])

  return <div ref={rootRef} className={className}>{children}</div>
}
