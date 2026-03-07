const campoInserirNick = document.getElementById("nick-input");
const campoQuantidadeStrike = document.getElementById("strike-quantidade");
const botaoSalvarCanal = document.getElementById("salvar-canal")
botaoSalvarCanal.addEventListener("click", salvar)

const listaCanais = document.getElementById("lista-canais")

function adicionarCanalLista(nick, quantidadeStrike) {
    const itemLista =   document.createElement("li")
    itemLista.innerHTML = `${nick} strikes: ${quantidadeStrike}`
    listaCanais.appendChild(itemLista)
}

function salvar() {
    const nick = campoInserirNick.value.trim();
    const quantidadeStrike = campoQuantidadeStrike.value;

    if (quantidadeStrike >= 3) {
        alert("Canal está banido!")
    } else {
        adicionarCanalLista(nick, quantidadeStrike)
    }
}