import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Kicker from './Kicker'
import sprintPhoto from '../assets/joaquin-sprint.webp'
import lsitPhoto from '../assets/joaquin-lsit.webp'
import { GALLERY } from '../siteData'
import { fadeUp, staggerContainer, viewportOnce } from '../motion'

const photos = [
  { src: sprintPhoto, alt: 'Joaquín haciendo un sprint en el campo', position: '50% 40%' },
  { src: lsitPhoto, alt: 'Joaquín en un ejercicio de fuerza en el gimnasio', position: '45% 50%' },
]

export default function Gallery() {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)

  // Detecta qué foto está centrada en el viewport del carrusel para
  // actualizar los puntos indicadores (el diseño pide "1 / 3 · swipe").
  const handleScroll = () => {
    const el = trackRef.current
    if (!el) return
    const index = Math.round(el.scrollLeft / (el.scrollWidth / photos.length))
    setActive(Math.min(index, photos.length - 1))
  }

  return (
    <section id="en-movimiento" className="overflow-hidden bg-ground py-10 sm:px-24 sm:py-[88px]">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div variants={fadeUp} className="px-4 sm:px-0">
          <Kicker className="mb-3">{GALLERY.kicker}</Kicker>
          <h2 className="mb-5 text-h2 text-ink sm:mb-7 sm:text-h1">
            {GALLERY.title[0]}
            <br className="sm:hidden" />
            <span className="sm:inline"> </span>
            {GALLERY.title[1]}
          </h2>
        </motion.div>

        {/* Mobile: carrusel scroll-snap, sangrado al borde derecho */}
        <motion.div variants={fadeUp} className="sm:hidden">
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="no-scrollbar flex gap-2 overflow-x-auto pl-4 pr-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {photos.map((photo) => (
              <div
                key={photo.src}
                className="aspect-[3/4] w-[214px] flex-none overflow-hidden rounded-lg shadow-sm"
                style={{ scrollSnapAlign: 'start' }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: photo.position }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="mt-3.5 flex items-center gap-1.5 px-4">
            {photos.map((_, i) => (
              <div
                key={i}
                className={`h-0.5 rounded-full transition-all ${i === active ? 'w-5 bg-accent' : 'w-2.5 bg-ink/22'}`}
              />
            ))}
            <span className="ml-2 font-mono text-[10px] text-ink/45">
              {active + 1} / {photos.length} · swipe
            </span>
          </div>
        </motion.div>

        {/* Desktop: mosaico 1.3fr / 1fr, altura fija */}
        <motion.div variants={fadeUp} className="hidden sm:grid sm:h-[420px] sm:grid-cols-[1.3fr_1fr] sm:gap-[11px]">
          {photos.map((photo) => (
            <div key={photo.src} className="overflow-hidden rounded-lg shadow-sm">
              <motion.img
                src={photo.src}
                alt={photo.alt}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="h-full w-full object-cover"
                style={{ objectPosition: photo.position }}
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
