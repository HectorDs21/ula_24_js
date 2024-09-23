// Ejercicio_02 - Crear algoritmo para calcular el promedio ponderado de un estudiante
function calcularPromedioPonderado() {
    // Solicitamos las tres notas al usuario
    var nota1 = parseFloat(prompt("Ingrese la primera nota (40%):"));
    var nota2 = parseFloat(prompt("Ingrese la segunda nota (30%):"));
    var nota3 = parseFloat(prompt("Ingrese la tercera nota (30%):"));

    // Validamos que las notas ingresadas sean números válidos
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        console.log("Por favor, ingrese notas válidas.");
    } else {
        // Calculamos el promedio ponderado
        var promedio = (nota1 * 0.40) + (nota2 * 0.30) + (nota3 * 0.30);

        // Mostramos el promedio en la consola
        console.log("El promedio ponderado del estudiante es: " + promedio.toFixed(2));

        // Verificamos el resultado del estudiante según su promedio
        if (promedio < 3.95) {
            console.log("El estudiante ha reprobado la asignatura.");
        } else if (promedio >= 3.95 && promedio < 4.95) {
            console.log("El estudiante debe ir a examen.");
        } else {
            console.log("El estudiante está eximido de la asignatura.");
        }
    }
}

// Llamamos a la función para ejecutarla
calcularPromedioPonderado();
