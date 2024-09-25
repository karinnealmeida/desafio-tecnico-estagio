const fs = require('fs/promises');

(async function () {
    const database = await fs.readFile('database.json');
    const faturamentoMensal = JSON.parse(database);
    const diasFaturados = faturamentoMensal.filter(dia => dia.valor > 0);
    const totalValorFaturado = diasFaturados.reduce(
        (acumulador, faturamento) => acumulador + faturamento.valor, 0
    );
    const totalDiasFaturados = diasFaturados.length;
    const mediaDeFaturamento = (totalValorFaturado / totalDiasFaturados);
    const menorFaturamento = diasFaturados.reduce(
        (min, faturamento) => faturamento.valor < min.valor ? faturamento : min, diasFaturados[0]
    );
    const maiorFaturamento = diasFaturados.reduce(
        (max, faturamento) => faturamento.valor > max.valor ? faturamento: max, diasFaturados[0]
    );
    const diasAcimaDaMedia = diasFaturados.filter(dia => dia.valor > mediaDeFaturamento).length;

    console.log(`O menor faturamento do mês foi no dia ${menorFaturamento.dia}, apresentando um faturamento total de R$${menorFaturamento.valor}.`);
    console.log(`O maior faturamento do mês foi no dia ${maiorFaturamento.dia}, apresentando um faturamento total de R$${maiorFaturamento.valor}.`);
    console.log(`A média de faturamento mensal foi de R$${mediaDeFaturamento}, somando um total de ${diasAcimaDaMedia} dias acima da média.`);  
}) ();