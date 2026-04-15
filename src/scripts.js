import { resetarJogo, getTentativas, incrementarTentativas, resultadoDoChute, getNumeroSecreto } from "./game.js"

//scripts do site
var tentativas = getTentativas()
export function exibirTentativas() {
    const tentativas = document.getElementById("tentativas");
    tentativas.innerText = getTentativas();
}

export function valorChute() {
    var valorDoChute = document.getElementById("inputNumero");
    var chute = Number(valorDoChute.value);
    if (isNaN(chute) || chute < 1 || chute > 100) {
        document.getElementById("janelaSeAcertou").innerText = "Please enter a number between 1 and 100.";
        return;
    } 
    var resultado = resultadoDoChute(chute);
    tratarSaida(resultado);

}

export function tratarSaida(resultado) {
    if (resultado == 1) {
        document.getElementById("janelaSeAcertou").innerText = ("Congratulations! You guessed the number!")
    }
    else if (resultado == 2) {
        incrementarTentativas()
        exibirTentativas()
        document.getElementById("janelaSeAcertou").innerText = ("Try guessing higher!")
    }
    else {
        incrementarTentativas();
        exibirTentativas()
        document.getElementById("janelaSeAcertou").innerText = ("Try guessing lower!")     
    } 
        
}

export function restart() {
    resetarJogo();
    exibirTentativas();
    document.getElementById("inputNumero").value = "";
    document.getElementById("janelaSeAcertou").innerText = "";
}