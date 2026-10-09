let continuar = true

// while (continuar) {
//     const op = prompt('Escolha a opção:\n1) cumprimentar\n2) despedir-se:');
//     switch (op) {
//         case '1':
//             console.log('Olá');
//             continuar = false
//             break;

//         case '2':
//             console.log('Tchau');
//             continuar = false
//             break;

//         default:
//             console.log('Opção inválida');
//     }
// }

let op;
do {
    op = prompt('Escolha a opção:\n1) cumprimentar\n2) despedir-se');
    switch (op) {
        case '1':
            console.log('Olá');
            continuar = false;
            break;

        case '2':
            console.log('Tchau');
            continuar = false;
            break;

        default:
            console.log('Opção inválida!');
            break;
    }
} while(op != '1' && op != '2');

console.log ('FIM');