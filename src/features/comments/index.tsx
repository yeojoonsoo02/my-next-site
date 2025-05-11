import CommentSection from '@/features/comments';

export default function Home() {
  return (
    <main>
      <h1>준수의 Next.js 실험실 🧪</h1>
      <p>이곳은 GPT, Firebase, 영양 분석 기능을 실험하는 공간입니다.</p>

      <CommentSection />
    </main>
  );
}