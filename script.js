const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Por que tem poluição?",
        alternativas: [
            {
                texto: "Ela é geralmente provocada pelo humano e suas atividades. ",
                afirmacao: "afirmacao"
            },
            {
                texto: "Por conta das alteraçõe químicas e físicas da natureza. ",
                afirmacao: "afirmacao"
            },
        ]
    },
    {
        enunciado: "Como se forma a lava dos vulcões?",
        alternativas: [
            {
                texto: "Quando as placas tectônicas se chocam. ",
                afirmacao: "afirmacao"
            },
            { 
                texto: "Com o tempo chuvoso se forma um abertura no chão. ",
                afirmacao: "afirmacao"
            },
        ]
    },
    {
        enunciado: "Como ajudar na poluição?",
        alternativas: [
            {
                texto:"Fazendo multirões para ajudar retirar os lixos da rua.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Jogar lixos em qualquer lugar. ",
                afirmacao: "afirmacao"
            },
        ]
    },
    {
        enunciado: "Qual a importância do Meio Ambiente?",
        alternativas: [
            {
                texto:"Onde estão os recursos naturais necessários para a nossa sobrevivência.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Apenas para preservar a natureza.",
                afirmacao: "afirmacao"
            },
        ]
    },
    {
        enunciado: "O que é desmatamento?",
        alternativas: [
            {
                texto:"É um processo pelo qual vastas áreas de florestas são deliberadamente removidas ou degradadas.",
                afirmacao: "afirmacao"
            },
            {
                texto: "É um processo pelo qual são implantadas várias árvores em uma determinada região.",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
}
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
caixaAlternativas.textContent = "";
mostraAlternativas();
        }

        function mostraAlternativas(){
            for(const alternativa of perguntaAtual.alternativas) {
                const botaoAlternativas = document.createElement("button");
                botaoAlternativas.textContent = alternativa.texto;
                botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
                caixaAlternativas.appendChild(botaoAlternativas);
            }
        }
        
        function respostaSelecionada(opcaoSelecionada) {
            const afirmacoes = opcaoSelecionada.afirmacao;
            historiaFinal += afirmacoes + " ";
            atual++;
            mostraPergunta();
        }
        
        function mostraResultado() {
            caixaPerguntas.textContent = "Em 2049...";
            textoResultado.textContent = historiaFinal;
            caixaAlternativas.textContent = "";
        }
        
        mostraPergunta();