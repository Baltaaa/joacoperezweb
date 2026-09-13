import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from './Navbar'
import Button from './Button'
import gymPhoto from '../assets/joaquin-gym.webp'
import { HERO, whatsappHref } from '../siteData'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  const sectionRef = useRef(null)

  // Parallax sutil: la foto se mueve más lento que el scroll, la sección se
  // mueve a la velocidad real. Solo `transform` (vía y), así que corre en
  // el compositor — no repinta ni recalcula layout en cada frame.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  // En px, hacia arriba: la imagen mide 124% del alto del contenedor (24%
  // de sobrante abajo) para revelar ese sobrante al scrollear sin dejar
  // nunca una franja vacía arriba, contra el navbar.
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -40])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-ground">
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* ===== Mobile: foto full-bleed con texto superpuesto (scrim) ===== */}
      <div className="relative h-[400px] overflow-hidden sm:hidden">
        <motion.img
          src={gymPhoto}
          alt="Joaquín Pérez Gorostizu entrenando en el gimnasio"
          className="img-lighten h-[124%] w-full object-cover object-[50%_18%]"
          loading="eager"
          fetchpriority="high"
          style={{ y: parallaxY }}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: 'linear-gradient(180deg, rgba(22,24,38,.1) 34%, #161826 100%)' }}
        />
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="absolute inset-x-4 bottom-4"
        >
          <motion.div variants={item} className="mb-2.5 font-medium text-kicker uppercase text-accent-light">
            {HERO.kicker}
          </motion.div>
          <motion.h1 variants={item} className="text-h2 text-ink">
            {HERO.title[0]}
            <br />
            {HERO.title[1]}
          </motion.h1>
          <motion.p variants={item} className="mt-2.5 text-body text-ink/72">
            {HERO.body}
          </motion.p>
        </motion.div>
      </div>
      <div className="flex flex-col gap-2 px-4 py-4 sm:hidden">
        <Button href={whatsappHref()} target="_blank" rel="noreferrer">
          {HERO.ctaPrimary}
        </Button>
        <motion.a
          href="#servicios"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-12 items-center justify-center text-[15px] font-medium text-ink/72"
        >
          {HERO.ctaSecondaryMobile}
        </motion.a>
      </div>

      {/* ===== Desktop: grid a dos columnas, foto sin scrim ni texto ===== */}
      <div className="hidden sm:grid sm:grid-cols-[1.05fr_1fr] sm:items-center sm:gap-14 sm:px-24 sm:py-16">
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div variants={item} className="mb-4 font-medium text-kicker uppercase text-accent">
            {HERO.kicker}
          </motion.div>
          <motion.h1 variants={item} className="text-h1 text-ink">
            {HERO.title[0]}
            <br />
            {HERO.title[1]}
          </motion.h1>
          <motion.p variants={item} className="mt-4 max-w-[420px] text-body text-ink/72">
            {HERO.body}
          </motion.p>
          <motion.div variants={item} className="mt-7 flex items-center gap-3">
            <Button size="md" href={whatsappHref()} target="_blank" rel="noreferrer">
              {HERO.ctaPrimary}
            </Button>
            <a
              href="#servicios"
              className="group flex items-center px-1.5 py-3.5 text-[15px] font-medium text-ink/72 transition-colors hover:text-ink"
            >
              {HERO.ctaSecondaryDesktop}
              <motion.span
                aria-hidden="true"
                className="ml-1.5 inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                →
              </motion.span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="h-[560px] overflow-hidden"
        >
          <motion.img
            src={gymPhoto}
            alt="Joaquín Pérez Gorostizu entrenando en el gimnasio"
            className="img-lighten h-[124%] w-full object-cover object-[50%_16%]"
            loading="eager"
            style={{ y: parallaxY }}
          />
        </motion.div>
      </div>
    </section>
  )
}
