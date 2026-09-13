export default function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-sm border border-accent/45 px-2.5 py-2 font-medium text-xs text-accent-light">
      {children}
    </span>
  )
}
