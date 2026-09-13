import { motion } from 'framer-motion'

/**
 * Botón del sistema Nocturne: nunca relleno grande, siempre delineado.
 * Siempre renderiza un <a> (todos los CTA del sitio son enlaces: WhatsApp,
 * Instagram, o anchors internos). variant "primary" = borde accent / texto
 * accent-light. "band" = variante para la banda saturada de contacto, donde
 * el borde sube a accent-400 para mantener contraste.
 */
export default function Button({
  variant = 'primary',
  size = 'lg',
  className = '',
  children,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-150 ease-out text-center'

  const sizes = {
    lg: 'h-14 px-6 text-base w-full sm:w-auto', // 56px alto mobile, pide el sistema
    md: 'px-5 py-3.5 text-[15px]',
  }

  const variants = {
    primary:
      'border border-accent text-accent-light hover:bg-accent/10 active:bg-accent/20',
    band: 'border border-accent-400 text-ink hover:bg-white/5 active:bg-white/10',
    ghost: 'text-ink/72 hover:text-ink',
  }

  return (
    <motion.a
      whileTap={{ scale: 0.97 }}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.a>
  )
}
