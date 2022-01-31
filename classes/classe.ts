/******************** ATRIBUTOS ********************/
class Data {
  //Atributos publico
  dia: number;
  public mes: number;
  ano: number;

  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}

const aniversario = new Data(25, 5, 2017);
console.log(aniversario);


//Declaração de atributos mais enxuta
class DataEnxuta {
  constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970) {
  }
}

const aniversarioEnxuta = new DataEnxuta(25, 5, 2017);
console.log(aniversarioEnxuta);


//DESAFIO
class Produto {
  nome: string;
  preco: number;
  desconto: number;

  constructor(nome: string, preco: number, desconto: number = 0) {
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
  constructor(public nome: string, public preco: number, public desconto: number = 0) {

  }

  //por padrão todo método é publico
  public resumo(): string {
    return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% off)`;
  }

  //DESAFIO
  precoComDesconto(): number {
    return this.preco - (this.preco * this.desconto);
  }
}
const produtoMetodo = new ProdutoMetodo("Caneta Bic", 2, 0.05);
console.log(produtoMetodo.resumo());



/******************** MODIFICADORES DE ACESSO ********************/
class Carro {
  private velocidadeAtual: number = 0;

  constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200) {

  }

  //protected, pois necessito do acesso nas classes herdeiras;
  protected alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta;
    if (novaVelocidade > this.velocidadeMaxima) {
      console.log("RANDAN DAN DAN DAN DAN DAN")
      this.velocidadeAtual = this.velocidadeMaxima;
    } else  if (novaVelocidade < 0) {
      this.velocidadeAtual = 0;
    } else {
      this.velocidadeAtual = novaVelocidade;
    }

    return this.velocidadeAtual;
  }
  public acelerar() {
    return this.alterarVelocidade(5);
  }

  public frear() {
    return this.alterarVelocidade(-5);
  }
}
const carro = new Carro("Chevrolet", "Nova", 100);
// for(let i = 0; i < 100; i++) {
//   console.log(carro.acelerar());
// }


/******************** HERANÇA ********************/
class Ferrari extends Carro {
  constructor(modelo: string, velocidadeMaxima: number) {
    super("Ferrari", modelo, velocidadeMaxima);
  }

  public acelerar() {
    return this.alterarVelocidade(20);
  }

  public frear() {
    return this.alterarVelocidade(-15);
  }
}

const f40 = new  Ferrari("F40", 320);
for(let i = 0; i < 300; i++) {
  console.log(f40.acelerar());
}


/******************** Getters & Setters ********************/
class Pessoa {
  private _nome: string = "";

  get nome(): string {
    return this._nome;
  }

  set nome(nome: string) {
    this._nome = nome;
  }
}

const pessoa1 = new Pessoa;
pessoa1.nome = "Fulano";
console.log(pessoa1.nome);