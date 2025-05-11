// features/comments/comment.model.ts

import { Timestamp } from 'firebase/firestore';

export type Comment = {
    id: string;
    text: string;
    createdAt: Timestamp;
};