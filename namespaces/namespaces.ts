namespace Areas {
  const PI = 3.14;

  export function retangulo(altura: number, largura: number):number {
    return altura * largura;
  }

  export function circuferencia(raio: number): number {
    return PI * Math.pow(raio, 2);
  }
}

console.log(Areas)