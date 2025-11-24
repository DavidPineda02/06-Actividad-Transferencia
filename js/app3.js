// Notas de actividades: Cree un arreglo con seis notas numéricas. Recorra el arreglo
// usando for y calcule el promedio (no use funciones externas).

let notas = [85, 90, 78, 92, 88, 76];
let suma = 0;

// Recorrer el arreglo usando for para calcular la suma de las notas
for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
}

// Calcular el promedio
let promedio = suma / notas.length;

// Mostrar el promedio
console.log(`El promedio de las notas es: ${promedio}`);
