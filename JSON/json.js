console.log("1. JSON.parse('{}')");
console.log(JSON.parse('{}'));
console.log("2. JSON.parse('true')");
console.log(JSON.parse('true'));
console.log("3. JSON.parse('[1, 5, 'false']')");
console.log(JSON.parse('[1, 5, "false"]'));
console.log("4. JSON.parse('{'nombre': 'Davinia', 'apellido': 'de la Rosa'}')");
console.log(JSON.parse('{"nombre": "Davinia", "apellido": "de la Rosa"}'));
console.log("5. var objeto = JSON.parse('{'nombre': 'Davinia', 'apellido': 'de la Rosa'}')");
var objeto = JSON.parse('{"nombre": "Davinia", "apellido": "de la Rosa"}');
console.log(objeto);
console.log("objeto.apellido --> " + objeto.apellido);
console.log("objeto['apellido']  --> " + objeto["apellido"]);
var x1 = new Boolean(false);
var x2 = new Boolean(false);
console.log("6. x1");
console.log(x1);
// if (x1) { //Dirección de memoria
//     console.log("Entro en el if");
// } else {
//     console.log("No entro en el if");}
console.log("7. x1 == false");
console.log(x1 == false);
console.log("8. x1 === false");
console.log(x1 === false);
console.log("9. x1 == true");
console.log(x1 == true);
console.log("10. x1 == x2");
console.log(x1 == x2); //Direcciones de memoria
console.log("11. x1 === x2");
console.log(x1 === x2); //Direcciones de memoria
console.log("12. JSON.stringify(x1) == JSON.stringify(x2)"); //Pasamos el objeto a string y comparamos
console.log(JSON.stringify(x1) == JSON.stringify(x2)); //Pasamos el objeto a string y comparamos
console.log("13. var x3 = false");
var x3 = false;
console.log(x3);
console.log("14. x2.toString()");
console.log(x2.toString());
console.log("15. x2.toString()");
var x4 = x2.toString(); //Convierte a cadena de caracteres
console.log(" x4[0] + ' ' +x4[1] + ' ' + x4.charAt(2) + ' ' + x4.charAt(3) + ` ${x4[4]}`");
console.log(x4[0] + " " +x4[1] + " " + x4.charAt(2) + " " + x4.charAt(3) + ` ${x4[4]}`);
console.log("-------------");
console.log("16. x2.valueOf()");
console.log(x2.valueOf());
console.log("17. typeof(x1)");
console.log(typeof(x1));
console.log("18. typeof(x3)");
console.log(typeof(x3));
console.log("-------------");
console.log("19. typeof(x2.valueOf)");
console.log(typeof(x2.valueOf));
console.log("20. typeof(x2.valueOf())");
console.log(typeof(x2.valueOf()));
console.log("-------------");
console.log("-------------");

console.log(Boolean(1 > 3));    //booleano
console.log(!!(7 > 3));         //booleano 
console.log(new Boolean(7 > 3)); //dirección de memoria
console.log(typeof(Boolean(1 > 3)));//booleano
console.log(Boolean(1 > 3));    //booleano
console.log(typeof(Boolean(1 > 3)));//booleano
console.log(typeof(Boolean));//Función
console.log("-------------");
console.log(Boolean("Hola"));   //true
console.log(Boolean([1,2,3]));  //true
console.log(Boolean(new String("Hola")));   //true
console.log(typeof(Boolean(new String("Hola"))));   //boolean