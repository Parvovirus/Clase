// // let p1 = new Promise(function (resolve, reject) {
// //     setTimeout(resolve, 600, "Promesa 1");
// // });
// // let p2 = new Promise(function (resolve, reject) {
// //     setTimeout(resolve, 200, "Promesa 2");
// // });

// // Promise.race([p1, p2]).then(function (value) {
// //     console.log(value); // "segunda" - Promesa 2 más rápida
// // });



// let error = false;

// let p1 = new Promise(function(resolve, reject) {
//   console.log("Promesa 1 - Iniciada");
//  setTimeout(resolve, 1100, "Promesa 1 - Terminada");
// });
// let p2 = new Promise(function(resolve, reject) {
//   console.log("Promesa 2 - Iniciada");
//   setTimeout(resolve, 1800, "Promesa 2 - Terminada");
// });
// let p3 = new Promise(function(resolve, reject) {
//   if(error){
//     reject("modo error Activado");
//   } else {
//     console.log("Promesa 3 - Iniciada");
//     setTimeout(resolve, 2900, "Promesa 3 - Terminada");
//   }

// });
// let p4 = new Promise(function(resolve, reject) {
//   console.log("Promesa 4 - Iniciada");
//   setTimeout(resolve, 5100, "Promesa 4 - Terminada");
// });

// Promise.all([p1, p2, p3, p4]).then(function(value) {
//   console.info("Promise.all -> TODAS las promesas terminadas", value)
// }, function(reason) {
//   console.log("Ups...hubo algún error!", reason)
// });


function factorial(n){
    if(n == 0){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}

console.log(factorial(5));