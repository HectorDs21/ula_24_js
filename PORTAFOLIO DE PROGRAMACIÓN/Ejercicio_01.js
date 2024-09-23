// Ejercicio_01 - Crear algoritmo para determinar si un número es par o impar
function verificarParImpar() {
    // Solicitamos al usuario que ingrese un número
    var numero = prompt("Ingrese un número:");

    // Convertimos el valor ingresado a número entero
    numero = parseInt(numero);

    // Verificamos si el número es válido
    if (isNaN(numero)) {
        console.log("Por favor, ingrese un número válido.");
    } else {
        // Usamos el operador módulo (%) para verificar si el número es par
        if (numero % 2 === 0) {
            console.log("El número " + numero + " es par.");
        } else {
            console.log("El número " + numero + " es impar.");
        }
    }
}

// Llamamos a la función para ejecutarla
verificarParImpar();
