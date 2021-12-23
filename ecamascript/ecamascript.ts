// let e const
/**
 * Principais diferença: Hoisting e Escopo
 * 1. Hoisting: as variaveis declarada como var tem sua declaração elevada 
 * 2. Escopo: em var a variavel só possui escopo global e de função, não possui escopo de bloco
 * 3. Efeito shadow
 */

// console.log(seraQuePode); //undefined, pois com efeito de hoisting sua declaração foi elevada ao inicio do programa.
var seraQuePode = "Causou o efeito de Hoisting";

if (true) {
  var escopoVar = "conteudo da variavel";
}

console.log(escopoVar) // var não possui escopo de bloco


//Efeito Shadow
var efeitoShadow = "conteudo var fora"
function testeEscopo() {
  var efeitoShadow = "conteudo da var dentro";
  console.log(efeitoShadow)
}
testeEscopo();


// Desafios

// Exercicio 1
// var dobro = function(valor) {
//   return valor * 2;
// }
/*RESPOSTA EXERCICIO 1*/
const dobro = (valor: number): number => valor * 2; 
console.log(dobro(10));



// Exercicio 2
// var dizerOla = function(nome) {
//   if (nome === undefined) {
//     nome = "Pessoa";
//   }
//   console.log("Olá, " + nome);
// }
/*RESPOSTA EXERCICIO 2*/
const dizerOla = (nome: string = "Pessoa"): void => {
  console.log(`Olá ${nome}`);
}
dizerOla();
dizerOla("Anna");

//Exercicio 3
var nums = [-3, 33, 38, 5];
//Imprimir o menor valor
function pegaMenorValor(numeros: Array<number>): number {
  let menorNumero: number = 0;
  numeros.forEach((numero, index) => {
    if (!index || numero < menorNumero) {
      menorNumero = numero;
    }
  });

  return menorNumero;
}
console.log(pegaMenorValor(nums));

//Exercicio 4
var array = [55, 20];
array.push(...nums)
//Adicionar todos os elementos de "nums" em em array
console.log(array);

//Exercicio 5
var notas = [8.5, 6.3, 9.4];
// var nota1 = notas[0];
// var nota2 = notas[1];
// var nota3 = notas[2];
const [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);

//Exercicio 6
var cientista = {
  primeiroNome: "Will",
  experiencia: 12,
}
// var primeiroNome = cientista.primeiroNome;
// var experiencia = cientista.experiencia;
const {primeiroNome, experiencia} = cientista;
console.log(primeiroNome, experiencia);



//Promise
function esperar3sPromise() {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve("3s depois promise...");
    }, 3000);
  });
}

esperar3sPromise()
  .then(dado => console.log(dado));


fetch("https://swapi.dev/api/people/1")
  .then(response => response.json())
  .then(personagem => personagem.films)
  .then(films => fetch(films[0]))
  .then(responseFilm => responseFilm.json())
  .then(film => console.log(film.title));