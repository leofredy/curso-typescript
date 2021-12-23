"use strict";
/******************** ATRIBUTOS ********************/
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(25, 5, 2017);
console.log(aniversario);
//Declaração de atributos mais enxuta
class DataEnxuta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEnxuta = new DataEnxuta(25, 5, 2017);
console.log(aniversarioEnxuta);
//DESAFIO
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
}
const produtoA = new Produto("ProdutoA", 120, 50);
const produtoB = new Produto("ProdutoB", 500);
console.log(produtoA, produtoB);
/******************** MÉTODO ********************/
class ProdutoMetodo {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    //por padrão todo método é publico
    resumo() {
        return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% off)`;
    }
    //DESAFIO
    precoComDesconto() {
        return this.preco - (this.preco * this.desconto);
    }
}
const produtoMetodo = new ProdutoMetodo("Caneta Bic", 2, 0.05);
console.log(produtoMetodo.resumo());
/******************** MODIFICADORES DE ACESSO ********************/
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    //protected, pois necessito do acesso nas classes herdeiras;
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        if (novaVelocidade > this.velocidadeMaxima) {
            console.log("RANDAN DAN DAN DAN DAN DAN");
            this.velocidadeAtual = this.velocidadeMaxima;
        }
        else if (novaVelocidade < 0) {
            this.velocidadeAtual = 0;
        }
        else {
            this.velocidadeAtual = novaVelocidade;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro = new Carro("Chevrolet", "Nova", 100);
// for(let i = 0; i < 100; i++) {
//   console.log(carro.acelerar());
// }
/******************** HERANÇA ********************/
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super("Ferrari", modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari("F40", 320);
for (let i = 0; i < 300; i++) {
    console.log(f40.acelerar());
}
//# sourceMappingURL=classe.js.map