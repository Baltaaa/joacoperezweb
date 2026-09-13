/**
 * Ticker horizontal continuo — el "movimiento ambiente" que pidió sumar el
 * usuario (inspirado en el marquee/ticker de Spline), pero con la paleta y
 * tipografía Nocturne intactas. Puramente decorativo: aria-hidden, contenido
 * real ya vive en el resto de la página.
 */
export default function Marquee({ items }) {
  const track = [...items, ...items] // duplicado para el loop -50%

  return (
    <div className="overflow-hidden border-y border-white/[0.08] bg-surface/40 py-3" aria-hidden="true">
      <div className="animate-marquee flex w-max gap-8 will-change-transform">
        {track.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 whitespace-nowrap font-medium text-kicker uppercase text-ink/45"
          >
            {item}
            <span className="text-accent/60">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
