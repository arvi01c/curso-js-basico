const lista1 = [100, 200, 300, 500];

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
    */
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
let list = [1, 4, 5, 2, 3];
//let addlist = list.push(document.getElementById('list'));
// ! Generar un input que todo lo guarde en un arrays
//! y cuando llamen a la funcion calcular ya debe estar organizados los arryas

// Como ordenar la lista antes de ejecutar todo el sistema
//* De acuecrdo a una documentacion esta seria la mejor manera de ordenar los datos

/* console.log(list); */
//!Aca hay algo que al meter los datos los ingresa como NaN, solucionar problema

function onClickButtonAgregardato() {
  const newData = Number(document.getElementById('list'));

  let addlist = list.push(newData);
  return list;
}
list;
let ordenlist = list.sort(function (a, b) {
  return a - b;
});
ordenlist;
list;

function onClickButtonPromedio() {
  let sumaLista = 0;
  for (let i = 0; i < list.length; i++) {
    sumaLista = sumaLista + list[i];
    const promedioList = sumaLista / list.length;

    let result = document.getElementById('promedioText');
    result.innerText = 'El promedio de sus datos es ' + promedioList;
  }
}

function onClickButtonMediana() {
  //reusando codigo jajaj
  const mitadLista2 = parseInt(list.length / 2);

  function esPar(numero) {
    if (numero % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  let mediana;

  if (esPar(list.length)) {
    const element1 = list[mitadLista2];
    const element2 = list[mitadLista2 - 1];

    const promedioElements = calcularMediaAritmetica([element1, element2]);
    mediana = promedioElements;
  } else {
    mediana = list[mitadLista2];
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

const lista01 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];

const lista01Count = {};
lista01.map(function (elemento) {
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

lista01;
lista01Count;
lista1Array;
moda;
// !Debo hacer la tarea del taller y arreglar los erroes que tengo.
