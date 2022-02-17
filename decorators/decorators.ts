/**
 * DOCUMENTAÇÃO: https://www.typescriptlang.org/docs/handbook/decorators.html 
 */


function logarClasse(constructor: Function) {
  console.log(constructor);
}

function decoratorVazio(_: Function) {}

function logarClasseSe(valor: boolean) {
  return valor ? logarClasse : decoratorVazio;
}

type Obj = { a: string, b: number }
//criando uma fabrica de decorators
function decorator(obj: Obj): Function {
  return function(_: Function): void {
    console.log(`${obj.a} ${obj.b}`);
  }
}

//Modificando o construtor com decorators
type Constructor<T> = { new (...args: Array<T>): {} }
function alterarObj(constructor: Constructor<string>) {
  return class extends constructor {
    constructor(...args: Array<string>) {
      console.log("Antes...");
      super(...args);
      console.log("Depois...");
    }
  }
}

// new Eletrodomestico();


interface Eletrodomestico {
  imprimir?(): void
}

// @logarClasse
// @logarClasseSe(true)
// @decorator({ a: "teste", b: 123})
// @alterarObj
@addMetodo
class Eletrodomestico {
  constructor() {
    console.log("novo eletrodomestico...");
  }
}

//Adicionando método na classe com decorators
function addMetodo(constructor: Function) {
  constructor.prototype.imprimir = function() {
    console.log(this);
  }
}

// (<any>new Eletrodomestico()).imprimir(); não é ideal;
const eletrodomestico = new Eletrodomestico();
eletrodomestico.imprimir && eletrodomestico.imprimir(); //modo seguro, pois se não existir a chamada do decorator que cria o método, o método não é chamado.



/** DESAFIO - Decorator perfilAdmin **/
const usuarioLogado = {
  nome: "Guilherme Filho",
  email: "guigui@gmail.com",
  admin: true
}
interface Mudanca {
  new (...args: any[]): {}
}
@perfilAdmin
class MudancaAdministrativa {
  critico() {
    console.log("Algo crítico foi alterado!");
  }
}
function perfilAdmin<B extends Mudanca>(constructor: B) {
  return class extends constructor {
    constructor(...args: any[]) {
      super();
      if (!usuarioLogado.admin) {
        throw new Error("Usuário não é admin!")
      } 
    }
  }
}
new MudancaAdministrativa();
// new MudancaAdministrativa().critico();
/***********************************/


/**
 * DECORATORS
 *  - Em método: congelar
 *  - Em atributos: naoNegativo
 *  - Em parametro de método: 
 */
class ContaCorrente {
  @naoNegativo
  private saldo: number;

  constructor(saldo: number) {
    this.saldo = saldo;
  }

  sacar(@paramInfo valor: number) {
    this.saldo -= valor;
  }

  @congelar
  getSaldo() {
    return this.saldo;
  }
}
const cc = new ContaCorrente(10000);
console.log(cc.getSaldo());
cc.sacar(5000);
console.log(cc.getSaldo());

// DECORATOR congelar não permite essa mudança no método
// cc.getSaldo = function() {
//   return this['saldo'] += 7000
// }
function congelar(objeto: any, nomeMetodo: string, descritor: PropertyDescriptor) {
  console.log("objeto:", objeto);
  console.log("nomeMetodo:", nomeMetodo);
  console.log("descritor:", descritor);
  descritor.writable = false;
}


// DECORATOR naoNegativo não permite definir um valor negativo a 
// propriedade saldo
// cc.sacar(99999);
function naoNegativo(objeto: any, nomePropriedade: string) {
  delete objeto[nomePropriedade];
  Object.defineProperty(objeto, nomePropriedade, {
    get: function() {
      return objeto[`_${nomePropriedade}`];
    },

    set: function(valor: number): void {
      if (valor < 0) {
        throw new Error("Saldo inválido");
      } else {
        objeto[`_${nomePropriedade}`] = valor;
      }
    }
  });
}

function paramInfo(alvo: any, nomeMetodo: string, indiceParam: number) {
  console.log("alvo: ", alvo);
  console.log("Nome do método: ", nomeMetodo);
  console.log("Indice do parametro: ", indiceParam);
}