const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite a base do triângulo: ', (base) => {
  rl.question('Digite a altura do triângulo: ', (altura) => {
    // Converte os valores para números
    const baseNum = parseFloat(base);
    const alturaNum = parseFloat(altura);

    // Verifica se os valores são números válidos
    if (isNaN(baseNum) || isNaN(alturaNum)) {
      console.log('Por favor, digite valores numéricos válidos.');
    } else {
      // Calcula a área do triângulo
      const areaTriangulo = (baseNum * alturaNum) / 2;
      console.log(`A área do triângulo é: ${areaTriangulo}`);
    }

    rl.close();
  });
});
