import {getnombre,getgenero,getedad,traducir} from "./saludador";

const name = document.querySelector("#nombre");
const genre = document.querySelector("#genero");
const age = document.querySelector("#edad");
const language = document.querySelector("#idioma");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = name.value
  const genero = genre.value
  const edad = age.value
  const idioma = language.value
  const resultado = "<p> Hola " +getgenero(genero)+" "+ getnombre(nombre) +" "+getedad(edad);
  div.innerHTML = traducir(resultado,idioma)
});
