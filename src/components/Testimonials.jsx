import { motion } from 'framer-motion'
import Kicker from './Kicker'
import { TESTIMONIALS } from '../siteData'
import { fadeUp, staggerContainer, viewportOnce } from '../motion'

export default function Testimonials() {
  return (
    <section className="bg-ground px-4 py-10 sm:px-24 sm:py-[88px]">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div variants={fadeUp}>
          <Kicker className="mb-5 sm:mb-[34px]">{TESTIMONIALS.kicker}</Kicker>
        </motion.div>

        <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-14">
          {TESTIMONIALS.items.map((t, i) => (
            <motion.div key={t.name + i} variants={fadeUp}>
              {i === 1 && <div className="divider-fade my-[22px] sm:hidden" />}
              <p className="text-[20px] leading-[1.45] text-ink sm:text-h3 sm:leading-[1.5]">“{t.quote}”</p>
              <div className="mt-2.5 text-[13px] font-medium sm:mt-3.5 sm:text-sm">
                {t.name} <span className="font-normal text-ink/55">· {t.meta}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
