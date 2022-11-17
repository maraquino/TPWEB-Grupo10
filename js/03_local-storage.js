//crea una variable en local storage
localStorage.setItem("universidad","UNLAM");

//obtiene el dato de una variable de local storage
localStorage.getItem("universidad");

//borrar
//localStorage.removeItem("universidad");

let productos=[
    {
        nombre:"Gaseosa",
        cantidad:2,
        precio:300
    },
    {
        nombre:"Galletitas Oreo",
        cantidad:4,
        precio:100
    }
];
let productoNuevo={
    nombre:"Fideos",
    cantidad:4,
    precio:200
}
productos.push(productoNuevo);

//convertir este array de datos en json en string
localStorage.setItem("listaProductos",JSON.stringify(productos));

//obtengo los datos de json y los parseo para recuperar el array de objetos
let productosObtenidos=JSON.parse(localStorage.getItem("listaProductos"));