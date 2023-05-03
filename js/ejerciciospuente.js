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
var humanYearsCatYearsDogYears = function (humanYears) {
    if (humanYears == 1) {
        return [1, 15, 15]
    } else if (humanYears == 2) {
        return [2, 24, 24]
    }
    for (let i = 1; i <= humanYears; i + 4)
        return humanYears = [humanYears, i = 24 + ((humanYears - 2) * 4), i = 24 + ((humanYears - 2) * 5)]
}
console.log(humanYearsCatYearsDogYears(5));
console.log("");