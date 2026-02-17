
let day;
let date = new Date().getDay();

switch (date) {
    case 0:
        day ="Domingão do Faustão";
        break;
    case 1:
        day = "Segunda, beijo na bunda";
        break;
    case 2:
        day ="Terça-feira";
        break;
    case 3:
        day ="4ª";
        break;
    case 4:
        day ="5ª";
        break;
    case 5:
        day ="Sextou";
        break;
    case 6:
        day ="Sabadouu";

}

document.getElementById("test").innerHTML = `Hoje é ${day}`; 

let ano = new Date().getFullYear();

for (let x=ano; x>=1926; x--){
    document.getElementById("ano").innerHTML += `<option ='"+ x +"'>`+ x + "</option>";
}

const animais = ["Cachorrinho ", "Gato ", "Fuinha ", "Lagoa de Sapos"];
let quantosAnimais = animais.length;

for (let y=0; y<quantosAnimais; y++){
    document.getElementById("anima").innerHTML +=animais[y] + "* ";
}

function ativar() {
    /*document.getElementById("tempo").innerHTML = "Começou a loucura";
    relogio = setTimeout(function () {
        document.getElementById("tempo").innerHTML = "Executou o setTimeout";
    }, 5000);
}*/

    tempo = setInterval(function (){
    let cronometro = document.getElementById('tempo').innerHTML;
    let soma = parseInt(cronometro) + 1;
    document.getElementById('tempo').innerHTML = soma;
    }, 1000);
}

function pararContagem() {
    clearInterval(tempo);
   // clearTimeout(relogio);
    // document.getElementById("tempo").innerHTML = "Parou de contar";
}