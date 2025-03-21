function verificarSinal(numero) {
    if (numero > 0) {
        console.log("positivo");
    } else if (numero < 0) {
        console.log("negativo");
    } else {
        console.log("zero");
    }
}

function toFahrenheit(celsius) {
    return celsius / 5 * 9 + 32;
}

let soma = 0;
let numero = 1;

while (numero <= 100) {
    soma += numero;
    numero++;
}

console.log("A soma dos números de 1 a 100 é:", soma);

function substituirPalavra(texto) {
    return texto.replace("azul", "vermelho");
}


function verificarTamanho(texto) {
    if (texto.length > 10) {
        console.log("A string tem mais de 10 caracteres.");
    } else {
        console.log("A string tem 10 caracteres ou menos.");
    }
}

let frutas = ["Maçã", "Banana", "Laranja", "Uva", "Manga"];

console.log("A terceira fruta é:", frutas[2]);

function saudacao(nome, saudacao = "Bem-vindo(a)") {
    return `${saudacao}, ${nome}!`;
}

function verificarAprovacao(nota) {
    return nota >= 6 ? "Aprovado" : "Reprovado";
}

for (let i = 0; i <= 30; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
  }
  
