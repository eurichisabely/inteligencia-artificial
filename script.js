const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Em algumas culturas africanas tradicionais, certas plantas com propriedades psicoativas eram usadas em rituais espirituais e medicinais. Como essa prática se diferencia do uso recreativo de drogas na sociedade moderna e qual o papel das ervas medicinais africanas nesse contexto?",
        alternativas: [
            {
            texto: "A principal diferença reside na intenção e no contexto do uso. Nas culturas africanas, o uso de plantas psicoativas era frequentemente ritualístico, guiado por anciãos e visava a cura ou a conexão espiritual, enquanto o uso recreativo de drogas modernas é muitas vezes individual, sem orientação e com foco na alteração da consciência.",
            afirmacao: " As ervas medicinais africanas, nesse sentido, eram vistas como ferramentas sagradas para o bem-estar da comunidade, e não como substâncias para fins de evasão ou vício."
            },
            {
            texto: "Alternativa2",
            afirmacao: "afirmacao1"
            },
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            {
            texto: "Trazer dignidade e expandir a visibilidade cultural  afro-americana.",
            afirmacao: "O 2PAC foi fundamental para a cultura afro-americana. "
            },
            {
            texto: "Alternativa2",
            afirmacao: "afirmacao1"
            },
        ]
    },
    {
        enunciado: "Pergunta 3",
        alternativas: [
            {
            texto: "Trazer dignidade e expandir a visibilidade cultural  afro-americana.",
            afirmacao: "O 2PAC foi fundamental para a cultura afro-americana. "
            },
            {
            texto: "Alternativa2",
            afirmacao: "afirmacao1"
            },
        ]
    },

];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativa();
}

function mostraAlternativa(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click",()=>respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativa);
    
}
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();

}

function mostraResultado(){
    caixaPerguntas.textContent = "Conclusão...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

}

mostraPergunta();
