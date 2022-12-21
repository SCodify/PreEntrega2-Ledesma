alert("Esta aplicación permite hacer una simulación de balance de ingresos y gastos personales.");

const mostrar = function (ingresos, gastos, total){
  alert(
    `INFORME\n
    Los ingresos totales fueron de: $ ${ingresos} \n
    Los gastos totales fueron de: -$ ${gastos} \n
    El balance total es: $ ${total}`
  );
}


let continuar = "si";

const preguntar = function () {
  do {
    continuar = prompt ("Desea continuar? SI, o NO", continuar);
    switch (continuar.toLowerCase()) {
      case "si":
        condicion = true;
        bandera = false;
      break;
      case "no":
        condicion = false
        calcularIngreso(arrTransacciones);
        calcualrGastos(arrTransacciones);
        calcularTotal(arrTransacciones);
        mostrar(ingresos, gastos, total);
        bandera = false;
      break;
      default:
        alert("La respuesta ingresada es incorrecta")
        bandera = true;
      break;
    }
  } while (bandera);
}

let ingresos = 0;
let gastos = 0;

const calcularIngreso = function (arr) {
  arr.forEach(item => {
    if (item.categoria === "ingreso") {
      ingresos = ingresos + parseInt(item.monto);
    }    
  });
  console.log("El total de ingresos es: ", ingresos);
}

const calcualrGastos = function (arr) {
  arr.forEach(item => {
    if (item.categoria === "gasto") {
      gastos = gastos + parseInt(item.monto);
    }    
  });
  console.log("El total de gastos es: ", gastos);
}

let total = 0;

const calcularTotal = function (arr) {
  arr.forEach(item => {
    if (item.categoria === "ingreso") {
      total = total + parseInt(item.monto);
    } if (item.categoria === "gasto") {
      total = total - parseInt(item.monto);
    }    
  });
  console.log("El total es: ", total);
}


let transacciones = 0;
let arrTransacciones = [];

const Transaccion = class {
  constructor(obj){
    this.id = arrTransacciones.length + 1;
    this.categoria = obj.tipo;
    this.monto = obj.valor;
    this.descripcion = obj.text;
  }
}

let tipo = "";
let valor = 0;
let text = "";
let condicion = true;
let bandera = false;

const filtrarTransacciones = function (arr) {
  const ingresosFiltrados = arr.filter(item => item.categoria === "ingreso");
  const gastosFiltrados = arr.filter(item => item.categoria === "gasto");

  return alert(
    `Ingresos:\n${ingresosFiltrados.map(item => `$${item.monto} (${item.descripcion})`).join('\n')}\nGastos:\n${gastosFiltrados.map(item => `-$${item.monto} (${item.descripcion})`).join('\n')}`);

}

while (condicion) {
  tipo = prompt("Que tipo de transacción desea cargar? \n Es un INGRESO o un GASTO? ", tipo)
  
  switch (tipo.toLowerCase()) {
    case "ingreso":
      arrTransacciones.push(new Transaccion({
        tipo: "ingreso",
        valor: prompt("Ingrese el valor de la transacción: ", valor), 
        text: prompt("Ingrese una descripción del ingreso: ", text)
      }));
      console.log(arrTransacciones);
      filtrarTransacciones(arrTransacciones)
      preguntar();
    break;
    case "gasto":
      arrTransacciones.push(new Transaccion({
        tipo: "gasto",
        valor: prompt("Ingrese el valor de la transacción: ", valor), 
        text: prompt("Ingrese una descripción del gasto: ", text)
      }));
      console.log(arrTransacciones);
      filtrarTransacciones(arrTransacciones)
      preguntar();
    break;
            
    default:
      alert("El tipo de transacción ingresado es incorrecto!")
    break;
  }            
}