const perguntas = [
    {
      pergunta: "O que significa 'DOM' em JavaScript?",
      respostas: [
        "Document Object Model",
        "Data Object Model",
        "Dynamic Object Model",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Comparação estrita",
        "Atribuição",
        "Comparação solta",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a palavra-chave usada para declarar uma constante em JavaScript?",
      respostas: [
        "let",
        "var",
        "const",
      ],
      correta: 2
    },
    {
      pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
      respostas: [
        "print()",
        "log()",
        "write()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "removeLast()",
        "deleteLast()",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'querySelector()' faz em JavaScript?",
      respostas: [
        "Seleciona o primeiro elemento com a classe especificada",
        "Seleciona todos os elementos com a classe especificada",
        "Seleciona o primeiro elemento com o ID especificado",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'forEach()' em JavaScript?",
      respostas: [
        "Itera sobre uma matriz e retorna uma nova matriz",
        "Itera sobre uma matriz e executa uma função para cada elemento",
        "Classifica os elementos de uma matriz em ordem alfabética",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de declarar um array em JavaScript?",
      respostas: [
        "var colors = (red, blue, green)",
        "array colors = [red, blue, green]",
        "var colors = ['red', 'blue', 'green']",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o resultado de 10 + '5' em JavaScript?",
      respostas: [
        "15",
        "105",
        "Erro",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a finalidade do método 'parseInt()' em JavaScript?",
      respostas: [
        "Converter uma string em um número inteiro",
        "Converter um número inteiro em uma string",
        "Arredondar um número para o inteiro mais próximo",
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas //aqui vai rodar o código apenas nessa parte, não em todo o loop que é necessário, por isso, não é suficiente para mudar os valores lá no pé da página, assim, vamos lá para o evento.
  
  
  //loop ou laço de repetição
  for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-'+ perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
  // este evento é a parte do código que está mantendo o programa rodando no loop para todas as vezes que alguma resposta é clicada, ou seja, apenas aqui existem coisas clicáveis acontecendo com inteligência.
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
  //remove o texto do span dentro de dl dt no html
  quizItem.querySelector('dl dt').remove()
  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
  
  }