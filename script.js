const visor = document.getElementById('visor');

function digitar(numero) {
    visor.value = visor.value + numero;
}

function definirOperacao(operador) {
    visor.value = visor.value + operador;
}

function limpar() {
    visor.value = '';
}

function calcular() {
    try {
        visor.value = eval(visor.value);
    } catch (error) {
        visor.value = 'Erro';
    }
}

function apagarUltimo() {
    visor.value = visor.value.slice(0, -1);
}
