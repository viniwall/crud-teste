// Pega o elemento do HTML que possui o id "botao-cadastrar"
// e guarda esse elemento dentro da variável botaoCadastrar
const botaoCadastrar = document.getElementById("botao-cadastrar");

// Adiciona um "ouvinte de evento" ao botão.
// Quando o botão for clicado, a função cadastrarJogo será executada.
botaoCadastrar.addEventListener("click", cadastrarJogo);

// Pega o campo de input do HTML que possui o id "campo-nome"
const campoNome = document.getElementById("campo-nome");

campoNome.addEventListener("keydown", eventEnterCampoNome);

function eventEnterCampoNome(event) {
    if(event.key === "Enter") {
        cadastrarJogo();
    }
}

// Função responsável por cadastrar (adicionar) um jogo na lista
function cadastrarJogo(){

    // Pega o valor digitado dentro do input
    const nome = campoNome.value.trim();

    if (nome.length < 2) {
        alert("o nome deve conter mais de 2 caracteres");
        return;
    }


    // Cria um novo elemento <li> (item de lista) no HTML
    // Exemplo: <li></li>
    const tagLi = document.createElement("li");

    // Coloca dentro do <li> o nome que foi digitado no campo
    // Exemplo: <li>Mario</li>
    tagLi.innerHTML = nome;

    // Pega a lista não ordenada (UL) do HTML que possui o id "jogos"
    // Exemplo de estrutura: <ul id="jogos"></ul>
    const tagUl = document.getElementById("jogos");

    // Adiciona o novo <li> criado dentro da <ul>
    // Ou seja, adiciona um novo item na lista de jogos
    tagUl.appendChild(tagLi);

    campoNome.value = "";

    campoNome.focus;
}

/*  */