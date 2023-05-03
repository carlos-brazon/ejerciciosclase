// ************ejercicios numbers
console.log("1. Calcula la operación 2 elevado a la 4.");
let num=2
console.log(Math.pow(num, 4));
console.log("");

console.log("2. Calcula la raíz cuadrada de 25.");
let numraiz=25
console.log("La raíz cuadrada de 25 es: " + Math.sqrt(numraiz));
console.log("");

console.log("3. Calcula el valor absoluto de la operación 4 - 5.");
let numero= 4-5
console.log("El valor absoluto es: "+ Math.abs(numero));
console.log("");

console.log("4. Calcula la raíz cuadrada de 2 y redondea el resultado.");
let number=2
Math.sqrt(number);
console.log("La raíz cuadrada de 2 redondeada es: " +Math.round(Math.sqrt(number)));
console.log("");

console.log("5. Calcula la operación 10 dividido entre 3 y redondea el resultado hacia abajo.");
let ejercicio5=10
console.log('El resultado redondeado hacia abajo es: ' + Math.floor(ejercicio5/3));
console.log("");

console.log("6. Calcula la operación 3 dividido entre 2 y redondea el resultado hacia arriba.");
console.log('El resultado redondeado hacia arriba es: ' + Math.ceil(3/2));
console.log("");

console.log("7.Dada la siguiente lista de números (5, 3, 6, 4, 2, 9, 8): ");
console.log("i. Encuentra el número más bajo y guárdalo en la variable min.");
let min= Math.min(5, 3, 6, 4, 2, 9, 8);
console.log("El valor mas bajo es: "+min);
console.log("");
console.log("ii. Encuentra el número más alto y guárdalo en la variable max");
let max=Math.max(5, 3, 6, 4, 2, 9, 8);
console.log("El valor mas alto es: "+max);
console.log("");