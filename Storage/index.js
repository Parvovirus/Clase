// localStorage.setItem('name', 'Coke'); // op1
// localStorage.surname = 'Sánchez'; // op2

// let firstName = localStorage.getItem('name');
// let lastName = localStorage.surname;
// console.log(`Hola, mi nombre es ${firstName} ${lastName}`)
// // o también
// console.log(`Hola, mi nombre es ${localStorage.getItem('name')} ${localStorage.surname}`)
// // localStorage.removeItem('surname');
// // localStorage.clear(); // BORRA TODO EL LOCAL STORAGE
// // console.log(`Hola, mi nombre es ${localStorage.getItem('name')} ${localStorage.surname}`)
// for(let i=0; i<localStorage.length; i++) {
//     let key = localStorage.key(i);
//     alert(`${key}: ${localStorage.getItem(key)}`);
// }


// localStorage.setItem('user', JSON.stringify({
//     username: 'Davinia',
//     api_key: 'abc123xyz789'
// }));
// //Leer
// var user = JSON.parse(localStorage.getItem('user'));


// console.log(typeof(user));
// console.log((user));




//  // NOS SACA LAS KEYS EN UN ARRAY
// const operatingSystem = {
//     name: 'Ubuntu',
//     version: 18.04,
//     license: 'Open Source'
// };

// // Obtenemos los conjuntos clave/valor
// const entries = Object.entries(operatingSystem);

// console.log(entries);



const persona = {
    nombre: 'espacio para el nombre',
    apellidos: 'espacio para los apellidos',
    edad: 'espacio para la edad',
    muestraDatos() {
        const menor = this.edad < 18 ? 'es menor de edad' : 'no es menor de edad';

        alert(`Nombre: ${this.nombre}, Apellidos: ${this.apellidos}.\nTiene ${this.edad} años  y ${menor}`);
    }
};


var persona1 = Object.create(persona);
    persona1.nombre = "Rafael";
    persona1["apellidos"] = "Pérez Ramírez";
    persona1["edad"] = 15;
    persona1.muestraDatos();