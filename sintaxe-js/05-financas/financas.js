let lancamentos = [];

while (true) {
    let desc = prompt("Descreva o gasto(-) / ganho(+): ");
    let val = parseFloat(prompt("Digite o valor: "))

    lancamentos.push({ descricao: desc, valor: val });

    let continuar = confirm("Deseja continuar lançando gastos/ganhos?")
    if (continuar == false) {
        break;
    }

}

let saldo_total = 0

for (let i = 0; i < lancamentos.length; i++) {
    saldo_total += lancamentos[i].valor
    console.log(`${lancamentos[i].descricao}: R$ ${lancamentos[i].valor.toFixed(2)}`)
}
console.log("========================================================")
console.log(`Saldo final: R$ ${saldo_total.toFixed(2)}`)