let resultado = document.getElementById("calculator__output");

function adicionar(valor) {
  resultado.value += valor;
}

function limpar() {
  resultado.value = 0;
}

function apagar() {
  resultado.value = resultado.value.slice(0, -1);
}

function calcular() {
  resultado.value = eval(resultado.value);
}

function insertValue(value) {
    resultado.value += value;
}

resultado.value = 10