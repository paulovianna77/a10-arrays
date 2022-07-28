const nomes = ["Paulo", "Pedro", "João"];
const nomesCopia = nomes.slice();
nomesCopia.push(2);
console.log(`Nomes originais: ${nomes} \n
Cópia: ${nomesCopia}`);

const comidas = ["Sal", "Açucar", "Leite"];
const comidasCopia = comidas.slice();
comidasCopia.pop();

console.log(`Comidas originais: ${comidas}. \n
 Cópia: ${comidasCopia}`);

const objetos = ["Mesa", "Cadeira", "Toalha"];
const objetosCopia = objetos.slice();
objetosCopia.splice(1, 1);

console.log(`Objetos originais: ${objetos} \n
Cópia: ${objetosCopia}`);
