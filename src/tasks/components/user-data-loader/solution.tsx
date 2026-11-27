import { useState, useEffect } from 'react'
import type { FC } from 'react'

type UserData = {
  id: number
  name: string
}

function fetchUser({ id }: { id: number }): Promise<UserData> {
  return Promise.resolve({ id, name: `User ${id}` })
}

type Props = {
  userId: number | null
}

export const User: FC<Props> = ({ userId }) => {
  const [data, setData] = useState<UserData | null>(null)
  const [error, setError] = useState<Error | null>(null)
  useEffect(() => {
    let active = true
    setError(null)
    if (userId !== null)
      fetchUser({ id: userId })
        .then((user) => {
          if (active) setData(user)
        })
        .catch((reason) => {
          if (active) setError(reason)
        })
    return () => {
      active = false
    }
  }, [userId])
  if (userId === null) return null
  if (error) return <UserError error={error} />
  if (data?.id !== userId) return <Loader />
  return (
    <div>
      UserId: {data.id}
      <br />
      UserName: {data.name}
    </div>
  )
}

const Loader = () => <p data-testid="loader">Loading...</p>

const UserError = ({ error }: { error: Error }) => (
  <p style={{ color: 'red' }} data-testid="error">
    {error.message}
  </p>
)

export function UserDataLoaderTask() {
  return (
    <div className="task-card">
      <User userId={1} />
    </div>
  )
}
