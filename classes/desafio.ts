// Exercicio 1 - Classe
class Moto {
  public nome: string;
  private _velocidade: number = 0;

  constructor(nome: string) {
    this.nome = nome;
  }

  public get velocidade() {
    return this._velocidade;
  }

  private set velocidade(novaVelocidade) {
    this._velocidade = novaVelocidade;
  }

  public buzinar(): void {
    console.log("Tooooot!");
  }

  public acelerar(delta: number):void {
    this.velocidade += delta;
  }
}

const moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)





// Exercicio 2 - Heranca
abstract class Object2D {
  protected base: number;
  protected altura: number;

  constructor(base: number, altura: number) {
    this.base = base;
    this.altura = altura
  }

  abstract area(): number;
}

class Retangulo extends Object2D {
  area() {
    return this.base * this.altura;
  }
}

const retangulo = new Retangulo(5, 7);
console.log(retangulo.area())



// Exercicio 3 - Getters & Setters

class Estagiario {
  private _primeiroNome: string = "";

  public get primeiroNome(): string {
    return this._primeiroNome;
  }

  public set primeiroNome(valor: string) {
    if (valor.length >= 3) {
        this._primeiroNome = valor
    } else {
        this._primeiroNome = ''
    }
  }
}

const estagiario = new Estagiario();
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)

