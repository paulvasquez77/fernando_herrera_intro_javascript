const personajes = ['goku', 'vegeta', 'trunks'];

const [, , p3] = personajes;

console.log(p3);


const retornarArreglo = () =>{
  return ['ABC', 123]
}

const [letras, numeros] = retornarArreglo();
console.log(letras, numeros);

//tarea
//1. el primer valor del arr se llamará nombre
//2. ek segundo valor del arr se llamará setNombre

const usestate = (valor) =>{
  return [valor, ()=>{console.log('Hola Mundo')}];
}

//resuelta, entre las llaves antes se llamaba arr
const [nombre, setNombre] = usestate('jean');
console.log(nombre);
setNombre();