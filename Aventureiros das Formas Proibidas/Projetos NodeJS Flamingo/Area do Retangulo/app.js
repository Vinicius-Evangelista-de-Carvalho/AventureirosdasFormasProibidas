const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularAreaRetangulo(comprimento, largura) {
  return comprimento * largura;
}

function pedirComprimento() {
  rl.question('Digite o comprimento do retângulo (maior que 0): ', (comprimento) => {
    const comprimentoNumero = parseFloat(comprimento);

    if (comprimentoNumero <= 0 || isNaN(comprimentoNumero)) {
      console.log('O valor do comprimento deve ser maior que 0. Tente novamente.');
      pedirComprimento();
    } else {
      pedirLargura(comprimentoNumero);
    }
  });
}

function pedirLargura(comprimento) {
  rl.question('Digite a largura do retângulo (maior que 0): ', (largura) => {
    const larguraNumero = parseFloat(largura);

    if (larguraNumero <= 0 || isNaN(larguraNumero)) {
      console.log('O valor da largura deve ser maior que 0. Tente novamente.');
      pedirLargura(comprimento);
    } else {
      const area = calcularAreaRetangulo(comprimento, largura);
      console.log(`A área do retângulo é: ${area}`);
      rl.close();
    }
  });
}

pedirComprimento();
