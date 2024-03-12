const persona = {
  nombre: 'tony',
  edad: 45,
  clave: 'Ironman',
}

// const {nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);


//desestructuración directamente en los argumentos
//tambien podemos añadir elementos directamente en los argumentos
//pero si ya está en el objeto, toma el del objeto
const userContext = ({clave, nombre, edad, rango= 'capitán'}) =>{
// console.log(nombre, edad, rango);

return{
  nombreClave: clave,
  anios: edad,
  residencia: {
    ciudad: 'new york',
    pais: 'usa',
  }
}
}

const {nombreClave, anios, residencia:{ciudad, pais}} = userContext(persona);

console.log(nombreClave, anios);
console.log(ciudad, pais);