// function xyz(x, y, ...z) {
//     console.log(x, ' ', y); // hey hello

//     console.log(z); // ["wassup", "goodmorning", "hi", "howdy"]
//     console.log(z[0]); // wassup
//     console.log(z.length); // 4
// }

// xyz("hey", "hello", "wassup", "goodmorning", "hi", "howdy")


// try {
//     throw { toString: function () { return "Error creado por Davinia desde una función anónima";} };
// } catch (e) {
//     console.log('Se ha producido una excepción: ' + e);
// } finally {
//     console.log('El finally se ejecuta sí o sí');
// } 

// function f(){
//     console.log('Hola');
//     }
// try {
//     // f();
// } catch (e) {
//     if (e instanceof ReferenceError) {
//         console.log('Se ha producido una excepción: '+ e);
//     }
// } finally {
//     console.log('El finally se ejecuta sí o sí');
// }