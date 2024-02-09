const perguntas = [
    {
      pergunta: "Qual é o nome do irmão de Bean?",
      respostas: [
        "Derek",
        "Ovaldo",
        "Elfo"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome da personagem principal de Desencanto?",
      respostas: [
        "Elara",
        "Bean",
        "Luci"
      ],
      correta: 1
    },
    {
      pergunta: "Qual o nome da criada da Bean?",
      respostas: [
        "Benta",
        "Tia Anastácia",
        "Oona"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a espécie de Luci em Desencanto?",
      respostas: [
        "Demônio",
        "Goblin",
        "Elfo"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maior vilã da série?",
      respostas: [
        "Criada",
        "Beijoca",
        "Dagmar"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o nome do cientista louco que trabalha para o rei Zøg?",
      respostas: [
        "Bruxo",
        "Bruxério",
        "Ovaldo"
      ],
      correta: 1
    },
    {
      pergunta: "Do que o Derek mais tem medo?",
      respostas: [
        "De pasta de amendoim",
        "De bater o dedinho na quina",
        "Da frigideira que a manteiga derrete"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o nome do elfo que se torna amigo de Bean e Luci?",
      respostas: [
        "Elfo",
        "Beijoca",
        "Chocado (o quêêê)"
      ],
      correta: 0
    },
    {
      pergunta: "Qual o nome da sereia que é namorada da Bean?",
      respostas: [
        "Mora",
        "Dagmar",
        "Rebecca"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o melhor personagem de Desencanto?",
      respostas: [
        "Luci"
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem=template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        corretas.delete(item)
        if(estaCorreta) { 
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    // coloca a pergumta na tela
    quiz.appendChild(quizItem)
  }