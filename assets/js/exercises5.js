//Pide al usuario un número de minutos. Convierte ese valor a segundos y también a horas. Muestra el resultado en un alert.
function exercise5(){
    let minutes = prompt("Introduce un número de minutos");
    let seconds = minutes * 60;
    let hours = (minutes / 60).toFixed(2); 
    alert(minutes + " minutos son " + seconds + " segundos y " + hours + " horas.");
}