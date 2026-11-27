import {useState} from 'react'
import {Modal} from './Modal'

export function ModalTask() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="task-card">
      <button type="button" onClick={() => setIsOpen(true)}>
        Launch example modal
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Modal header">
        <p>Modal body...</p>
      </Modal>
    </div>
  )
}
