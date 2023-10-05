const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para calcular a área do trapézio
function calcularAreaTrapezio(baseMaior, baseMenor, altura) {
  return ((baseMaior + baseMenor) * altura) / 2;
}

// Pergunta ao usuário as bases e a altura do trapézio
rl.question('Digite o valor da base maior: ', (baseMaior) => {
  rl.question('Digite o valor da base menor: ', (baseMenor) => {
    rl.question('Digite o valor da altura: ', (altura) => {
      // Converte as entradas para números
      baseMaior = parseFloat(baseMaior);
      baseMenor = parseFloat(baseMenor);
      altura = parseFloat(altura);

      // Verifica se as entradas são válidas
      if (isNaN(baseMaior) || isNaN(baseMenor) || isNaN(altura)) {
        console.log('Entradas inválidas. Certifique-se de que você inseriu números.');
      } else {
        // Calcula a área do trapézio
        const areaTotal = calcularAreaTrapezio(baseMaior, baseMenor, altura);
        console.log(`A área do trapézio é: ${areaTotal}`);
      }

      // Fecha a interface de leitura
      rl.close();
    });
  });
});
