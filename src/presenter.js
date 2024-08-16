import {getnombre,getgenero,getedad} from "./saludador";

const name = document.querySelector("#nombre");
const genre = document.querySelector("#genero");
const age = document.querySelector("#edad");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = name.value
  const genero = genre.value
  const edad = age.value

  div.innerHTML = "<p> Hola " +getgenero(genero)+" "+ getnombre(nombre) +" "+getedad(edad) +"!</p>";
});
