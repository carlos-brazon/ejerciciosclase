
// ***************** LOOPS ***********************************************************************************************************************************************
    console.log("Ejercicio 1.  Itera del 0 al 10 usando un bucle for e imprime cada número por consola. Luego, haz lo mismo con un bucle while");
for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log("");
let i = 0

while (i < 2) {
    console.log(i);
    i++;
}
console.log("");

console.log("Ejercicio 2.  Itera del 10 al 0 usando un bucle for e imprime cada número por consola. Luego, haz lo mismo con un bucle while.");
for (let i = 3; i >= 0; i--) {
    console.log(i);
}
console.log("");

let x = 2

while (x >= 0) {
    console.log(x);
    x--;
}
console.log("");

console.log("Ejercicio 3.  Crea la variable number y haz que un bucle for imprima la tabla de multiplicar de ese número (del 0 al 10) en la consola, siguiento el siguiente formato:");
let number = 2

for (let i = 0; i <= 10; i++) {
    console.log(`El número ${number} x ${i} = ${number * i}`);
}
console.log("");

console.log("Ejercicio 4.  Imprime el siguiente patrón:");
console.log(`i  i^2  i^3`);
for (let i = 0; i < 10; i++) {
    console.log(`${i}   ${Math.pow(i, 2)}    ${Math.pow(i, 3)}`);
}
console.log("");

console.log("Ejercicio 5.  Imprime por consola, una sola vez, la suma de todos los números del 0 al 10.");
let number5 = 1
for (let y = 0; y <= 10; y++) {
    number5 = number5 + y
}
console.log(number5);
console.log("");

console.log("Ejercicio 6.   Haz lo mismo pero con el resultado de multiplicar todos los números del 0 al 10. Una vez estés seguro de que es el resultado correcto, explica en un comentario por qué da ese resultado.");
let number6 = 1
for (let y = 1; y <= 10; y++) {
    number6 = number6 * y
}
if (number6 === 0) {
    console.log(`ingrese un valor diferente, recuerda que todo número multiplicado por 0 es igual a 0 `);
} else {
    console.log(`El resultado es: ${number6}`);
}
console.log("");

console.log("Ejercicio 7.   Imprime le siguiente patrón por consola:");
let number7 = ""
for (let i = 0; i <= 7; i++) {
    number7 = number7 + "#"
    console.log(number7);
}
console.log("");

console.log("Ejercicio 8.   Pídele al usuario que introduzca un número. Ahora, imprime por consola sólo los números pares hasta ese número (incluido).");
let number8 = 2
for (let i = 0; i <= number8; i++) {
    if (i % 2 === 0) {
        console.log(i);
    } else {
    }
}
console.log("");

console.log("Ejercicio 9.  Pídele al usuario que introduzca un número e imprime por consola: La suma de todos los números pares del 0 al <<num>> es <<result>>, y la suma de todos los números impares del 0 al <<num>> es <<result>>.");
let number9 = 6
let pares = 0
let impares = 0
for (let i = 0; i <= number9; i++) {
    if (i % 2 === 0) {
        pares += i;
    } else {
        impares += i
    }
}
console.log(`La suma de todos los números pares del 0 al ${number9} es ${pares}, y la suma de todos los números impares del 0 al ${number9} es ${impares}.`);
console.log("");

console.log("Ejercicio 10.   Pídele al usuario que introduzca un número y muestra por consola los números múltiplos de 3 que hay desde 0 a dicho número. Hazlo sin usar if / else.");
let number10 = 28
for (let i = 0; i <= number10; i += 3) {
    console.log(i);
}
console.log("");

console.log("Ejercicio 11. Crea la variable str con valor JavaScript. A continuación, pídele al usuario que introduzca un número de 0 al 10 y una letra. Debes añadir a str dicha letra tantas veces como el número que ha introducido el usuario. Ejemplo:  ");
let str = "JavaScript"
let numm = 10
let letter = "J"
for (let i = 0; i < numm; i++) {
    str = str.concat(letter)
}
console.log(str);
console.log("");

console.log("Ejercicio 12.  Itera sobre la variable JavaScript del ejercicio anterior y muestra por consola cada letra. ");
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}
console.log("");

console.log("Ejercicio 13.  Crea la variable filter y dale el valor de una letra cualquiera. A continuación, itera sobre un string y muestra por consola cuantas veces aparece filter en el string ");
let filter333 = "s";
let string333 = "sospechoso";
let vacia=0
for (let i = 0; i < string333.length; i++) {
    if (string333[i]===filter333) {
        vacia+=1;
    }
}
console.log(`La ${filter333} aparece ${vacia} veces en el string ${string333}`);
console.log(vacia);
console.log("");

console.log("Ejercicio 14.  Usando las mismas variables del ejercicio anterior, ahora debes crear un nuevo string que no contenga la letra de filter:");
let newString333= string333.replaceAll(filter333, "")
console.log(newString333);
console.log("");