function indiceMasaCorporal(peso,altura) {
    let imc = ((peso)/(altura*altura));
    console.log(imc);
    return imc; 
}

indiceMasaCorporal(64,1.73);

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  // Ejemplo de uso
  let numero = 5;
  let resultado = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es ${resultado}`);
  
  function convertirDolaresReales(dolares) {
    //1 dolar = 4.80 reales
    let reales = dolares * 4.80;
    console.log(reales)
    return reales; 
  }
  convertirDolaresReales(10);   

function areaPerimetro(altura,ancho) {
    let perimetro = 2*altura + 2*ancho; 
    let area = altura*ancho;
    return console.log(`perimetro: ${perimetro} / Área: ${area}`);
}

areaPerimetro(6,9);


function areaCircular(radio) {
    let pi = 3.14;
    let area = pi * (radio * radio);
    let perimetro = pi * (radio * 2);
    return console.log(`El área de la sala circular es: ${area} y el perímetro es: ${perimetro}`);
}

areaCircular(4);


function mostrarTablaDeMultiplicar(numeroTabla) {
    for (var i = 1; i <= 10; i++) {
        var resultado = numeroTabla * i;
        console.log(numeroTabla + " x " + i + " = " + resultado);
    }
}

// Ejemplo de uso
let numeroTabla = 7;
mostrarTablaDeMultiplicar(numeroTabla);


