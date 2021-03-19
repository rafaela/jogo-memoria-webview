var um = document.getElementById("um");
var dois = document.getElementById("dois");
var tres = document.getElementById("tres");
var quatro = document.getElementById("quatro");
var cinco = document.getElementById("cinco");
var seis = document.getElementById("seis");
var btnReiniciar = document.getElementById("btnReiniciar");
var tbody = document.getElementById("tbody");

var salvar = document.getElementById("salvar");
var nome = document.getElementById("nome");

let numeros = [1, 2, 3, 4, 5, 6];
var tentativas = 0;
let valorbtn;
var jogadoresObj;
let posicaoAtual = 1;

function sorteiaNumeros(){
    numeros = numeros.sort(() => Math.random() - 0.5)
}

window.onload = function(){
    // Receber a string
    let jogadoresString = localStorage.getItem('jogador');
    // transformar em objeto novamente
    jogadoresObj = JSON.parse(jogadoresString);

    console.log(jogadoresObj)
}

function jogo(){
    sorteiaNumeros()
    um.onclick = function(){
        document.getElementById("um").style.backgroundColor = "#F44336";
        document.getElementById("body").style.backgroundColor = "#F44336";
        document.getElementById("container").style.backgroundColor = "#F44336";
        document.getElementById("um").style.display = 'none';
        analisarJogada(1);
    }

    dois.onclick = function(){
        document.getElementById("dois").style.backgroundColor = " #E91E63";
        document.getElementById("body").style.backgroundColor = " #E91E63";
        document.getElementById("container").style.backgroundColor = " #E91E63";
        document.getElementById("dois").style.display = 'none';
        analisarJogada(2);
    }

    tres.onclick = function(){
        document.getElementById("tres").style.backgroundColor = "#9C27B0";
        document.getElementById("body").style.backgroundColor = "#9C27B0";
        document.getElementById("container").style.backgroundColor = "#9C27B0";
        document.getElementById("tres").style.display = 'none';
        analisarJogada(3);
    }

    quatro.onclick = function(){
        document.getElementById("quatro").style.backgroundColor = "#673AB7";
        document.getElementById("body").style.backgroundColor = "#673AB7";
        document.getElementById("container").style.backgroundColor = "#673AB7";
        document.getElementById("quatro").style.display = 'none';
        analisarJogada(4);
    }

    cinco.onclick = function(){
        document.getElementById("cinco").style.backgroundColor = "#559cd6";
        document.getElementById("body").style.backgroundColor = "#559cd6";
        document.getElementById("container").style.backgroundColor = "#559cd6";
        document.getElementById("cinco").style.display = 'none';
        analisarJogada(5);
    }
    
    seis.onclick = function(){
        document.getElementById("seis").style.backgroundColor = "#3F51B5";
        document.getElementById("body").style.backgroundColor = "#3F51B5";
        document.getElementById("container").style.backgroundColor = "#3F51B5";
        document.getElementById("seis").style.display = 'none';
        analisarJogada(6);
    }

    

}

function reiniciarJogo(){
    btnReiniciar.onclick = function(){
        document.getElementById("um").style.display = "block";
        document.getElementById("dois").style.display = "block";
        document.getElementById("tres").style.display = "block";
        document.getElementById("quatro").style.display = "block";
        document.getElementById("cinco").style.display = "block";
        document.getElementById("seis").style.display = "block";
        document.getElementById("body").style.backgroundColor = "#fff";
        document.getElementById("container").style.backgroundColor = "#fff";
        nome.value = "";
        tentativas = 0;
        document.getElementById("jogadas").innerHTML = tentativas;
        sorteiaNumeros();
    }
}

function reiniciar(){
    document.getElementById("um").style.display = "block";
    document.getElementById("dois").style.display = "block";
    document.getElementById("tres").style.display = "block";
    document.getElementById("quatro").style.display = "block";
    document.getElementById("cinco").style.display = "block";
    document.getElementById("seis").style.display = "block";
    document.getElementById("body").style.backgroundColor = "#fff";
    document.getElementById("container").style.backgroundColor = "#fff";
}



function analisarJogada(botao){

    tentativas++;
    document.getElementById("jogadas").innerHTML = tentativas;
    var valorBtn = botao;

    if(valorBtn == numeros[posicaoAtual - 1]){
        posicaoAtual++;
    }
    else{
        reiniciar();
        posicaoAtual = 1;

    }
    if(posicaoAtual == 7){
        alert("Parabéns. Salve seus dados para que fique registrado no ranking.")
    }
}


function countDown(secs) {
    var btn = document.getElementById('btn');
    var 
}

function criaTabela(){
    salvar.onclick = function (){
        let jogador = {'nome': nome.value, 'jogadas': tentativas, 'tempo': tentativas};
        localStorage['jogador'] = JSON.stringify(jogador);
        

        var linha = document.createElement("tr");
        var campoNome= document.createElement("td");
        var campoJogadas= document.createElement("td");
        var campoTempo= document.createElement("td");

        var nomej = document.createTextNode(nome.value); 
        var jog = document.createTextNode(tentativas);
        var tempo = document.createTextNode(tentativas);

        campoNome.appendChild(nomej);
        campoJogadas.appendChild(jog);
        campoTempo.appendChild(tempo);

        linha.appendChild(campoNome);
        linha.appendChild(campoJogadas);

        tbody.appendChild(linha);
    }

}