
Você irá fazer um software para lançamento de entradas e saídas de dinheiro.
No final do programa, deverá ser mostrado todos os lançamentos e o saldo de caixa.

# Inputs

```javascript
let lancamentos = [];
let desc = prompt('Descreva o gasto/ganho:');
let val = parseFloat(prompt('Valor em reais: '));
let continuar = confirm('Deseja continuar lançando gastos/ganhos?');
//...
const novo_lancamento = { descricao: desc, valor: val };
lancamentos.push(novo_lancamento);
//...
```

Quando `continuar` for igual a `false`, você deve parar o lançamento de ganhos/gastos,
mostrar toda a movimentação de caixa e exibir o saldo final.

# Output

```
Comida do gato: -30.0
Recebimento do freela: 120.5
Pedágio da BR 050: -10.0
=============================
Saldo: 80.5
```