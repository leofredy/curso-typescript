"use strict";
function saudarComOla(pessoa) {
    console.log(`Olá, ${pessoa.nome}`);
}
const pessoa = {
    nome: "João",
    idade: 27,
    saudarSobrenome(sobrenome) {
        console.log(`Olá ${this.nome} ${sobrenome}!`);
    }
};
saudarComOla(pessoa);
pessoa.saudarSobrenome("Skywalker");
/**
 * Interfaces no contexto de classes
 */
class Cliente {
    constructor() {
        this.nome = '';
    }
    saudarSobrenome(sobrenome) {
        console.log(`Classe dizendo olá ${this.nome} ${sobrenome}`);
    }
}
const myCliente = new Cliente();
myCliente.nome = 'Fulano';
myCliente.saudarSobrenome('Siclano');
let potencia;
potencia = function (numberA, numberB) {
    return numberB > 0 ? numberA * potencia(numberA, numberB - 1) : 1;
};
console.log(potencia(3, 10));
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class RealAbstract {
    a() { }
    b() { }
}
//# sourceMappingURL=interfaces.js.map