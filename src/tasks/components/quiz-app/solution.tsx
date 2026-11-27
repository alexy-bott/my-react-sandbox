import { useState } from 'react'
type QuizVariant = {
  name: string
  value: number
}

type QuizQuestion = {
  question: string
  answer: number
  variants: QuizVariant[]
}

function QuizApp() {
  const mock: QuizQuestion[] = [
    {
      question: 'Сколько человек на Земле?',
      answer: 3,
      variants: [
        { name: '6 миллиардов', value: 1 },
        { name: '7 миллиардов', value: 2 },
        { name: '8 миллиардов', value: 3 },
      ],
    },
    {
      question: 'Сколько частей света?',
      answer: 2,
      variants: [
        { name: '5', value: 1 },
        { name: '6', value: 2 },
        { name: '7', value: 3 },
      ],
    },
    {
      question: 'Сколько океанов на Земле?',
      answer: 1,
      variants: [
        { name: '5', value: 1 },
        { name: '6', value: 2 },
        { name: '7', value: 3 },
      ],
    },
  ]

  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const question = mock[index]
  if (!question)
    return (
      <section>
        Вы ответили верно на {score} вопросов из {mock.length}
        <button
          onClick={() => {
            setIndex(0)
            setScore(0)
          }}
        >
          Начать заново
        </button>
      </section>
    )
  return (
    <section>
      <h2>{question.question}</h2>
      {question.variants.map((v) => (
        <label key={v.value}>
          <input
            type="radio"
            name="answer"
            checked={selected === v.value}
            onChange={() => setSelected(v.value)}
          />
          {v.name}
        </label>
      ))}
      <button
        disabled={selected === null}
        onClick={() => {
          if (selected === question.answer) setScore(score + 1)
          setSelected(null)
          setIndex(index + 1)
        }}
      >
        Далее
      </button>
    </section>
  )
}

export function QuizTask() {
  return (
    <div className="task-card">
      <QuizApp />
    </div>
  )
}
