console.log("Ejercicio 1 OBJETOS  Crea un objeto llamado citizen1 y dale las propiedades name, lastname y age. Elige tú los valores. ");
let citizen1 = {
    name: "carlos",
    lastname: "brazon",
    age: 34
}
console.log(citizen1);
console.log("");

console.log("Ejercicio 2 Una vez creado, añádele la propiedad city, con el valor que tú quieras, y cambia el valor de la propiedad age. Comprueba que los cambios han surtido efecto.");
citizen1.city = "madrid"
citizen1.age = 35
console.log(citizen1);
console.log("");

console.log("Ejercicio 3 Crea una función checkCitizenship que acepte como parámetro un objeto, compruebe la edad del ciudadano y, si ésta es mayor de 18, añada la propiedad canVote: true; de lo contrario, debe añadir canVote: false. Usála con el objeto citizen1.");
function checkCitizenship(citizen1) {
    if (citizen1.age > 18) {
        citizen1.canVote = true;
    } else {
        citizen1.canVote = false
    }
    return citizen1
}
checkCitizenship(citizen1)
console.log(citizen1);


console.log("");

console.log("Ejercicio 4 Crea una función llamada createCitizenque acepte 3 strings: nombre, apellido y edad. Si los parámetros son válidos, debe retornar un nuevo objeto del tipo")

function createCitizen(nombre, apellido, edad) {
    if (typeof nombre == 'string' && typeof apellido == 'string' && typeof edad == 'string') {
        return {
            name: nombre,
            lastname: apellido,
            age: edad
        }
    }
    else {
        console.log('mal');
    }
    return
}
console.log("");

console.log("Ejercicio 5 Crea una variable citizen2 y asígnale como valor el resultado de la función anterior con los parámetros que desees.");

let citizen2 = createCitizen("carlos", 'brazon', "19")
console.log("citizen2=");
console.log(citizen2);
console.log("");

console.log("Ejercicio 6 Crea una función checkVoting que acepte como parámetro un objeto, compruebe si el objeto en cuestión tiene la propiedad canVote y retorne el resultado.");
// function checkVoting(obj6) {
//     if (Object.hasOwn(obj6, 'canVote')) {
//         console.log("Si tiene la propiedad canVote");

//     }else{
//         console.log("No tiene la propiedad canVote");
//     }

// }
// checkVoting(citizen1)
console.log("");

console.log("Ejercicio 7 Modifica la función checkVoting para que, si el resultado es negativo (si el objeto no tiene la propiedad canVote), se llame a la función checkCitizenship. Úsala con citizen2 y comprueba que funciona.");

function checkVoting(citizen1) {
    if (Object.hasOwn(citizen1, 'canVote')) {
        // console.log("Si tiene la propiedad canVote");
        return "Si tiene la propiedad canVote"

    } else {
        return checkCitizenship(citizen1)

    }
}
console.log(checkVoting(citizen2));
console.log("");

console.log("Ejercicio 8 Dado el objeto de objetos que tienes al final de este ejercicio:");
console.log(" 1    Crea una función usersLogged que devuelva el número de usuarios que están logados (usuarios que tienen la propiedad isLoggedIn: true).");

const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

function usersLogged(users) {
    let arrayUsers = Object.values(users)
    let userlogIN = 0
    let userNolog = 0
    console.log(arrayUsers);
    for (let i = 0; i < arrayUsers.length; i++) {
        if (arrayUsers[i].isLoggedIn) {
            userlogIN += 1
        } else {
            userNolog += 1
        }
    }
    return { userlogIN, userNolog }
}
console.log(usersLogged(users));
console.log("");

console.log(" 2    Crea una función que imprima por consola los usuarios que tienen más de 50 puntos.");
function morePoints(x) {
    let arrayPoints = Object.values(x)
    let userMaore50point = []
    for (let i = 0; i < arrayPoints.length; i++) {
        if (arrayPoints[i].points >= 50) {
            userMaore50point.push(arrayPoints[i])
            //    console.log(arrayPoints [i]);
        }
    }
    return { userMaore50point }
}
console.log(morePoints(users));
console.log("");

console.log(" 3    Crea una función que muestre por consola los usuarios que sabenReact.");
function userKnow(x) {
    let arrayReact = Object.entries(x)
    let userKnowReact = []
    for (let i = 0; i < arrayReact.length; i++) {
        if (arrayReact[i][1].skills.includes('React')) {
            userKnowReact.push(arrayReact[i])
        }
    }
    console.log({ userKnowReact });
}
userKnow(users)
console.log("");

// for (let i = 0; i < array.length; i++) {
// }
// for (let user in users)

console.log("Ejercicio 9 Imagina que obtienes de la base de datos un array de objetos con los usuarios que están registrados en tu web (tienes el array al final del ejercicio). Crea los siguientes métodos:");
console.log(" 1    Una función llamada signUp que sirva para registrar a un usuario nuevo. Le pedirá name, email y password y creará un objeto con sus datos y un estado de logado (que por defecto será false). Si el email ya está registrado en la lista de usuarios, devolverá un mensaje informando de que el usuario ya está registrado. Si no, introducirá al usuario en la lista, e informará de que se ha completado el registro.");
const user2 = [
    {
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        isLoggedIn: false
    },
    {
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        isLoggedIn: true
    },
    {
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        isLoggedIn: true
    },
    {
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        isLoggedIn: false
    },
    {
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        isLoggedIn: false
    }
];
function signUp(x, y, z) {
    let array = Object.values(user2)
    console.log(array);
    for (let i = 0; i < array.length; i++) {
        let tru=array[i].email===y
        if (tru) {
          return "El usuario ya está registrado"
                } else{
                    console.log("registro completado");
                }
    }
    return  user2.push( {
            username: x,
            email: y,
            password: z,
            isLoggedIn: false
                })   
    
}
console.log(signUp("carlos", "carlos@gmail.com", "252525"));
console.log(user2);