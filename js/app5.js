// Lista de tareas: Cree un arreglo vacío llamado tareas. Agregue tres actividades
// utilizando push(). Luego elimine la última utilizando pop(). Muestre el resultado.

let tareas = [];

// Agregar tres actividades al arreglo
tareas.push("Lavar la ropa");
tareas.push("Organizar la habitacion");
tareas.push("Estudiar el proyecto (estamos dejando pa lo ultimo)");

// Eliminar la última actividad del arreglo
tareas.pop();

// Mostrar el resultado
console.log(`Tareas restantes: ${tareas}`);
