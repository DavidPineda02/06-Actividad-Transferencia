// Lista de asistencia: Cree un arreglo con los nombres de cinco aprendices. Agregue
// un nuevo nombre al final y elimine el primero. Finalmente, muestre la cantidad total
// de nombres registrados.

let aprendices = ["Jensen", "David", "Edwar", "John", "Michael"];

// Agregar un nuevo nombre al final del arreglo
aprendices.push("Josue");

// Eliminar el primer nombre del arreglo
aprendices.shift();

// Mostrar la cantidad total de nombres registrados
console.log(`Cantidad total de aprendices registrados: ${aprendices.length}`);