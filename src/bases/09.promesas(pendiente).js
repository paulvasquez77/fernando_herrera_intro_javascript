import { getHeroesById } from "./bases/08.funciones-en-arreglos";


const promesa = new Promise((response, error)=>{
  setTimeout(() =>{

    const heroe = getHeroesById(2);
    response(heroe);

},2000)
});

promesa.then((heroe) => {

  console.log('heroe', heroe);
})
