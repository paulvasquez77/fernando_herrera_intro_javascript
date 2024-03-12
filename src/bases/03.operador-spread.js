const persona = {
    nombre: 'tony',
    apellido: 'stark',
    edad: 45,
}

const persona2 = {...persona};
persona2.nombre = 'peter';

console.log(persona);
console.log(persona2);