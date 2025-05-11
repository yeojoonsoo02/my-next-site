'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import {
  collection,
  addDoc,
  getDocs,
  Timestamp,
  query,
  orderBy,
} from 'firebase/firestore';

type Comment = {
  id: string;
  text: string;
  createdAt: Timestamp;
};

export default function Home() {
  const [input, setInput] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);

  const loadComments = async () => {
    const q = query(collection(db, 'comments'), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    const docs = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Comment[];
    setComments(docs);
  };

  const addComment = async () => {
    if (!input.trim()) return;
    await addDoc(collection(db, 'comments'), {
      text: input,
      createdAt: Timestamp.now(),
    });
    setInput('');
    loadComments();
  };

  useEffect(() => {
    loadComments();
  }, []);

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">💬 댓글 테스트</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && addComment()}
        placeholder="댓글을 입력하세요"
        className="w-full p-2 border rounded mb-2"
      />

      <ul>
        {comments.map((comment) => (
          <li key={comment.id} className="border rounded p-2 mb-2">
            <div>{comment.text}</div>
            <div className="text-sm text-gray-500">
              {comment.createdAt.toDate().toLocaleString()}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}