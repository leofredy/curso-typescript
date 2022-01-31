"use strict";
// Exercicio 1 - Classe
class Moto {
    constructor(nome) {
        this._velocidade = 0;
        this.nome = nome;
    }
    get velocidade() {
        return this._velocidade;
    }
    set velocidade(novaVelocidade) {
        this._velocidade = novaVelocidade;
    }
    buzinar() {
        console.log("Tooooot!");
    }
    acelerar(delta) {
        this.velocidade += delta;
    }
}
const moto = new Moto('Ducati');
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
// Exercicio 2 - Heranca
class Object2D {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
}
class Retangulo extends Object2D {
    area() {
        return this.base * this.altura;
    }
}
const retangulo = new Retangulo(5, 7);
console.log(retangulo.area());
// Exercicio 3 - Getters & Setters
class Estagiario {
    constructor() {
        this._primeiroNome = "";
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor;
        }
        else {
            this._primeiroNome = '';
        }
    }
}
const estagiario = new Estagiario();
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Le';
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Leonardo';
console.log(estagiario.primeiroNome);
//# sourceMappingURL=desafio.js.map