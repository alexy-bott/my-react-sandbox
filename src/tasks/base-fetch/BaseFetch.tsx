import {useEffect, useState} from "react";

type Post = {
    id: number;
    title: string;
}

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts"

const getPosts = async (signal: AbortSignal): Promise<Post[]> => {
    const response = await fetch(POSTS_URL, {signal})

    if (!response.ok) {
        throw new Error('Не удалось загрузить посты')
    }

    return response.json()
}

export const BaseFetch = () => {
    const [posts, setPosts] = useState<Post[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const controller = new AbortController()

        const loadingPosts = async () => {
            try {
                setIsLoading(true)
                setError('')

                const data = await getPosts(controller.signal)

                setPosts(data)
            } catch (error) {
                if (error instanceof Error) {
                    if (error.name === "AbortError") {
                        return
                    }
                    setError(error.message)
                }

            } finally {
                setIsLoading(false)
            }
        }
        loadingPosts()

        return () => {
            controller.abort()
        }
    }, [])
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>{error}</div>
    }
    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>{post.title}</div>
            ))}
        </div>
    );
};