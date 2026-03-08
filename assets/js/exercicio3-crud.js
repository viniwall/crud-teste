let proximoId = 1

const campoTamanho = document.getElementById("campo-Tamanho")

const campoConstrucao = document.getElementById("campo-Construcao")

const botaoSalvar = document.getElementById("botao-salvar")

const campoLocal = document.getElementById("campo-local")

const campoPropriedade = document.getElementById("campo-Propriedade")

const campoValor = document.getElementById("campo-Valor")

const tbody = document.getElementById("a-cara")

botaoSalvar.addEventListener("click", salvar)

function salvar() {
    const local = campoLocal.value;
    const propriedade = campoPropriedade.value;
    const valor = campoValor.value;
    const tamanho = campoTamanho.value;
    const construcao = campoConstrucao.value;

    if (propriedade.length < 3) {
        alert("o nome deve conter mais de 2 caracteres!")
    } else if (propriedade.length > 100) {
        alert("o nome deve conter no máximo 100 caracteres")
    }

    const valorMetro = valor / tamanho;

    proximoId += 1

    criarLinha(proximoId, local, propriedade, valor, tamanho, valorMetro, construcao )

}

function criarLinha(proximoId, local, propriedade, valor, tamanho, valorMetro, construcao ) {
    const linha = `<tr>
                    <td>${proximoId}</td>
                    <td>${local}</td>
                    <td>${propriedade}</td>
                    <td>${valor}</td>
                    <td>${tamanho}</td>
                    <td>${valorMetro}</td>
                    <td>${construcao}</td>
                    </tr>`;
    //tbody.appenChild(linha)
    tbody.innerHTML = tbody.innerHTML + linha;
    // tbody.innertHTML += linha;
}