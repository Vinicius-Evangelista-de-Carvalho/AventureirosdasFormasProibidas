const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularAreaPoligonoRegular(numerodeLados, comprimentoLado) {
  const n = parseFloat(numerodeLados);
  const L = parseFloat(comprimentoLado);

  if (isNaN(n) || isNaN(L) || n < 3) {
    console.log('Entrada inválida. Certifique-se de inserir um número válido de lados e comprimento.');
  } else {
    const areaTotalPoligono = (n * Math.pow(L, 2)) / (4 * Math.tan(Math.PI / n));
    console.log(`A área do polígono regular é: ${areaTotalPoligono.toFixed(2)}`);
  }

  rl.close();
}

rl.question('Informe o número de lados do polígono regular: ', (numerodeLados) => {
  rl.question('Informe o comprimento do lado: ', (comprimentoLado) => {
    calcularAreaPoligonoRegular(numerodeLados, comprimentoLado);
  });
});
