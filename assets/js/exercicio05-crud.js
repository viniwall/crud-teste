const campoModelo = document.getElementById("modelo");

const campoMarca = document.getElementById("marca");

const campoAno = document.getElementById("ano");

const campoValor = document.getElementById("valor");

const tbody = document.getElementById("tabela")

const campoPortasQuantidade = document.getElementById("portas-quantidade");

const botaoSalvar = document.getElementById("salvar");
botaoSalvar.addEventListener("click", salvar);

function salvar() {

const modelo = campoModelo.value;
const marca = campoMarca.value;
const ano = campoAno.value;
const valor = campoValor.value;
const portasQuantidade = campoPortasQuantidade.value;

const anoValor = new Date().getFullYear();

if (ano > (anoValor+2)) {
    alert('O carro não pode ser do futuro');
    return;
}

let idadeCarro = (ano - anoValor);

criarLinha(modelo,marca,ano,valor,portasQuantidade,idadeCarro);

}

function criarLinha(modelo,marca,ano,valor,portasQuantidade,idadeCarro) {
    const linha = `<tr>
                    <td>${modelo}<td>
                    <td>${marca}<td>
                    <td>${ano}<td>
                    <td>${valor}<td>
                    <td>${portasQuantidade}<td>
                    <td>${idadeCarro}<td>
                    <tr>`;
                    //lembrar que falta o proximo id aqui ainda
    tbody.innerHTML = tbody.innerHTML + linha
}