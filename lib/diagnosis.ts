// 診断ロジック集約ファイル

export type Category = 'LAT' | 'ACK' | 'SYN' | 'ERR' | 'CON';

export interface Question {
  id: number;
  text: string;
  category: Category;
}

export interface Scores {
  LAT: number;
  ACK: number;
  SYN: number;
  ERR: number;
  CON: number;
}

export type DiagnosisType = 'independent' | 'practical' | 'empathetic' | 'avoidant' | 'unclassified';

export interface DiagnosisResult {
  type: DiagnosisType;
  typeName: string;
  description: string;
  scores: Scores;
  advice: string[];
}

// 質問データ
export const questions: Question[] = [
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
  { id: 15, text: '「話し合いたい」と言うと動揺・フリーズするか？', category: 'ERR' },
  { id: 16, text: '機嫌を損ねると理由を言わず引きこもるか？', category: 'ERR' },
  
  // CON（接続目的）
  { id: 17, text: '連絡は基本的に用件がある時だけか？', category: 'CON' },
  { id: 18, text: '「今何してる？」といった雑談LINEは来ないか？', category: 'CON' },
  { id: 19, text: '複数人の場には来るが、サシには慎重か？', category: 'CON' },
  { id: 20, text: '表情や態度から考えていることが読み取れないか？', category: 'CON' },
];

// スコア計算
export function getScores(answers: boolean[]): Scores {
  const scores: Scores = {
    LAT: 0,
    ACK: 0,
    SYN: 0,
    ERR: 0,
    CON: 0,
  };

  answers.forEach((answer, index) => {
    if (answer && index < questions.length) {
      const category = questions[index].category;
      scores[category]++;
    }
  });

  return scores;
}

// タイプ判定
export function getDiagnosisType(answers: boolean[]): DiagnosisType {
  // キーとなる質問のインデックス（0ベース）
  const q1 = answers[0]; // 独立マイペース型
  const q17 = answers[16];
  const q18 = answers[17];
  
  const q2 = answers[1]; // 実践・誠実型
  const q10 = answers[9];
  const q12 = answers[11];
  
  const q4 = answers[3]; // 共感・密着型
  const q1_no = !answers[0];
  
  const q14 = answers[13]; // 回避・不安定型
  const q16 = answers[15];

  // 優先順位：回避→共感→独立→実践
  if (q1 && q14 && q16) {
    return 'avoidant';
  }
  if (q1_no && q4 && q17) {
    return 'empathetic';
  }
  if (q1 && q17 && q18) {
    return 'independent';
  }
  if (q2 && q10 && q12) {
    return 'practical';
  }
  
  return 'unclassified';
}

// タイプ情報
export function getTypeInfo(type: DiagnosisType): { name: string; description: string } {
  switch (type) {
    case 'independent':
      return {
        name: '独立マイペース型',
        description: '自分のペースを大切にし、束縛を嫌うタイプ。連絡は少なめでも好意はある。'
      };
    case 'practical':
      return {
        name: '実践・誠実型',
        description: '行動で愛情を示すタイプ。言葉より実践的なサポートで気持ちを表現する。'
      };
    case 'empathetic':
      return {
        name: '共感・密着型',
        description: '感情の共有を重視するタイプ。密なコミュニケーションを求める。'
      };
    case 'avoidant':
      return {
        name: '回避・不安定型',
        description: '衝突を避け、感情的な話題から逃げるタイプ。安定関係を築くのが課題。'
      };
    case 'unclassified':
      return {
        name: '未分類（調整中）',
        description: '特徴がはっきりしないタイプ。より詳細な分析が必要。'
      };
  }
}

// アドバイス生成
export function getAdvice(type: DiagnosisType): string[] {
  const baseAdvice = [
    '「表情」ではなく「履歴」を信じる（行動ログ重視）',
    '「感情」ではなく「お願い」で伝える（具体的リクエスト）',
    '「連絡」＝「愛情」ではない（返信速度と好意を切り離す）'
  ];

  // タイプ別にアドバイスを並び替える（仮実装）
  switch (type) {
    case 'independent':
      return [baseAdvice[2], baseAdvice[0], baseAdvice[1]];
    case 'practical':
      return [baseAdvice[0], baseAdvice[1], baseAdvice[2]];
    case 'empathetic':
      return [baseAdvice[1], baseAdvice[2], baseAdvice[0]];
    case 'avoidant':
      return [baseAdvice[1], baseAdvice[0], baseAdvice[2]];
    default:
      return baseAdvice;
  }
}

// 診断結果生成
export function generateDiagnosisResult(answers: boolean[]): DiagnosisResult {
  const type = getDiagnosisType(answers);
  const typeInfo = getTypeInfo(type);
  const scores = getScores(answers);
  const advice = getAdvice(type);

  return {
    type,
    typeName: typeInfo.name,
    description: typeInfo.description,
    scores,
    advice
  };
}
