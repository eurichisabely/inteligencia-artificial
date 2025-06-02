const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativas: [
        {
        texto: "texto da alternativa1", 
        afirmacao: "afirmacao1"
        },
        {
        texto: "texto da alternativa2", 
        afirmacao: "afirmacao2"
        },
        ]
    },

    {
        enunciado: "Pergunta 2",
        alternativas: [
        {
        texto: "texto da alternativa1", 
        afirmacao: "afirmacao1"
        },
        {
        texto: "texto da alternativa2", 
        afirmacao: "afirmacao2"
        },
        ]
    },

    {
        enunciado: "Pergunta 3",
        alternativas: [
        {
        texto: "texto da alternativa1", 
        afirmacao: "afirmacao1"
        },
        {
        texto: "texto da alternativa2", 
        afirmacao: "afirmacao2"
        },
        ]
    },
]
let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativa();
}


function mostraAlternativa(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto; 
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

mostraPergunta();