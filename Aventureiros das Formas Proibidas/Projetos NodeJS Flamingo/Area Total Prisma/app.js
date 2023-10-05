const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularTotalArea(baseSides, sideLength, baseHeight, prismHeight) {
  // Fórmula para calcular a área total de um prisma
  const baseArea = (baseSides * Math.pow(sideLength, 2)) / (4 * Math.tan(Math.PI / baseSides));
  const lateralArea = baseSides * sideLength * prismHeight;
  const totalArea = 2 * baseArea + lateralArea;

  return totalArea;
}

rl.question('Número de lados da base: ', (baseSides) => {
  rl.question('Comprimento do lado: ', (sideLength) => {
    rl.question('Altura da base: ', (baseHeight) => {
      rl.question('Altura do prisma: ', (prismHeight) => {
        const totalArea = calcularTotalArea(parseFloat(baseSides), parseFloat(sideLength), parseFloat(baseHeight), parseFloat(prismHeight));
        console.log(`A área total do prisma é: ${totalArea.toFixed(2)} unidades quadradas.`);
        rl.close();
      });
    });
  });
});
