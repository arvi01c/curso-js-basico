/* const precioOricginal = 120;
const descuento = 18; */

/* Descargue la extencion de Better Comments 
para hacer estas cosas que las tendre de en cuenta 
de ahora en adelante
* Informacion importante es resaltado
! NOta para mi importante o para llamar la atencion rapidamente
? Esto se usa cuando estamos en API's publicas, para otros
TODO:  Metodo para conformidad para hacer en API's
////  hacer texto tachados bueno para hacer tareas e ir tachando sin borrar 
*/
function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuaento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuaento) / 100;
  return precioConDescuento;
}
//console.log(calcularPrecioConDescuento(300, 30));

// !Utilizo la extencion Quokka para cer los resultados
// ! rapidamente en el mismo editor, asi ahorrar tiempos

function onClickButtonPriceDiscount() {
  let inputPrice = document.getElementById('InputPrice');
  let priceValue = inputPrice.value;
  let inputDiscount = document.getElementById('InputDiscount');
  let discountvalue = inputDiscount.value;

  let precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    discountvalue
  );

  let resultP = document.getElementById('resultP');
  resultP.innerText = 'El precio con descuento son $' + precioConDescuento;
}

/* //?Es bacano la forma de hacer un console.log con elementos me gusto 
console.log({
  precioOricginal,
  descuento,
  porcentajePrecioConDescuaento,
  precioConDescuento,
}); */

// TODO hacer la app pero ahora con cupones de descuento
// seran asi cupon 5% cupon01 10% cupon02 20% cupoon 35%

// 1. saber que clases de cupones existen
const cuponts = ['cuponn', 'cupon', 'cuponnn', 'cupoon'];
// 2. que el usuario introdusca su cupon

function onClickButtonPriceWihtCupon() {
  let inputPrecio = document.getElementById('InputPrecio');
  let priceValues = inputPrecio.value;
  let inputCupon = document.getElementById('InputCupon');
  let discountvalues = inputCupon.value;

  // 3. de acuerdo al cupon generar un descuento

  let descuentoCupon;
  switch (discountvalues) {
    case cuponts[0]:
      descuentoCupon = 5;
      break;
    case cuponts[1]:
      descuentoCupon = 10;
      break;
    case cuponts[2]:
      descuentoCupon = 20;
      break;
    case cuponts[3]:
      descuentoCupon = 35;
      break;
  }

  let precioConCupon = calcularPrecioConDescuento(priceValues, descuentoCupon);

  // 4. imprimir en pantalla
  let resultPts = document.getElementById('ResultP');
  // if (descuentoCupon === (5 || 10 || 20 || 35)) Yo lo queria hacer asi pero no esta funcionando
  if (descuentoCupon === 5) {
    resultPts.innerText = 'El precio con descuento son $' + precioConCupon;
  } else if (descuentoCupon === 10) {
    resultPts.innerText = 'El precio con descuento son $' + precioConCupon;
  } else if (descuentoCupon === 20) {
    resultPts.innerText = 'El precio con descuento son $' + precioConCupon;
  } else if (descuentoCupon === 35) {
    resultPts.innerText = 'El precio con descuento son $' + precioConCupon;
  } else {
    resultPts.innerText = 'El cupón ' + discountvalues + ' no es válido';
  }
}
