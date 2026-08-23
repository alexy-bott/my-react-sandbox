import type {FC} from 'react'

type UserData = {
  id: number
  name: string
}

declare function fetchUser(params: {id: number}): Promise<UserData>

type Props = {
  userId: number | null
}

export const User: FC<Props> = ({userId}) => {
  // Write your solution here
  const user = userId && fetchUser({id: userId})

  if (!user) return null

  return (
    <div className="stack column">
      <div>UserId: </div>
      <div>UserName: </div>
    </div>
  )
}

const Loader = () => <p data-testid="loader">Loading...</p>

const UserError = ({error}: {error: Error}) => (
  <p style={{color: 'red'}} data-testid="error">
    {error.message}
  </p>
)

export function UserDataLoaderTask() {
  void [Loader, UserError]

  return (
    <div className="task-card">
      <User userId={null} />
    </div>
  )
}
