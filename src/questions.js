const questions = [
  {
    question: "O que significa o erro LOS na ONU?",
    answers: ["Perda de sinal óptico", "Erro de autenticação", "Falha elétrica", "Problema no Wi-Fi"],
    correct: "Perda de sinal óptico"
  },
  {
    question: "Qual é a principal função da ONU?",
    answers: ["Converter sinal óptico em elétrico", "Distribuir IPs", "Gerenciar VLANs", "Autenticar clientes"],
    correct: "Converter sinal óptico em elétrico"
  },
  {
    question: "Qual potência óptica é considerada aceitável para ONU?",
    answers: ["Entre -14 dBm e -27 dBm", "Entre 0 e -5 dBm", "Abaixo de -40 dBm", "Somente -10 dBm"],
    correct: "Entre -14 dBm e -27 dBm"
  },
  {
    question: "Ao identificar LOS vermelho, o que o N1 deve verificar primeiro?",
    answers: ["Fibra/conector/rompimento", "Wi-Fi do cliente", "Plano contratado", "Senha do roteador"],
    correct: "Fibra/conector/rompimento"
  },
  {
    question: "Qual equipamento fica na central do provedor?",
    answers: ["OLT", "ONU", "Roteador do cliente", "Computador"],
    correct: "OLT"
  },
  {
    question: "O que é VLAN?",
    answers: ["Uma rede lógica separada", "Um tipo de cabo", "Um roteador", "Um protocolo Wi-Fi"],
    correct: "Uma rede lógica separada"
  },
  {
    question: "Para que serve VLAN no provedor?",
    answers: ["Separar tráfego de serviços", "Aumentar velocidade", "Corrigir LOS", "Criar Wi-Fi"],
    correct: "Separar tráfego de serviços"
  },
  {
    question: "Qual postura correta com cliente mal-educado?",
    answers: ["Manter calma e profissionalismo", "Responder no mesmo tom", "Encerrar sem aviso", "Ignorar"],
    correct: "Manter calma e profissionalismo"
  },
  {
    question: "O que é OLT?",
    answers: ["Equipamento central de fibra", "ONU do cliente", "Servidor IXC", "Switch residencial"],
    correct: "Equipamento central de fibra"
  },
  {
    question: "Cliente conectado ao Wi-Fi mas sem internet, o que verificar?",
    answers: ["Status da ONU/autenticação", "Trocar celular", "Reinstalar app", "Resetar PC"],
    correct: "Status da ONU/autenticação"
  },
  {
    question: "Qual a função do IXC?",
    answers: ["Gerenciar clientes e planos", "Medir potência", "Distribuir fibra", "Criar VLAN"],
    correct: "Gerenciar clientes e planos"
  },
  {
    question: "O que significa ONU offline?",
    answers: ["ONU sem comunicação com OLT", "Wi-Fi desligado", "Cabo de rede solto", "Senha errada"],
    correct: "ONU sem comunicação com OLT"
  },
  {
    question: "Quando encaminhar chamado para N2?",
    answers: ["Quando foge do procedimento N1", "Cliente reclama", "Internet lenta", "Senha errada"],
    correct: "Quando foge do procedimento N1"
  },
  {
    question: "O que é potência óptica alta demais?",
    answers: ["Pode danificar a ONU", "Melhora a internet", "Não afeta", "Resolve LOS"],
    correct: "Pode danificar a ONU"
  },
  {
    question: "Qual luz indica sinal normal na ONU?",
    answers: ["PON verde fixa", "LOS vermelha", "LAN apagada", "Power piscando"],
    correct: "PON verde fixa"
  },
  {
    question: "Cliente reclama de lentidão. Primeira ação?",
    answers: ["Testar via cabo", "Trocar ONU", "Abrir OS", "Resetar OLT"],
    correct: "Testar via cabo"
  },
  {
    question: "O que é OPA!?",
    answers: ["Sistema de atendimento/telefonia", "OLT", "ONU", "Roteador"],
    correct: "Sistema de atendimento/telefonia"
  },
  {
    question: "Cliente sem energia, o que acontece com a ONU?",
    answers: ["Desliga e fica offline", "Continua online", "Pisca LOS", "Funciona normal"],
    correct: "Desliga e fica offline"
  },
  {
    question: "Qual cabo liga ONU ao roteador?",
    answers: ["Cabo de rede (Ethernet)", "Fibra óptica", "Coaxial", "Serial"],
    correct: "Cabo de rede (Ethernet)"
  },
  {
    question: "O que o N1 NÃO deve fazer?",
    answers: ["Alterar configuração da OLT", "Orientar cliente", "Abrir chamado", "Testar conexão"],
    correct: "Alterar configuração da OLT"
  },
  {
    question: "Cliente esqueceu senha do Wi-Fi. O que fazer?",
    answers: ["Solicitar CPF e informar a senha correta", "Trocar ONU", "Abrir OS externa", "Resetar ONU"],
    correct: "Solicitar CPF e informar a senha correta"
  },
  {
    question: "Qual informação é essencial antes de abrir OS?",
    answers: ["Endereço completo", "Marca do celular", "Senha Wi-Fi", "Modelo da TV"],
    correct: "Endereço completo"
  },
  {
    question: "O que é rompimento de fibra?",
    answers: ["Fibra física danificada", "Erro de login", "Plano bloqueado", "Wi-Fi fraco"],
    correct: "Fibra física danificada"
  },
  {
    question: "Como identificar problema interno no cliente?",
    answers: ["Teste direto na ONU", "Ver VLAN", "Ver OLT", "Ver backbone"],
    correct: "Teste direto na ONU"
  },
  {
    question: "Qual atitude demonstra empatia?",
    answers: ["Ouvir e explicar com calma", "Interromper", "Culpar cliente", "Ignorar"],
    correct: "Ouvir e explicar com calma"
  },
  {
    question: "O que fazer ao finalizar atendimento?",
    answers: ["Registrar no sistema", "Encerrar ligação", "Apagar histórico", "Ignorar"],
    correct: "Registrar no sistema"
  },
  {
    question: "Cliente sem internet após tempestade. Suspeita?",
    answers: ["Rompimento de fibra", "Plano cancelado", "Senha errada", "Vírus"],
    correct: "Rompimento de fibra"
  },
  {
    question: "ONU com PON piscando indica?",
    answers: ["Tentando registrar na OLT", "Normal", "Sem energia", "Erro Wi-Fi"],
    correct: "Tentando registrar na OLT"
  },
  {
    question: "VLAN errada pode causar?",
    answers: ["Sem navegação", "LOS", "Sem energia", "Wi-Fi fraco"],
    correct: "Sem navegação"
  },
  {
    question: "Qual linguagem usar com cliente?",
    answers: ["Simples e clara", "Técnica", "Cheia de siglas", "Formal excessiva"],
    correct: "Simples e clara"
  }, 
  {
    question: "Cliente relata quedas frequentes. O que perguntar?",
    answers: ["Horários e frequência", "Modelo do celular", "Cor do roteador", "Senha"],
    correct: "Horários e frequência"
  },
  {
    question: "O que é backbone?",
    answers: ["Rede principal do provedor", "ONU do cliente", "Wi-Fi", "VLAN"],
    correct: "Rede principal do provedor"
  },
  {
    question: "O que fazer se cliente não estiver em casa?",
    answers: ["Agendar visita", "Escalonar para o N2", "Aguardar cliente retornar e solicitar fotos caso necessário", "Transferir para fila e esperar que outro atendente resolva"],
    correct: "Aguardar cliente retornar e solicitar fotos caso necessário"
  },
  {
    question: "Qual luz indica energia na ONU?",
    answers: ["Power", "LOS", "PON", "LAN"],
    correct: "Power"
  },
  {
    question: "Atendimento N1 deve ser?",
    answers: ["Ágil e resolutivo", "Demorado", "Técnico demais", "Informal"],
    correct: "Ágil e resolutivo"
  },
  {
    question: "Cliente quer cancelar. O que fazer?",
    answers: ["Encaminhar para retenção", "Encerrar ligação", "Discutir", "Ignorar"],
    correct: "Encaminhar para retenção"
  },
  {
    question: "ONU autenticada significa?",
    answers: ["Conectada à OLT", "Wi-Fi ligado", "Cabo solto", "Erro LOS"],
    correct: "Conectada à OLT"
  },
  {
    question: "Qual atitude é antiética?",
    answers: ["Mentir para o cliente", "Ser educado", "Explicar", "Registrar"],
    correct: "Mentir para o cliente"
  },
  {
    question: "Qual teste comprova velocidade real?",
    answers: ["Via cabo", "Wi-Fi", "Celular", "TV"],
    correct: "Via cabo"
  },
  {
    question: "N1 deve seguir?",
    answers: ["Procedimentos da empresa", "Opinião própria", "Achismos", "Redes sociais"],
    correct: "Procedimentos da empresa"
  },
{
  question: "O que significa o alerta LOS em uma ONU?",
  answers: ["Perda de sinal óptico", "Erro de autenticação", "ONU desligada", "Problema no Wi-Fi"],
  correct: "Perda de sinal óptico"
},
{
  question: "Qual é a primeira ação do N1 ao identificar LOS para vários clientes?",
  answers: ["Abrir chamado de rompimento", "Reiniciar a ONU", "Trocar o roteador", "Alterar plano"],
  correct: "Abrir chamado de rompimento"
},
{
  question: "Em qual equipamento fica a porta PON?",
  answers: ["OLT", "ONU", "Roteador", "Switch do cliente"],
  correct: "OLT"
},
{
  question: "Qual nível de potência óptica geralmente é considerado aceitável?",
  answers: ["Entre -14 dBm e -27 dBm", "Entre 0 e 5 dBm", "Acima de -40 dBm", "Sempre positivo"],
  correct: "Entre -14 dBm e -27 dBm"
},
{
  question: "Qual ação o N1 deve tomar se a potência estiver muito baixa?",
  answers: ["Escalar para N2 ou campo", "Trocar senha do Wi-Fi", "Reiniciar modem", "Cancelar contrato"],
  correct: "Escalar para N2 ou campo"
},
{
  question: "Qual sistema é usado para gerenciamento de clientes em muitos ISPs?",
  answers: ["IXC", "Excel", "Word", "WhatsApp"],
  correct: "IXC"
},
{
  question: "Para que serve uma VLAN?",
  answers: ["Segmentar redes logicamente", "Aumentar velocidade do Wi-Fi", "Medir potência óptica", "Trocar IP"],
  correct: "Segmentar redes logicamente"
},
{
  question: "O que é PPPoE?",
  answers: ["Protocolo de autenticação de acesso", "Tipo de fibra", "Modelo de roteador", "Plano de internet"],
  correct: "Protocolo de autenticação de acesso"
},
{
  question: "Se o cliente errou a senha PPPoE, o que acontece?",
  answers: ["Sem navegação", "LOS", "ONU desliga", "Wi-Fi cai"],
  correct: "Sem navegação"
},
{
  question: "O que o N1 deve confirmar antes de abrir visita técnica?",
  answers: ["Testes básicos realizados", "Opinião do cliente", "Horário do técnico", "Modelo do carro"],
  correct: "Testes básicos realizados"
},
{
  question: "Qual atitude correta diante de um cliente mal educado?",
  answers: ["Manter postura profissional", "Desligar a ligação", "Responder no mesmo tom", "Ignorar"],
  correct: "Manter postura profissional"
},
{
  question: "O que é ONU?",
  answers: ["Equipamento que recebe sinal de fibra no cliente", "Switch de rede", "Antena", "Servidor"],
  correct: "Equipamento que recebe sinal de fibra no cliente"
},
{
  question: "O que é OLT?",
  answers: ["Equipamento central da rede GPON", "Roteador do cliente", "Caixa de emenda", "Servidor IXC"],
  correct: "Equipamento central da rede GPON"
},
{
  question: "Qual é o papel do N1 no suporte?",
  answers: ["Atendimento inicial e diagnóstico básico", "Manutenção de fibra", "Configurar OLT", "Subir postes"],
  correct: "Atendimento inicial e diagnóstico básico"
},
{
  question: "Quando o chamado deve ser escalado?",
  answers: ["Quando foge do escopo do N1", "Sempre", "Nunca", "Quando o cliente pede"],
  correct: "Quando foge do escopo do N1"
},
{
  question: "Qual informação é essencial validar com o cliente?",
  answers: ["CPF ou CNPJ", "Marca da TV", "Número do celular pessoal", "Profissão"],
  correct: "CPF ou CNPJ"
},
{
  question: "O que é FTTH?",
  answers: ["Fibra até a casa do cliente", "Fibra até o poste", "Internet via rádio", "ADSL"],
  correct: "Fibra até a casa do cliente"
},
{
  question: "Qual cabo é usado na rede interna do cliente?",
  answers: ["Cabo de rede Ethernet", "Fibra drop", "Cabo coaxial", "Cabo telefônico"],
  correct: "Cabo de rede Ethernet"
},
{
  question: "O que pode causar lentidão mesmo sem LOS?",
  answers: ["Wi-Fi congestionado", "Fibra rompida", "ONU desligada", "OLT offline"],
  correct: "Wi-Fi congestionado"
},
{
  question: "Qual é a atitude correta ao não saber responder algo?",
  answers: ["Consultar base ou escalar", "Inventar resposta", "Encerrar atendimento", "Ignorar cliente"],
  correct: "Consultar base ou escalar"
},
{
  question: "O que é CTO?",
  answers: ["Caixa de Terminação Óptica", "Central telefônica", "Servidor", "Roteador"],
  correct: "Caixa de Terminação Óptica"
},
{
  question: "Um cliente sem luz na ONU indica?",
  answers: ["Falta de energia", "LOS", "Erro PPPoE", "Problema na OLT"],
  correct: "Falta de energia"
},
{
  question: "Qual ferramenta ajuda a medir potência óptica?",
  answers: ["Power Meter", "Multímetro comum", "Notebook", "Celular"],
  correct: "Power Meter"
},
{
  question: "O que é rompimento de fibra?",
  answers: ["Interrupção física do cabo", "Erro de login", "Wi-Fi fraco", "Plano bloqueado"],
  correct: "Interrupção física do cabo"
},
{
  question: "O que o N1 deve registrar no chamado?",
  answers: ["Testes e informações relevantes", "Opiniões pessoais", "Conversas paralelas", "Achismos"],
  correct: "Testes e informações relevantes"
},
{
  question: "Qual postura transmite confiança ao cliente?",
  answers: ["Clareza e educação", "Pressa", "Ironia", "Respostas curtas"],
  correct: "Clareza e educação"
},
{
  question: "O que é NAT?",
  answers: ["Tradução de endereços de rede", "Tipo de fibra", "Protocolo óptico", "Modelo de ONU"],
  correct: "Tradução de endereços de rede"
},
{
  question: "Qual porta normalmente é usada para conexão LAN?",
  answers: ["RJ45", "SC/APC", "USB", "HDMI"],
  correct: "RJ45"
},
{
  question: "O que é SLA?",
  answers: ["Acordo de nível de serviço", "Tipo de fibra", "Sistema interno", "Plano de internet"],
  correct: "Acordo de nível de serviço"
},
{
  question: "O que fazer se o cliente estiver sem internet após queda de energia?",
  answers: ["Orientar reinício dos equipamentos", "Trocar plano", "Abrir rompimento", "Cancelar contrato"],
  correct: "Orientar reinício dos equipamentos"
},
{
  question: "Qual é a função do roteador?",
  answers: ["Distribuir a conexão de rede", "Gerar sinal óptico", "Autenticar na OLT", "Fazer fusão"],
  correct: "Distribuir a conexão de rede"
},
{
  question: "Qual comportamento é proibido ao N1?",
  answers: ["Tratar mal o cliente", "Seguir script", "Registrar chamado", "Escalar problemas"],
  correct: "Tratar mal o cliente"
},
{
  question: "Quando usar linguagem técnica?",
  answers: ["Apenas se o cliente entender", "Sempre", "Nunca", "Somente por e-mail"],
  correct: "Apenas se o cliente entender"
},
{
  question: "O que é IP?",
  answers: ["Identificador de dispositivo na rede", "Modelo de ONU", "Tipo de fibra", "Plano"],
  correct: "Identificador de dispositivo na rede"
},
{
  question: "Um cliente relata internet lenta apenas no celular. O que verificar?",
  answers: ["Wi-Fi", "Fibra rompida", "OLT offline", "VLAN errada"],
  correct: "Wi-Fi"
},
{
  question: "Qual é a prioridade do suporte N1?",
  answers: ["Resolver no primeiro contato", "Encerrar rápido", "Transferir sempre", "Evitar atendimento"],
  correct: "Resolver no primeiro contato"
},
{
  question: "O que é fibra monomodo?",
  answers: ["Fibra usada em longas distâncias", "Fibra coaxial", "Fibra metálica", "Cabo de rede"],
  correct: "Fibra usada em longas distâncias"
},
{
  question: "O que o N1 nunca deve prometer?",
  answers: ["Algo fora do seu controle", "Abertura de chamado", "Registro de protocolo", "Escalonamento"],
  correct: "Algo fora do seu controle"
},
{
  question: "O que significa RX na fibra?",
  answers: ["Recepção de sinal", "Transmissão", "Erro", "Reset"],
  correct: "Recepção de sinal"
},
{
  question: "O que define um bom atendimento?",
  answers: ["Educação, clareza e solução", "Velocidade apenas", "Uso de termos técnicos", "Promessas"],
  correct: "Educação, clareza e solução"
}

 
];

export default questions;
