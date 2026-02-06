function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    // Validação básica
    if (isNaN(quantidade) || isNaN(de) || isNaN(ate)) {
        alert('Por favor, preencha todos os campos corretamente!');
        return;
    }

    if (de >= ate) {
        alert('O campo "Do número" deve ser menor que "Até o número"!');
        return;
    }

    if (quantidade > (ate - de + 1)) {
        alert('A quantidade de números não pode ser maior que o intervalo disponível!');
        return;
    }

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);

        while(sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    // Ordenando em ordem crescente
    sorteados.sort((a, b) => a - b);

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;

    alterarStatusBotoes();
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function alterarStatusBotoes(){
    let botaoSortear = document.getElementById('btn-sortear');
    let botaoReiniciar = document.getElementById('btn-reiniciar');

    // Sortear
    if (botaoSortear.classList.contains('container__botao')){
        botaoSortear.classList.remove('container__botao');
        botaoSortear.classList.add('container__botao-desabilitado');
    } else{
        botaoSortear.classList.remove('container__botao-desabilitado');
        botaoSortear.classList.add('container__botao');
    }

    // Reiniciar
    if (botaoReiniciar.classList.contains('container__botao-desabilitado')){
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    } else{
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';

    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;

    alterarStatusBotoes();
}