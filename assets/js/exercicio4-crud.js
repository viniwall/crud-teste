let proximoId = 1;

const campoNome = document.getElementById("nome-filme");
const campoGenero = document.getElementById("genero");
const campoDuracao = document.getElementById("duracao");
const campoNota = document.getElementById("nota");
const campoClassificacao = document.getElementById("classificacao");
const campoAssistido = document.getElementById("assistido");

const tbody = document.getElementById("tabela")

const botaoSalvar = document.getElementById("salvar");
botaoSalvar.addEventListener("click", salvar);

function salvar(){
    const nome = campoNome.value;
    const genero = campoGenero.value;
    const duracao = campoDuracao.value;
    const nota = campoNota.value;
    const classificacao = campoAssistido.value;
    const assistido = campoAssistido.value;

    if (nome.length <= 2) {
        alert("O nome deve conter pelo menos 3 caracteres")
        return;
    } else if (nome.length >= 100) {
        alert("O nome deve conter até 100 caracteres")
        return;
    } 
        
    criarLinha(proximoId, nome, genero, duracao, nota, classificacao, assistido)
    
    proximoId += 1
}

function criarLinha(proximoId, nome, genero, duracao, nota, classificacao, assistido) {
    let linha = `<tr>
                    <td>${proximoId}</td>
                    <td>${nome}</td>
                    <td>${genero}</td>
                    <td>${duracao}</td>
                    <td>${nota}</td>
                    <td>${classificacao}</td>
                    <td>${assistido}</td>
                </tr>`

    tbody.innerHTML += linha
}