// começa com 2 por ja existir uma linha na tabela
let proximoId = 2;

// para saber qual colaborador estamos editando
let indexParaEditar = -1;

const botaoSalvar = document.getElementById("botao-salvar");
botaoSalvar.addEventListener("click", salvar);

const campoNome = document.getElementById("campo-nome");
const campoCargo = document.getElementById("campo-cargo");      
const campoHoras = document.getElementById("campo-horas");
const tbody = document.getElementById("colaboradores");

function salvar(){

    const nome = campoNome.value.trim();
    const cargo = campoCargo.value;
    const horas = campoHoras.value;
    
    if (nome.length < 3) {
        alert("Nome deve conter no mínimo 3 caracteres");
        return;
    } else if (nome.length > 100) {
        alert("nome deve conter no máximo 100 caracteres");
        return;
    }
    console.log(cargo);
    
    if (cargo === "") {
        alert("Cargo deve ser selecionado");
        return;
    }
    
    if (horas < 40 || horas > 400) {
        alert("Quantidade de horas deve ser entre 40 e 400 horas");
        return;
    }
    
    const valorHora = obterValorHoraPorCargo(cargo);

    const salarioBruto = calcularSalarioBruto(valorHora, horas);

    if (indexParaEditar === -1) {
        criarLinha(nome, cargo, horas, valorHora, salarioBruto, proximoId);

        proximoId += 1;
    } else {
        editarLinha(nome, cargo, horas, valorHora, salarioBruto);
    }

    limparCampos();
}

function calcularSalarioBruto(valorHora, quantidadeHoras) {
    const salarioBruto = valorHora * quantidadeHoras;
    return salarioBruto;
}

function obterValorHoraPorCargo(cargo) {
    if (cargo === "Junior") {
        return 10;
    } else if (cargo === "Pleno") {
        return 22.72;
    } else if (cargo === "Senior") {
        return 40.91;
    } else {
        return 0;
    }
}

function criarLinha(nome, cargo, horas, valorHora, salarioBruto, id) {
    const linha = `  <tr class="border-b border-gray-700 hover:bg-gray-700">
                        <td class="px-4 py-3">${id}</td>
                        <td class="px-4 py-3">${nome}</td>
                        <td class="px-4 py-3">${cargo}</td>
                        <td class="px-4 py-3">${horas}</td>
                        <td class="px-4 py-3">R$ ${salarioBruto.toFixed(2)}</td>
                        <td class="px-4 py-3 flex gap-2">

                            <button
                                class="botao-editar bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-3 py-1 rounded-md text-sm transition">
                                Editar
                            </button>

                            <button
                                class="botao-apagar bg-red-600 hover:bg-red-700 text-white font-semibold px-3 py-1 rounded-md text-sm transition">
                                Excluir
                            </button>

                        </td>
                    </tr>`

    tbody.innerHTML += linha;

    adicionarCliqueBotoes();
    
}

function editarLinha(nome, cargo, horas, valorHora, salarioBruto) {
    const linhaEditar = tbody.children[indexParaEditar - 1];

    // alterar a coluna do nome
    linhaEditar.children[1].innerHTML = nome;
    linhaEditar.children[2].innerHTML = cargo;
    linhaEditar.children[3].innerHTML = horas;
    linhaEditar.children[4].innerHTML = `R$ ${salarioBruto.toFixed(2)}`;
}

function limparCampos() {
    campoNome.value = "";
    campoHoras.value = "";
    campoCargo.value = "";

    indexParaEditar = -1;
}

function adicionarCliqueBotoes() {
    let editarBotoes = document.getElementsByClassName("botao-editar");
    for (let i = 0; i < editarBotoes.length; i += 1) {
        let botaoEditar = editarBotoes[i];
        botaoEditar.addEventListener("click", preencherCamposParaEditar);
    }

    let apagarBotoes = document.getElementsByClassName("botao-apagar");
    for (let i = 0; i < apagarBotoes.length; i += 1) {
        let botaoApagar = apagarBotoes[i];
        botaoApagar.addEventListener("click", confirmarParaApagar);
    }
    
}

function preencherCamposParaEditar(event) {
    const botaoEditar = event.target;
    const coluna = botaoEditar.parentElement;
    const linha = coluna.parentElement;
    const colunasDaLinha = linha.children;
    const id = colunasDaLinha[0].innerHTML;
    const nome = colunasDaLinha[1].innerHTML;
    const cargo = colunasDaLinha[2].innerHTML;
    const horas = colunasDaLinha[3].innerHTML;
    
    campoNome.value = nome;
    campoCargo.value = cargo;
    campoHoras.value = horas;

    indexParaEditar = linha.rowIndex;
}

function confirmarParaApagar(event) {

    const confirmarApagar = confirm("Deseja realmente apagar?")
    if (confirmarApagar === false){
        return;
    }

    const botaoClique = event.target;
    const coluna = botaoClique.parentElement;
    const linha = coluna.parentElement;
    tbody.removeChild(linha);

    console.log("Colaborador apagado com sucesso")
}

adicionarCliqueBotoes()
