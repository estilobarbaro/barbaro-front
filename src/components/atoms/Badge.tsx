// src/components/atoms/Badge.tsx
interface BadgeProps {
  children: string
  active?: boolean
  onClick?: () => void
}

export function Badge({ children, active = false, onClick }: BadgeProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative px-5 py-2 rounded-none text-[10px] font-sans font-bold uppercase tracking-[0.25em]
        border transition-all duration-200 cursor-pointer overflow-hidden
        ${active
          ? 'bg-[var(--color-primary)] border-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-[0_0_20px_rgba(223,147,54,0.25)]'
          : `
            bg-transparent
            border-[var(--color-foreground)]/20
            text-[var(--color-foreground)]/50
            hover:border-[var(--color-primary)]/60
            hover:text-[var(--color-primary)]
            hover:bg-[var(--color-primary)]/5
          `
        }
      `}
    >
      {/* Micro shimmer en activo */}
      {active && (
        <span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"
          aria-hidden="true"
        />
      )}
      {children}
    </button>
  )
}
