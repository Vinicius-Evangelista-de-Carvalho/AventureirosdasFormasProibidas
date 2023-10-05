const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para calcular a área de um polígono irregular
function calcularAreaPoligonoIrregular(vertices) {
  // Verifique se há pelo menos três vértices para formar um polígono
  if (vertices.length < 3) {
    return 0;
  }

  let areaTotal = 0;
  const n = vertices.length;

  for (let i = 0; i < n; i++) {
    const x1 = vertices[i][0];
    const y1 = vertices[i][1];
    const x2 = vertices[(i + 1) % n][0];
    const y2 = vertices[(i + 1) % n][1];

    areaTotal += (x1 * y2 - x2 * y1);
  }

  areaTotal = Math.abs(areaTotal) / 2.0;
  return areaTotal;
}

const vertices = [];

// Função recursiva para inserir vértices até que o usuário queira parar
function inserirVertice() {
  rl.question('Insira as coordenadas do vértice (x y), ou digite "calcular" para obter a área: ', (resposta) => {
    if (resposta.toLowerCase() === 'calcular') {
      const areaTotal = calcularAreaPoligonoIrregular(vertices);
      console.log(`A área do polígono irregular é: ${areaTotal}`);
      rl.close();
    } else {
      const coordenadas = resposta.split(' ');
      if (coordenadas.length === 2) {
        const x = parseFloat(coordenadas[0]);
        const y = parseFloat(coordenadas[1]);
        if (!isNaN(x) && !isNaN(y)) {
          vertices.push([x, y]);
        } else {
          console.log('Coordenadas inválidas. Insira novamente.');
        }
      } else {
        console.log('Formato de entrada inválido. Use "x y".');
      }
      inserirVertice();
    }
  });
}

console.log('Insira as coordenadas dos vértices do polígono irregular. Quando terminar, digite "calcular".');
inserirVertice();
