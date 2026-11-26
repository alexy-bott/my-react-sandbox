import type {ReactNode} from 'react'

export type ModalProps = {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

export function Modal({isOpen, onClose, title, children}: ModalProps) {
  void isOpen
  void onClose
  void title
  void children

  return null
}
