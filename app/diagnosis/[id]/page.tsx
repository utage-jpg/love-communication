'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface Question {
  id: number
  text: string
  category: 'LAT' | 'ACK' | 'SYN' | 'ERR' | 'CON'
}

interface Character {
  name: string
  emoji: string
  color: string
  personality: string
  catchphrase: string
  loveStyle: string
  twitterBio: string
  hashtags: string[]
}

const loveCommunicationQuestions: Question[] = [
  // LAT（通信速度）
  { id: 1, text: '返信が24時間以上あくことがよくあるか？', category: 'LAT' },
  { id: 2, text: 'こちらが即レスしても相手のペースは変わらないか？', category: 'LAT' },
  { id: 3, text: '深夜・早朝の非常識な連絡は来ないか？', category: 'LAT' },
  { id: 4, text: 'SNSは更新しているのにLINEは未読スルーがあるか？', category: 'LAT' },
  
  // ACK（言葉・反応）
  { id: 5, text: '変化に気づくが「褒め言葉」は少ないか？', category: 'ACK' },
  { id: 6, text: '写真やエピソードにスタンプ1個で終わるか？', category: 'ACK' },
  { id: 7, text: '相談に対して共感より「解決策」が先に来るか？', category: 'ACK' },
  { id: 8, text: '自分から言わない限り「好き」などの言葉はないか？', category: 'ACK' },
  { id: 9, text: '喧嘩の際、謝るよりも「理屈」を並べるか？', category: 'ACK' },
  
  // SYN（行動・同期）
  { id: 10, text: '私物を貸す、送り迎えなどのサポートはあるか？', category: 'SYN' },
  { id: 11, text: '退勤時間を合わせるなど、近くにいようとするか？', category: 'SYN' },
  { id: 12, text: '行きたい場所をしっかり予約してくれるか？', category: 'SYN' },
  { id: 13, text: '旅行のお土産をわざわざ買ってきてくれるか？', category: 'SYN' },
  
  // ERR（エラー回避）
  { id: 14, text: '真面目な話をしようとすると話題を逸らすか？', category: 'ERR' },
  { id: 15, text: '感情的な話題になると沈黙するか？', category: 'ERR' },
  { id: 16, text: '問題が起きても「まあいっか」で終わらせるか？', category: 'ERR' },
  
  // CON（接続目的）
  { id: 17, text: '連絡の頻度が自分より少ないか？', category: 'CON' },
  { id: 18, text: '会う約束を自分からあまり提案しないか？', category: 'CON' },
  { id: 19, text: '将来の話を避ける傾向があるか？', category: 'CON' },
  { id: 20, text: '表情や態度から考えていることが読み取れないか？', category: 'CON' }
]

const characters: Record<string, Character> = {
  independent: {
    name: 'ユウト',
    emoji: '🎵',
    color: '#3B82F6',
    personality: 'マイペースで自由人。音楽が好きで、一人の時間を大切にする。',
    catchphrase: 'まあ、気楽にいこうよ！',
    loveStyle: '連絡は少なめでも、会うときは全力で楽しむタイプ',
    twitterBio: '🎵 音信不通だけど好きだよ｜マイペース恋愛担当',
    hashtags: ['#マイペース彼氏', '#自由人恋愛', '#連絡下手']
  },
  practical: {
    name: 'ケンジ',
    emoji: '🔧',
    color: '#10B981',
    personality: '実直で誠実。言葉より行動で示すタイプ。',
    catchphrase: '何か困ったことがあったら言ってね',
    loveStyle: 'プレゼントや手伝いなど、具体的な行動で愛情を表現',
    twitterBio: '🔧 言葉より行動で好きを伝える｜実直担当',
    hashtags: ['#実直彼氏', '#行動派恋愛', '#誠実さん']
  },
  empathetic: {
    name: 'ハル',
    emoji: '💕',
    color: '#EC4899',
    personality: '感情豊かで共感力が高い。スキンシップが好き。',
    catchphrase: '今の気持ち、教えてくれると嬉しいな',
    loveStyle: '毎日の連絡と感情の共有を大切にする甘えん坊タイプ',
    twitterBio: '💕 毎日連絡してほしい｜共感担当',
    hashtags: ['#甘えん坊彼氏', '#共感さん', '#濃厚愛']
  },
  avoidant: {
    name: 'リョウ',
    emoji: '🛡️',
    color: '#6B7280',
    personality: 'シャイで慎重。衝突を避ける平和主義者。',
    catchphrase: 'また今度でいいかな…',
    loveStyle: '喧嘩を避けて、穏やかな関係を保とうとする',
    twitterBio: '🛡️ 喧嘩は嫌いだな…｜回避担当',
    hashtags: ['#シャイ彼氏', '#喧嘩嫌い', '#平和主義']
  }
}

const diagnosisData: Record<string, {
  title: string
  description: string
  emoji: string
  color: string
  questions: Question[]
}> = {
  'love-communication': {
    title: '恋愛コミュニケーション診断',
    description: '20問で分かる！あなたの恋愛キャラは？',
    emoji: '💕',
    color: 'from-pink-400 to-purple-500',
    questions: loveCommunicationQuestions
  }
  // 他の診断もここに追加
}

export default function DiagnosisPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<boolean[]>([])
  const [showResult, setShowResult] = useState(false)

  const diagnosis = diagnosisData[params.id]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!diagnosis) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😢</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            診断が見つかりません
          </h1>
          <Link href="/diagnoses">
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              診断一覧に戻る
            </button>
          </Link>
        </div>
      </div>
    )
  }

  const handleAnswer = (isYes: boolean) => {
    const newAnswers = [...answers, isYes]
    setAnswers(newAnswers)

    if (currentQuestionIndex < diagnosis.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setShowResult(true)
    }
  }

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      setAnswers(answers.slice(0, -1))
    }
  }

  const getDiagnosisType = (): string => {
    const q1 = answers[0]
    const q17 = answers[16]
    const q18 = answers[17]
    
    const q2 = answers[1]
    const q10 = answers[9]
    const q12 = answers[11]
    
    const q4 = answers[3]
    const q1_no = !answers[0]
    
    const q14 = answers[13]
    const q16 = answers[15]

    // 優先順位：回避→共感→独立→実践
    if (q1 && q14 && q16) return 'avoidant'
    if (q1_no && q4 && q17) return 'empathetic'
    if (q1 && q17 && q18) return 'independent'
    if (q2 && q10 && q12) return 'practical'
    
    return 'independent'
  }

  const getScores = () => {
    const scores = { LAT: 0, ACK: 0, SYN: 0, ERR: 0, CON: 0 }
    
    answers.forEach((answer, index) => {
      if (answer && index < diagnosis.questions.length) {
        const category = diagnosis.questions[index].category
        scores[category]++
      }
    })
    
    return scores
  }

  const getCharacterInfo = (type: string): Character => {
    return characters[type] || characters.independent
  }

  const getTypeInfo = (type: string) => {
    const types = {
      independent: {
        name: '独立マイペース型',
        description: '自分のペースを大切にし、束縛を嫌うタイプ。連絡は少なめでも好意はある。'
      },
      practical: {
        name: '実践・誠実型',
        description: '行動で愛情を示すタイプ。言葉より実践的なサポートで気持ちを表現する。'
      },
      empathetic: {
        name: '共感・密着型',
        description: '感情の共有を重視するタイプ。密なコミュニケーションを求める。'
      },
      avoidant: {
        name: '回避・不安定型',
        description: '衝突を避け、感情的な話題から逃げるタイプ。安定関係を築くのが課題。'
      }
    }
    return types[type as keyof typeof types] || types.independent
  }

  const copyShareText = () => {
    const type = getDiagnosisType()
    const typeInfo = getTypeInfo(type)
    const character = getCharacterInfo(type)
    
    const shareText = `【恋愛コミュニケーション診断】\n私のタイプは${typeInfo.name}！\n推しキャラは${character.name}${character.emoji}\n${character.catchphrase}\n\n${character.twitterBio}\n${character.hashtags.join(' ')}`
    
    navigator.clipboard.writeText(shareText)
    alert('クリップボードにコピーしました！')
  }

  const shareOnTwitter = () => {
    const type = getDiagnosisType()
    const typeInfo = getTypeInfo(type)
    const character = getCharacterInfo(type)
    
    const shareText = `【恋愛コミュニケーション診断】\n私のタイプは${typeInfo.name}！\n推しキャラは${character.name}${character.emoji}\n${character.catchphrase}\n\n${character.twitterBio}\n${character.hashtags.join(' ')}`
    const encodedText = encodeURIComponent(shareText)
    window.open(`https://twitter.com/intent/tweet?text=${encodedText}`, '_blank')
  }

  if (showResult) {
    const type = getDiagnosisType()
    const typeInfo = getTypeInfo(type)
    const character = getCharacterInfo(type)
    const scores = getScores()

    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          {/* キャラクターカード */}
          <div className={`bg-white rounded-lg shadow-lg p-8 mb-6 text-center transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="mb-6">
              <div className="text-6xl mb-4 animate-bounce">{character.emoji}</div>
              <h1 className="text-3xl font-bold mb-2" style={{ color: character.color }}>
                {character.name}
              </h1>
              <h2 className="text-xl font-bold text-gray-600 mb-4">
                {typeInfo.name}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {typeInfo.description}
              </p>
              <div className="bg-pink-50 rounded-lg p-4 mb-4">
                <p className="text-lg font-medium text-pink-600 italic">
                  "{character.catchphrase}"
                </p>
              </div>
            </div>
          </div>

          {/* キャラクター詳細 */}
          <div className={`bg-white rounded-lg shadow-lg p-8 mb-6 transition-all duration-1000 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              🎭 キャラクター詳細
            </h3>
            <div className="space-y-4">
              <div>
                <span className="font-medium text-gray-700">性格：</span>
                <p className="text-gray-600">{character.personality}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">恋愛スタイル：</span>
                <p className="text-gray-600">{character.loveStyle}</p>
              </div>
            </div>
          </div>

          {/* SNSシェア */}
          <div className={`bg-white rounded-lg shadow-lg p-8 mb-6 transition-all duration-1000 delay-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              📱 シェアして推しを広げよう！
            </h3>
            <div className="flex gap-2">
              <button 
                onClick={copyShareText}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
              >
                📋 コピー
              </button>
              <button 
                onClick={shareOnTwitter}
                className="flex-1 bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
              >
                🐦 Xでシェア
              </button>
            </div>
          </div>

          {/* アクションボタン */}
          <div className={`text-center transition-all duration-1000 delay-400 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Link href="/diagnoses">
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                🔄 他の診断も試す
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const currentQuestion = diagnosis.questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / diagnosis.questions.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center p-4">
      <div className={`max-w-2xl w-full bg-white rounded-lg shadow-lg p-8 transition-all duration-1000 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* ヘッダー */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <span className="text-4xl mr-3">{diagnosis.emoji}</span>
            <h1 className="text-2xl font-bold text-gray-800">{diagnosis.title}</h1>
          </div>
          <p className="text-gray-600">{diagnosis.description}</p>
        </div>

        {/* 進捗表示 */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">
              質問 {currentQuestionIndex + 1} / {diagnosis.questions.length}
            </span>
            <span className="text-sm text-gray-600">
              カテゴリ: {currentQuestion.category}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className={`bg-gradient-to-r ${diagnosis.color} h-3 rounded-full transition-all duration-500`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* 質問 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Q{currentQuestion.id}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {currentQuestion.text}
          </p>
        </div>

        {/* 回答ボタン */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => handleAnswer(true)}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 hover:scale-105"
          >
            YES
          </button>
          <button
            onClick={() => handleAnswer(false)}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 hover:scale-105"
          >
            NO
          </button>
        </div>

        {/* 戻るボタン */}
        {currentQuestionIndex > 0 && (
          <button
            onClick={handleBack}
            className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
          >
            前の質問に戻る
          </button>
        )}
      </div>
    </div>
  )
}
