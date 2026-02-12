'use client'

import { Question } from '@/lib/diagnosis'

interface QuestionCardProps {
  question: Question
  currentQuestion: number
  totalQuestions: number
  onAnswer: (answer: boolean) => void
  onBack: () => void
}

export default function QuestionCard({
  question,
  currentQuestion,
  totalQuestions,
  onAnswer,
  onBack
}: QuestionCardProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
        {/* 進捗表示 */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">
              質問 {currentQuestion} / {totalQuestions}
            </span>
            <span className="text-sm text-gray-600">
              カテゴリ: {question.category}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-pink-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        {/* 質問文 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Q{question.id}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {question.text}
          </p>
        </div>

        {/* 回答ボタン */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => onAnswer(true)}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200"
          >
            YES
          </button>
          <button
            onClick={() => onAnswer(false)}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200"
          >
            NO
          </button>
        </div>

        {/* 戻るボタン */}
        {currentQuestion > 1 && (
          <button
            onClick={onBack}
            className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
          >
            前の質問に戻る
          </button>
        )}
      </div>
    </div>
  )
}
