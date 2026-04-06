import { resetarJogo, getTentativas, incrementarTentativas, verificarValor } from "./game.js"

//scripts do site


export function exibirTentativas() {
    const tentativas = document.getElementById("tentativas");
    tentativas.innerText = getTentativas();
}

export function valorChute() {
    var chute = document.getElementById("inputNumero");
    var resultado = verificarValor(chute)
    tratarSaida(resultado)
}

export function tratarSaida(x) {
    if (resultado == 1) {
        document.getElementById("janelaSeAcertou").innerText = ("Congratulations! You guessed the number!")
    }
    else if (resultado == 2) {
        document.getElementById("janelaSeAcertou").innerText = ("Try guessing lower!")
    }
    else {
        document.getElementById("janelaSeAcertou").innerText = ("Try guessing higher!")     
    } 
        
}
