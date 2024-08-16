import getnombre from "./saludador";

const name = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = name.value

  div.innerHTML = "<p> Hola " + getnombre(nombre) + "!</p>";
});
