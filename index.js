let transacciones = 0;
let tipo = "";
let valor = 0;
let ingresos = 0;
let gastos = 0;
let total = 0;
let continuar = "si";
let condition = true;
let bandera = false;

alert("Esta aplicación permite hacer una simulación de balance de ingresos y gastos mensuales.");

const pregunta = function () {
    do {
        continuar = prompt ("Desea continuar? SI, o NO", continuar);
        switch (continuar.toLowerCase()) {
            case "si":
                condition = true;
                bandera = false;
            break;
            case "no":
                condition = false
                alert(`INFORME\n
                Los ingresos totales fueron de: $ ${ingresos} \n
                Los gastos totales fueron de: $ ${gastos} \n
                El balance total es: $ ${total}`);
                bandera = false;
            break;
            default:
                alert("La respuesta ingresada es incorrecta")
                bandera = true;
            break;
        }
    } while (bandera);
}

while (condition) {
    tipo = prompt("Que tipo de transacción desea cargar? \n Es un INGRESO o un GASTO? ", tipo)
    
    switch (tipo.toLowerCase()) {
        case "ingreso":
            valor = prompt("Ingrese el valor de la transacción: ", valor)
            ingresos = ingresos + parseInt(valor);
            console.log("El total de ingresos es: ", ingresos);
            total = total + parseInt(valor);
            pregunta();
        break;
        case "gasto":
            valor = prompt("Ingrese el valor de la transacción: ", valor)
            gastos = gastos - parseInt(valor);
            console.log("El total de gastos es: ", gastos);
            total = total - parseInt(valor);
            pregunta();
        break;
                
        default:
            alert("El tipo de transacción ingresado es incorrecto!")
        break;
    }
    console.log("El total es: ", total);               
}
            
            
