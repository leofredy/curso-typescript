"use strict";
//tipo implicito
let teste = "leozeraa";
console.log(teste);
// teste = 20;
//tipo explicito
let a;
a = "teste";
console.log(a);
//array
// let hobbies: any[] ou
let hobbies = [
    "Cozinhar",
    "Programar",
    "Estudar"
];
console.log(hobbies);
hobbies = [100];
console.log(hobbies);
//tuplas
let endereco = ["R. Principal", 1276];
console.log(endereco);
// endereco = [1276, "R. Principal"]
//enums
var MyCor;
(function (MyCor) {
    MyCor[MyCor["Cinza"] = 0] = "Cinza";
    MyCor[MyCor["Verde"] = 100] = "Verde";
    MyCor[MyCor["Azul"] = 101] = "Azul";
    MyCor[MyCor["Laranja"] = 102] = "Laranja";
    MyCor[MyCor["Vermelho"] = 100] = "Vermelho";
})(MyCor || (MyCor = {}));
let myVar = MyCor.Cinza;
console.log(myVar); //0
console.log(MyCor.Verde); // 100
console.log(MyCor.Laranja); //101
console.log(MyCor.Vermelho); //100
// tipos em funções (Parâmetros e retorno)
function getName() {
    return "typescript";
}
function imprimirNome(nome) {
    console.log(nome);
}
function multiplicar(numA, numB) {
    return numA * numB;
}
// função como tipo
let falaNome; // basta os tipos baterem
falaNome = imprimirNome;
//Objetos e tipos
let myObj;
myObj = {
    name: "TypeScript",
    age: 2
};
myObj = {
    age: 50,
    name: "Javascript",
};
//DESAFIO TIPOS
//Desafio tipo Objetos
let funcionario;
funcionario = {
    supervisores: [
        "Faria",
        "Donata"
    ],
    baterPonto(hora) {
        let tipoPonto;
        if (hora <= 8) {
            tipoPonto = "Ponto normal";
        }
        else {
            tipoPonto = "Fora do horário";
        }
        return tipoPonto;
    }
};
console.log(funcionario);
//usando o Alias criado
let funcionario2 = {
    supervisores: ["Fulano", "Siclano"],
    baterPonto(horario) {
        return "string";
    }
};
/**
 * UNION TYPES: Usado para definir variaveis com mais de um tipo
 */
let nota = 10; // implicitamente nota deve ser um número;
console.log(`Minha nota é: ${nota}`);
nota = '10'; //Usando variavel como string
// nota = true - cenario que daria erro, pois pode "nota" pode ser apenas string ou number
/**
 * Never: tipos para função que não possui um ponto final, ou uma função com laço infinito ou com um erro
 */
function infinita() {
    while (true) {
    }
}
function falha(mensagem) {
    throw new Error(mensagem);
}
let contato = {
    nome: "Fulano",
    tel1: 938823,
    tel2: null
};
let contaBancaria = {
    saldo: 3456,
    depositar(saldo) {
        this.saldo += saldo;
    }
};
let correntista = {
    nome: "Ana Silva",
    contaBancaria: contaBancaria,
    contatos: ["4645654645", "43645646"]
};
//# sourceMappingURL=tipos.js.map