



//*************************************************************ARRAYS*********************************************************
console.log('Ejercicio 1 ARRAYS');
console.log('1-  Crea una variable que tenga como valor un array vacío.');
arrayempit=[""]
console.log("");

console.log('2- Crea una variable que tenga como valor un array con al menos 3 tipos de datos distintos.');
let array3type=["carlos",33,true]
console.log("");

console.log('3- Crea un array vacío y añádele dos valores usando push(), dos valores usando unshift() y luego usa pop() y shift() una vez. A constinuación muestra por consola la longitud del array.');
arrayempyt2=[];
arrayempyt2.push("brazon", "diaz")
arrayempyt2.unshift("carlos", "manuel")
arrayempyt2.pop()
arrayempyt2.shift()
console.log(arrayempyt2);
console.log("");

console.log('4- Crea el siguiente array: const names = ["Carlos", "María", "Isidro", "Elizondo", "Molina"]. A continuación, muestra por consola los nombres ["María, Isidro"] usando slice(). Luego, sustituye "Elizondo" por "Parma" usando splice().');
const names = ["Carlos", "María", "Isidro", "Elizondo", "Molina"]
console.log(names.slice(1,3));
names.splice(name.indexOf("Elizondo")-1, 1, "Parma")
console.log(names);
console.log("");

console.log('5- Convierte el array anterior (names) en un string de nombres separados por espacios.');
let namesjoin=names.join(" ")
console.log(namesjoin);
console.log("");

console.log('6- Crea la variable const sentence = "El perro de San Roque no tiene rabo". A continuación, conviértela en un array de palabras, y luego en otro de letras.');
const sentence = "El perro de San Roque no tiene rabo"
let arrayEjercicio1x5= sentence.split(" ")
console.log(arrayEjercicio1x5);

console.log(sentence.split(""));
console.log("");

console.log('Ejercicio 2 ARRAYS');
console.log("");




console.log("");
console.log("");
console.log("");
