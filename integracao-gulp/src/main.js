System.register(["jquery", "./modelo/livro"], function (exports_1, context_1) {
    "use strict";
    var jquery_1, livro_1, livro;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jquery_1_1) {
                jquery_1 = jquery_1_1;
            },
            function (livro_1_1) {
                livro_1 = livro_1_1;
            }
        ],
        execute: function () {
            livro = new livro_1.default("Dom Quixote", 108.80, 0.10);
            jquery_1.default("body").append(`
  <h1>
    ${livro.nome}
  </h1>
`);
            jquery_1.default("body").append(`
  <h2>
    R$ ${livro.precoComDesconto()}
  </h2>
`);
        }
    };
});
//# sourceMappingURL=main.js.map