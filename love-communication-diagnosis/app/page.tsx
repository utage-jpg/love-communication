'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          恋愛コミュニケーション診断
        </h1>
        <p className="text-gray-600 mb-8">
          20問の質問に答えて、あなたの恋愛コミュニケーションスタイルを診断しましょう！
        </p>
        <Link href="/diagnosis">
          <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
            診断を始める
          </button>
        </Link>
      </div>
    </div>
  )
}
