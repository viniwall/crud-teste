const botaoDolarAmericano = document.getElementById("dolar-americano")
botaoDolarAmericano.addEventListener("click", converterUSD)

const botaoDEuro = document.getElementById("euro")
botaoDEuro.addEventListener("click", converterEUR)

const botaoLibraEsterlina = document.getElementById("libra-esterlina")
botaoLibraEsterlina.addEventListener("click", converterGBP)

const botaoDolarCanadense = document.getElementById("dolar-canadense")
botaoDolarCanadense.addEventListener("click", converterCAD)

const botaoIeneJapones = document.getElementById("iene-japones")
botaoIeneJapones.addEventListener("click", converterJPY)

const botaoPesoArgentino = document.getElementById("peso-argentino")
botaoPesoArgentino.addEventListener("click", converterARS)

const botaoFrancoSuico = document.getElementById("franco-suico")
botaoFrancoSuico.addEventListener("click", converterCHF)

const botaoYuanChines = document.getElementById("yuan-chines")
botaoYuanChines.addEventListener("click", converterCNY)

const campoReal = document.getElementById("real-input")

const listaResultados = document.getElementById("lista-resultados")

function adicionarNaLista(valorEmReal, valorConvertido, simboloMoeda) {
    const itemLista = document.createElement("li");
    itemLista.innerText = `R$ ${valorEmReal.toFixed(2)} => ${simboloMoeda} ${valorConvertido.toFixed(2)}`;
    
    // forma de pilha
    listaResultados.prepend(itemLista);     
}

function converterUSD() {
    const valorAtual = Number(campoReal.value); 
    const cotacao = 5.25; 
    const resultado = valorAtual / cotacao;
    adicionarNaLista(valorAtual, resultado, "$");
}

function converterEUR() {
    const valorAtual = Number(campoReal.value);
    const cotacao = 6.09;
    const resultado = valorAtual / cotacao;
    adicionarNaLista(valorAtual, resultado, "€");
}

function converterGBP() {
    const valorAtual = Number(campoReal.value);
    const cotacao = 7.03;
    const resultado = valorAtual / cotacao;
    adicionarNaLista(valorAtual, resultado, "£");
}

function converterCAD() {
    const valorAtual = Number(campoReal.value);
    const cotacao = 3.87;
    const resultado = valorAtual / cotacao;
    adicionarNaLista(valorAtual, resultado, "C$");
}

function converterJPY() {
    const valorAtual = Number(campoReal.value);
    const cotacao = 0.033; 
    const resultado = valorAtual / cotacao;
    adicionarNaLista(valorAtual, resultado, "¥");
}

function converterARS() {
    const valorAtual = Number(campoReal.value);
    const cotacao = 0.0037; 
    const resultado = valorAtual / cotacao;
    adicionarNaLista(valorAtual, resultado, "ARS$");
}

function converterCHF() {
    const valorAtual = Number(campoReal.value);
    const cotacao = 6.76;
    const resultado = valorAtual / cotacao;
    adicionarNaLista(valorAtual, resultado, "Fr");
}

function converterCNY() {
    const valorAtual = Number(campoReal.value);
    const cotacao = 0.76;
    const resultado = valorAtual / cotacao;
    adicionarNaLista(valorAtual, resultado, "¥"); 
}