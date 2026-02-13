import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  addDoc,
  query,
  where,
  orderBy,
  Timestamp,
  DocumentData
} from 'firebase/firestore';
import { db } from './config';

// ユーザーデータの型定義
export interface UserData {
  email: string;
  username?: string;
  displayName?: string;
  avatarUrl?: string;
  createdAt: Timestamp;
}

// 診断結果データの型定義
export interface ResultData {
  userId: string;
  characterId: 'rico' | 'haru' | 'miyu' | 'sora';
  scores: {
    LAT: number;
    ACK: number;
    SYN: number;
    ERR: number;
    CON: number;
  };
  answers: boolean[];
  createdAt: Timestamp;
}

// ユーザーを作成
export const createUser = async (uid: string, userData: Omit<UserData, 'createdAt'>) => {
  try {
    const userRef = doc(db, 'users', uid);
    const userWithTimestamp = {
      ...userData,
      createdAt: Timestamp.now()
    };
    await setDoc(userRef, userWithTimestamp);
    return userWithTimestamp;
  } catch (error) {
    console.error('ユーザー作成エラー:', error);
    throw error;
  }
};

// ユーザーを取得
export const getUser = async (uid: string) => {
  try {
    const userRef = doc(db, 'users', uid);
    const userDoc = await getDoc(userRef);
    
    if (userDoc.exists()) {
      return userDoc.data() as UserData;
    }
    return null;
  } catch (error) {
    console.error('ユーザー取得エラー:', error);
    throw error;
  }
};

// 診断結果を保存
export const saveResult = async (userId: string, resultData: Omit<ResultData, 'createdAt'>) => {
  try {
    const resultsRef = collection(db, 'results');
    const resultWithTimestamp = {
      ...resultData,
      createdAt: Timestamp.now()
    };
    const docRef = await addDoc(resultsRef, resultWithTimestamp);
    return { id: docRef.id, ...resultWithTimestamp };
  } catch (error) {
    console.error('診断結果保存エラー:', error);
    throw error;
  }
};

// ユーザーの診断結果を取得
export const getUserResults = async (userId: string) => {
  try {
    const resultsRef = collection(db, 'results');
    const q = query(
      resultsRef,
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    const results: (ResultData & { id: string })[] = [];
    
    querySnapshot.forEach((doc) => {
      results.push({
        id: doc.id,
        ...doc.data() as ResultData
      });
    });
    
    return results;
  } catch (error) {
    console.error('診断結果取得エラー:', error);
    throw error;
  }
};

// 最新の診断結果を取得
export const getLatestResult = async (userId: string) => {
  try {
    const results = await getUserResults(userId);
    return results.length > 0 ? results[0] : null;
  } catch (error) {
    console.error('最新診断結果取得エラー:', error);
    throw error;
  }
};
