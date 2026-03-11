import { useState } from "react";
import Quiz from "./Quiz";
import "./App.css";
import logo from "./assets/logo.png";
import { activateSecurity } from "./Security";
import emailjs from "emailjs-com";


function App() {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [userName, setUserName] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [blocked] = useState(false);


async function sendEmail(data) {
  const total = data.length;
  const correct = data.filter(q => q.isCorrect).length;
  const score = Math.round((correct / total) * 100);
  const status = score >= 60 ? "APROVADO" : "RECUPERAÇÃO";

  const statusIcon = status === "APROVADO" ? "✅" : "⚠️";

  const message = data.map((a, i) => (
`------------------------------------
${i + 1}. ${a.question}

Resposta: ${a.answer}
Correta: ${a.correctAnswer}
Resultado: ${a.isCorrect ? "✅" : "❌"}
`
  )).join("\n");

  const templateParams = {
    user_name: userName,
    score,
    status: `${statusIcon} ${status}`,
    message
  };

  try {
    await emailjs.send(
      "service_2tdcsiv",     // ex: service_x123abc
      "template_6knhybj",    // ex: template_k9s8d7
      templateParams,
      "k8WBXVr9r9E3MSQAO"      // ex: AbC123XyZ
    );

    return { success: true };

  } catch (error) {
    console.error("Erro EmailJS:", error);
    return { success: false };
  }
}





  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
        disabled={blocked}
      >
        {darkMode ? "☀️ Claro" : "🌙 Escuro"}
      </button>

      {!started && (
        <div className="quiz-wrapper">
          <div className="quiz-card">
            <h2>Digite seu nome</h2>

            <input
              className="name-input"
              type="text"
              placeholder="Seu nome"
              value={userName}
              onChange={e => setUserName(e.target.value)}
            />

            <button
              className="confirm-btn"
              disabled={!userName.trim()}
              onClick={() => {
                activateSecurity();
                setStarted(true);
              }}
            >
              Iniciar
            </button>

            <img src={logo} alt="Logo" className="corner-image" />
          </div>
        </div>
      )}

      {started && !finished && (
        <Quiz
          onFinish={async answers => {
            const result = await sendEmail(answers);
            if (result.success) setFinished(true);
            return result;
          }}
        />
      )}

      {finished && (
        <div className="quiz-wrapper">
          <div className="quiz-card">
            <h2>Obrigado, {userName}!</h2>
            <p>Suas respostas foram enviadas com sucesso.</p>
            <p>Você pode fechar a página.</p>
          </div>
          <img src={logo} alt="Logo" className="corner-image" />
        </div>
      )}
    </div>
  );
}

export default App;
