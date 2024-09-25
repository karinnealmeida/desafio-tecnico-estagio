const fs = require('fs/promises');

(async function () {
    const database = await fs.readFile('database.json');
    const faturamentoPorEstado = JSON.parse(database);
    const faturamentoTotal = faturamentoPorEstado.reduce(
        (acumulador, faturamento) => acumulador + faturamento.valor, 0
    );

    const calcularPorcentagem = estado => {
        const resultado = Math.round((estado.valor * 100) / faturamentoTotal);
        return resultado;
    };
    
    faturamentoPorEstado.forEach(estado => {

        if (estado.estado === "outros") {
            console.log(`Outros estados representaram ${calcularPorcentagem(estado)}% do faturamento total.`);   
        } else {
            console.log(`o Estado de ${estado.estado} representou ${calcularPorcentagem(estado)}% do faturamento total.`);
        }
    });

}) ();