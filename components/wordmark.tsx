import Image from "next/image"
import Link from "next/link"

/** The supplied logo is 150×150 px, so it is displayed at 72px or smaller (see .wordmark img in globals.css). */
export function Wordmark({ priority = false }: { priority?: boolean }) {
  return (
    <Link className="wordmark" href="/" aria-label="Power Plus Heating Ltd, home">
      <span className="wordmark-frame">
      {/* unoptimized: serve the supplied file byte-for-byte; it is already tiny and must not be re-encoded */}
      <Image src="/images/power-plus-heating-logo.png" alt="Power Plus Heating Ltd" width={150} height={150} priority={priority} unoptimized />
      </span>
    </Link>
  )
}
