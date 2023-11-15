carritoMostrar= JSON.parse(localStorage.getItem("CarritoDeCompra"))
if(carritoMostrar!=null){
if(carritoMostrar.length>0){
    cantidadObtenido=carritoMostrar.length;
    let carritoCantidad=document.querySelector("#cantidadDeProductos");
    carritoCantidad.innerHTML=cantidadObtenido;
}
}