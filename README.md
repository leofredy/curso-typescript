# Curso de Typescript
Código de cada módulo desenvolvido no curso de [Entendendo Typescript - Cod3r](https://www.cod3r.com.br/courses/take/entendendo-typescript/lessons/9437290-introducao-do-curso).

## Introdução
[Typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) é um superset de JavaScript desenvolvido pela Microsoft. Além de possuir todas as funcionalidades novas do JavaScript, possui: 
- Sistem de tipos
- Genéricos
- Interfaces
- Namespaces
- Decorators

## Configurando um projeto Typescript
1. Execute o comando a seguir para instalar o typescript na máquina (é necessário ter o node instalado): npm i -g typescript
2. Execute o comando a seguir para iniciar o configurador do compilador do typescript: tsc --init
3. O comando a seguir faz a compilação dos arquivos .ts para .js: tsc helloWorld.ts

## Tipos
### Tipo implícito
Quando declaramos e inicializamos uma variável na mesma linha o **tipo é inferido** automáticamente, não podendo ser atribuído qualquer outro tipo de valor. 
```
//Tipo number implícito
let variavelA = 10; 
```

