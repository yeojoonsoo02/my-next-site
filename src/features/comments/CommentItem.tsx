// features/comments/CommentItem.tsx

type Props = {
    text: string;
    date: string;
    onDelete: () => void;
};

export default function CommentItem({ text, date, onDelete }: Props) {
    return (
        <li className="border rounded p-2 mb-2 flex justify-between items-center">
            <div>
                <div>{text}</div>
                <div className="text-sm text-gray-500">{date}</div>
            </div>
            <button onClick={onDelete} className="text-red-500 text-sm ml-4">
                ❌
            </button>
        </li>
    );
}