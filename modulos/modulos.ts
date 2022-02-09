import { areaCircunferencia } from "./circunferencia";
// import  { areaRetangulo } from "./retangulo";


console.log(areaCircunferencia(10));

/****** MODOS DE EXPORTAÇÃO ******/

//export default
import escolhoNomeQueQuiser from "./retangulo";

//aplico um novo nome para uso: export
import { areaCircunferencia as circ } from "./circunferencia";
circ(20);

//Usando require
const { digaOi } = require("./novoModulos");
digaOi("Leo")
