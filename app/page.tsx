'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const diagnoses = [
    {
      id: 'love-communication',
      title: '恋愛コミュニケーション診断',
      description: '20問で分かる！あなたの恋愛キャラは？',
      emoji: '💕',
      color: 'from-pink-400 to-purple-500',
      trending: true
    },
    {
      id: 'personality-color',
      title: '性格カラー診断',
      description: 'あなたの内面を彩るパーソナルカラー',
      emoji: '🎨',
      color: 'from-blue-400 to-cyan-500',
      trending: false
    },
    {
      id: 'lifestyle-type',
      title: 'ライフスタイル診断',
      description: 'あなたにぴったりの生活スタイルを発見',
      emoji: '🌟',
      color: 'from-yellow-400 to-orange-500',
      trending: false
    },
    {
      id: 'friendship-type',
      title: '友情タイプ診断',
      description: 'あなたの友達との関係性を分析',
      emoji: '👭',
      color: 'from-green-400 to-teal-500',
      trending: false
    },
    {
      id: 'work-style',
      title: '働き方診断',
      description: 'あなたに合った働き方を見つけよう',
      emoji: '💼',
      color: 'from-indigo-400 to-purple-500',
      trending: false
    },
    {
      id: 'love-language',
      title: '愛情表現診断',
      description: 'あなたの愛情表現のタイプを知る',
      emoji: '💝',
      color: 'from-red-400 to-pink-500',
      trending: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* ヒーローセクション */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100/50 to-purple-100/50 animate-pulse" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* アニメーション付きタイトル */}
            <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6">
                うらないの森
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                心を開く、自分を知る、未来を見つける
              </p>
            </div>

            {/* CTAボタン */}
            <div className={`transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link href="/diagnoses">
                <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full hover:shadow-xl hover:scale-105">
                  <span className="mr-2">✨</span>
                  診断をはじめる
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </Link>
            </div>

            {/* 浮遊するデコレーション */}
            <div className="absolute top-10 left-10 text-4xl animate-bounce">💕</div>
            <div className="absolute top-20 right-20 text-3xl animate-pulse">🌟</div>
            <div className="absolute bottom-10 left-20 text-3xl animate-bounce delay-100">🎨</div>
            <div className="absolute bottom-20 right-10 text-4xl animate-pulse delay-200">💝</div>
          </div>
        </div>
      </section>

      {/* 人気診断セクション */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              人気の診断
            </h2>
            <p className="text-lg text-gray-600">
              今、みんなが楽しんでいる診断はこれ！
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diagnoses.map((diagnosis, index) => (
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
                      <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        🔥 人気
                      </span>
                    </div>
                  )}

                  {/* グラデーション背景 */}
                  <div className={`h-32 bg-gradient-to-br ${diagnosis.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl">{diagnosis.emoji}</span>
                    </div>
                    {/* 浮遊する要素 */}
                    <div className="absolute top-2 left-2 text-2xl animate-float">✨</div>
                    <div className="absolute bottom-2 right-2 text-xl animate-float delay-200">💫</div>
                  </div>

                  {/* コンテンツ */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-500 transition-colors">
                      {diagnosis.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {diagnosis.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        約5分で完了
                      </span>
                      <span className="text-pink-500 group-hover:text-pink-600 transition-colors">
                        はじめる →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              うらないの森の特徴
            </h2>
            <p className="text-lg text-gray-600">
              あなたの自己発見をサポートする機能
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl">
                🎯
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                精密な分析
              </h3>
              <p className="text-gray-600">
                心理学的アプローチに基づいた、信頼性の高い診断結果
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl">
                💫
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                可愛いデザイン
              </h3>
              <p className="text-gray-600">
                楽しく使える、現代的で可愛いインターフェース
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl">
                🌈
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                シェア機能
              </h3>
              <p className="text-gray-600">
                結果をSNSでシェアして、友達と楽しもう
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">うらないの森</h3>
            <p className="text-gray-400">
              心を開く、自分を知る、未来を見つける
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              利用規約
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              プライバシー
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              お問い合わせ
            </a>
          </div>

          <div className="text-gray-400 text-sm">
            © 2024 うらないの森. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
