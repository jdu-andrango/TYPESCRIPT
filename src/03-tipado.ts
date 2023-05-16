// TIPADO DENTRO DE TS

var laboratorio: string = "Gory";
console.log(laboratorio);

var laboratorio: string = "Xian";
console.log(laboratorio);

//NO SE PUEDE INGRESAR DATOS DE OTRO TIPO EN UNA MISMA VARIABLE
//var laboratorio = 50;

//TIPOS INFERIDOS

var ejemplo2 = 34;
let ejemplo3 = {};
console.log(ejemplo3);

//var ejemplo2 = true;

// NOMBRES DE VARIABLES IGUALES

(() => {
  let productName = "Telefono";
  let productPrice = 499.99;

  console.log(productName);

  productName = "licuadora";
  productName.toLowerCase();

  console.log(productName);

  productPrice.toFixed();
  console.log(productPrice);
}
)();
