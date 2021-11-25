function holaMundo(){
    alert("Hola Mundo!");
}

function holaMundo2(){
    return "Hola Mundo2!";
}

//console.log(holaMundo());
//console.log(holaMundo2());

function saludar(nombre){
    alert("Hola "+nombre+"!!");
}
var nombre=prompt("introduce su nombre");
const sumar = function suma(n1, n2){ return n1 + n2; }
console.log(sumar(9,20));
//console.log(suma(3,4)); -> Error suma no es accesible por sí misma, sin usar la constante sumar
var restar = function(n1, n2){ return n1 - n2; } //Con una función anónima, sin nombre
console.log(restar(12,12));

( function () {
    let nom = "Davinia"; //Si la declaráramos con var seguiría siendo local
    alert("Hola " + nom);
})();