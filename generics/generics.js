"use strict";
/**
 * Exemplo BAD, usando any
 */
function echo(objeto) {
    return objeto;
}
console.log(echo("João").length);
console.log(echo(27).length); // retorna undefined. O typescript não preve esse problema...
console.log(echo({ nome: "João", idade: 27 }).length); // retorna undefined. O typescript não consegue prever o problema, por ter um tipo any
/**
 * Exemplo GOOD, usando generics
 */
function echoGenerics(objeto) {
    return objeto;
}
console.log(echoGenerics("João").length);
// console.log(echoGenerics(27).length); //A tipagem é verificada conforme a passagem dos parametros, assim o typescript preve o problema
// console.log(echoGenerics({nome: "João", idade: 27}).length); //typescript preve o problema, conforme a passagem dos parametros.
/**
 * Usando Generics com array
 */
const myArray = [2, 3, 4, 5, 6];
// myArray.push("Um string"); //Apresenta erro, pois foi definido que é um array de numbers usando a sintaxe de generics.
function echoArray(args) {
    args.forEach(element => console.log(element));
}
echoArray([1, 2, 3, "4"]);
echoArray([1, 2, 3, 4]);
echoArray(["1", "2", "3", "4"]);
const chamarEcho = echoGenerics;
console.log(chamarEcho("Alguma coisa"));
/**
 * Classes com generics
 */
// class OperacaoBinaria<T>{ 
//   constructor(public operando1: T, public operando2: T){}
//   executar() {
//Como não existe a soma entre todos os tipos ele reclama, para contornar isso vamos usar uma classe abstrata
//     return this.operando1 + this.operando2;
//   }
// }
// console.log(new OperacaoBinaria("Bom ", "dia").executar());
// console.log(new OperacaoBinaria(2, 3).executar());
// console.log(new OperacaoBinaria(3, "opa").executar());
// console.log(new OperacaoBinaria({}, {}).executar());
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(2, 3).executar());
//DESAFIO
class DiferencaEntreDatas extends OperacaoBinaria {
    executar() {
        return `${(this.operando1.getTime() - this.operando2.getTime()) / 1000 / 60 / 60 / 24} dias`;
    }
}
console.log(new DiferencaEntreDatas(new Date(2022, 2, 14), new Date(2022, 2, 13)).executar());
//DESAFIO - CLASSES COM GENERICS
class Fila {
    constructor(...args) {
        this.lista = args;
    }
    entrar(element) {
        this.lista.push(element);
    }
    proximo() {
        let proximo = null;
        if (this.lista.length) {
            proximo = this.lista[0];
            this.lista.splice(0, 1);
        }
        return proximo;
    }
    imprimir() {
        console.log(this.lista);
    }
}
const fila = new Fila("Ana", "Leo", "Pedro", "Bia");
fila.imprimir();
fila.entrar("João");
fila.imprimir();
console.log(fila.proximo());
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
fila.imprimir();
class Mapa {
    constructor() {
        // private itens: Array<{chave: A, valor: B}> = [];
        this.itens = new Array();
    }
    obter(chave) {
        return this.itens.find(item => item.chave === chave);
    }
    colocar(novoItem) {
        const itemAtual = this.obter(novoItem.chave);
        if (itemAtual) {
            itemAtual.valor = novoItem.valor;
        }
        else {
            this.itens.push(novoItem);
        }
    }
    limpar() {
        this.itens = new Array();
    }
    imprimir() {
        console.log(this.itens);
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: 'Pedro' });
mapa.colocar({ chave: 2, valor: 'Rebeca' });
mapa.colocar({ chave: 3, valor: 'Maria' });
mapa.colocar({ chave: 1, valor: 'Gustavo' });
console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
//# sourceMappingURL=generics.js.map