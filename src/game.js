//script do jogo
//! crie fun


var tentativas = 0;
var numeroSecreto = 0;

export function gerarNumeroSecreto() {
    numeroSecreto = Math.floor(Math.random()*100)+1;
    return numeroSecreto;
}

export function getNumeroSecreto() {
    return numeroSecreto;
}

export function incrementarTentativas() {
    tentativas++;
}

export function resetarTentativas() {
    tentativas = 0;
}

export function getTentativas() {
    return tentativas;
}   

export function resultadoDoChute(chute) {
    if (numeroSecreto === chute) {
        return 1;
    }
    else if (numeroSecreto > chute) {
        return 2;
    }
    else {
        return 3;
    } 
    
}

export function resetarJogo() {
    resetarTentativas()
    gerarNumeroSecreto()
}