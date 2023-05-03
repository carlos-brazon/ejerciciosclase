
// ***************** EJERCICIOS FUNCIONES ***********************************************************************************************************************************************

    console.log("Ejercicio 1.  Escribe una función que muestre por consola Hello World");
function sayHello() {
    console.log("Hello world");
}
sayHello()
console.log("");

console.log("Ejercicio 2.  Escribe una función que devuelva el cuadrado de un número.");
function cuadradonum(x) {
    return Math.pow(x, 2)
}
let resultado = cuadradonum(2)
console.log(resultado);
console.log("");

console.log("Ejercicio 3.  Escribe una función que acepte un nombre como parámetro y salude específicamente a esa persona. Ejemplo: Hi, Anna");
function sayhi(name) {
    console.log(`Hi ${name}`);
}
sayhi("Carlos")
console.log("");

console.log("Ejercicio 4.  Escribe una función que reciba dos parámetros, el nombre y el apellido, y devuelva el nombre completo.");

function allName(nombre, apellido) {
    console.log(`${nombre} ${apellido}`);
}
allName("Carlos M.", "Brazon D")
console.log("");

console.log("Ejercicio 5.  Escribe una función que acepte la medida de los dos lados de un rectángulo y devuelva el área de dicho rectángulo. Si no se le pasa ningún parámetro, los lados deberán ser, por defecto, 5 y 3.");
function ladosRectangulo(largo = 5, ancho = 3) {
    return largo * ancho
}
const arearectangulo = ladosRectangulo(4, 5)
console.log(arearectangulo);
console.log("");

console.log("Ejercicio 6.  Escribe una función que acepte grados Celsius y devuelva la conversión a grados Fahrenheit");
function gradosselsius(x) {
    let conversion = (x * 1.8) + 32
    return conversion
}
const gradosFahrenheit = gradosselsius(50)
console.log(gradosFahrenheit + " Grados Fahrenheit ");
console.log("");

console.log("Ejercicio 7.  Escribe una función que acepte dos número, un mínimo y un máximo, y devuelva un número aleatorio entre dichos números. Para ello, tendrás que descubrir cómo funciona el método Math.random().");
function numeroAleatorio(nroUno, nroDos) {
    return Math.random() * (nroDos - nroUno) + nroUno
}
const nroRandom = numeroAleatorio(5, 10)
console.log("El número random es: " + nroRandom);
console.log("");

console.log("Ejercicio 8.  Escribe una función que calcule el área de un círculo si se le proporciona el radio");
function circleratio(valor) {
    console.log(`El área del circulo es: ${Math.PI * Math.pow(valor, 2)}`);
}
circleratio(2)
console.log("");

console.log("Ejercicio 9.  Cálculo del IMC");
function imcinicial(peso, altura) {
    let imcoperation = peso / Math.pow(altura, 2)
    if (imcoperation < 18.5) {
        return "Riesgo de malnutrición";
    } else if (imcoperation >= 18.5 && imcoperation <= 24.9) {
        return "Peso normal"
    } else if (imcoperation >= 25.0 && imcoperation <= 29.9) {
        return 'Sobrepeso'
    } else if (imcoperation > 30) {
        return "Obesidad"
    } else {
        return "noooooooooooooooooo";
    }
}
const imcfinal = imcinicial(200, 1.72)
console.log(imcfinal);
console.log("");

console.log("Ejercicio 10.  Escribe una función que acepte un dato y compruebe qué tipo de dato es.");
function tipodato(dato) {
    //let compare = typeof(dato)
    if (typeof dato == "string") {
        return Array.from(dato)
    } else if (Array.isArray(dato)) {
        return dato.toString()
    } else if (typeof dato === "number") {
        return dato.toString()
    } else {
        return "false"
    }

}
const carlosb = tipodato(["6515146"])
console.log(carlosb);
console.log("");


console.log("Ejercicio 11.  Escribe una función que te adivine el futuro. Recibirá como parámetros:");
function future(city, work, childrens, couple) {
    console.log(`Trabajarás en ${city}, trabajando como ${work}, y tendrás ${childrens} hijos con ${couple}.`);
}
future('madrid', 'webdeveloper', 1, 'mariela')
console.log("");
