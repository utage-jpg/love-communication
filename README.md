# 恋愛コミュニケーション診断

20問の質問に答えて、あなたの恋愛コミュニケーションスタイルを診断するWebアプリケーションです。

## 技術スタック

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React** (useStateで状態管理)

## 機能

- 20問のYES/NO質問による診断
- 5つのカテゴリでスコアを集計（LAT/ACK/SYN/ERR/CON）
- 4つの診断タイプを判定
- タイプ別のアドバイス表示
- 再診断機能

## 診断タイプ

1. **独立マイペース型** - 自分のペースを大切にし、束縛を嫌うタイプ
2. **実践・誠実型** - 行動で愛情を示すタイプ
3. **共感・密着型** - 感情の共有を重視するタイプ
4. **回避・不安定型** - 衝突を避け、感情的な話題から逃げるタイプ

## プロジェクト構成

```
love-communication-diagnosis/
├── app/                    # Next.js App Router
│   ├── globals.css        # グローバルスタイル
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx           # トップページ
│   ├── diagnosis/         # 診断ページ
│   │   └── page.tsx
│   └── result/            # 結果ページ
│       └── page.tsx
├── components/            # Reactコンポーネント
│   └── QuestionCard.tsx   # 質問カードコンポーネント
├── lib/                   # ロジック集約
│   └── diagnosis.ts       # 診断ロジック
├── public/               # 静的ファイル
├── package.json          # 依存関係
├── tsconfig.json         # TypeScript設定
├── tailwind.config.js    # Tailwind CSS設定
├── postcss.config.js     # PostCSS設定
└── next.config.js        # Next.js設定
```

## セットアップと実行

### 方法1: Next.jsバージョン（推奨）

1. **依存関係のインストール**
   ```bash
   npm install
   ```

2. **開発サーバーの起動**
   ```bash
   npm run dev
   ```

3. **ブラウザでアクセス**
   ```
   http://localhost:3000
   ```

### 方法2: スタンドアロンHTMLバージョン（簡単）

npmのインストール問題を回避するため、単一のHTMLファイルとしても提供しています。

1. **HTMLファイルを直接開く**
   ```bash
   # ブラウザで直接開く
   open index.html
   
   # または
   start index.html
   ```

2. **ブラウザでアクセス**
   ```
   file:///path/to/love-communication-diagnosis/index.html
   ```

HTMLバージョンはTailwind CSSをCDNから読み込むため、追加のセットアップは不要です。

## 使い方

1. トップページで「診断を始める」をクリック
2. 20問の質問にYES/NOで回答
3. 診断結果でタイプとアドバイスを確認
4. 「もう一度診断する」で再診断

## 診断ロジック

### 質問カテゴリ

- **LAT（通信速度）**: 返信速度や連絡頻度に関する質問
- **ACK（言葉・反応）**: 言葉での反応や共感に関する質問
- **SYN（行動・同期）**: 行動やサポートに関する質問
- **ERR（エラー回避）**: 衝突回避や問題解決に関する質問
- **CON（接続目的）**: 接続の目的や意図に関する質問

### 判定ロジック

キーとなる質問の組み合わせでタイプを判定：

- **独立マイペース型**: Q1, Q17, Q18 が YES
- **実践・誠実型**: Q2, Q10, Q12 が YES
- **共感・密着型**: Q1, Q4, Q17 が NO
- **回避・不安定型**: Q1, Q14, Q16 が YES

優先順位：回避→共感→独立→実践

## 今後の拡張案

- 結果の永続化（データベース保存）
- より精密な判定ロジック
- SNSシェア機能
- 診断結果の履歴管理
- モバイルアプリ化
