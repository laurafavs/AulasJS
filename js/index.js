
/*let day;
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
}

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


const user={
    name:'Laura',
    idade:29,
    color: 'blue'
}

    for (let key in user){
        console.log(`${key} : ${user[key]}`)
    }

    class Bicho{
        constructor(a,b,c,d){
            this.especie=a;
            this.cor=b;
            this.tamanho=c;
            this.genero=d;
        }
        somBicho(){
            return this.especie + " diz: Ahhhhhhhhhhh";
        }
    }

    const mamaco = new Bicho("bunda vermelha", "marrom bombom", "pequeno", "machinho");
    const passarinho = new Bicho("caga na picina", "amarelo", "grandinho", "mulherão");
    const gato = new Bicho("preto", "preto", "gigante", "gay")

    console.log(mamaco.somBicho());
*/

//let data = new Date();
//console.log(data);

//let mes = data.getMonth();
//console.log(mes);

//Quantos dias faltam para acabar o ano??

let dataHoje= new Date();
let dataFinal= new Date(2026,11,31);

let diferencaTempo= dataFinal.getTime() - dataHoje.getTime();
let diferencaDias = Math.ceil(diferencaTempo / (24*60*60*1000));

console.log(diferencaDias + " dias");