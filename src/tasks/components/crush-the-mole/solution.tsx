import { useState, useEffect } from 'react'
export function CrushTheMoleTask() {
  const [running, setRunning] = useState(true)
  const [mole, setMole] = useState<number | null>(null)
  useEffect(() => {
    if (!running || mole !== null) return
    const timer = setTimeout(
      () => setMole(Math.floor(Math.random() * 16)),
      350 + Math.random() * 1200,
    )
    return () => clearTimeout(timer)
  }, [running, mole])
  return (
    <section>
      <h1>⭐ Crush the mole ⭐</h1>
      <button
        onClick={() => {
          setRunning(!running)
          setMole(null)
        }}
      >
        {running ? 'Стоп' : 'Старт'}
      </button>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 3rem)' }}>
        {Array.from({ length: 16 }, (_, index) => (
          <button
            key={index}
            style={{ height: '3rem' }}
            onClick={() => {
              if (index === mole) setMole(null)
            }}
          >
            {index === mole ? '@' : ''}
          </button>
        ))}
      </div>
    </section>
  )
}
