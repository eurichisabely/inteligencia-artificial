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
            texto: "A diferença principal está na forma de obtenção e preparo. Nas culturas africanas, as plantas eram colhidas e preparadas de forma tradicional, muitas vezes por curandeiros, enquanto as drogas modernas são frequentemente processadas industrialmente. O conhecimento tradicional das ervas medicinais africanas permitia um uso mais controlado e com menor risco de abuso.",
            afirmacao: "O respeito pelo poder da natureza e a transmissão oral do conhecimento sobre as ervas medicinais eram pilares para a utilização dessas substâncias em contextos terapêuticos e espirituais, mitigando os riscos associados ao uso desinformado."
            },
        ]
    },
    {
        enunciado: " Muitas comunidades africanas possuem um vasto conhecimento sobre o uso de ervas para tratar diversas enfermidades, incluindo aquelas relacionadas ao abuso de substâncias. Como a sabedoria ancestral africana sobre plantas medicinais pode oferecer perspectivas inovadoras para o tratamento de dependências químicas, contrastando com abordagens puramente ocidentais?",
        alternativas: [
            {
            texto: "A sabedoria ancestral africana oferece uma abordagem holística que considera o indivíduo como um todo – corpo, mente e espírito. Diferente das abordagens ocidentais que muitas vezes se concentram apenas nos aspectos químicos da dependência, as práticas africanas podem incorporar rituais, apoio comunitário e o uso de ervas com propriedades desintoxicantes ou estabilizadoras do humor",
            afirmacao: "Essa perspectiva integrativa reconhece que a dependência não é apenas uma questão biológica, mas também social, espiritual e psicológica, e que o tratamento eficaz deve abordar todas essas dimensões."
            },
            {
            texto: "A cultura africana valoriza a comunidade e a família como pilares de apoio. No tratamento de dependências, isso se traduz em abordagens que envolvem a reintegração do indivíduo à sua comunidade, com o auxílio de ervas medicinais que podem ajudar na recuperação física e mental. As abordagens ocidentais, por vezes, carecem desse forte componente comunitário.",
            afirmacao: " O envolvimento da família e da comunidade no processo de cura, juntamente com o uso de ervas medicinais específicas para a desintoxicação e o equilíbrio, fortalece o indivíduo e oferece um ambiente de suporte contínuo, crucial para a recuperação a longo prazo."
            },
        ]
    },
    {
        enunciado: " Considerando a rica história do uso de plantas na África, como as tradições culturais africanas distinguem o uso terapêutico de certas plantas (mesmo aquelas com potencial psicoativo) do que seria considerado abuso de substâncias, e qual o papel das ervas medicinais nesse discernimento?",
        alternativas: [
            {
            texto: "A distinção reside no propósito e na supervisão. Nas culturas africanas, o uso de plantas com potencial psicoativo para fins terapêuticos ou rituais é geralmente supervisionado por curandeiros ou anciãos, que possuem conhecimento profundo sobre a dosagem e o contexto apropriado. O abuso, por outro lado, carece dessa orientação e é motivado por propósitos não curativos.",
            afirmacao: "As ervas medicinais, nesse contexto, são vistas como ferramentas poderosas que exigem respeito e conhecimento para serem usadas de forma benéfica, e não para fins de evasão irresponsável ou autodestrutiva."
            },
            {
            texto: "A distinção é marcada pela intenção de cura e pelo impacto na comunidade. O uso terapêutico de plantas nas culturas africanas visa restaurar o equilíbrio do indivíduo e da comunidade, enquanto o abuso de substâncias leva à desintegração social e pessoal. As ervas medicinais são utilizadas para promover a saúde e o bem-estar, e não para causar danos.",
            afirmacao: " O sistema de valores e crenças das culturas africanas promove um uso responsável e ético das plantas, onde o bem-estar coletivo é priorizado, e o uso de ervas medicinais é um reflexo desse compromisso com a harmonia e a saúde da comunidade."
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
