const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o raio da base do cilindro: ', (raio) => {
  rl.question('Digite a altura do cilindro: ', (altura) => {
    // Converte as entradas para números
    const raioNum = parseFloat(raio);
    const alturaNum = parseFloat(altura);

    if (isNaN(raioNum) || isNaN(alturaNum)) {
      console.log('Por favor, insira valores numéricos válidos.');
    } else {
      // Calcula a área da superfície do cilindro
      const areaCilindro = 2 * Math.PI * raioNum * (raioNum + alturaNum);

      console.log(`A área da superfície do cilindro é: ${areaCilindro.toFixed(2)}`);
    }

    rl.close();
  });
});
