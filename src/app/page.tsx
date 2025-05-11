export default function Home() {
  return (
    <main style={{ maxWidth: "600px", margin: "40px auto", padding: "20px" }}>
      <h1>준수의 웹 실험실</h1>
      <p>이 사이트는 GPT, 영양 분석, Firebase 등을 실험하는 공간입니다.</p>

      <h2>기능 목록</h2>
      <ul>
        <li>✅ 댓글 기능</li>
        <li>✅ 다크모드</li>
        <li>✅ 영양 성분 계산</li>
        <li>✅ GPT 연동 예정</li>
      </ul>

      <h2>💬 댓글</h2>
      <input
        id="commentInput"
        type="text"
        placeholder="댓글을 입력하세요"
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "10px",
          marginBottom: "10px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "6px",
        }}
      />
      <ul id="commentList"></ul>
    </main>
  );
}