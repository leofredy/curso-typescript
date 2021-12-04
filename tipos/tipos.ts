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


/**
 * Alias: usado para definir um tipo personalizado
 */
 type Funcionario = {
  supervisores: Array<string>,
  baterPonto: (horario: number) => string 
}

//usando o Alias criado
let funcionario2: Funcionario = {
  supervisores: ["Fulano", "Siclano"],
  baterPonto(horario: number) {
    return "string"
  }
};


/**
 * UNION TYPES: Usado para definir variaveis com mais de um tipo
 */
let nota: number | string  = 10; // implicitamente nota deve ser um número;
console.log(`Minha nota é: ${nota}`);
nota = '10' //Usando variavel como string
// nota = true - cenario que daria erro, pois pode "nota" pode ser apenas string ou number


/**
 * Never: tipos para função que não possui um ponto final, ou uma função com laço infinito ou com um erro
 */
function infinita(): never {
  while(true) {

  }
}
function falha(mensagem: string): never {
  throw new Error(mensagem);
}

/**
 * Tipo NULL: util para ser usado com UNION TYPE para permitir um valor vazio para a variavel
 */
type Contato = {
  nome: string,
  tel1: number,
  tel2: number | null //permite que o tel2 não seja passado
}
let contato: Contato = {
  nome: "Fulano",
  tel1: 938823,
  tel2: null
}

// Desafios
type ContaBancaria = {
  saldo: number,
  depositar: (valor: number) => void
}
type Correntista = {
  nome: string,
  contaBancaria: ContaBancaria,
  contatos: Array<string>
}

let contaBancaria: ContaBancaria = {
  saldo: 3456,
  depositar(saldo: number) {
    this.saldo += saldo;
  }
}
let correntista: Correntista = {
  nome: "Ana Silva",
  contaBancaria: contaBancaria,
  contatos: ["4645654645", "43645646"]
}