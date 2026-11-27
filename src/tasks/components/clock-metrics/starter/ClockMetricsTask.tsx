import {useState} from 'react'

export function logMetric(date: string) {
  return fetch('/api/metric', {method: 'POST', body: date})
}

function Clock() {
  const [currentDate] = useState(new Date().toISOString())


  return <h1>{currentDate}</h1>
}

export function ClockMetricsTask() {
  return (
    <div className="task-card">
      <Clock />
    </div>
  )
}
