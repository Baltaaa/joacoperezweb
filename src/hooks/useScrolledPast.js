import { useEffect, useState } from 'react'

/**
 * true una vez que el usuario scrolleó más allá de `thresholdPx`.
 * Usado para el CTA de WhatsApp sticky en mobile (ver App.jsx): el diseño
 * pide que quede fijo abajo "al pasar el hero".
 */
export default function useScrolledPast(thresholdPx = 480) {
  const [scrolledPast, setScrolledPast] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolledPast(window.scrollY > thresholdPx)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [thresholdPx])

  return scrolledPast
}
