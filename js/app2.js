// Inventario de frutas: Dado el arreglo ["Manzana", "Pera", "Uva"], agregue “Banano”
// al inicio, retire el último elemento y muestre el arreglo final. Luego recórralo
// utilizando for...of.

let frutas = ["Manzana", "Pera", "Uva"];

// Agregar "Banano" al inicio del arreglo
frutas.unshift("Banano");

// Retirar el último elemento del arreglo
frutas.pop();

// Mostrar el arreglo final
console.log(`Arreglo final de frutas: ${frutas}`);

// Recorrer el arreglo utilizando for...of
for (let fruta of frutas) {
    console.log(`Fruta: ${fruta}`);
}