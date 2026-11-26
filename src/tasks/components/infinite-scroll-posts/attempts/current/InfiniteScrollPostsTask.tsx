import {useState} from 'react'

type Post = {
  id: number
  name: string
}

const generatePosts = (): Post[] => {
  return Array(10)
    .fill(null)
    .map((_, index) => {
      return {name: `Post-${index}`, id: Math.random() * 10000}
    })
}

function InfiniteScrollPosts() {
  const [posts] = useState<Post[]>(generatePosts())

  return (
    <div className="app">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          {post.name}
        </div>
      ))}
    </div>
  )
}

export function InfiniteScrollPostsTask() {
  return (
    <div className="task-card">
      <InfiniteScrollPosts />
    </div>
  )
}
