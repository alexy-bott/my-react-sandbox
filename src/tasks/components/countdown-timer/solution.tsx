import { useEffect, useState } from 'react'
function Timer({ initialTime }: { initialTime: number }) {
  const [remaining, setRemaining] = useState(initialTime)
  const [run, setRun] = useState(0)
  useEffect(() => {
    const end = Date.now() + initialTime
    const timer = setInterval(() => {
      const next = Math.max(0, end - Date.now())
      setRemaining(next)
      if (next === 0) clearInterval(timer)
    }, 50)
    return () => clearInterval(timer)
  }, [initialTime, run])
  return (
    <div>
      {remaining} мс{' '}
      <button
        onClick={() => {
          setRemaining(initialTime)
          setRun(run + 1)
        }}
      >
        Reset
      </button>
    </div>
  )
}
export function CountdownTimerTask() {
  return <Timer initialTime={5000} />
}
