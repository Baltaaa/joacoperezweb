import { motion } from 'framer-motion'
import Button from './Button'
import { CONTACT, CONTACT_SECTION, whatsappHref } from '../siteData'
import { fadeUp, staggerContainer, viewportOnce } from '../motion'

export default function Contact() {
  return (
    <section className="bg-section px-4 py-10 sm:px-24 sm:py-[88px]">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="sm:grid sm:grid-cols-2 sm:items-end sm:gap-14"
      >
        <motion.div variants={fadeUp}>
          <div className="mb-3 font-medium text-kicker uppercase text-ink/72 sm:mb-4">
            {CONTACT_SECTION.kicker}
          </div>
          <h2 className="text-h2 text-ink sm:text-h1">
            {CONTACT_SECTION.title[0]}
            <br />
            {CONTACT_SECTION.title[1]}
          </h2>
          <p className="mt-2.5 text-body text-ink/78 sm:mt-4 sm:max-w-[440px]">{CONTACT_SECTION.body}</p>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-[22px] flex flex-col gap-2 sm:mt-0 sm:max-w-[420px]">
          <Button
            variant="band"
            href={whatsappHref()}
            target="_blank"
            rel="noreferrer"
            className="sm:text-center"
          >
            WhatsApp · {CONTACT.whatsappDisplay}
          </Button>
          <a
            href={CONTACT.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="flex h-14 items-center justify-center text-base font-medium text-ink/78 transition-colors hover:text-ink"
          >
            Instagram · {CONTACT.instagramHandle}
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
