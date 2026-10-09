const num = 12;

// Crases `` são usadas para criar String Template.
console.log(`num = ${num} <- tipo: ${typeof num}`); // num = 12 <- tipo: number 

//--------------------------------------------------

const nfloat = 4.5;

console.log(`nfloat = ${nfloat} <- tipo: ${typeof nfloat}`);
// --------------------------------------------------------

const msg = "hello";

console.log(`msg = ${msg} <- tipo: ${typeof msg}`);
//------------------------------------------------

const cond = 5 > nfloat;

console.log(`cond = ${cond} <- tipo: ${typeof cond}`);
//---------------------------------------------------

const x = null;

console.log(`x = ${x} <- tipo: ${typeof x   }`);

//---------------------------------------------

// UNDEFINED -> variável sem definição de valor nem tipo
let y;

console.log(`x = ${y} <- tipo: ${typeof y   }`);
//---------------------------------------------

// OBJECT -> JSON / Dicionário / Hash / Estrutura chave-valor   
const s = Symbol("id");

const carro = {
    marca: "Volkswagen",
    modelo: "Brasília",
    ano: "1988",
    placa: "PWW4055",
    cor: "Amarelo", 
}

console.log('carro =');
console.log(carro);
console.log(`<- tipo: ${typeof carro}`);
//-------------------------------------

// ARRAY -> 