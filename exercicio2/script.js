const numeros = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const novoNumero = numeros.push(10);
console.log("Array de números tem quantidade: " + numeros.length);
console.log("Primeiro array e o primeiro elemento é " + numeros[0]);

const strings = ["Paulo", "Vitor", "Pedro", "João", "Lucas", "Gabriel"];
console.log("Array de strings tem quantidade: " + strings.length);
console.log("Segundo array e  o segundo elemento é " + strings[1]);

const todosJuntos = [8, "Paulo", true];
console.log(
  "Array de número, string e boleano tem quantidade: " + todosJuntos.length
);
console.log("Terceiro array e o terceiro elemento é " + todosJuntos[2]);

console.log(
  "Foi adicionado um elemento 10, no primeiro array ? " + numeros.includes(10)
);
console.log(
  'Foi adicionado algum elemento "Pedro" no terceiro array? ' +
    todosJuntos.includes("Pedro")
);
