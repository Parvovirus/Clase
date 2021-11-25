/*var n = window.prompt("Inserta un número entero: ");
alert(n + n + 2);
n = parseInt(n);
alert(n + n + 2);
var n2 = window.prompt("Inserta un número real: ");
alert(n2 + n2 + 2);
n2 = parseFloat(n2);
alert(n2 + n2 + 2);*/
/*var n = 9;
    var n2 = 9;
    console.log(n == n2); // Devuelve true porque son iguales los contenidos de las variables
    var n3 = 109;
    console.log(n == n3); // Devuelve false porque no son iguales los contenidos de las variables
    var n4 = '9';
    console.log(n == n4);// Devuelve true porque son iguales los contenidos de las variables aunque no los tipos
    var n5 = 9.0;
    console.log(n == n5);// Devuelve true porque son iguales los contenidos de las variables aunque no los tipos
/*
n3 = parseInt("F", 16);
alert(n3);
n3 = parseInt("17", 8);
alert(n3);
n3 = parseInt("15", 10);
alert(n3);
n3 = parseInt(15.99, 10);
alert(n3);
n3 = parseInt("FXX123", 16);
alert(n3);
n3 = parseInt("1111", 2);
alert(n3);
n3 = parseInt("15*3", 10);
alert(n3);
n3 = parseInt("12", 13);
alert(n3);

var n = 9;
var n2 = 9;
console.log(n === n2); // Devuelve true porque son iguales los contenidos de las variables y los tipos
var n3 = 109;
console.log(n === n3); // Devuelve false porque no son iguales los contenidos de las variables
var n4 = '9';
console.log(n === n4);// Devuelve false porque son iguales los contenidos de las variables aunque no los tipos
var n5 = parseInt(9.1);
console.log(n === n5);// Devuelve true porque son iguales los contenidos de las variables y los tipos


var n = 9;
var n2 = 9;
console.log(n != n2); // Devuelve false porque son iguales los contenidos de las variables
var n3 = 109;
console.log(n != n3); // Devuelve true porque no son iguales los contenidos de las variables
var n4 = '9';
console.log(n != n4);// Devuelve false porque son iguales los contenidos de las variables aunque no los tipos
var n5 = 9.0;
console.log(n != n5);// Devuelve false porque son iguales los contenidos de las variables aunque no los tipos



var n = 9;
var n2 = 9;
console.log(n !== n2); // Devuelve false porque son iguales los contenidos de las variables y los tipos
var n3 = 109;
console.log(n !== n3); // Devuelve true porque no son iguales los contenidos de las variables
var n4 = '9';
console.log(n !== n4);// Devuelve true porque no son iguales los tipos de las variables
var n5 = 9.0;
console.log(n !== n5);// Devuelve false porque son iguales los contenidos de las variables y los tipos

var a = 9;
var b = 8;
console.log(a > b); //Devuelve true porque a es mayor que b
var c = 9;
console.log(a >= c); //Devuelve true porque a es igual que c

const cadena = "Hola";
const cadena2 = "Adios";
console.log(cadena > cadena2); //Devuelve true porque "Hola" es mayor alfabéticamente hablando
console.log(cadena < cadena2); 

const n = 9;
    var n2 = prompt("Inserta un número");
    if (n == n2 && n %3 == 0) {
        alert("Has acertado el número y es multiplo de 3");
    } else {
        alert("No has acertado el número");
    }*/

    var foo = 0;
    switch (foo) {
    case -1:
        console.log('1 negativo');
        break;
    case 0: // foo es 0, por lo tanto se cumple la condición y se ejecutara el siguiente bloque
        console.log(0);
        
        // NOTA: el "break" olvidado debería estar aquí
    case 1: // No hay sentencia "break" en el 'case 0:', por lo tanto este caso también será ejecutado
        console.log(1);
        break; // Al encontrar un "break", no será ejecutado el 'case 2:'
    case 2:
        console.log(2);
        break;
    default:
        console.log('default');
    }