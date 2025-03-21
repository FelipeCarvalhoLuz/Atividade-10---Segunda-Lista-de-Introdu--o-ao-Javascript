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
  
  
  function contarVogais(palavra) {
    const matches = palavra.match("[aeiou]");
    return matches ? matches.length : 0;
  }
  
  
  function somarArray(array) {
    let soma = 0;
  
    for (let i = 0; i < array.length; i++) {
      soma += array[i];
    }
  
    return soma;
  }

function dobrarNumero(num) {
    return num * 2;
}

let numero = 2;

while (numero <= 20) {
    console.log(numero);
    numero += 2; 
}


function capitalizar(str) {
    if (str.length === 0) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function anoBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}