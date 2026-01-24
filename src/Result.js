export default function Result({ answers }) {
  return (
    <div className="card">
      <h2>Resultado</h2>
      {answers.map((a, i) => (
        <p key={i}>
          <strong>{a.question}</strong><br/>
          Resposta: {a.answer}
        </p>
      ))}
    </div>
  );
}
