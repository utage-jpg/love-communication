'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import QuestionCard from '@/components/QuestionCard'
import { questions, generateDiagnosisResult } from '@/lib/diagnosis'

export default function DiagnosisPage() {
  const router = useRouter()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<boolean[]>([])

  const currentQuestion = questions[currentQuestionIndex]
  const totalQuestions = questions.length

  const handleAnswer = (answer: boolean) => {
    const newAnswers = [...answers, answer]
    setAnswers(newAnswers)

    if (currentQuestionIndex < totalQuestions - 1) {
      // 次の質問へ
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      // 診断完了、結果ページへ
      const result = generateDiagnosisResult(newAnswers)
      const resultParams = new URLSearchParams({
        type: result.type,
        typeName: result.typeName,
        description: result.description,
        scores: JSON.stringify(result.scores),
        advice: JSON.stringify(result.advice)
      })
      router.push(`/result?${resultParams.toString()}`)
    }
  }

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      setAnswers(answers.slice(0, -1))
    }
  }

  return (
    <QuestionCard
      question={currentQuestion}
      currentQuestion={currentQuestionIndex + 1}
      totalQuestions={totalQuestions}
      onAnswer={handleAnswer}
      onBack={handleBack}
    />
  )
}
