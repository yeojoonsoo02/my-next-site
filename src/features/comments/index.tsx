// features/comments/index.tsx
'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc as firestoreDoc,
    Timestamp,
    query,
    orderBy,
} from 'firebase/firestore';

import CommentItem from './CommentItem';
import { Comment } from './comment.model';

export default function CommentSection() {
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

    const deleteComment = async (id: string) => {
        await deleteDoc(firestoreDoc(db, 'comments', id));
        loadComments();
    };

    useEffect(() => {
        loadComments();
    }, []);

    return (
        <div>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addComment()}
                placeholder="댓글을 입력하세요"
                className="w-full p-2 border rounded mb-2"
            />

            <ul>
                {comments.map((comment) => (
                    <CommentItem
                        key={comment.id}
                        text={comment.text}
                        date={comment.createdAt.toDate().toLocaleString()}
                        onDelete={() => deleteComment(comment.id)}
                    />
                ))}
            </ul>
        </div>
    );
}