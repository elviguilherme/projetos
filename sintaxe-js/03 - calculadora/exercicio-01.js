let aux = true;
let total;

num1 = parseFloat(prompt("Digite o um valor para n1: "));
console.log(`1° Número = ${num1}`);

num2 = parseFloat(prompt("Digite um valor para n2: "));
console.log(`2° Número = ${num2}`);

while (aux) {
    opcao = prompt("Escolha uma opção:\n1) 1 - Soma\n2) 2 - Subtração\n3) 3 - Multiplicação\n4) 4 - Divisão");
    switch (opcao) {
        case '1':
            total = num1 + num2;
            console.log(`Soma = ${total}`)
            aux = false;
            break;
        case '2':
            total = num1 - num2;
            console.log(`Subtração = ${total}`)
            aux = false;
            break;

        case '3':
            total = num1 * num2;
            console.log(`Muliplicação = ${total}`)
            aux = false;
            break;

        case '4':
            if (num2 == 0) {
                console.log("É impossível divisão por zero")
                aux = false;
                break;
            }
            else {
                total = num1 / num2;
                console.log(`Divisão = ${total}`)
                aux = false;
                break;

            }
        default:
            console.log("Opção inválida! Tente novamente:");
            break;
    }
}