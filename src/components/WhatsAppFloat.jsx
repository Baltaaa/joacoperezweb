import { AnimatePresence, motion } from 'framer-motion'
import useScrolledPast from '../hooks/useScrolledPast'
import { whatsappHref } from '../siteData'

// El propio mockup lo prevé: "el CTA de WhatsApp queda fijo abajo en mobile
// al pasar el hero". Solo mobile — en desktop el botón ya vive en la nav.
export default function WhatsAppFloat() {
  const scrolledPastHero = useScrolledPast(520)

  return (
    <AnimatePresence>
      {scrolledPastHero && (
        <motion.a
          href={whatsappHref()}
          target="_blank"
          rel="noreferrer"
          aria-label="Escribir por WhatsApp"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-4 left-4 right-4 z-50 flex h-14 items-center justify-center gap-2 rounded-md border border-accent bg-ground/95 text-base font-medium text-accent-light shadow-lg backdrop-blur sm:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.004c5.46 0 9.9-4.44 9.9-9.9s-4.44-9.9-9.9-9.9Zm0 18.13h-.003a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.37c0-4.55 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.55-3.7 8.24-8.25 8.24Zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.42-.14-.01-.31-.01-.47-.01-.17 0-.44.06-.67.31-.23.25-.87.86-.87 2.09 0 1.23.9 2.42 1.02 2.58.12.17 1.76 2.7 4.27 3.78.6.26 1.06.41 1.43.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.2-.58.2-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
          </svg>
          Escribime por WhatsApp
        </motion.a>
      )}
    </AnimatePresence>
  )
}
