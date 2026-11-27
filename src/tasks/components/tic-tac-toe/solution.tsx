import { useState } from 'react'
type Cell = 'X' | 'O' | null
const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]
export function TicTacToeTask() {
  const [history, setHistory] = useState<Cell[][]>([Array(9).fill(null)])
  const [turn, setTurn] = useState(0)
  const board = history[turn]
  const line = lines.find(
    ([a, b, c]) => board[a] && board[a] === board[b] && board[a] === board[c],
  )
  const player = turn % 2 ? 'O' : 'X'
  function play(index: number) {
    if (board[index] || line) return
    const next = [...board]
    next[index] = player
    setHistory([...history.slice(0, turn + 1), next])
    setTurn(turn + 1)
  }
  return (
    <section>
      <p>
        {line
          ? 'Победа: ' + board[line[0]]
          : board.every(Boolean)
            ? 'Ничья'
            : 'Ход: ' + player}
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 3rem)' }}>
        {board.map((cell, index) => (
          <button
            key={index}
            style={{ height: '3rem' }}
            onClick={() => play(index)}
          >
            {cell}
          </button>
        ))}
      </div>
      {history.map((_, i) => (
        <button key={i} onClick={() => setTurn(i)}>
          Ход {i}
        </button>
      ))}
    </section>
  )
}
