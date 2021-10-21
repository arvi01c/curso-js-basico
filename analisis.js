//Helpers Funciones que no son parte del analisis pero se nesesitan tambien se conocen como Utils
function esPar(numerico) {
  return numerico % 2 === 0;
}

function calcularMediaAritmetica(lista) {
  sumaLista = lista.reduce(function (valorAcomulado = 0, nuevoElemento) {
    return valorAcomulado + nuevoElemento;
  });
  const promedioLista1 = sumaLista / lista.length;
  return promedioLista1;
}

//Calculadora de Mediana
function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const personitaMitad1 = lista[mitad - 1];
    const personitaMitad2 = lista[mitad];

    const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
    return mediana;
  } else {
    const personitaMitad = lista[mitad];
  }
}

// Mediana General
const salariosCol = colombia.map(function (personita) {
  return personita.salary;
});

const salariosColSortes = salariosCol.sort(function (salaryA, salaryB) {
  return salaryA - salaryB;
});

const medianaGeneralCol = medianaSalarios(salariosColSortes);
console.log(medianaGeneralCol);
// Mediana del top 10%
const spliceStart = salariosColSortes.length * 0.9;
const spliceCount = salariosColSortes.length - spliceStart;
const salariosColTop10 = salariosColSortes.splice(spliceStart, spliceCount);

const medianaTop10 = medianaSalarios(salariosColTop10);
console.log(medianaTop10);

// me falta terminar los talleres y retos y arreglar los erroes que tengo
