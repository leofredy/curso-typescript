//tipo implicito
let teste = "leozeraa";
console.log(teste)
// teste = 20;


//tipo explicito
let a: string;
a = "teste";
console.log(a)

//array
// let hobbies: any[] ou
let hobbies: Array<any> = [
  "Cozinhar", 
  "Programar",
  "Estudar"
];
console.log(hobbies);
hobbies = [100];
console.log(hobbies);

//tuplas
let endereco: [string, number] = ["R. Principal", 1276];
console.log(endereco);
// endereco = [1276, "R. Principal"]

//enums
enum MyCor {
  Cinza,
  Verde = 100,
  Azul,
  Laranja,
  Vermelho = 100
}

let myVar: MyCor = MyCor.Cinza;
console.log(myVar); //0
console.log(MyCor.Verde); // 100
console.log(MyCor.Laranja); //101
console.log(MyCor.Vermelho); //100

// tipos em funções (Parâmetros e retorno)
function getName(): string {
  return "typescript";
}
function imprimirNome(nome: string): void {
  console.log(nome);
}
function multiplicar(numA: number, numB: number): number {
  return numA * numB;
}

// função como tipo
let falaNome: (a: string) => void; // basta os tipos baterem
falaNome = imprimirNome;

//Objetos e tipos
let myObj: {name: string, age: number};
myObj = {
  name: "TypeScript",
  age: 2
}
myObj = {
  age: 50,
  name: "Javascript",
}

//DESAFIO TIPOS
//Desafio tipo Objetos
let funcionario: { 
  supervisores: Array<string>, 
  baterPonto: (hora: number) => string
}

funcionario = {
  supervisores: [
    "Faria",
    "Donata"
  ],
  baterPonto(hora: number): string {
    let tipoPonto: string;
    if (hora <= 8) {
      tipoPonto = "Ponto normal";
    } else {
      tipoPonto = "Fora do horário";
    }

    return tipoPonto;
  }
}
console.log(funcionario);