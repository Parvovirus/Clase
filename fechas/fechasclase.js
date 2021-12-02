
//FUNCION QUE COMPRUEBA SI ES UN MES DE 30 DIAS.

function meses30(mes) {
    const mes = [4, 6, 9, 11];
    var encontrado = false;
    var i = 0;
    while (!encontrado && i < mes.length) {
        encontrado = encontrado || m[i] == mes;
        i++;
    }
    return encontrado;
}

//FUNCION QUE AÑADE LOS DIAS CORRESPONDIENTES AL MES
function sumaDias(mes, numDias) {
    if (mes == 2) {
        numDias = numDias + 28;
    } else {
        if (meses30(mes)) {
            numDias = numDias + 30;
        } else {
            numDias = numDias + 31;
        }
    }
    return numDias;
}

