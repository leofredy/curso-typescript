/**
 * Exemplo BAD, usando any
 */
function echo(objeto: any): any {
  return objeto
}

console.log(echo("João").length);
console.log(echo(27).length); // retorna undefined. O typescript não preve esse problema...
console.log(echo({nome: "João", idade: 27}).length); // retorna undefined. O typescript não consegue prever o problema, por ter um tipo any


/**
 * Exemplo GOOD, usando generics
 */
function echoGenerics<MyNome>(objeto: MyNome): MyNome {
  return objeto
}

console.log(echoGenerics("João").length);
// console.log(echoGenerics(27).length); //A tipagem é verificada conforme a passagem dos parametros, assim o typescript preve o problema
// console.log(echoGenerics({nome: "João", idade: 27}).length); //typescript preve o problema, conforme a passagem dos parametros.


/**
 * Usando Generics com array
 */
const myArray: Array<number> = [2,3,4,5,6];
// myArray.push("Um string"); //Apresenta erro, pois foi definido que é um array de numbers usando a sintaxe de generics.

function echoArray<myTipo>(args: myTipo[]) {
  args.forEach(element => console.log(element));
}

echoArray([1,2,3, "4"]);
echoArray([1,2,3,4]);
echoArray(["1","2","3","4"]);

/**
 *  Tipo função com generics
 */
type Echo = <T> (data: T) => T;
const chamarEcho: Echo = echoGenerics
console.log(chamarEcho("Alguma coisa"))



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

abstract class OperacaoBinaria<T, R> {
  constructor(public operando1: T, public operando2: T){}
  abstract executar(): R;
}
class SomaBinaria extends OperacaoBinaria<number, number> {
  executar(): number {
    return this.operando1 + this.operando2;
  }
}

console.log(new SomaBinaria(2, 3).executar());

//DESAFIO
class DiferencaEntreDatas extends OperacaoBinaria<Date, string> {
  executar(): string {
    return `${(this.operando1.getTime() - this.operando2.getTime()) / 1000 / 60 / 60 / 24} dias`;
  }
}

console.log(new DiferencaEntreDatas(new Date(2022, 2, 14), new Date(2022, 2, 13)).executar());

//DESAFIO - CLASSES COM GENERICS
class Fila<T> {
  private lista: Array<T>;

  constructor(...args: T[]) {
    this.lista = args;
  }

  entrar(element: T): void {
    this.lista.push(element);
  }

  proximo(): T | null {
    let proximo = null;
    if (this.lista.length) {
      proximo = this.lista[0];
      this.lista.splice(0, 1);
    }

    return proximo;
  }

  imprimir(): void {
    console.log(this.lista);
  }
}
const fila = new Fila<string>("Ana", "Leo", "Pedro", "Bia");
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

//DESAFIO - DO MÓDULO GENERICS
//Desafio Mapa
// Array de Objetos (chave/valor) -> itens
// Métodos: obter(chave), colocar({c, v}),
// limpar(), imprimir()
type Par<C, V> = { chave: C, valor: V}
class Mapa<A, B> {
  // private itens: Array<{chave: A, valor: B}> = [];
  private itens: Array<Par<A, B>> = new Array<Par<A, B>>();

  obter(chave: A): Par<A, B> | undefined {
    return this.itens.find(item => item.chave === chave);
  }

  colocar(novoItem: Par<A, B>) {
    const itemAtual = this.obter(novoItem.chave);
    if (itemAtual) {
      itemAtual.valor = novoItem.valor;
    } else {
      this.itens.push(novoItem);
    }
  }

  limpar() {
    this.itens = new Array<Par<A, B>>();
  }

  imprimir() {
    console.log(this.itens);
  }
}

const mapa = new Mapa<number, string>();
mapa.colocar({ chave: 1, valor: 'Pedro'});
mapa.colocar({ chave: 2, valor: 'Rebeca'});
mapa.colocar({ chave: 3, valor: 'Maria'});
mapa.colocar({ chave: 1, valor: 'Gustavo'});

console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();