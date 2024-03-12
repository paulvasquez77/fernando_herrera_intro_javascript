const nombre = 'Paul';
const apellido = 'Vasquez Vega';
const edad = 'tengo 27 años'

const nombreCompleto = ` ${nombre} ${apellido}, ${edad} `

console.log(nombreCompleto);

function saludo(nombre){
    return 'hola ' + nombre;
}

console.log(`este es un saludo para ${saludo(nombre)}`);