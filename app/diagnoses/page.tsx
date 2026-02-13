'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function DiagnosesPage() {
  const [mounted, setMounted] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    setMounted(true)
  }, [])

  const categories = [
    { id: 'all', name: 'すべて', emoji: '🌟' },
    { id: 'love', name: '恋愛', emoji: '💕' },
    { id: 'personality', name: '性格', emoji: '🎭' },
    { id: 'lifestyle', name: 'ライフスタイル', emoji: '🌈' },
    { id: 'work', name: '仕事', emoji: '💼' },
    { id: 'friendship', name: '友情', emoji: '👭' }
  ]

  const diagnoses = [
    {
      id: 'love-communication',
      title: '恋愛コミュニケーション診断',
      description: '20問で分かる！あなたの恋愛キャラは？',
      emoji: '💕',
      color: 'from-pink-400 to-purple-500',
      category: 'love',
      trending: true,
      questions: 20,
      time: '5分',
      difficulty: '普通'
    },
    {
      id: 'personality-color',
      title: '性格カラー診断',
      description: 'あなたの内面を彩るパーソナルカラー',
      emoji: '🎨',
      color: 'from-blue-400 to-cyan-500',
      category: 'personality',
      trending: false,
      questions: 15,
      time: '3分',
      difficulty: '簡単'
    },
    {
      id: 'lifestyle-type',
      title: 'ライフスタイル診断',
      description: 'あなたにぴったりの生活スタイルを発見',
      emoji: '🌟',
      color: 'from-yellow-400 to-orange-500',
      category: 'lifestyle',
      trending: false,
      questions: 12,
      time: '4分',
      difficulty: '簡単'
    },
    {
      id: 'friendship-type',
      title: '友情タイプ診断',
      description: 'あなたの友達との関係性を分析',
      emoji: '👭',
      color: 'from-green-400 to-teal-500',
      category: 'friendship',
      trending: false,
      questions: 18,
      time: '5分',
      difficulty: '普通'
    },
    {
      id: 'work-style',
      title: '働き方診断',
      description: 'あなたに合った働き方を見つけよう',
      emoji: '💼',
      color: 'from-indigo-400 to-purple-500',
      category: 'work',
      trending: false,
      questions: 16,
      time: '4分',
      difficulty: '普通'
    },
    {
      id: 'love-language',
      title: '愛情表現診断',
      description: 'あなたの愛情表現のタイプを知る',
      emoji: '💝',
      color: 'from-red-400 to-pink-500',
      category: 'love',
      trending: false,
      questions: 10,
      time: '3分',
      difficulty: '簡単'
    },
    {
      id: 'communication-style',
      title: 'コミュニケーションスタイル診断',
      description: 'あなたの伝え方のクセを分析',
      emoji: '💬',
      color: 'from-purple-400 to-pink-500',
      category: 'personality',
      trending: false,
      questions: 14,
      time: '4分',
      difficulty: '普通'
    },
    {
      id: 'stress-type',
      title: 'ストレスタイプ診断',
      description: 'あなたのストレス耐性と対処法',
      emoji: '😌',
      color: 'from-teal-400 to-blue-500',
      category: 'lifestyle',
      trending: false,
      questions: 20,
      time: '6分',
      difficulty: '難しい'
    },
    {
      id: 'career-aptitude',
      title: '適職診断',
      description: 'あなたに合った職業を見つけよう',
      emoji: '🎯',
      color: 'from-orange-400 to-red-500',
      category: 'work',
      trending: false,
      questions: 25,
      time: '7分',
      difficulty: '難しい'
    }
  ]

  const filteredDiagnoses = selectedCategory === 'all' 
    ? diagnoses 
    : diagnoses.filter(d => d.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* ヘッダー */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl">🌟</span>
              <span className="text-xl font-bold gradient-text">うらないの森</span>
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">
                トップ
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">
                診断一覧
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">
                マイページ
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* ヒーローセクション */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              診断一覧
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              気になる診断で、新しい自分を発見しよう
            </p>
          </div>

          {/* カテゴリーフィルター */}
          <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-pink-50 hover:text-pink-500 border border-pink-200'
                }`}
              >
                <span className="text-lg">{category.emoji}</span>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 診断リスト */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDiagnoses.map((diagnosis, index) => (
              <Link key={diagnosis.id} href={`/diagnosis/${diagnosis.id}`}>
                <div 
                  className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden cursor-pointer ${
                    mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* トレンドバッジ */}
                  {diagnosis.trending && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                        🔥 人気
                      </span>
                    </div>
                  )}

                  {/* グラデーション背景 */}
                  <div className={`h-40 bg-gradient-to-br ${diagnosis.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-7xl">{diagnosis.emoji}</span>
                    </div>
                    {/* 浮遊する要素 */}
                    <div className="absolute top-3 left-3 text-2xl animate-float">✨</div>
                    <div className="absolute bottom-3 right-3 text-xl animate-float delay-200">💫</div>
                  </div>

                  {/* コンテンツ */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-500 transition-colors">
                      {diagnosis.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {diagnosis.description}
                    </p>
                    
                    {/* メタ情報 */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <span>📝 {diagnosis.questions}問</span>
                        <span>⏱️ {diagnosis.time}</span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        diagnosis.difficulty === '簡単' ? 'bg-green-100 text-green-600' :
                        diagnosis.difficulty === '普通' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-red-100 text-red-600'
                      }`}>
                        {diagnosis.difficulty}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {categories.find(c => c.id === diagnosis.category)?.emoji} {
                          categories.find(c => c.id === diagnosis.category)?.name
                        }
                      </span>
                      <span className="text-pink-500 group-hover:text-pink-600 transition-colors font-medium">
                        はじめる →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* 空状態 */}
          {filteredDiagnoses.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                診断が見つかりません
              </h3>
              <p className="text-gray-600">
                別のカテゴリーを試してみてください
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
