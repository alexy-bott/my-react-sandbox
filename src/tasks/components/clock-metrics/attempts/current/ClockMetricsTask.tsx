import {useState} from 'react'

function logMetric(date: string) {
  void fetch('/api/metric', date as unknown as RequestInit)
}

function Clock() {
  const [currentDate, setCurrentDate] = useState(new Date().toISOString())

  void setCurrentDate
  void logMetric

  return <h1>{currentDate}</h1>
}

export function ClockMetricsTask() {
  return (
    <div className="task-card">
      <Clock />
    </div>
  )
}
