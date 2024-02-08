const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variable myVar;",
        "let myVar;"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o método que converte uma string em um número em JavaScript?",
      respostas: [
        "parseInt()",
        "stringToNumber()",
        "toNumber()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "="
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'push()' faz em JavaScript?",
      respostas: [
        "Remove o último elemento de um array",
        "Adiciona um elemento ao final de um array",
        "Inverte a ordem dos elementos em um array"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função usada para imprimir algo no console em JavaScript?",
      respostas: [
        "print()",
        "console.log()",
        "output()"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de comentar código em JavaScript?",
      respostas: [
        "<!-- Comentário -->",
        "// Comentário",
        "/* Comentário */"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o resultado de '5' + 3 em JavaScript?",
      respostas: [
        "53",
        "8",
        "5 + 3"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a palavra-chave usada para declarar uma função em JavaScript?",
      respostas: [
        "method",
        "function",
        "func"
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'indexOf()' retorna quando o elemento não é encontrado em um array?",
      respostas: [
        "null",
        "undefined",
        "-1"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o resultado de 3 * '3' em JavaScript?",
      respostas: [
        "9",
        "33",
        "TypeError"
      ],
      correta: 2
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