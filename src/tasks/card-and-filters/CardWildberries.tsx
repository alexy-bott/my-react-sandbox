import {useEffect, useState} from "react";

// Training screen for loading a list of cards and showing request state.

type CardItem = {
    id: string | number;
    title: string;
    description: string;
}

export default function CardWildberies() {
    const [cards, setCards] = useState<CardItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadCards() {
            setIsLoading(true)
            setError(null)

            try {
                const response = await fetch(
                    "https://chmocki.ru/api/mock/z6WlPjFH/filters-react-dan"
                )
                if (!response.ok) {
                    throw new Error("Не удалось загрузить данные")
                }
                const data: CardItem[] = await response.json()

                setCards(data)
            } catch {
                setError("Произошла ошибка при загрузке")
            } finally {
                setIsLoading(false)
            }
        }

        loadCards()
    }, [])

    return (
        <main className="sandbox-main">
            <h1>Список карточек</h1>

            <p>
                Количество карточек: {cards.length}
            </p>
            {isLoading && <p>Loading...</p>}
            {error && <p role="alert">{error}</p>}
        </main>
    );
}
