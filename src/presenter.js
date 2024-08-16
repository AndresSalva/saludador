import {getnombre,getgenero} from "./saludador";

const name = document.querySelector("#nombre");
const genre = document.querySelector("#genero");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = name.value
  const genero = genre.value

  div.innerHTML = "<p> Hola " +getgenero(genero)+" "+ getnombre(nombre) + "!</p>";
});
