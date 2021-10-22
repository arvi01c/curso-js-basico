/* const lista1 = [100, 200, 300, 500];

// Calcuar el prmedio la media

// ? Como sumar todos los sumeros usar un ciclo

let sumaLista1 = 0;
for (let i = 0; i < lista1.length; i++) {
  sumaLista1 = sumaLista1 + lista1[i];
}

const promedioLista1 = sumaLista1 / lista1.length;
promedioLista1;

function calcularMediaAritmetica(lista) {
  /*  let sumaLista = 0
    for (let i = 0; i < lista.length; i++){
        sumaLista = sumaLista + lista[i];
    } 
    !Vamos a intentar con metodos de arrays 
    
  const sumaLista = lista.reduce(function (valorAcomulado = 0, nuevoElemento) {
    return valorAcomulado + nuevoElemento;
  });
  const promedioLista1 = sumaLista / lista.length;
  return promedioLista1;
}

let test = calcularMediaAritmetica([3, 4, 5, 6, 7, 7, 8, 9, 89]);
test;

const lista2 = [300, 200, 400, 40000000];

const mitadLista2 = parseInt(lista2.length / 2);

function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let mediana;

if (esPar(lista2.length)) {
  const element1 = lista2[mitadLista2];
  const element2 = lista2[mitadLista2 - 1];

  const promedioElements = calcularMediaAritmetica([element1, element2]);
  mediana = promedioElements;
} else {
  mediana = lista2[mitadLista2];
}

mediana;

// Crear funcion que haga lo anterios ante cualquier array(lista)
let list = [1, 4, 5, 2, 3]; */
//let addlist = list.push(document.getElementById('list'));
// ! Generar un input que todo lo guarde en un arrays
//! y cuando llamen a la funcion calcular ya debe estar organizados los arryas

// Como ordenar la lista antes de ejecutar todo el sistema
//* De acuecrdo a una documentacion esta seria la mejor manera de ordenar los datos

/* console.log(list); */
//!Aca hay algo que al meter los datos los ingresa como NaN, solucionar problema
let list = [];

function onClickButtonAgregardato() {
  const newData = document.getElementById('list');

  let addlist = list.push(newData.value);
  let result = document.getElementById('inputDatos');
  result.innerText = list;
}

let ordenlist = list.sort(function (a, b) {
  return a - b;
});
list = ordenlist;

function onClickButtonPromedio() {
  let sumaLista = 0;
  for (let i = 0; i < list.length; i++) {
    sumaLista = sumaLista + Number(list[i]);
    const promedioList = sumaLista / list.length;

    let result = document.getElementById('promedioText');
    result.innerText = 'El promedio de sus datos es ' + promedioList;
  }
}

//Mediana

function onClickButtonMediana() {
  //reusando codigo jajaj
  const mitadList = parseInt(list.length / 2);
  //Esto deberia orgranizar los datos introducidos
  let listOrd = list.sort(function (elem, elem1) {
    return elem - elem1;
  });

  function esPar(numero) {
    if (numero % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  function calcularMediaAritmetica(lista) {
    let sumaLista = 0;
    for (let i = 0; i < lista.length; i++) {
      sumaLista = sumaLista + lista[i];
    }

    sumaLista = lista.reduce(function (valorAcomulado = 0, nuevoElemento) {
      return valorAcomulado + nuevoElemento;
    });
    const promedioList = sumaLista / lista.length;
    return promedioList;
  }
  let mediana;

  if (esPar(listOrd.length)) {
    // hay que ordenar ls datos
    const element1 = listOrd[mitadList];
    const element2 = listOrd[mitadList - 1];

    const promedioElements = calcularMediaAritmetica([element1, element2]);
    mediana = promedioElements;
  } else {
    mediana = listOrd[mitadList];
  }

  let result1 = document.getElementById('medianaText');
  result1.innerText = 'La mediana de sus datos es ' + mediana;
}

/* Informacion importante es resaltado
! NOta para mi importante o para llamar la atencion rapidamente
? Esto se usa cuando estamos en API's publicas, para otros
TODO:  Metodo para conformidad para hacer en API's
////  hacer texto tachados bueno para hacer tareas e ir tachando sin borrar 
*/

// * Ahora haremos la moda

function onClickButtonModa() {
  const lista01Count = {};
  list.map(function (elemento) {
    if (lista01Count[elemento]) {
      lista01Count[elemento] += 1;
    } else {
      lista01Count[elemento] = 1;
    }
  });

  const lista1Array = Object.entries(lista01Count).sort(function (
    valorAcomulado,
    nuevoValor
  ) {
    return valorAcomulado[1] - nuevoValor[1];
  });

  const moda = lista1Array[lista1Array.length - 1];

  let result1 = document.getElementById('modaText');
  result1.innerText = 'La moda de sus datos es ' + moda + ' vez repetido';
}

// !Debo hacer la tarea del taller y arreglar los erroes que tengo.
