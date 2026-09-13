import { NAV_LINKS, whatsappHref } from '../siteData'

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-4 py-3.5 sm:px-12 sm:py-5">
      <span className="font-medium text-[13px] tracking-wide sm:text-sm">
        JOAQUÍN PÉREZ GOROSTIZU
      </span>

      {/* Nav completa: solo desktop */}
      <nav className="hidden items-center gap-7 sm:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-ink/72 transition-colors hover:text-ink"
          >
            {link.label}
          </a>
        ))}
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-accent px-[18px] py-[11px] text-sm font-medium text-accent-light transition-colors hover:bg-accent/10"
        >
          WhatsApp
        </a>
      </nav>

      {/* Mobile: ícono hamburguesa decorativo (el diseño no define un menú
          desplegable — todas las secciones son visibles en un solo scroll) */}
      <div
        className="flex flex-col gap-1 sm:hidden"
        aria-hidden="true"
      >
        <span className="h-px w-[18px] bg-ink/70" />
        <span className="h-px w-[18px] bg-ink/70" />
      </div>
    </header>
  )
}
