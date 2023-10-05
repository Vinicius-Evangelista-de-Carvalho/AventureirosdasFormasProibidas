const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Informe o raio da esfera: ', (input) => {
  const raio = parseFloat(input);

  if (isNaN(raio) || raio <= 0) {
    console.log('Por favor, insira um valor de raio válido.');
    rl.close();
    return;
  }

  const areaSuperficie = 4 * Math.PI * Math.pow(raio, 2);
  console.log(`A área da superfície da esfera com raio ${raio} é aproximadamente ${areaSuperficie.toFixed(2)}`);

  rl.close();
});
