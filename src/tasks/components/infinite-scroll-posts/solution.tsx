import { useEffect, useRef, useState } from 'react'

type Post = {
  id: number
  name: string
}

const generatePosts = (): Post[] => {
  return Array(10)
    .fill(null)
    .map((_, index) => {
      return { name: `Post-${index}`, id: Math.random() * 10000 }
    })
}

function InfiniteScrollPosts() {
  const [posts, setPosts] = useState<Post[]>(generatePosts)
  const end = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        const next = generatePosts()
        setPosts((previous) => [...previous, ...next])
      }
    })
    if (end.current) observer.observe(end.current)
    return () => observer.disconnect()
  }, [posts.length])

  return (
    <div className="app">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          {post.name}
        </div>
      ))}
      <div ref={end} />
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
