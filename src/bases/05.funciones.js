//funciones normales de toda la vida

// function saludar(nombre){
//   return `Hola ${nombre}`
// }
// console.log(saludar('paul'))


//funciones creadas con variables
const saludar = function(nombre){
  return `Hola ${nombre}`
}

const saludar2 = (nombre) =>{     //reemplazamos la palabra function con la flecha
  return `Hola ${nombre}`
}

const saludar3 = (nombre) => `Hola ${nombre}`;   //1 solo argumento, 1 solo return

const saludar4 = () => ('hola mundo');    //retorno simple

console.log(saludar('paul'))
console.log(saludar2('goku'))
console.log(saludar3('vegeta'))
console.log(saludar4())


const getUser = () => ({
  uid: 'ABC123',
  username: 'elpapi1502'
});

const user = getUser();
console.log(user);

//tarea
//1. transformar a función flecha
//2. retornar un objeto implicito (poner el objeto entre parentesis y quitar el return)
//3. pruebas
function getUsuarioActivo(nombre){
  return {
    uid: 'ABC567',
    username: nombre
  }
}

//resuelta
const getUsuarioActivo = (nombre) =>({
  uid: 'ABC567',
  username: nombre
})

const usuarioActivo = getUsuarioActivo('paul');
console.log(usuarioActivo);