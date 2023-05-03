// *****************VARIABLES********************************************
let miNombre = "Carlos";
let miEdad= 34;
let hola=true;
let comoEstas=undefined;
let bien=null ;

console.log("");
console.log(miNombre);
console.log(miEdad);
console.log(hola);
console.log(comoEstas);
console.log(bien);

console.log("");
console.log(typeof miNombre);
console.log(typeof miEdad);
console.log(typeof hola);
console.log(typeof comoEstas);
console.log(typeof bien);

console.log("");
// let age;
// let name;

console.log("");
name="Carlos Brazon";
age=35;
 console.log(name);
 console.log(age);

 console.log("");
 let city="madrid";
 city="Anaco";
 console.log(city);

 console.log("Nonbre:"+ name+","+ "Edad:" + age+ "Lugar de nacimiento:"+ city);


// *****************ejercicios de operadores********************************************

console.log("1. Declara las variables name, age, city, isMarried y year, dale los valores apropiados y muestra por consola el tipo de dato que contienen.");
let name="Carlos"
let age= 34
let isMarried='no'
let year=2023

console.log(typeof name )
console.log(typeof age )
console.log(typeof isMarried )
console.log(typeof year )
console.log("");

console.log('2. Piensa en cuál será el resultado de las siguientes comparaciones. Luego, usa la consola para comprobar si has acertado o no:');
4 > 3//true bien
4 >= 3//true bien
4 < 3 //false bien
4 <= 3//false bien
4 == 4//true bien
4 === 4//true bien
4 != 4//false bien
4 !== 4//true mal
4 != '4'//true mal
4 == '4'//true bien
4 === '4'//false bien

console.log(4 !== 4);
console.log('');

console.log("4. Piensa en cuál será el resultado de las siguientes operaciones. Luego, usa la consola para comprobar si has acertado o no:");
console.log(("1: ")+(4 > 3 && 10 < 12)+(", (true bien)"));//true bien
console.log(("2: ")+(4 > 3 && 10 > 12)+(", (flase bien)"));//false bien
console.log(("3: ")+(4 > 3 || 10 < 12)+(", (true bien)"));//true bien
console.log(("4: ")+(4 > 3 || 10 > 12)+(", (true bien)"));//true bien
console.log(("5: ")+(!(4 > 3))+(", (flase bien)"));//false bien
console.log(("6: ")+(!(4 < 3))+(", (true bien)"));//true bien
console.log(("7: ")+(!false)+(", (true bien)"));//true bien 
console.log(("8: ")+(!(4 > 3 && 10 < 12))+(", (flase bien)"));//false bien
console.log(("9: ")+(!(4 > 3 && 10 > 12))+(", (true bien)"));//true bien 
console.log(("10: ")+(!(4 === '4'))+(", (true bien)"));//true bien 
console.log(("11: ")+((5 === 5 || 2 > 1) && (6 == "6" || 1 < 2))+(", (true bien)"));//true bien 
console.log(("12: ")+((3 == "3" && 5 >= 4) || (0 > -2 && 8 === 8))+(", (true bien)"));//true bien 
console.log(("13: ")+(4 !== "4" && 2 > 1)+(", (flase mal)"));//false bien
console.log(("14: ")+(4 !== "4" && 2 > 1)+(", (true bien, es la misma que la 13)"));//false bien
console.log("");

console.log("5. Crea la variable side con valor 4. Crea la variable squareArea y dale como valor el área de un cuadrado de lado side.");
let side= 4
let squareArea= side*side
console.log("squareArea= "+squareArea);
console.log("");

console.log("6. Crea las variables a, b y c con valores 2, 3 y 4 respectivamente. Crea la variable trianglePerimeter y dale el valor del perímetro de un triángulo con lados a, b y c.");
let a= 2
let b= 3
let c=4
let trianglePerimeter= a+b+c
console.log("trianglePerimeter: "+trianglePerimeter);
console.log("");

console.log('7. Crea la variable radius con valor 7. Crea la variable circleArea y dale como valor el área de un círculo de radio radius.');
let radius=7
let circleArea= Math.PI*radius**2
console.log('circleArea= '+circleArea);
console.log("");

console.log("8. Crea una variable circumference y dale como valor la circunferencia de un círculo de radio radius.");
let circumference=2*Math.PI*circleArea
console.log('circumference= '+circumference);
console.log("");

console.log('9. Crea la variable num con valor 5. Ahora súmale 10 usando el assignment operator.');
let num=5
num=num+10
console.log("num= "+num);
console.log("");

console.log("10. Réstale 2 a la variable num usando el assignment operator.");
num=num-2
console.log("num= "+num);