import { useEffect, type ReactNode } from 'react'
export type ModalProps = {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
}
export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (!isOpen) return
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [isOpen, onClose])
  if (!isOpen) return null
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#0008',
        display: 'grid',
        placeItems: 'center',
        zIndex: 10,
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section
        role="dialog"
        aria-label={title}
        style={{ background: 'white', color: 'black', padding: 24 }}
      >
        <button
          style={{ float: 'right' }}
          onClick={onClose}
          aria-label="Закрыть"
        >
          ×
        </button>
        <h2>{title}</h2>
        {children}
      </section>
    </div>
  )
}
