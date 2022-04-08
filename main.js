/* Calculadora de intereses de plazo fijo */

/* DECLARACION DE FUNCIONES */

/* MENSAJE DE BIENVENIDA */
function bienvenida() {
    alert("Bienvenido al Banco Santander Rio");
}
/* INGRESO DE DATOS */
function ingresoDatos() {
    nombreIngresado = prompt("Ingrese su nombre");
    cuentaIngresada = parseInt(prompt("Ingrese su numero de cuenta"));

    return nombreIngresado, cuentaIngresada;
}
/* VALIDACION DE DATOS INGRESADOS */
function validaDatos(nombreIngresado, cuentaIngresada) {

    if ((cliente === nombreIngresado) && (numeroCuenta === cuentaIngresada)) {
        alert("Usuario y contraseña ingresados con exito");
        flag = 1;
    } else {
        alert("Usuario y/o contraseña ingresados incorrectamente.\nVuelva a intentarlo");
        flag = 0;
    }
    return flag;
}
/* CALCULO DE PLAZO FIJO */
function calcPlazoFijo() {
    let intereses;
    let inversionFinal;
    let invertido;
    let tiempo;

    invertido = parseInt(prompt("Ingrese el monto que desea invertir(minimo $1000)"))
    saldo = saldo - invertido;
    tiempo = parseInt(prompt("Ingrese el tiempo de inversión:\n1)30 días(30% interes anual)\n2)60 días (35% interes anual)\n3)90 días (40% interes anual)"));
    switch (tiempo) {
        case 1: {
            inversionFinal = invertido * 1.025;
            intereses = inversionFinal - invertido;
            alert("Su inversion fue realizada con exito!\nEl interes generado al finalizar el periodo de 30 días será: $" + intereses.toFixed(2) + "\nTotal invertido mas intereses: $" + (intereses + invertido).toFixed(2));
        }
            break;
        case 2: {
            inversionFinal = invertido * 1.0291;
            intereses = inversionFinal - invertido;
            alert("Su inversion fue realizada con exito!\nEl interes generado al finalizar el periodo de 35 días será: $" + intereses.toFixed(2) + "\nTotal invertido mas intereses: $" + (intereses + invertido).toFixed(2));
        }
            break;
        case 3: {
            inversionFinal = invertido * 1.0333;
            intereses = inversionFinal - invertido;
            alert("Su inversion fue realizada con exito!\nEl interes generado al finalizar el periodo de 40 días será: $" + intereses.toFixed(2) + "\nTotal invertido mas intereses: $" + (intereses + invertido).toFixed(2));
        }
            break;
        default: {
            alert("No ingresaste una opción valida")
            calcPlazoFijo();
        }
            break;
    }

}
/* FUNCION DE MENU */
function menu() {
    let opcion = parseInt(prompt("Ingrese la opción deseada:\n1)Ver saldo\n2)Extraer dinero\n3)Crear plazo fijo\n4)Salir del sistema"));

    switch (opcion) {
        case 1: {
            alert("Su saldo es $" + saldo);
            menu();
        }
            break;
        case 2: {
            extraccion = parseInt(prompt("Ingrese el monto a extraer"));
            saldo = saldo - extraccion;
            alert("Retiró exitosamente $" + extraccion + "\nSu nuevo saldo es $" + saldo);
            menu();
        }
            break;
        case 3: {
            calcPlazoFijo();
            menu();
        }
            break;
        case 4: {
            alert("Gracias por utilizar nuestros servicios");
        }
            break;
        default: {
            alert("No selecciono ninguna opción correcta");
            menu();
        }
            break;
    }
}

/* Comienzo del programa */
let cliente = "Luis";
let numeroCuenta = 123;
let flag = 0;
let nombreIngresado = "";
let cuentaIngresada = 0;
let saldo = 10000;
let extraccion = 0;



bienvenida();
do {
    ingresoDatos();
    validaDatos(nombreIngresado, cuentaIngresada);
} while (flag != 1);

menu();



