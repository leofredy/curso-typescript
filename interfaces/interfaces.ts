
/**
 * Introdução a Interfaces
 */
interface Humano {
  nome: string,
  idade?: number,
  [prop: string]: any,
  saudarSobrenome(sobrenome: string): void
}

function saudarComOla(pessoa: Humano) { 
  console.log(`Olá, ${pessoa.nome}`);
} 

const pessoa: Humano = {
  nome: "João",
  idade: 27,
  saudarSobrenome(sobrenome) {
    console.log(`Olá ${this.nome} ${sobrenome}!`);
  }
}


saudarComOla(pessoa);
pessoa.saudarSobrenome("Skywalker");


/**
 * Interfaces no contexto de classes
 */
class Cliente implements Humano {
  nome: string = '';
  saudarSobrenome(sobrenome: string): void {
    console.log(`Classe dizendo olá ${this.nome} ${sobrenome}`);
  }
}

const myCliente = new Cliente();
myCliente.nome = 'Fulano';
myCliente.saudarSobrenome('Siclano');


/**
 * Interfaces no contexto de função
 */
interface FuncaoCalculo {
  (numberA: number, numberB: number): number
}
let potencia: FuncaoCalculo;
potencia = function(numberA: number, numberB: number) {
  return numberB > 0 ? numberA * potencia(numberA, numberB - 1) : 1;
}
console.log(potencia(3, 10));


/**
 * Herança com interfaces
 */
interface A {
  a(): void
}
interface B {
  b(): void
}
interface ABC extends A, B {
  c(): void
}
class RealAB implements A, B {
  a(): void {}
  b(): void {}
}
class RealABC implements ABC {
  a(): void {}
  b(): void {}
  c(): void {}
}
abstract class RealAbstract implements A, B {
  a(): void {}
  b(): void {}
  abstract abstratoMetodo(): void
}