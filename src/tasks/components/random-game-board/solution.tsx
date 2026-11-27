import { useState } from 'react'
import './RandomGameBoardTask.css'
export function RandomGameBoardTask() {
  const [colors, setColors] = useState<string[]>([])
  return (
    <section>
      <button
        onClick={() =>
          setColors(
            Array.from({ length: 100 }, () =>
              Math.random() < 0.5 ? 'red' : 'green',
            ),
          )
        }
      >
        Создать поле
      </button>
      <div className="random-game-board">
        {colors.map((background, index) => (
          <div
            className="random-game-board__cell"
            style={{ background }}
            key={index}
          />
        ))}
      </div>
    </section>
  )
}
