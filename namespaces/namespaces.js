"use strict";
var Areas;
(function (Areas) {
    const PI = 3.14;
    function retangulo(altura, largura) {
        return altura * largura;
    }
    Areas.retangulo = retangulo;
    function circuferencia(raio) {
        return PI * Math.pow(raio, 2);
    }
    Areas.circuferencia = circuferencia;
})(Areas || (Areas = {}));
console.log(Areas);
//# sourceMappingURL=namespaces.js.map