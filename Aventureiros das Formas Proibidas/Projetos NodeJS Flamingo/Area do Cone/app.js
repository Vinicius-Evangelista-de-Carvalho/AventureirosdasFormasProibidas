const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularAreaCone(raio, altura) {
  const areaBase = Math.PI * raio * raio;
  const areaLateral = Math.PI * raio * Math.sqrt(raio * raio + altura * altura);
  const areaTotal = areaBase + areaLateral;
  return areaTotal;
}

rl.question('Digite o raio da base do cone: ', (raio) => {
  rl.question('Digite a altura do cone: ', (altura) => {
    const area = calcularAreaCone(parseFloat(raio), parseFloat(altura));
    console.log(`A área da superfície do cone é de aproximadamente: ${area.toFixed(2)} centimetros quadrados`);
    rl.close();
  });
});
