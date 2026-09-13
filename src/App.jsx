import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Value from './components/Value'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import { MARQUEE_WORDS } from './siteData'

export default function App() {
  return (
    <div className="pb-20 sm:pb-0">
      <Hero />
      <Marquee items={MARQUEE_WORDS} />
      <Value />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
