import { motion } from 'framer-motion'
import Kicker from './Kicker'
import Tag from './Tag'
import { VALUE } from '../siteData'
import { fadeUp, staggerContainer, viewportOnce } from '../motion'

export default function Value() {
  return (
    <section id="como-lo-veo" className="bg-ground px-4 py-10 sm:px-24 sm:py-0 sm:pb-[88px]">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="flex flex-col sm:grid sm:grid-cols-[1fr_1.25fr] sm:gap-14"
      >
        {/* Cita: primero en mobile (17px/1.6), segunda columna en desktop (25px/1.5, h3) */}
        <motion.div variants={fadeUp} className="order-1 sm:order-2">
          <p className="text-[17px] leading-[1.6] text-ink sm:max-w-[760px] sm:text-h3 sm:text-ink">
            {VALUE.quote}
          </p>
          <div className="mt-3 font-medium text-[13px] text-ink/55 sm:mt-4">{VALUE.attribution}</div>
        </motion.div>

        {/* Separador fade: solo mobile, entre la cita y los tags */}
        <div className="divider-fade order-2 my-7 sm:hidden" />

        {/* Tags "con quién trabajo": después en mobile, primera columna en desktop */}
        <motion.div variants={fadeUp} className="order-3 sm:order-1">
          <Kicker className="mb-3.5">{VALUE.audienceKicker}</Kicker>
          <div className="flex flex-wrap gap-1.5 sm:max-w-[300px]">
            {VALUE.audience.map((label) => (
              <Tag key={label}>{label}</Tag>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
