import { useState, useEffect } from 'react'
const images = [
  'https://images.unsplash.com/photo-1626808642875-0aa545482dfb',
  'https://images.unsplash.com/photo-1546842931-886c185b4c8c',
  'https://images.unsplash.com/photo-1520763185298-1b434c919102',
  'https://images.unsplash.com/photo-1442458017215-285b83f65851',
  'https://images.unsplash.com/photo-1496483648148-47c686dc86a8',
  'https://images.unsplash.com/photo-1591181520189-abcb0735c65d',
]

function MemoryGame({ images }: { images: string[] }) {
  const [deck] = useState(() => {
    const cards = [...images, ...images]
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[cards[i], cards[j]] = [cards[j], cards[i]]
    }
    return cards
  })
  const [open, setOpen] = useState<number[]>([])
  const [matched, setMatched] = useState<number[]>([])
  useEffect(() => {
    if (open.length !== 2) return
    const timer = setTimeout(() => setOpen([]), 1000)
    return () => clearTimeout(timer)
  }, [open])
  function flip(index: number) {
    if (open.length === 2 || open.includes(index) || matched.includes(index))
      return
    if (open.length && deck[open[0]] === deck[index]) {
      setMatched([...matched, open[0], index])
      setOpen([])
    } else setOpen([...open, index])
  }
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
      {deck.map((image, index) => (
        <button key={index} onClick={() => flip(index)}>
          {matched.includes(index) || open.includes(index) ? (
            <img src={image} width={80} alt="Открытая карточка" />
          ) : (
            '?'
          )}
        </button>
      ))}
    </div>
  )
}

export function MemoryGameTask() {
  return (
    <div className="task-card">
      <MemoryGame images={images} />
    </div>
  )
}
