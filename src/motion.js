// Variantes de Framer Motion compartidas por todas las secciones.
// Spec del sistema (ver notas del mockup): "entrada por sección con fade +
// 12px de subida, stagger 60ms". Se usan con whileInView para que disparen
// al hacer scroll, una sola vez, sin trabar el scroll en gama media/baja
// (solo se anima transform/opacity, nunca layout).

export const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

export const staggerContainer = (stagger = 0.06, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
})

export const viewportOnce = { once: true, margin: '-80px 0px' }
