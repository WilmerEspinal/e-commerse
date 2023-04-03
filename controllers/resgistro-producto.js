import { productoServicio } from "../service/product-service.js";

const btnSubmit = document.querySelector("[data-form]");

btnSubmit.addEventListener("submit", (event) => {
  event.preventDefault();

  const image = document.querySelector("[data-image]").value;
  const category = document.querySelector("[data-category]");
  const name = document.querySelector("[data-name]").value;
  const price = document.querySelector("[data-price]").value;

  if (category === "starwars") {
    productoServicio
      .crearProductoStarWars(image, name, price)
      .then((respuesta) => {
        window.location.href = "/success.html";
      })
      .catch((err) => console.log(err));
  }

  if (category === "consolas") {
    productoServicio
      .crearProductoConsolas(image, name, price)
      .then((respuesta) => {
        window.location.href = "/success.html";
      })
      .catch((err) => console.log(err));
  }

  if (category === "diversos") {
    productoServicio
      .crearProductosDiversos(image, name, price)
      .then((respuesta) => {
        window.location.href = "/success.html";
      })
      .catch((err) => console.log(err));
  }
});
