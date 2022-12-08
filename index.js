let transacciones = 0;
let tipo = "";
let valor = 0;
let ingresos = 0;
let gastos = 0;
let total = 0;
let continuar = "si";
let condicion = true;
let bandera = false;

alert("Esta aplicación permite hacer una simulación de balance de ingresos y gastos mensuales.");

const mostrar = function (ingresos, gastos, total){
    alert(
        `INFORME\n
        Los ingresos totales fueron de: $ ${ingresos} \n
        Los gastos totales fueron de: $ ${gastos} \n
        El balance total es: $ ${total}`
    );
}

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
                mostrar(ingresos, gastos, total)
                bandera = false;
            break;
            default:
                alert("La respuesta ingresada es incorrecta")
                bandera = true;
            break;
        }
    } while (bandera);
}

const calcularIngreso = function (val) {
    ingresos = ingresos + parseInt(val);
    console.log("El total de ingresos es: ", ingresos);
    total = total + parseInt(val);
}

const calcualrGastos = function (val) {
    gastos = gastos - parseInt(val);
    console.log("El total de gastos es: ", gastos);
    total = total - parseInt(val);
}

while (condicion) {
    tipo = prompt("Que tipo de transacción desea cargar? \n Es un INGRESO o un GASTO? ", tipo)
    
    switch (tipo.toLowerCase()) {
        case "ingreso":
            valor = prompt("Ingrese el valor de la transacción: ", valor)
            calcularIngreso(valor);
            preguntar();
        break;
        case "gasto":
            valor = prompt("Ingrese el valor de la transacción: ", valor)
            calcualrGastos(valor);
            preguntar();
        break;
                
        default:
            alert("El tipo de transacción ingresado es incorrecto!")
        break;
    }
    console.log("El total es: ", total);               
}