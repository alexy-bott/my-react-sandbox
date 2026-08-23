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
        {name: '6 миллиардов', value: 1},
        {name: '7 миллиардов', value: 2},
        {name: '8 миллиардов', value: 3},
      ],
    },
    {
      question: 'Сколько частей света?',
      answer: 2,
      variants: [
        {name: '5', value: 1},
        {name: '6', value: 2},
        {name: '7', value: 3},
      ],
    },
    {
      question: 'Сколько океанов на Земле?',
      answer: 1,
      variants: [
        {name: '5', value: 1},
        {name: '6', value: 2},
        {name: '7', value: 3},
      ],
    },
  ]

  void mock

  return <p className="task-note">Реализуй Quiz App по условиям из task.md.</p>
}

export function QuizTask() {
  return (
    <div className="task-card">
      <QuizApp />
    </div>
  )
}
