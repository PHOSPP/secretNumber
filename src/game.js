//script do jogo
//! crie fun


var tentativas = 0;
var numeroSecreto = 0;

export function mudarNumeroSecreto() {
    Math.floor(Math.random()*100)+1;
}

export function incrementarTentativas() {
    tentativas++;
}

export function resetarJogo() {
    tentativas = 0;
}

export function getTentativas() {
    return tentativas;
}   

//TODO buscar um nome melhor para a função 
export function verificarValor(chute) {
    if (numeroSecreto == chute) {
        return 1
    }
    else if (numeroSecreto > chute) {
        return 2
    }
    else {
        return 3
    } 
    
}