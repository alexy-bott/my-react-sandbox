type TimerProps = {
  initialTime: number
}

function Timer({initialTime}: TimerProps) {

  return <div>{initialTime} мс</div>
}

export function CountdownTimerTask() {
  return (
    <div className="task-card">
      <Timer initialTime={5000} />
    </div>
  )
}
