import { motion } from 'framer-motion'
import Kicker from './Kicker'
import Button from './Button'
import { SERVICES, whatsappHref } from '../siteData'
import { fadeUp, staggerContainer, viewportOnce } from '../motion'

function ServiceCard({ n, title, body }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ borderColor: '#595D6C', y: -3 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      className="flex min-h-[104px] flex-col justify-between gap-2 rounded-md border border-neutral-800 bg-surface p-4 shadow-sm sm:min-h-[170px] sm:p-[22px]"
    >
      <div>
        <span className="font-mono text-[11px] text-accent transition-colors group-hover:text-accent-400">
          {n}
        </span>
        <div className="mt-2 text-h4 text-ink">{title}</div>
      </div>
      <p className="text-sm leading-[1.55] text-ink/72">{body}</p>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="servicios" className="bg-ground px-4 py-10 sm:px-24 sm:py-[88px]">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <div className="mb-5 flex flex-col gap-4 sm:mb-[34px] sm:flex-row sm:items-end sm:justify-between">
          <motion.div variants={fadeUp}>
            <Kicker className="mb-3">{SERVICES.kicker}</Kicker>
            <h2 className="text-h2 text-ink sm:text-h1">
              <span className="sm:hidden">
                {SERVICES.title[0]}
                <br />
                {SERVICES.title[1]}
              </span>
              <span className="hidden sm:inline">{SERVICES.title.join(' ')}</span>
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} className="hidden sm:block">
            <Button
              size="md"
              href={whatsappHref('Hola Joaquín! Quiero consultar disponibilidad para entrenar.')}
              target="_blank"
              rel="noreferrer"
              className="whitespace-nowrap"
            >
              {SERVICES.cta}
            </Button>
          </motion.div>
        </div>

        <div className="flex flex-col gap-2 sm:grid sm:grid-cols-3 sm:gap-[11px]">
          {SERVICES.items.map((item) => (
            <ServiceCard key={item.n} {...item} />
          ))}

          {/* Sexta celda: no es un servicio, es salida al WhatsApp — solo desktop */}
          <motion.a
            variants={fadeUp}
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            href={whatsappHref('Hola Joaquín! No tengo claro qué servicio me conviene, ¿me ayudás?')}
            target="_blank"
            rel="noreferrer"
            className="hidden min-h-[170px] flex-col justify-end rounded-md border border-accent/45 p-[22px] transition-colors hover:bg-white/5 sm:flex"
          >
            <p className="text-sm leading-[1.55] text-ink/72">{SERVICES.fallback.body}</p>
            <div className="mt-2.5 text-sm font-medium text-accent-light">{SERVICES.fallback.cta}</div>
          </motion.a>
        </div>

        <motion.div variants={fadeUp} className="sm:hidden">
          <Button
            className="mt-2"
            href={whatsappHref('Hola Joaquín! Quiero consultar disponibilidad para entrenar.')}
            target="_blank"
            rel="noreferrer"
          >
            {SERVICES.cta}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
