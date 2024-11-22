//Películas o series para ver
// Define un array miListaDePendientes con títulos de cuatro películas o series que quieres ver.
// •
// Usa el método push para agregar una quitan película.
// •
// Modifica el nombre de la 2da película del array por una nueva.
// •
// Muestra el array actualizado por consola.
function exercise9(){
    console.log("Películas o series para ver: ");
    var miListaDePendientes = ["The Mandalorian", "The Witcher", "Better call Saul", "Criptoboy", "La Jaula"];

    let newSeries = prompt("Introduce una nueva serie o película");
    miListaDePendientes.push(newSeries);

    newSeries = prompt("Introduce una nueva serie o película en la posición 2");
    miListaDePendientes[1] = newSeries;

    miListaDePendientes.forEach(function(serie, index){
        console.log((index + 1) + ". " + serie);
    });
}