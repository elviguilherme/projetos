let soma = 0

const pessoas = [
    {nome: "Jubescleberson", idade: 37},
    {nome: "Glauciomar", idade: 42},
    {nome: "Clotilde", idade: 20},
    {nome: "Claudiney", idade: 28},
    {nome: "Leidynalva", idade: 73}
];

for (let i = 0; i < pessoas.length; i++) {
    console.log(`Nome: ${pessoas[i].nome}\nIdade: ${pessoas[i].idade}`);
    soma += pessoas[i].idade;
};

console.log("PESSOAS COM +40 ANOS:");

for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].idade > 40) {
        console.log(`Nome: ${pessoas[i].nome}\nIdade: ${pessoas[i].idade}`);
    }
};

console.log(`SOMA DE TODAS AS IDADE:\n Total: ${soma}`);