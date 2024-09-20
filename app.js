let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.5});
}
function exibirMensagemInicial(){
    exibirNaTela('h1', 'Jogo do número secreto!');
    exibirNaTela('p','Escolha um número e entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    tentativas += 1;

    if (chute == numeroSecreto){
        exibirNaTela('h1','Acertou!');
        exibirNaTela('p',`Você descobriu o número secreto!!!! e o número de tentativas foi de ${tentativas}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (chute > numeroSecreto){
            exibirNaTela('h1','Infelizmento você errou');
            exibirNaTela('p',`O número secreto é menor que ${chute}`);
        }else{
            exibirNaTela('h1','Infelizmento você errou');
            exibirNaTela('p',`O número secreto é maior que ${chute}`);

        }

        limparCampo();
    }


}

function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElemntosLista = listaDeNumerosSorteados.length;
    
   console.log(listaDeNumerosSorteados);
   
   if (quantidadeDeElemntosLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
   }else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
   }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarGame() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}