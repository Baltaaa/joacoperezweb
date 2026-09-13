export default function Kicker({ children, muted = false, className = '' }) {
  return (
    <div
      className={`font-medium text-kicker uppercase ${muted ? 'text-ink/72' : 'text-accent'} ${className}`}
    >
      {children}
    </div>
  )
}
