//Calcular el IVA de un producto
//Solicita al usuario el precio de un producto en dolares y su precio final a pesos (1dolar = $1130), además tenemos que sumarle el IVA (21%). Muestra el precio total en un alert.
function exercise6(){
    const dolar = 1130;
    const iva = 0.21;
    let price = parseFloat(prompt('Ingrese el precio del producto en dolares: '));
    let priceFinalLocal = price * dolar;
    
    let priceTotal = priceFinalLocal * iva;
    alert(`El precio total del producto + IVA en moneda local es: $${priceTotal}`);
}