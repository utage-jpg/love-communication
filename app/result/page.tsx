'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Scores } from '@/lib/diagnosis'

export default function ResultPage() {
  const searchParams = useSearchParams()
  
  const type = searchParams.get('type') || ''
  const typeName = searchParams.get('typeName') || ''
  const description = searchParams.get('description') || ''
  const scores: Scores = JSON.parse(searchParams.get('scores') || '{}')
  const advice: string[] = JSON.parse(searchParams.get('advice') || '[]')

  const ScoreBar = ({ label, score, max }: { label: string; score: number; max: number }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm text-gray-600">{score}/{max}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div 
          className="bg-gradient-to-r from-pink-400 to-purple-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${(score / max) * 100}%` }}
        />
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* 結果ヘッダー */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            診断結果
          </h1>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-pink-600 mb-2">
              {typeName}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* スコア表示 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6">
            スコアサマリー
          </h3>
          <ScoreBar label="LAT（通信速度）" score={scores.LAT} max={4} />
          <ScoreBar label="ACK（言葉・反応）" score={scores.ACK} max={5} />
          <ScoreBar label="SYN（行動・同期）" score={scores.SYN} max={4} />
          <ScoreBar label="ERR（エラー回避）" score={scores.ERR} max={3} />
          <ScoreBar label="CON（接続目的）" score={scores.CON} max={4} />
        </div>

        {/* アドバイス */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6">
            解決パッチ（アドバイス）
          </h3>
          <ul className="space-y-3">
            {advice.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                  {index + 1}
                </span>
                <span className="text-gray-700 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* アクションボタン */}
        <div className="text-center">
          <Link href="/">
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              もう一度診断する
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
