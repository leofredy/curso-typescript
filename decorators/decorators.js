"use strict";
/**
 * DOCUMENTAÇÃO: https://www.typescriptlang.org/docs/handbook/decorators.html
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logarClasse(constructor) {
    console.log(constructor);
}
function decoratorVazio(_) { }
function logarClasseSe(valor) {
    return valor ? logarClasse : decoratorVazio;
}
//criando uma fabrica de decorators
function decorator(obj) {
    return function (_) {
        console.log(`${obj.a} ${obj.b}`);
    };
}
function alterarObj(constructor) {
    return class extends constructor {
        constructor(...args) {
            console.log("Antes...");
            super(...args);
            console.log("Depois...");
        }
    };
}
// @logarClasse
// @logarClasseSe(true)
// @decorator({ a: "teste", b: 123})
// @alterarObj
let Eletrodomestico = class Eletrodomestico {
    constructor() {
        console.log("novo eletrodomestico...");
    }
};
Eletrodomestico = __decorate([
    addMetodo
], Eletrodomestico);
//Adicionando método na classe com decorators
function addMetodo(constructor) {
    constructor.prototype.imprimir = function () {
        console.log(this);
    };
}
// (<any>new Eletrodomestico()).imprimir(); não é ideal;
const eletrodomestico = new Eletrodomestico();
eletrodomestico.imprimir && eletrodomestico.imprimir(); //modo seguro, pois se não existir a chamada do decorator que cria o método, o método não é chamado.
/** DESAFIO - Decorator perfilAdmin **/
const usuarioLogado = {
    nome: "Guilherme Filho",
    email: "guigui@gmail.com",
    admin: true
};
let MudancaAdministrativa = class MudancaAdministrativa {
    critico() {
        console.log("Algo crítico foi alterado!");
    }
};
MudancaAdministrativa = __decorate([
    perfilAdmin
], MudancaAdministrativa);
function perfilAdmin(constructor) {
    return class extends constructor {
        constructor(...args) {
            super();
            if (!usuarioLogado.admin) {
                throw new Error("Usuário não é admin!");
            }
        }
    };
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
    constructor(saldo) {
        this.saldo = saldo;
    }
    sacar(valor) {
        this.saldo -= valor;
    }
    getSaldo() {
        return this.saldo;
    }
}
__decorate([
    naoNegativo
], ContaCorrente.prototype, "saldo", void 0);
__decorate([
    __param(0, paramInfo)
], ContaCorrente.prototype, "sacar", null);
__decorate([
    congelar
], ContaCorrente.prototype, "getSaldo", null);
const cc = new ContaCorrente(10000);
console.log(cc.getSaldo());
cc.sacar(5000);
console.log(cc.getSaldo());
// DECORATOR congelar não permite essa mudança no método
// cc.getSaldo = function() {
//   return this['saldo'] += 7000
// }
function congelar(objeto, nomeMetodo, descritor) {
    console.log("objeto:", objeto);
    console.log("nomeMetodo:", nomeMetodo);
    console.log("descritor:", descritor);
    descritor.writable = false;
}
// DECORATOR naoNegativo não permite definir um valor negativo a 
// propriedade saldo
// cc.sacar(99999);
function naoNegativo(objeto, nomePropriedade) {
    delete objeto[nomePropriedade];
    Object.defineProperty(objeto, nomePropriedade, {
        get: function () {
            return objeto[`_${nomePropriedade}`];
        },
        set: function (valor) {
            if (valor < 0) {
                throw new Error("Saldo inválido");
            }
            else {
                objeto[`_${nomePropriedade}`] = valor;
            }
        }
    });
}
function paramInfo(alvo, nomeMetodo, indiceParam) {
    console.log("alvo: ", alvo);
    console.log("Nome do método: ", nomeMetodo);
    console.log("Indice do parametro: ", indiceParam);
}
//# sourceMappingURL=decorators.js.map