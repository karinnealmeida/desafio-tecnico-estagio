// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor
// sempre será a soma dos 2 valores anteriores(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
// escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e
// retorne uma mensagem avisando se o número informado pertence ou não a sequência.

const criarSequenciaFibonacci = (numeroInformado) => {
    const sequenciaFibonacci = [0,1];

    if (numeroInformado >= sequenciaFibonacci.length) {
        for (let i = 2; i >= sequenciaFibonacci.length; i++) {
            let proximoNumero = sequenciaFibonacci[i - 2] + sequenciaFibonacci[i - 1];
            sequenciaFibonacci.push(proximoNumero);
            if (proximoNumero >= numeroInformado) {
                return sequenciaFibonacci;
            };
        };
    };  
    return sequenciaFibonacci;
};

const pertenceASequenciaFibonacci = (numero) => {
    const sequenciaFibonacci = criarSequenciaFibonacci(numero);
    const estaNaSequencia = sequenciaFibonacci.includes(numero);
    const posicaoNaSequencia = sequenciaFibonacci.indexOf(numero) + 1;
    const menorNumeroProximo = sequenciaFibonacci[sequenciaFibonacci.length - 2];
    const posicaoNumeroProximo = sequenciaFibonacci.indexOf(menorNumeroProximo) + 1;

    console.log((estaNaSequencia)? 
    `O número ${numero} é o ${posicaoNaSequencia}º número na sequencia de Fibonacci!` : 
    `O número ${numero} NÃO PERTENCE a sequência de Fibonacci! O menor número que mais se aproxima é ${menorNumeroProximo}, que, por suavez, é o ${posicaoNumeroProximo}º número da sequência.`
    );   
};

pertenceASequenciaFibonacci(1648465);