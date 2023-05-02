// let miNombre = "Carlos";
// let miEdad= 34;
// let hola=true;
// let comoEstas=undefined;
// let bien=null ;

// console.log("");
// console.log(miNombre);
// console.log(miEdad);
// console.log(hola);
// console.log(comoEstas);
// console.log(bien);

// console.log("");
// console.log(typeof miNombre);
// console.log(typeof miEdad);
// console.log(typeof hola);
// console.log(typeof comoEstas);
// console.log(typeof bien);

// console.log("");
// let age;
// let name;

// console.log("");
// name="Carlos Brazon";
// age=35;
//  console.log(name);
//  console.log(age);

//  console.log("");
//  let city="madrid";
//  city="Anaco";
//  console.log(city);

//  console.log("Nonbre:"+ name+","+ "Edad:" + age+ "Lugar de nacimiento:"+ city);















//*****************ejercicios de operadores********************************************
// console.log("");
// console.log("");
// console.log("");
// console.log("1. Declara las variables name, age, city, isMarried y year, dale los valores apropiados y muestra por consola el tipo de dato que contienen.");
// let name="Carlos"
// let age= 34
// let isMarried='no'
// let year=2023


// console.log(typeof name )
// console.log(typeof age )
// console.log(typeof isMarried )
// console.log(typeof year )
// console.log("");

// console.log('2. Piensa en cuál será el resultado de las siguientes comparaciones. Luego, usa la consola para comprobar si has acertado o no:');
// 4 > 3//true bien
// 4 >= 3//true bien
// 4 < 3 //false bien
// 4 <= 3//false bien
// 4 == 4//true bien
// 4 === 4//true bien
// 4 != 4//false bien
// 4 !== 4//true mal
// 4 != '4'//true mal
// 4 == '4'//true bien
// 4 === '4'//false bien

// console.log(4 !== 4);
// console.log('');

// console.log("4. Piensa en cuál será el resultado de las siguientes operaciones. Luego, usa la consola para comprobar si has acertado o no:");
// console.log(("1: ")+(4 > 3 && 10 < 12)+(", (true bien)"));//true bien
// console.log(("2: ")+(4 > 3 && 10 > 12)+(", (flase bien)"));//false bien
// console.log(("3: ")+(4 > 3 || 10 < 12)+(", (true bien)"));//true bien
// console.log(("4: ")+(4 > 3 || 10 > 12)+(", (true bien)"));//true bien
// console.log(("5: ")+(!(4 > 3))+(", (flase bien)"));//false bien
// console.log(("6: ")+(!(4 < 3))+(", (true bien)"));//true bien
// console.log(("7: ")+(!false)+(", (true bien)"));//true bien 
// console.log(("8: ")+(!(4 > 3 && 10 < 12))+(", (flase bien)"));//false bien
// console.log(("9: ")+(!(4 > 3 && 10 > 12))+(", (true bien)"));//true bien 
// console.log(("10: ")+(!(4 === '4'))+(", (true bien)"));//true bien 
// console.log(("11: ")+((5 === 5 || 2 > 1) && (6 == "6" || 1 < 2))+(", (true bien)"));//true bien 
// console.log(("12: ")+((3 == "3" && 5 >= 4) || (0 > -2 && 8 === 8))+(", (true bien)"));//true bien 
// console.log(("13: ")+(4 !== "4" && 2 > 1)+(", (flase mal)"));//false bien
// console.log(("14: ")+(4 !== "4" && 2 > 1)+(", (true bien, es la misma que la 13)"));//false bien

// console.log("");

// console.log("5. Crea la variable side con valor 4. Crea la variable squareArea y dale como valor el área de un cuadrado de lado side.");
// let side= 4
// let squareArea= side*side
// console.log("squareArea= "+squareArea);
// console.log("");

// console.log("6. Crea las variables a, b y c con valores 2, 3 y 4 respectivamente. Crea la variable trianglePerimeter y dale el valor del perímetro de un triángulo con lados a, b y c.");
// let a= 2
// let b= 3
// let c=4
// let trianglePerimeter= a+b+c
// console.log("trianglePerimeter: "+trianglePerimeter);
// console.log("");

// console.log('7. Crea la variable radius con valor 7. Crea la variable circleArea y dale como valor el área de un círculo de radio radius.');
// let radius=7
// let circleArea= Math.PI*radius**2
// console.log('circleArea= '+circleArea);
// console.log("");

// console.log("8. Crea una variable circumference y dale como valor la circunferencia de un círculo de radio radius.");
// let circumference=2*Math.PI*circleArea
// console.log('circumference= '+circumference);
// console.log("");

// console.log('9. Crea la variable num con valor 5. Ahora súmale 10 usando el assignment operator.');
// let num=5
// num=num+10
// console.log("num= "+num);
// console.log("");

// console.log("10. Réstale 2 a la variable num usando el assignment operator.");
// num=num-2
// console.log("num= "+num);








//************ejercicios numbers */
// console.log("1. Calcula la operación 2 elevado a la 4.");
// let num=2
// console.log(Math.pow(num, 4));
// console.log("");

// console.log("2. Calcula la raíz cuadrada de 25.");
// let numraiz=25
// console.log("La raíz cuadrada de 25 es: " + Math.sqrt(numraiz));
// console.log("");

// console.log("3. Calcula el valor absoluto de la operación 4 - 5.");
// let numero= 4-5
// console.log("El valor absoluto es: "+ Math.abs(numero));
// console.log("");

// console.log("4. Calcula la raíz cuadrada de 2 y redondea el resultado.");
// let number=2
// Math.sqrt(number);
// console.log("La raíz cuadrada de 2 redondeada es: " +Math.round(Math.sqrt(number)));
// console.log("");

// console.log("5. Calcula la operación 10 dividido entre 3 y redondea el resultado hacia abajo.");
// let ejercicio5=10
// console.log('El resultado redondeado hacia abajo es: ' + Math.floor(ejercicio5/3));
// console.log("");

// console.log("6. Calcula la operación 3 dividido entre 2 y redondea el resultado hacia arriba.");
// console.log('El resultado redondeado hacia arriba es: ' + Math.ceil(3/2));
// console.log("");

// console.log("Dada la siguiente lista de números (5, 3, 6, 4, 2, 9, 8): ");
// console.log("i. Encuentra el número más bajo y guárdalo en la variable min.");
// let min= Math.min(5, 3, 6, 4, 2, 9, 8);
// console.log("El valor mas bajo es: "+min);
// console.log("");
// console.log("ii. Encuentra el número más alto y guárdalo en la variable max");
// let max=Math.max(5, 3, 6, 4, 2, 9, 8);
// console.log("El valor mas alto es: "+max);
// console.log("");
// console.log("");











// //ejercicios STRINGS

// console.log("STRINGS");
// console.log("1. Declara una variable llamada sentence y dale el valor = Java Script no es tan difícil como me había dicho Dani...");
// let sentence="JavaScript no es tan difícil como me había dicho Dani...";
// console.log("");

// console.log("2. Muestra el contenido de sentence en la consola.");
// console.log("sentence= "+sentence);
// console.log("");

// console.log("3. Muestra en la consola la longitud de sentence.");
// console.log("La longitud de sentence es: "+sentence.length)
// console.log("");

// console.log("4. Cambia todos los caracteres de sentence a mayúsculas.");
// console.log("Todo en mayúsculas: "+sentence.toUpperCase(sentence));
// console.log("");

// console.log("5. Cambia todos los caracteres de sentence a minúsculas.");
// console.log("Todo en minúsculas: "+sentence.toLowerCase(sentence));
// console.log("");

// console.log("6. Crea una variable llamada js y asígnale como valor el resultado de cortar o extraer la palabra JavaScript de sentence. Comprueba que haya funcionado.");
// let js= 'sentence.slice(0,11)';
// console.log(sentence.slice(0,11));
// console.log("");

// console.log("7. Crea una variable llamada profe y asígnale como valor el resultado de cortar o extraer la palabra Dani de sentence. Comprueba que haya funcionado.");
// let profe= 'sentence.slice(0,11)';
// console.log(sentence.slice(49,53));
// console.log("");


// console.log("8. Comprueba si sentence contiene el string script");
// console.log(sentence.includes("script"));
// console.log("");

// console.log("9. Cambia sentence usando replace() para que diga Python no es tan difícil como me había dicho Alfredo...");
// console.log(sentence.replaceAll("JavaScript","Python").replaceAll("Dani","Alfredo") );
// console.log("");

// console.log("10. Cambia sentence usando replace() para que diga Python no es tan difícil como me había dicho Alfredo...");
// console.log("la letra en la cuarta posición es: "+sentence[4]);
// console.log("");

// console.log("11. ¿Cuál es la posición de la primera ocurrencia del caracter a en sentence? Muéstralo en la consola.");
// console.log("La primera ocurrencia es: "+sentence.indexOf("a"))
// console.log("");

// console.log("12. ¿Y la posición de la última ocurrencia?");
// console.log("La ultima ocurrencia es: "+sentence.lastIndexOf("a"))
// console.log("");

// console.log("13. ¿Cuál es la posición de la primera ocurrencia del caracter z en sentence? Muéstralo en la consola.");
// console.log("La primera ocurrencia del caracter z es: "+sentence.indexOf("z"))
// console.log("");

// console.log("14. Crea una variable llamada doubts que sea el resultado de concatenar sentence con el string pero todavía es pronto para saberlo.");
// let doubts=sentence.concat(" pero todavía es pronto para saberlo")
// console.log(" El resultado de doubts es: "+doubts);
// console.log("");

// console.log("15. Crea la variable longitud y asígnale la longitud de sentence. A continuación, muestra por consola el caracter que se encuentra en la posición que guarda longitud. Escribe en un comentario por qué da ese resultado.");
// let longitud= sentence.length
// console.log(sentence[ longitud]);
// console.log("   -Da esa respuesta porque el valor de longitud tiene un caracter más, hay que restar -1 para poder ver el ultimo caracter de longitud");
// console.log("");

// console.log("16. Usando charAt() y la variable longitud del ejercicio anterior, consigue mostrar por consola el último caracter de sentence");
// let ultimocaracter=longitud-1
// console.log("El ultimo caracter de sentence es: "+ sentence.charAt(ultimocaracter));
// console.log("");

// console.log("17. Crea dos variables: name1 con valor John y name2 con valor Anna. A continuación, crea otras dos variables más: long1 con valor la longitud de la variable name1 y long2 con valor la longitud de la variable name2. Muestra por consola si long1 es estrictamente igual a long2.");
// let name1="John"
// let name2="Anna"
// let long1=name1.length
// let long2=name2.length
// console.log(long1===long2);
// console.log("");

// console.log("18. ");
// let bothNames=name1.concat(name2)
// let finalLong=bothNames.length

// console.log(finalLong);

// console.log(finalLong===(long1+long2))
// console.log(long1>long2||long2>long1)
// console.log(long1>long2||long2>long1 && finalLong===(long1+long2));









//**********************ejercicios condicionales
// console.log("EJERCICIOS CONDICIONALES");
// console.log("");

// console.log("Ejercicio 1 con if-else");//**************************************************************************************** */
// // const number=prompt("Coloca un número del 1 al 10")
// let number=8

// if (number>=5){
//     console.log("El número es mayor o igual que 5");
// } else{
//     console.log("El número es menor que 5");
// }
// console.log("");

// console.log("Ejercicio 2 con if-else");//***************************************************************************************** */
// if (number>5){
//     console.log("El número es mayor que 5");
// } else if (number<5){
//     console.log("El número es menor que 5");
// }else {
//     console.log("El número es igual a 5");
// }
// console.log("");


// console.log("Ejercicio 3 con if-else");//********************************************************************************************* */
// if (number%2===0) {
//     console.log("El número es par");
// } else {
//     console.log("El número es impar");
// }
// console.log("");

// console.log("Ejercicio 4 con if-else");//*********************************************************************************************** */
// let number1=15
// let number2=15

// if (number1>number2){
//     console.log("Number 1 es mayor");
// } else if (number2>number1){
//     console.log("Number 2 es mayor");
// } else {
//     console.log("Los nùmeros son iguales");
// }
// console.log("");

// console.log("Ejercicio 5 con switch");//************************************************************************************************ */
// let lado1=8
// let lado2=5
// let lado3=3

// switch (true) {
//     case
//     lado1===0 || lado2===0 || lado3===0:
//     console.log("No es ningun triangulo, verifica los datos de entrada");
//     break;
//     case 
//     lado1===lado2 && lado2===lado3:
//     console.log("Es un triángulo equilátero");
//         break;
//     case 
//     lado1==lado2 || lado2===lado3 || lado1===lado3:
//     console.log("Es un triángulo isóseles");
//         break;    
//     case 
//     lado1!==lado2 || lado2!==lado3 || lado1!==lado3:
//     console.log("Es un triángulo escaleno");
//         break;    

//     default:
//         console.log("No es ningun triangulo, verifica los datos de entrada");
// }
// console.log("");

// console.log("Ejercicio 6 con switch");//************************************************************************************************ */
// let min=10
// let max =20
// let number3=20
// switch (true) {
//     case 
//     number3>min && number3<max:
//     console.log("El número "+ number3+" se encuentra dentro del rango");

//         break;

//     default:
//     console.log("El número "+number3+" está fuera del rango");
//         break;
// }
// console.log("");

// console.log("Ejercicio 7 con switch");//************************************************************************************************ */
// let operation= "multiply"

// switch (true) {
//     case 
//     operation==="add" :
//     console.log(number1+number2); 
//     break;
//     case
//     operation==="subtract":
//     console.log(number1-number2); 
//     break;
//     case
//     operation==="multiply":
//     console.log(number1*number2); 
//     break;
//     case
//     operation==="divide":
//     console.log(number1/number2); 
//     break;

//     default:
//         console.log("Invalid operation")
//         break;
//     }
//     console.log("");

//     console.log("Ejercicio 8 switch");//************************************************************************************************ */
//     let year=2024

//     switch (true) {
//         case
//         year%4===0:
//         //alert("Si es un año bisiesto");
//         console.log("SI es un año bisiesto");
//         break;

//         default:
//             console.log("NO es un año bisiesto");
//             //alert("No es un año bisiesto");
//             break;
//         }
//         console.log("");

//         console.log("Ejercicio 8 con ternario ");/************************************************************************************** */
//         year%4===0 ? console.log("Con ternario: SI es un año bisiesto") //alert("Con ternario: SI es un año bisiesto")
//         : console.log("Con ternario: NO es un año bisiesto"); //alert("Con ternario: NO es un año bisiesto") 
//         console.log("");

//         console.log("Ejercicio 9 con switch");/************************************************************************************** */
//         // const month= prompt("enter month:")
//         const month= "may"

//         switch (true) {
//             case 
//                 month==="january" || month==='march' || month==='may' || month==='july' || month==='august' || month==='october' || month==='december':
//                 alert("El mes tiene 31 días");
//                 break;
//             case
//                 month==="april" || month==="june" || month==="september" || month==="november":
//                 alert("El mes tiene 30 días")
//                 break;
//             case
//                 month==='february':
//                 alert("El mes tiene 28 días");
//             break;

//             default:
//                 alert("Error, introduce un nombre de mes correcto");         
//                 break;
//             }
//             console.log("");

//             console.log("Ejercicio 10 con ternario");/************************************************************************************** */

//             month=== "june" || month==='july' || month==='august' ? alert("La estación del año es : verano") : 
//             month=== "september" || month==='october' || month==='november' ? alert("La estación del año es : otoño") :
//             month=== "december" || month==='january' || month==='february' ? alert("La estación del año es : invierno"):
//             month=== "march" || month==='april' || month==='may' ? alert("La estación del año es : primavera"): alert("NO se puede saber la estacion del año: introduce nombre de mes correcto");
//             console.log("");









//*****************   EJERCICIOS FUNCIONES***********************************************************************************************************************************************

// console.log("Ejercicio 1.  Escribe una función que muestre por consola Hello World");
// function sayHello (){
//     console.log("Hello world");
// }
// sayHello()
// console.log("");

// console.log("Ejercicio 2.  Escribe una función que devuelva el cuadrado de un número.");
// function cuadradonum (x) {
//     return Math.pow(x, 2)
// }
// let resultado= cuadradonum(2)
// console.log(resultado);
// console.log("");

// console.log("Ejercicio 3.  Escribe una función que acepte un nombre como parámetro y salude específicamente a esa persona. Ejemplo: Hi, Anna");
// function sayhi ( name) {
//     console.log(`Hi ${name}`);
// }
// sayhi("Carlos")
// console.log("");

// console.log("Ejercicio 4.  Escribe una función que acepte un nombre como parámetro y salude específicamente a esa persona. Ejemplo: Hi, Anna");

// function allName ( nombre, apellido){
//     console.log(`${nombre} ${apellido}`);
// }
// allName("Carlos M.", "Brazon D")
// console.log("");

// console.log("Ejercicio 5.  Escribe una función que acepte la medida de los dos lados de un rectángulo y devuelva el área de dicho rectángulo. Si no se le pasa ningún parámetro, los lados deberán ser, por defecto, 5 y 3.");
// function ladosRectangulo ( largo=5, ancho=3) {
//     return largo*ancho
// }
// const arearectangulo=ladosRectangulo(4, 5)
// console.log(arearectangulo);
// console.log("");

// console.log("Ejercicio 6.  Escribe una función que acepte grados Celsius y devuelva la conversión a grados Fahrenheit");
// function gradosselsius (x) {
//     let conversion= (x*1.8)+32
//     return conversion
// }
// const gradosFahrenheit= gradosselsius (50)
// console.log(gradosFahrenheit+" Grados Fahrenheit ");
// console.log("");

// console.log("Ejercicio 7.  Escribe una función que acepte dos número, un mínimo y un máximo, y devuelva un número aleatorio entre dichos números. Para ello, tendrás que descubrir cómo funciona el método Math.random().");
// function numeroAleatorio ( nroUno, nroDos){
//     return Math.random()*(nroDos-nroUno)+nroUno
// }
// const nroRandom= numeroAleatorio (5, 10)
// console.log("El número random es: "+nroRandom);
// console.log("");

// console.log("Ejercicio 8.  Escribe una función que calcule el área de un círculo si se le proporciona el radio");
// function circleratio (valor) {
//     console.log( `El área del circulo es: ${Math.PI*Math.pow(valor, 2)}` );
// }
// circleratio(2)
// console.log("");

// console.log("Ejercicio 9.  Cálculo del IMC");

// // function imcinicial(peso, altura) {
//     //     let imcoperation=peso/Math.pow(altura,2)

//     //     imcoperation<18.5 ? "Riesgo de malnutrición":
// //         imcoperation>18.5 && imcoperation<24.9 ? "Peso normal":
// //         imcoperation>=25.0 && imcoperation<=29.9 ? 'Sobrepeso':
// //         imcoperation>30 ? "Obesidad": "hola";

// // }

// // const imcfinal=imcinicial( 80, 1.82 )
// // console.log(imcfinal);

// function imcinicial (peso,altura) {
//     let imcoperation=peso/Math.pow(altura,2)
//     if (imcoperation<18.5 ){
//         return "Riesgo de malnutrición";
//     } else  if ( imcoperation>=18.5 && imcoperation<=24.9) {
//         return "Peso normal"
//     } else if (imcoperation>=25.0 && imcoperation<=29.9) {
//         return 'Sobrepeso'
//     } else if (imcoperation>30) {
//         return "Obesidad"
//     } else {
//         return "noooooooooooooooooo";
//     }
// }
// const imcfinal= imcinicial(200,1.72)
// console.log(imcfinal);
// console.log("");

// console.log("Ejercicio 10.  Escribe una función que acepte un dato y compruebe qué tipo de dato es.");
// function tipodato (dato) {
//     //let compare = typeof(dato)
//     if ( typeof dato ==  "string") {
//         return Array.from(dato)
//     } else if ( Array.isArray(dato)) {
//         return dato.toString()
//     } else if  ( typeof dato=== "number" ) {
//         return dato.toString()
//     }else {
//         return "false"
//     }

// }
// const carlosb=tipodato ("Robin Singh")
// console.log(carlosb);
// console.log("");


// console.log("Ejercicio 11.  Escribe una función que te adivine el futuro. Recibirá como parámetros:");
// function future (city, work, childrens, couple){
//     console.log(`Trabajarás en ${city}, trabajando como ${work}, y tendrás ${childrens} hijos con ${couple}.`);
// }

// future ('madrid', 'webdeveloper', 1, 'mariela')
// console.log("");


// let num=2
// for (let i = 0;  i<10 ; i++) {
//   console.log(num);
// }

// let var1=5
// let var2=10
// while (var1 < var2) {
//     console.log("si");
//     var1++

// }
















//*****************   LOOPS***********************************************************************************************************************************************
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


console.log("Ejercicio 3.  Crea la variable number y haz que un bucle for imprima la tabla de multiplicar de ese número (del 0 al 10) en la consola, siguiento el siguiente formato:");
let number = 2

for (let i = 0; i <= 10; i++) {
    console.log(`El número ${number} x ${i} = ${number * i}`);
}

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

console.log("Ejercicio 7.   Haz lo mismo pero con el resultado de multiplicar todos los números del 0 al 10. Una vez estés seguro de que es el resultado correcto, explica en un comentario por qué da ese resultado.");
let number7 = ""
for (let i = 0; i <= 7; i++) {
    number7 = number7 + "#"
    console.log(number7);
}
console.log("");

console.log("Ejercicio 8.   ");
let number8 = 2
for (let i = 0; i <= number8; i++) {
    if (i % 2 === 0) {
        console.log(i);
    } else {
    }
}
console.log("");

console.log("Ejercicio 9.   ");
let number9 = 5
let pares = 0
let impares = 0
for (let i = 0; i <= number9; i++) {
    let var333 = i % 2 === 0
    if (var333) {
        pares += i;
    } else {
        impares += i
    }
}
console.log(`La suma de todos los números pares del 0 al ${number9} es ${pares}, y la suma de todos los números impares del 0 al ${number9} es ${impares}.`);
console.log("");

console.log("Ejercicio 10.   ");
let number10 = 28
for (let i = 0; i <= number10; i += 3) {
    console.log(i);
}
console.log("");

console.log("Ejercicio 11.   ");
let str = "JavaScript"
let numm = 10
let letter = "J"
for (let i = 0; i < numm; i++) {
    str = str.concat(letter)
}
console.log(str);
console.log("");

console.log("Ejercicio 12.   ");
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}
console.log("");
















//*********************************************************EJERCICIOS PUENTE********************************************************
//*********************************************************EJERCICIOS PUENTE********************************************************
//*********************************************************EJERCICIOS PUENTE********************************************************
//*********************************************************EJERCICIOS PUENTE********************************************************
//*********************************************************EJERCICIOS PUENTE********************************************************
//*********************************************************EJERCICIOS PUENTE********************************************************
console.log("Ejercicio 1 PUENTE.   Contamination #1 -String- https://www.codewars.com/kata/596fba44963025c878000039/");
function contamination(text, char) {
    if (text === "" || char === "") {
        return console.log("empty string");;
    } else {
        return console.log(char.repeat(text.length));
    }
}
contamination("carlos", "z")
console.log("");

console.log("Ejercicio 2 PUENTE.   Exclamation marks series #1: Remove an exclamation mark from the end of string  https://www.codewars.com/kata/57fae964d80daa229d000126");
function remover(stringg) {

    if (stringg.charAt(stringg.length - 1) === "!") {
        return console.log(stringg.slice(0, -1));
    } else {
        console.log(stringg);
    }
}
remover("hola!!")
console.log("");

console.log("Ejercicio 3  PUENTE Convert a string to an array https://www.codewars.com/kata/57e76bc428d6fbc2d500036d");
function stringToArray(string) {
    if (typeof string === "string") {
        return string.split(' ')
    }
}

let resultado = stringToArray("hola como estas");
console.log(resultado);

console.log("");

console.log("Ejercicio 4  PUENTE Remove String Spaces https://www.codewars.com/kata/57eae20f5500ad98e50002c5");

function oSpace(x) {
    return x.replaceAll(" ", "")

}
console.log(oSpace("hola como estas"));
console.log("");

console.log("Ejercicio 5  PUENTE  Sum The Strings  https://www.codewars.com/kata/5966e33c4e686b508700002d");
function sumStr(a, b) {
    return String(Number(a) + Number(b))
}
console.log(sumStr('10', '5'));
console.log("");


console.log("Ejercicio 6  PUENTE  Stringy Strings  https://www.codewars.com/kata/563b74ddd19a3ad462000054 ");
function stringy(size) {
    let result = '';
    for (let i = 0; i < size; i++) {
        if (i % 2 === 0) {
            result += '1';
        } else {
            result += '0';
        }
    }
    return console.log(result);
}
stringy(4)
console.log("");

console.log("Ejercicio 7  PUENTE  Grasshopper - If/else syntax debug   https://www.codewars.com/kata/57089707fe2d01529f00024a");
function checkAlive(health) {
    if (health <= 0 && health >= -10) {
        return console.log("false");
    } else if (health > 0 && health <= 10) {
        return console.log('true');
    } else {
        console.log("Fuera de rango");
    }
}
checkAlive(-11)
console.log("");

console.log("Ejercicio 8  PUENTE  Online RPG: player to qualifying stage?  https://www.codewars.com/kata/55849d76acd73f6cc4000087 ");
function playerRankUp(points) {
    if (points > 100) {
        return console.log("Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.")
    } else {
        return console.log("False")
    }
}
playerRankUp(101)
console.log("");

console.log("Ejercicio 9   PUENTE  Training JS #6: Basic data types--Boolean and conditional statements if..else https://www.codewars.com/kata/571f832f07363d295d001ba8 ");
function trueOrFalse(val) {
    if (val <= 0 || val == undefined) {
        return console.log('false');;
    }
    else {
        return console.log('true');;
    }

}
trueOrFalse(1)
console.log("");

console.log("Ejercicio 10  PUENTE  Training JS #7: if..else and ternary operator  https://www.codewars.com/kata/57202aefe8d6c514300001fd ");
function saleHotdogs(n) {
    return n >= 0 && n < 5 ? console.log(n * 100) : n >= 5 && n < 10 ? console.log(n * 95) : console.log(n * 90);
}
saleHotdogs(10)
console.log("");

console.log("Ejercicio 11  PUENTE  Total amount of points  https://www.codewars.com/kata/5bb904724c47249b10000131 ");
function points(games) {
    let points = 0
    for (let i = 0; i < games.length; i++) {
        let result = games[i].split(":");
        let x = parseInt(result[0]);
        let y = parseInt(result[1]);
        if (x > y) {
            points += 3
        } else if (x === y) {
            points += 1
        }
    }
    return points
}
console.log(points(["1:0", "0:1", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]));
console.log("");

console.log("Ejercicio 12  PUENTE  Remove the time  https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e ");
function shortenToDate(longDate) {
    let date = longDate.split(",")
    return date[0]
}
console.log(shortenToDate("Friday May 2, 9am"));
console.log("");

console.log("Ejercicio 13  PUENTE  Did she say hallo?  https://www.codewars.com/kata/56a4addbfd4a55694100001f ");

function validateHello(greetings) {
    let lower = greetings.toLowerCase(greetings)
    console.log(lower);
    return lower.includes["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"] ? true : false
}
console.log(validateHello(" czEsC! DoInG que pASA. saLuT. vISTa wie: hOW; HOMBRe DOiNg. hOMbre! hASTA? yOu VIsTA, VIstA! hOmbRE?"));
console.log("");

console.log("Ejercicio 14  PUENTE  Quadrants   https://www.codewars.com/kata/643af0fa9fa6c406b47c5399");
function quadrant(x, y) {
    return x > 0 && y > 0 ? console.log("El punto está en el cuadrante: 1") : x < 0 && y > 0 ? console.log("El punto está en el cuadrante: 2") : x < 0 && y < 0 ? console.log("El punto está en el cuadrante: 3") : x > 0 && y < 0 ? console.log("El punto está en el cuadrante: 4") : false
}

quadrant(1, 1)
console.log("");

console.log("Ejercicio 15  PUENTE  Kata Example Twist   https://www.codewars.com/kata/525c1a07bb6dda6944000031");
let websites = [];
for (i = 1; i < 5; i++) {
    websites[i] = "codewars";
}
console.log(websites);
console.log("");


console.log("Ejercicio 16  PUENTE  Grasshopper - Messi goals function   https://www.codewars.com/kata/55f73be6e12baaa5900000d4");
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}
console.log(goals(1, 1, 1));
console.log("");


console.log("Ejercicio 17  PUENTE    Remove First and Last Character https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0 ");
function removeChar(str) {
    if (str.length >= 2) {
        return str.slice(1, str.length - 1)
    } else {
        console.log('ana');
    }

}
console.log(removeChar("carlos manuel brazon diaz"));
console.log("");

console.log("Ejercicio 18  PUENTE   Miles per gallon to kilometers per liter https://www.codewars.com/kata/557b5e0bddf29d861400005d ");
function converter(mpg) {
    let price = ((mpg * 1.609344) / 4.54609188).toFixed(2)
    return price
}
console.log(converter(10));
console.log("");

console.log("Ejercicio 19  PUENTE   Volume of a Cuboid https://www.codewars.com/kata/58261acb22be6e2ed800003a");
// class Kata {
//     static getVolumeOfCuboid(length, width, height) {
//         return (length*width*height)
//     }
// }
// console.log(getVolumeOfCuboid (2, 2, 2));
console.log("");

console.log("Ejercicio 20  PUENTE   BASIC: Making Six Toast https://www.codewars.com/kata/5834fec22fb0ba7d080000e8/");
function sixToast(num) {
    return num < 6 && num >= 0 ? `Debes meter ${6 - num} tostadas` : num > 6 ? ` Tostadora llena debes sacar ${num - 6} tostadas` : `Tostadora completa`
}
console.log(sixToast(8));
console.log("");

console.log("Ejercicio 21  PUENTE   You Can't Code Under Pressure#1 https://www.codewars.com/kata/53ee5429ba190077850011d4/");
function doubleInteger(i) {
    i = i * 2
    return i;
}
console.log(doubleInteger(3));
console.log("");

console.log("Ejercicio 22  PUENTE   Third Angle of a Triangle https://www.codewars.com/kata/5a023c426975981341000014");
function otherAngle(a, b) {
    let c = 180 - (a + b)
    if (a == 0 || b == 0) {
        return console.log(0);
    } else if (a + b >= 180) {
        return console.log(`error`);
    }
    return console.log(c);;
}
otherAngle(17, 5)
console.log("");

console.log("Ejercicio 23  PUENTE   Function 2 - squaring an argument https://www.codewars.com/kata/523b623152af8a30c6000027/");
function square(x) {
    return x ** 2
}
console.log(square(2));
console.log("");

console.log("Ejercicio 24  PUENTE   The Feast of Many Beasts https://www.codewars.com/kata/5aa736a455f906981800360d/");
function feast(beast, dish) {
    if (beast.charAt(0) == dish.charAt(0) && beast.charAt(beast.length - 1) == dish.charAt(dish.length - 1)) {
        return true
    } else {
        return false
    }
}
console.log(feast("carlos", "carlos"));
console.log("");

console.log("Ejercicio 25  PUENTE   If you can't sleep, just count sheep!! https://www.codewars.com/kata/5b077ebdaf15be5c7f000077");
function countSheep(num) {
    let ini = ""
    for (i = 1; i <= num; i++) {
        ini += i + ' sheep...'
    }
    return ini
}

console.log(countSheep(3));
console.log("");

console.log("Ejercicio 26  PUENTE   Find out whether the shape is a cube https://www.codewars.com/kata/58d248c7012397a81800005c");
var cubeChecker = function (volume, side) {
    if (volume <= 0 || side <= 0) {
        return false
    } else if (volume == side ** 3) {
        return true
    } else {
        return false
    }
}
console.log(cubeChecker(8, 2));
console.log("");

console.log("Ejercicio 27  PUENTE   Thinkful - Logic Drills: Traffic light https://www.codewars.com/kata/58649884a1659ed6cb000072/");
function updateLight(current) {
    return current == "green" ? 'yellow' : current == "yellow" ? "red" : current == "red" ? "green" : true
}
console.log(updateLight("red"));
console.log("");

function bmi(weight, height) {
    let imc = weight / height ** 2
    return imc <= 18.5 ? "Underweight" : imc <= 25.0 ? "Normal" : imc <= 30.0 ? "Overweight" : "Obese"
}
console.log(bmi(80, 1.72));
console.log("");

console.log("Ejercicio 29  PUENTE   Cat years, Dog years   https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b");
var humanYearsCatYearsDogYears = function(humanYears) {
    if (humanYears==1) {
      return [1,15,15]
    }else if ( humanYears==2){
      return [2, 24, 24]
    } 
     for (let i=1 ; i<=humanYears ; i+4)
       return humanYears=[humanYears, i= 24+((humanYears-2)*4), i=24+((humanYears-2)*5)]
   }
console.log(humanYearsCatYearsDogYears(5));
console.log("");