const questions = [
 {
    question: "O que significa LOS?",
    answers: ["Atenuação na Fibra", "Risco de queda de sinal", "ONU/ONT não autorizada", "Rompimento ou atenuação da Potência"],
    correct: "Rompimento ou atenuação da Potência"
  },

  {
    question: "Qual seria o motivo de uma queda por Dying Gasp?",
    answers: ["Atenuação na Fibra", "Falta de energia elétrica", "ONU/ONT não autorizada", "Roteador não conectado na ONU"],
    correct: "Falta de energia elétrica"
  },

{
    question: "Qual os passos para subir uma ONU/ONT?",
    answers: ["Copiar nome do cliente, entrar em Autorizar ONU, selecionar a ONU pela GPON, clicar em autorizar, alterar NOME/VLAN, Salvar e Autorizar ", "Procurando a ONU em CLIENTES FIBRA", "Deletar e Autorizar novamente a onu", "Usar a Opção do Radius para localizar ONU"],
    correct: "Copiar nome do cliente, entrar em Autorizar ONU, selecionar a ONU pela GPON, clicar em autorizar, alterar NOME/VLAN, Salvar e Autorizar"
  },

{
    question: "Para que serve o menu RADIUS?",
    answers: ["Encontrar o MAC do roteador", "Localizar ONU", "Encontrar IP para acesso", "Localizar o DNS do roteador"],
    correct: "Encontrar IP para acesso"
    },
{
    question: "Qual seria a faixa de Potência ideal para funcionamento da ONU/ONT?",
    answers: ["Entre -15Db e -27Db", "Entre -7Db e -30Db", "Entre -20Db e -28Db", "Entre 15Db e 29Db"],
    correct: "Entre -15Db e -27Db"
    },
{
    question: "Como saber se a ONU/ONT está pedindo autorização?",
    answers: ["Luz LOS acende", "PON piscando lentamente", "Luz WAN apagada", "Luz de LAN apagada"],
    correct: "PON piscando lentamente"
    },
{
    question: "Para que serve o programa consulta OLT?",
    answers: ["Verificar ONU ou Roteador que esteja no sistema", "Pesquisar na OLT qual ONU está vinculada", "Verificar roteador resetado", "Verificar potência do roteador"],
    correct: "Verificar ONU ou Roteador que esteja no sistema"
    },
{
    question: "Qual simbolo representa no OPA! os clientes que estão aguardando atendimento?",
    answers: ["Relógio", "Robô", "Balão de conversa", "Duas pessoas simbolizando conversa"],
    correct: "Relógio"
    },
{
    question: "Qual seria os canais 'ideais' para o wifi 2.4Ghz?",
    answers: ["canal 1 e 11", "canal 2 e 3", "canal 5 e 9", "canal 7 e 12"],
    correct: "canal 1 e 11"
    },
{
    question: "O que seria uma ONT?",
    answers: ["Optical Network Terminal", "Optical Network Translate", "Optical Network Technical", "Operation Network Terminal"],
    correct: "Optical Network Terminal"
    },



];

export default questions;
