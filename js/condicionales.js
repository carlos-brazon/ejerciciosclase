
console.log("EJERCICIOS CONDICIONALES");
console.log("");

console.log("Ejercicio 1 con if-else");//**************************************************************************************** */
// const number=prompt("Coloca un número del 1 al 10")
let number = 8

if (number >= 5) {
    console.log("El número es mayor o igual que 5");
} else {
    console.log("El número es menor que 5");
}
console.log("");

console.log("Ejercicio 2 con if-else");//***************************************************************************************** */
if (number > 5) {
    console.log("El número es mayor que 5");
} else if (number < 5) {
    console.log("El número es menor que 5");
} else {
    console.log("El número es igual a 5");
}
console.log("");


console.log("Ejercicio 3 con if-else");//********************************************************************************************* */
if (number % 2 === 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}
console.log("");

console.log("Ejercicio 4 con if-else");//*********************************************************************************************** */
let number1 = 15
let number2 = 15

if (number1 > number2) {
    console.log("Number 1 es mayor");
} else if (number2 > number1) {
    console.log("Number 2 es mayor");
} else {
    console.log("Los nùmeros son iguales");
}
console.log("");

console.log("Ejercicio 5 con switch");//************************************************************************************************ */
let lado1 = 8
let lado2 = 5
let lado3 = 3

switch (true) {
    case
        lado1 === 0 || lado2 === 0 || lado3 === 0:
        console.log("No es ningun triangulo, verifica los datos de entrada");
        break;
    case
        lado1 === lado2 && lado2 === lado3:
        console.log("Es un triángulo equilátero");
        break;
    case
        lado1 == lado2 || lado2 === lado3 || lado1 === lado3:
        console.log("Es un triángulo isóseles");
        break;
    case
        lado1 !== lado2 || lado2 !== lado3 || lado1 !== lado3:
        console.log("Es un triángulo escaleno");
        break;

    default:
        console.log("No es ningun triangulo, verifica los datos de entrada");
}
console.log("");

console.log("Ejercicio 6 con switch");//************************************************************************************************ */
let min = 10
let max = 20
let number3 = 20
switch (true) {
    case
        number3 > min && number3 < max:
        console.log("El número " + number3 + " se encuentra dentro del rango");
        break;
    default:
        console.log("El número " + number3 + " está fuera del rango");
        break;
}
console.log("");

console.log("Ejercicio 7 con switch");//************************************************************************************************ */
let operation = "multiply"
switch (true) {
    case
        operation === "add":
        console.log(number1 + number2);
        break;
    case
        operation === "subtract":
        console.log(number1 - number2);
        break;
    case
        operation === "multiply":
        console.log(number1 * number2);
        break;
    case
        operation === "divide":
        console.log(number1 / number2);
        break;
    default:
        console.log("Invalid operation")
        break;
}
console.log("");

console.log("Ejercicio 8 switch");//************************************************************************************************ */
let year = 2024
switch (true) {
    case
        year % 4 === 0:
        //alert("Si es un año bisiesto");
        console.log("SI es un año bisiesto");
        break;
    default:
        console.log("NO es un año bisiesto");
        //alert("No es un año bisiesto");
        break;
}
console.log("");

console.log("Ejercicio 8 con ternario ");/************************************************************************************** */
year % 4 === 0 ? console.log("Con ternario: SI es un año bisiesto") //alert("Con ternario: SI es un año bisiesto")
    : console.log("Con ternario: NO es un año bisiesto"); //alert("Con ternario: NO es un año bisiesto") 
console.log("");

console.log("Ejercicio 9 con switch");/************************************************************************************** */
// const month= prompt("enter month:")
const month = "may"

switch (true) {
    case
        month === "january" || month === 'march' || month === 'may' || month === 'july' || month === 'august' || month === 'october' || month === 'december':
        alert("El mes tiene 31 días");
        break;
    case
        month === "april" || month === "june" || month === "september" || month === "november":
        alert("El mes tiene 30 días")
        break;
    case
        month === 'february':
        alert("El mes tiene 28 días");
        break;

    default:
        alert("Error, introduce un nombre de mes correcto");
        break;
}
console.log("");

console.log("Ejercicio 10 con ternario");/************************************************************************************** */

month === "june" || month === 'july' || month === 'august' ? alert("La estación del año es : verano") :
    month === "september" || month === 'october' || month === 'november' ? alert("La estación del año es : otoño") :
        month === "december" || month === 'january' || month === 'february' ? alert("La estación del año es : invierno") :
            month === "march" || month === 'april' || month === 'may' ? alert("La estación del año es : primavera") : alert("NO se puede saber la estacion del año: introduce nombre de mes correcto");
console.log("")