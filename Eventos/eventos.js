const saludar = function(){
    alert("Hola");
}

const despedir = () => {
    alert("Adiós");
}

function eventosBotonesExistentes(){
    var inputs = document.getElementsByTagName('input');
    inputs[0].addEventListener("click", saludar, false);
    inputs[1].addEventListener("click", despedir, false);
}