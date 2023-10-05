const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o comprimento de um lado do quadrado: ', (lado) => {
  // Converter o lado para um número
  const ladoNumero = parseFloat(lado);

  if (!isNaN(ladoNumero) && ladoNumero > 0) {
    // Calcular a área do quadrado (lado * lado)
    const areaQuadrado = ladoNumero * ladoNumero;
    console.log(`A área do quadrado é: ${areaQuadrado}`);
  } else {
    console.log('Por favor, insira um valor válido para o lado do quadrado.');
  }

  rl.close();
});
