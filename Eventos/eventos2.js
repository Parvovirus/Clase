function info(){
    alert("Este botón se ha añadido desde JS");
}
var nuevoBoton = document.createElement("input");
nuevoBoton.setAttribute("value", "nuevoBoton");
nuevoBoton.setAttribute("type", "button");
nuevoBoton.setAttribute("onclick", "info();");
document.body.appendChild(nuevoBoton);//lo ultimo