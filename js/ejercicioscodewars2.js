console.log("Ejercicio 1  Create Phone Number  https://www.codewars.com/kata/525f50e3b73515a6db000b83 ");
function createPhoneNumber(numbers) {
    let yyy = `(${numbers.join("").slice(0, 3)}) ${numbers.join("").slice(3, 6)}-${numbers.join("").slice(6, 10)}`
    return yyy
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log("");


console.log("Ejercicio 2  No Loops 2 - You only need one https://www.codewars.com/kata/57cc40b2f8392dbf2a0003ce/ ");
function check(a, x) {
    if (a.includes(x)) {
        return true
    }
    return false
}
console.log(check([66, 101], 66));
console.log("");

console.log("Ejercicio 3  Sum Factorial https://www.codewars.com/kata/56b0f6243196b9d42d000034/ ");
function sumFactorial(arr) {
    let result = 0;
    let fac1 = 1
    for (let i = 0; i < arr.length; i++) {
        for (let k = 1; k <= arr[i]; k++) {
            fac1 *= k
        }
        result += fac1
        fac1 = 1;
    }
    return result
}
console.log(sumFactorial([4, 6]));
console.log("");

console.log("Ejercicio 4  Vowel Count   https://www.codewars.com/kata/54ff3102c1bad923760001f3/");
function getCount(str) {
    let num = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ("a") || str[i] === ("e") || str[i] === ("i") || str[i] === ("o") || str[i] === ("u")) {
            num += 1
        }
    }
    return num
}
console.log(getCount("aeiEouue"));
console.log("");

console.log("Ejercicio 5  Disemvowel Trolls   https://www.codewars.com/kata/52fba66badcd10859f00097e/");
function disemvowel(str) {
    let newString = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ("a") || str[i] === ("e") || str[i] === ("i") || str[i] === ("o") || str[i] === ("u") || str[i] === ("A") || str[i] === ("E") || str[i] === ("I") || str[i] === ("O") || str[i] === ("U")) {

            newString = str.replaceAll(("a", 'e', "i", 'o', 'u', "A", 'E', "I", 'O', 'U'))
        }
    }
    return newString;
}
console.log(disemvowel("This website is for losers LOL!"));




console.log("");
console.log("");
