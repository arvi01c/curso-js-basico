//codigo cuadrado
console.group('Cuadrado');
const ladoCuadrado = 5;
console.log('los lados del cuadrado miden ' + ladoCuadrado + ' cm');

const perimetroCuadrado = ladoCuadrado * 4;
console.log('el perimetro del cuadrado mide ' + perimetroCuadrado + ' cm');

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log('el area del cuadrado es ' + areaCuadrado + ' cm²');

console.groupEnd();

//codigo triangulo
console.group('Triangulo');
const ladoTriangulo = 5;
const ladoTriangulo1 = 4;
const ladoTriangulo2 = 4;

const alturaTriangulo = 5.5;

console.log(
  'los lados del triangulo miden ' +
    ladoTriangulo +
    ', ' +
    ladoTriangulo2 +
    ', ' +
    ladoTriangulo1 +
    ', ' +
    ' cm'
);

const perimetroTriangulo = ladoTriangulo + ladoTriangulo1 + ladoTriangulo2;
console.log('el perimetro del triangulo mide ' + perimetroTriangulo + ' cm');

const areaTriangulo = (ladoTriangulo * alturaTriangulo) / 2;
console.log('el area del triangulo mide ' + areaTriangulo + ' cm²');

console.groupEnd();

//codigo Circulo
console.group('Circulo');
const radio = 5;
const diametro = 2 * radio;

console.log('el radio mide ' + radio + ' y el diametro ' + diametro);

const pi = Math.PI;
const perimetroCirculo = pi * diametro;

console.log('el perimetro es ' + perimetroCirculo + ', con pi igual a ' + pi);

const areaCirculo = radio * radio * pi;

console.log('el area del circulo es ' + areaCirculo + ' cm²');
console.groupEnd();

// ahora seran variables

//codigo cuadrado
function perimetroSquare(lado) {
  return lado * 4;
}

function areaSquare(lado) {
  return lado * lado;
}

//codigo triangulo

function perimetroTriangle(lado1, lado2, lado3) {
  const perimetro = lado1 + lado2 + lado3;
  return (
    'los lados del triangulo miden ' +
    lado1 +
    ', ' +
    lado2 +
    ', ' +
    lado3 +
    ', ' +
    ' cm y su perimetro es ' +
    perimetro +
    ' cm'
  );
}

function areaTriangle(lado, altura) {
  return 'el area del triangulo mide ' + (lado * altura) / 2 + ' cm²';
}

//codigo Circulo
// no entiendo sabiendo que del scope local puedo ver el scope gloal
//no puedo definir pi fuera de la funcion y utilizarlos para ambas funciones..
function perimetroCircle(radio) {
  const pi = Math.PI;
  return (
    'el radio mide ' +
    radio +
    ' y el diametro ' +
    radio * 2 +
    ', y su perimetro es ' +
    pi * radio * 2 +
    ' con pi igual a ' +
    pi
  );
}

function areaCircle(radio) {
  const pi = Math.PI;
  return 'el area del circulo es ' + radio * radio * pi + ' cm²';
}

//Aqui empezamos a intereactuar con HTML
// para leer algo en html con js
// document.getElementById('nombredelElemento')
// cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById('InputCuadrado');
  const value = input.value;

  const perimetro = perimetroSquare(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById('InputCuadrado');
  const value = input.value;

  const area = areaSquare(value);
  alert(area);
}

//traingulo

function calcularPerimetroTriangulo() {
  //debe haber una mejor forma de btener datos es horrible, ademas

  //porque los datos del usuario no los toma como numeros sabiendo
  //que desde el input se filtrar a que sean tipo number
  //por eso toco poner Number para cambiarles el tipo de dato.
  const input = document.getElementById('InputTriangulo');
  const value = Number(input.value);
  const input0 = document.getElementById('InputTriangulo0');
  const value0 = Number(input0.value);
  const input1 = document.getElementById('InputTriangulo1');
  const value1 = Number(input1.value);

  const perimetro = perimetroTriangle(value, value0, value1);
  alert(perimetro);
}
//NO esta funcionando ver bien porque
function calcularAreaTriangulo() {
  const input = document.getElementById('InputTriangulo');
  const value = Number(input.value);
  const input2 = document.getElementById('InputTraingulo2');
  const value2 = Number(input2.value);

  const area = areaTriangle(value, value2);
  alert(area);
}

// circulo

function calcularPerimetrocirculo() {
  const input = document.getElementById('Inputcirculo');
  const value = input.value;

  const perimetro = perimetroCircle(value);
  alert(perimetro);
}

function calcularAreacirculo() {
  const input = document.getElementById('Inputcirculo');
  const value = input.value;

  const area = areaCircle(value);
  alert(area);
}

//Reto en el curso : justo con el codigo que no me esta funcionando jajaj
/* La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo. Ready 
La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
La función debe retornar la altura del triángulo. */

function calcularAlturaTrianguloIso() {
  //debe haber una mejor forma de btener datos es horrible
  /*   const input = document.getElementById('InputTriangulo');
  const value = Number(input.value);
  const input0 = document.getElementById('InputTriangulo0');
  const value0 = Number(input0.value);
  const input1 = document.getElementById('InputTriangulo1');
  const value1 = Number(input1.value);
 */
  const input = document.getElementById('InputTriangulo');
  const value = Number(input.value);
  console.log(value);
  const input0 = document.getElementById('InputTriangulo0');
  const value0 = Number(input0).value;
  console.log(value0);
  const input1 = document.getElementById('InputTriangulo1');
  const value1 = Number(input1.value);
  console.log(value1);

  // c²=b²+(a/2)²
  // c son los datos iguales y b el dato a buscar la altura
  function esIsoceles(dato, dato0, dato1) {
    //ademas de probar si es isoceles tambien calcula la altura
    function altura(entrada, entrada0) {
      //b²=c²-(a/2)² siendo cla diagobnal de los datos lados iguales
      return Math.sqrt(entrada * entrada - (entrada0 / 2) * (entrada0 / 2));
    }
    if (dato === dato1) {
      return altura(dato, dato0);
    } else if (dato === dato0) {
      return altura(dato, dato1);
    } else if (dato1 === dato0) {
      return altura(dato1, dato);
    } else {
      return 'No es isoceles, debe tener dos lados iguales';
    }
  }

  const alturaIsoceles = esIsoceles(value, value0, value1);
  //! Algo esta fallando no se con sinceridad que es pero entiendo la logica
  //! Por el momento lo dejare así
  alert(alturaIsoceles);
}
