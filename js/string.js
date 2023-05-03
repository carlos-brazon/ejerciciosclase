//ejercicios STRINGS

console.log("STRINGS");
console.log("1. Declara una variable llamada sentence y dale el valor = Java Script no es tan difícil como me había dicho Dani...");
let sentence="JavaScript no es tan difícil como me había dicho Dani...";
console.log("");

console.log("2. Muestra el contenido de sentence en la consola.");
console.log("sentence= "+sentence);
console.log("");

console.log("3. Muestra en la consola la longitud de sentence.");
console.log("La longitud de sentence es: "+sentence.length)
console.log("");

console.log("4. Cambia todos los caracteres de sentence a mayúsculas.");
console.log("Todo en mayúsculas: "+sentence.toUpperCase(sentence));
console.log("");

console.log("5. Cambia todos los caracteres de sentence a minúsculas.");
console.log("Todo en minúsculas: "+sentence.toLowerCase(sentence));
console.log("");

console.log("6. Crea una variable llamada js y asígnale como valor el resultado de cortar o extraer la palabra JavaScript de sentence. Comprueba que haya funcionado.");
let js= 'sentence.slice(0,11)';
console.log(sentence.slice(0,11));
console.log("");

console.log("7. Crea una variable llamada profe y asígnale como valor el resultado de cortar o extraer la palabra Dani de sentence. Comprueba que haya funcionado.");
let profe= 'sentence.slice(0,11)';
console.log(sentence.slice(49,53));
console.log("");

console.log("8. Comprueba si sentence contiene el string script");
console.log(sentence.includes("script"));
console.log("");

console.log("9. Cambia sentence usando replace() para que diga Python no es tan difícil como me había dicho Alfredo...");
console.log(sentence.replaceAll("JavaScript","Python").replaceAll("Dani","Alfredo") );
console.log("");

console.log("10. Cambia sentence usando replace() para que diga Python no es tan difícil como me había dicho Alfredo...");
console.log("la letra en la cuarta posición es: "+sentence[4]);
console.log("");

console.log("11. ¿Cuál es la posición de la primera ocurrencia del caracter a en sentence? Muéstralo en la consola.");
console.log("La primera ocurrencia es: "+sentence.indexOf("a"))
console.log("");

console.log("12. ¿Y la posición de la última ocurrencia?");
console.log("La ultima ocurrencia es: "+sentence.lastIndexOf("a"))
console.log("");

console.log("13. ¿Cuál es la posición de la primera ocurrencia del caracter z en sentence? Muéstralo en la consola.");
console.log("La primera ocurrencia del caracter z es: "+sentence.indexOf("z"))
console.log("");

console.log("14. Crea una variable llamada doubts que sea el resultado de concatenar sentence con el string pero todavía es pronto para saberlo.");
let doubts=sentence.concat(" pero todavía es pronto para saberlo")
console.log(" El resultado de doubts es: "+doubts);
console.log("");

console.log("15. Crea la variable longitud y asígnale la longitud de sentence. A continuación, muestra por consola el caracter que se encuentra en la posición que guarda longitud. Escribe en un comentario por qué da ese resultado.");
let longitud= sentence.length
console.log(sentence[ longitud]);
console.log("   -Da esa respuesta porque el valor de longitud tiene un caracter más, hay que restar -1 para poder ver el ultimo caracter de longitud");
console.log("");

console.log("16. Usando charAt() y la variable longitud del ejercicio anterior, consigue mostrar por consola el último caracter de sentence");
let ultimocaracter=longitud-1
console.log("El ultimo caracter de sentence es: "+ sentence.charAt(ultimocaracter));
console.log("");

console.log("17. Crea dos variables: name1 con valor John y name2 con valor Anna. A continuación, crea otras dos variables más: long1 con valor la longitud de la variable name1 y long2 con valor la longitud de la variable name2. Muestra por consola si long1 es estrictamente igual a long2.");
let name1="John"
let name2="Anna"
let long1=name1.length
let long2=name2.length
console.log(long1===long2);
console.log("");

console.log("18. ");
let bothNames=name1.concat(name2)
let finalLong=bothNames.length

console.log(finalLong);

console.log(finalLong===(long1+long2))
console.log(long1>long2||long2>long1)
console.log(long1>long2||long2>long1 && finalLong===(long1+long2));