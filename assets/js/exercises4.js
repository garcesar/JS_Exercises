//Pide al usuario dos valores y muestra cómo se intercambian entre sí. Por ejemplo, si ingresa a=5 y b=10, el resultado será a=10 y b=5. 
//Los resultados se deben mostrar con un document.write donde se muestre si el user ingreso a=5 y b=10: a = 10 B = 5
function exercise4(){
    let a = parseInt(prompt('Ingrese el primer número: '));
    let b = parseInt(prompt('Ingrese el segundo número: '));
    let temp = a;
    a = b;
    b = temp;
    document.write(`Si ingresaste a=${temp} y b=${a}, entonces a=${a} y b=${temp}`);
}