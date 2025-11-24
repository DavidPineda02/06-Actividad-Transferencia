// Describiendo un objeto personal: Cree un objeto que represente algo que lleve
// consigo todos los días (ej. audífonos, libreta, termo). Debe tener al menos cuatro
// propiedades. Recorra sus claves y valores usando un ciclo for...of sobre
// Object.entries().

let inventario = {
    "Producto": "Televisor",
    "Marca": "LG", 
    "Pulgadas": 80,
    "Resolucion": ["HD", "Full HD", "4K/UHD" ],
    "Stock": 30
};

// Recorrer las claves y valores del objeto usando for...of sobre Object.entries()
for (let [clave, valor] of Object.entries(inventario)) {
    console.log(`${clave}: ${valor}`);
}