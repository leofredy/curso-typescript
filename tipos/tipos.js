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
