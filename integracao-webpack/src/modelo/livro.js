System.register([], function (exports_1, context_1) {
    "use strict";
    var Livro;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Livro = class Livro {
                constructor(nome, preco, desconto) {
                    this.nome = nome;
                    this.preco = preco;
                    this.desconto = desconto;
                }
                precoComDesconto() {
                    return this.preco * (1 - this.desconto);
                }
            };
            exports_1("default", Livro);
        }
    };
});
//# sourceMappingURL=livro.js.map