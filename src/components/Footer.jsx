import { CONTACT, FOOTER } from '../siteData'

const links = [
  { label: 'Instagram', href: CONTACT.instagramUrl },
  { label: 'WhatsApp', href: `https://wa.me/${CONTACT.whatsappNumber}` },
]

export default function Footer() {
  return (
    <footer className="bg-ground px-4 pb-6 pt-7 sm:px-24 sm:pb-[34px] sm:pt-14">
      {/* Desktop: 3 columnas 1.4/1/1 */}
      <div className="sm:grid sm:grid-cols-[1.4fr_1fr_1fr] sm:gap-[34px]">
        <div>
          <div className="text-h4 text-ink sm:text-h3">{FOOTER.brand}</div>
          <div className="mt-1.5 font-mono text-[11px] text-ink/50 sm:mt-2">{FOOTER.role}</div>
        </div>

        {/* Mobile: links en filas de 44px. Desktop: columna "Redes" */}
        <div className="mt-[22px] sm:mt-0">
          <div className="hidden font-medium text-kicker uppercase text-ink/45 sm:mb-2 sm:block">Redes</div>
          <nav className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 items-center text-[15px] font-medium text-ink transition-colors hover:text-accent-light sm:h-auto sm:py-1"
              >
                {link.label}
              </a>
            ))}
            <span className="flex h-11 items-center text-[15px] font-medium text-ink/55 sm:h-auto sm:py-1">
              Mail · pendiente
            </span>
          </nav>
        </div>

        <div className="mt-1 hidden sm:mt-0 sm:block">
          <div className="mb-2 font-medium text-kicker uppercase text-ink/45">Dónde</div>
          <p className="text-body text-ink/72">
            {FOOTER.where}
            <br />
            {FOOTER.whereDetail}
          </p>
        </div>
      </div>

      <div className="divider-fade my-[22px] sm:my-10" />

      {/* Mobile: línea legal completa. Desktop: solo copyright. */}
      <p className="text-[11.5px] leading-[1.6] text-ink/45 sm:hidden">{FOOTER.legalLine}</p>
      <p className="hidden text-xs text-ink/45 sm:block">{FOOTER.copyright}</p>
    </footer>
  )
}
