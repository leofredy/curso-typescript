System.register(["./circunferencia"], function (exports_1, context_1) {
    "use strict";
    var circunferencia_1, circunferencia_2, digaOi;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (circunferencia_1_1) {
                circunferencia_1 = circunferencia_1_1;
                circunferencia_2 = circunferencia_1_1;
            }
        ],
        execute: function () {
            // import  { areaRetangulo } from "./retangulo";
            console.log(circunferencia_1.areaCircunferencia(10));
            circunferencia_2.areaCircunferencia(20);
            //Usando require
            digaOi = require("./novoModulos").digaOi;
            digaOi("Leo");
        }
    };
});
//# sourceMappingURL=modulos.js.map