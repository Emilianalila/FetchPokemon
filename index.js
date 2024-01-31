/* Promises */

/* fetch("https://pokeapi.co/api/v2/pokemon/pikachu") // we pass the url in string "" format, the fetch function is promise based, so it will be resolved or rejected. for that we have to use .then and .catch methods to handle de result or the error of a promise
.then(response=>{
  if(!response.ok){ // cuando recibimos la informacion podemos visualizar si la respuesta esta ok o no, antes de pasarla a json, ejemplo (ok: true) o su status : 200 significa q obtuvimos la informacion correctamente
    throw new Error ("could not fetch resource")
  }
  return response.json(); //Al llamar a .json() en la respuesta, estás diciendo esencialmente: "Interpreta el cuerpo de esta respuesta como JSON y devuélveme un objeto de JavaScript que pueda utilizar".
})
.then(data=>console.log(data))
.catch(err=>console.error(err)); */ // si ingresamos bobsponge en nuestra url, no vamos a poder fechear la informacion, por lo tanto vamos a tener un error el cual vamos a crear nosotros y luego lo vamos a mostrar con un catch en la consola en rojo

/* Async aw */

//fetchData(); // acordarse q estamos trabajando con una funcion, por lo tanto siempre hay q llamarla
async function fetchData() {// funcion async la cual contiene try and catch
  try {
    const pokemonName = document.getElementById("PokemonName").value.toLowerCase();

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`); // aqui sustituimos el nombre pikachu por un placeholder y adentro ponemos nuestra nueva variable"pokemonName" la cual esta encargada de conseguir el nombre q nos pongan en el input de mi html, de esta manera manejamos que nombre queremos fetchear de nuestra api
    if (!response.ok) {
      throw new Error("could not fetch resource");
    }
    const data = await response.json();
    console.log(data);
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");

    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";

    const pokemonType = data.forms[0].name;
    const h2types = (document.getElementById("pokemonType")
    .innerHTML = `${pokemonType}`);
  } catch(err){
    console.error(err);
  }
}
