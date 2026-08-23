type TimerProps = {
  initialTime: number
}

function Timer({initialTime}: TimerProps) {
  void initialTime

  return <div />
}

export function CountdownTimerTask() {
  return (
    <div className="task-card">
      <Timer initialTime={5000} />
    </div>
  )
}
