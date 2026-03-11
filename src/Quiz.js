import { useState, useEffect } from "react";
import questionsData from "./questions";
import logo from "./assets/logo.png";
import { deactivateSecurity } from "./Security";

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function Quiz({ onFinish }) {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);

  const [finished, setFinished] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const selectedQuestions = shuffle(questionsData)
      .slice(0, 10)
      .map(q => ({
        ...q,
        shuffledAnswers: shuffle(q.answers)
      }));

    setQuestions(selectedQuestions);
  }, []);

  if (!questions.length) return <p>Carregando...</p>;

  async function confirmAnswer() {
    const current = questions[index];

    const newAnswer = {
      question: current.question,
      answer: selected,
      correctAnswer: current.correct,
      isCorrect: selected === current.correct
    };

    const finalAnswers = [...answers, newAnswer];
    setAnswers(finalAnswers);
    setSelected(null);

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setSending(true);
      setError(false);

      deactivateSecurity();

      try {
        const result = await onFinish(finalAnswers);

        if (result?.success) {
          setFinished(true);
        } else {
          setError(true);
          setSending(false);
        }
      } catch (e) {
        console.error(e);
        setError(true);
        setSending(false);
      }
    }
  }

  if (finished) {
    return (
      <div className="quiz-wrapper">
        <div className="quiz-card">
          <h2>Erro ao enviar</h2>
          <p>Não foi possível enviar suas respostas.</p>
          <button
            className="confirm-btn"
            onClick={() => window.location.reload()}
          >
            Reiniciar prova
          </button>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="quiz-wrapper">
        <div className="quiz-card">
          <h2>Prova finalizada</h2>
          <p>Respostas enviadas com sucesso.</p>
          <p>Você pode fechar esta página.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-wrapper">
      <div className="quiz-card">
        <p className="question-number">
          Questão {index + 1} de {questions.length}
        </p>

        <h2>{questions[index].question}</h2>

        {questions[index].shuffledAnswers.map((a, i) => (
          <label
            key={i}
            className={`option ${selected === a ? "selected" : ""}`}
          >
            <input
              type="radio"
              name="answer"
              checked={selected === a}
              onChange={() => setSelected(a)}
            />
            <span className="radio-custom"></span>
            <span className="option-text">{a}</span>
          </label>
        ))}

        <button
          className="confirm-btn"
          disabled={!selected || sending}
          onClick={confirmAnswer}
        >
          {sending ? "Enviando..." : "Confirmar resposta"}
        </button>

        <img src={logo} alt="Logo" className="corner-image" />
      </div>
    </div>
  );
}
