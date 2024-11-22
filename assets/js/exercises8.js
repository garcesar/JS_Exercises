//Tu lista de compras
//Crea un array llamado listaDeCompras con cinco cosas que comprarías en tu próxima visita al supermercado. Muestra cada elemento del array en la consola.
function exercise8(){
    console.log("Mi lista de compras: ");
    var listaDeCompras = ["leche", "pan", "huevos", "queso", "Agua"];
    
    listaDeCompras.forEach(function(item) {
        console.log(item);
    });
}