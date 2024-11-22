//Solicita al usuario dos números y una operación (+, -, *, /) usando prompt. Muestra el resultado de la operación en un alert.
function exercise3(){
    let num1 = parseInt(prompt('Ingrese el primer número: '));
    let num2 = parseInt(prompt('Ingrese el segundo número: '));
    let operation = prompt('Introduce la operación a realizar: +, -, *, /');
    let result = 0;
    switch(operation){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            alert('Operación no válida');
            return;
    }
    alert('El resultado de la operación es: ' + result);
}