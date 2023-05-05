
//*************************************************************ARRAYS*********************************************************
console.log('Ejercicio 1 ARRAYS');
console.log('1-  Crea una variable que tenga como valor un array vacío.');
arrayempit = [""]
console.log("");

console.log('2- Crea una variable que tenga como valor un array con al menos 3 tipos de datos distintos.');
let array3type = ["carlos", 33, true]
console.log(array3type);
console.log("");

console.log('3- Crea un array vacío y añádele dos valores usando push(), dos valores usando unshift() y luego usa pop() y shift() una vez. A constinuación muestra por consola la longitud del array.');
arrayempyt2 = [];
arrayempyt2.push("brazon", "diaz")
arrayempyt2.unshift("carlos", "manuel")
arrayempyt2.pop()
arrayempyt2.shift()
console.log(arrayempyt2);
console.log("");

console.log('4- Crea el siguiente array: const names = ["Carlos", "María", "Isidro", "Elizondo", "Molina"]. A continuación, muestra por consola los nombres ["María, Isidro"] usando slice(). Luego, sustituye "Elizondo" por "Parma" usando splice().');
const names = ["Carlos", "María", "Isidro", "Elizondo", "Molina"]
console.log(names.slice(1, 3));
names.splice(name.indexOf("Elizondo") - 1, 1, "Parma")
console.log(names);
console.log("");

console.log('5- Convierte el array anterior (names) en un string de nombres separados por espacios.');
let namesjoin = names.join(" ")
console.log(namesjoin);
console.log("");

console.log('6- Crea la variable const sentence = "El perro de San Roque no tiene rabo". A continuación, conviértela en un array de palabras, y luego en otro de letras.');
const sentence = "El perro de San Roque no tiene rabo"
let arrayEjercicio1x5 = sentence.split(" ")
console.log(arrayEjercicio1x5);

console.log(sentence.split(""));
console.log("");

console.log('Crea el array months con valor: ["January", "February", "Marj", "April", "Mei"].');
let arraymonth = ["January", "February", "Marj", "April", "Mei"]

console.log('1- Hay dos meses mal escritos: March y May. Modifica el array usando [] para solucionarlo.');
arraymonth.splice(arraymonth.indexOf("Marj"), 1, "March"), arraymonth.splice(arraymonth.indexOf("Mei"), 1, "May");
console.log(arraymonth);
console.log("");

console.log('2- Crea la variable newMonths y asígnale el siguiente array:["June", "July", "August", "September"]. A continuación, crea una variable llamada totalMonths que sea la concatenación de months y newNonths.');
let newMonths = ["June", "July", "August", "September"]
let totalMonths = arraymonth.concat(newMonths);
console.log(totalMonths);
console.log("");

console.log('3- Añade los siguientes 3 meses ("October", "November", "December") al final del array anterior (totalMonths) usando push().');
totalMonths.push("October", "November", "December")
console.log(totalMonths);
console.log("");

console.log('Ejercicio 3 ARRAYS');
console.log("3-  Crea 3 variables (num1, num2 y num3), que contendrán números, pero no les des valor todavía. Vamos a trabajar con el array totalMonths del ejercicio anterior:");
let num1 = 5
let num2 = 24
let num3 = 8

if (num1 > num2) {
    totalMonths.pop()
} else if (num2 > num3 && num2 < 10) {
    totalMonths.shift()
} else if (num2 > num1 || num2 > num3) {
    totalMonths.push("October")
} else {
    console.log("Bad luck!");
}
console.log(totalMonths);
console.log("");

console.log('Ejercicio 4 ARRAYS');
console.log("Dado el siguiente array: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']:");
console.log("1-  Encuentra la posición del string (Wednesday) y si la longitud de ese string es mayor que el número de su posición, dale la vuelta al array.");

let arrayejercicio4 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let position = arrayejercicio4.indexOf('Wednesday')
let lenthstring = arrayejercicio4[position].length
console.log(`El string esta en la posición (${position})`);
if (lenthstring > position) {
    console.log(arrayejercicio4.reverse());
}
console.log("");

console.log("2-  Compara la longitud de los elementos en primera y segunda posición, y si el primero es más corto que el segundo, muestra los tres primeros elementos del array (usa el método apropiado para cortar un trozo del array).");
let lenthstring1 = arrayejercicio4[0]
let lenthstring2 = arrayejercicio4[1]

if (lenthstring1.length < lenthstring2.length) {
    console.log(arrayejercicio4.slice(0, 3));
    arrayejercicio4 = arrayejercicio4.slice(0, 3)
}
console.log("3-  Comprueba si el array incluye el string Sunday. Si es así, print (That's nice!, si no, print Oh no! y añade Sunday al final del array.");
if (arrayejercicio4.includes('Sunday')) {
    console.log("That's nice!");
} else {
    console.log("Oh no!")
    arrayejercicio4.push("Sunday")
}
console.log(arrayejercicio4);
console.log("");

console.log('Ejercicio 5 ARRAYS');
console.log("1-   Escribe un script que le dé la vuelta a cualquier array. Usa primero el método de array apropiado para ello, y después inténtalo sin usar ningún método, sólo con un bucle for.");
function reverse(arrry) {
    let arrayejercicio5 = arrry.reverse()
    console.log(arrayejercicio5);
    return arrayejercicio5
}
let arrayejercicio5 = reverse(['carlos', 'manuel', 'brazon', 'diaz'])
console.log("");

let hhh = ""
for (let i = arrayejercicio5.length - 1; i >= 0; i--) {
    hhh += arrayejercicio5[i] + ' '
    console.log(hhh);
}
let newhhh = hhh.split(" ")
console.log(newhhh.slice(0, -1));
console.log("");


console.log('Ejercicio 6 ARRAYS');
console.log("Crea un array vacío llamado numbers:");
let number = []
console.log("1-  Crea un bucle for que llene el array con los números de 0 al 10 (incluido).");
for (let i = 0; i <= 10; i++) {
    number.push(i)
}
console.log(number);
console.log("");

console.log("2-  Crea un bucle for que llene el array con los números de 0 al 10 (incluido).");
let sumanumber = 0;
for (let i = 0; i < number.length; i++) {
    sumanumber = sumanumber + i
}
console.log(sumanumber);
console.log("");

console.log("3-  Crea dos arrays vacíos: evens y odds. A continuación crea un único bucle for que itere sobre el array numbers y, si el número es par, lo añada a evens, y si es impar a odds.");
let even = [];
let odds = [];
for (let i = 1; i < number.length; i++) {
    number[i] % 2 === 0 ? even.push(i) : odds.push(i)
}
console.log(even);
console.log(odds);
console.log("");

console.log('Ejercicio 7 ARRAYS');
console.log('Dados estos dos arrays: Crea un programa que muestr por consola cada fruta con su color siguiendo el siguiente modelo: La pera es verde');

const fruits = ["pera", "banana", "mandarina", "frambuesa"];
const colors = ["verde", "amarilla", "naranja", "roja"];

for (let i = 0; i < fruits.length; i++) {
    console.log(`La ${fruits[i]} es ${colors[i]}`);
}
console.log("");

console.log('Ejercicio 8 ARRAYS');
console.log('Dado el siguiente array bidimensional: Escribe un programa que, usando bucles for, devuelva un array unidimensional con el nombre y apellidos de cada persona en un único string');
const array = [["David", "Fernández"], ["Ana", "García"], ["Manuel", "Herrera"], ["Carlos", "Brazon"]];
let newArray = []
let arrayString = []
for (let i = 0; i < array.length; i++) {
    arrayString = array[i].join(" ")
    newArray.push(arrayString)
}
console.log(newArray);
console.log("");

console.log('Ejercicio 9 ARRAYS');
console.log("Calcula la media del siguiente array, y redonde su resultado a la baja:");
const grades = [5, 7, 7, 4, 8, 5, 3, 9, 1];
let media = 0
for (let i = 0; i < grades.length; i++) {
    media = media + grades[i];
}
let mediaFinal = Math.floor(media / grades.length)
console.log(`La media es: ${media / grades.length}`)
console.log(`La media final es: ${mediaFinal}`)