import { productoServicio } from "../service/product-service.js";

const actualizarProductoStarWars = () => {
  const url = new URL(window.location);
  const star = url.searchParams.get("starwars");

  if (star) {
    const image = document.querySelector("[data-image]");
    const name = document.querySelector("[data-name]");
    const price = document.querySelector("[data-price]");

    productoServicio.detalleProductoStarWars(star).then((starwars) => {
      image.value = starwars.image;
      name.value = starwars.name;
      price.value = starwars.price;
    });
    console.log(star);
    return;
  }
};
actualizarProductoStarWars();

const submitActualizado = document.querySelector("[data-form]");

submitActualizado.addEventListener("submit", (event) => {
  event.preventDefault();
  const url = new URL(window.location);
  const star = url.searchParams.get("starwars");

  if (star) {
    const image = document.querySelector("[data-image]").value;
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;

    productoServicio
      .actualizarProductoStarWars(image, name, price, star)
      .then(() => {
        window.location.href = "/actualizado.html";
      });
  }
});
////////////////////////////////////////////////////////////////////////////////
const actualizarProductoConsola = () => {
  const url2 = new URL(window.location);
  const idconsol = url2.searchParams.get("consola");

  if (idconsol) {
    const image = document.querySelector("[data-image]");
    const name = document.querySelector("[data-name]");
    const price = document.querySelector("[data-price]");

    productoServicio.detalleProductoConsolas(idconsol).then((consolas) => {
      image.value = consolas.image;
      name.value = consolas.name;
      price.value = consolas.price;
    });
    console.log(idconsol);
    return;
  }
};
actualizarProductoConsola();

submitActualizado.addEventListener("submit", () => {
  const url2 = new URL(window.location);
  const idconsol = url2.searchParams.get("consola");

  if (idconsol) {
    const image = document.querySelector("[data-image]").value;
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;

    productoServicio
      .actualizarProductoConsol(image, name, price, idconsol)
      .then(() => {
        window.location.href = "/actualizado.html";
      });
  }
});

////////////////////////////////////////////////////diversos////////////////////////////////////////////////
const actualizarProductosDiversos = () => {
  const url = new URL(window.location);
  const idDiverso = url.searchParams.get("diverso");

  if (idDiverso) {
    const image = document.querySelector("[data-image]");
    const name = document.querySelector("[data-name]");
    const price = document.querySelector("[data-price]");

    productoServicio.detalleProductoDiverso(idDiverso).then((diversos) => {
      image.value = diversos.image;
      name.value = diversos.name;
      price.value = diversos.price;
    });
  }
};
actualizarProductosDiversos();

submitActualizado.addEventListener("submit", () => {
  const url = new URL(window.location);
  const idDiverso = url.searchParams.get("diverso");

  if (idDiverso) {
    const image = document.querySelector("[data-image]").value;
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;

    productoServicio
      .actualizarProductoDiversos(image, name, price, idDiverso)
      .then(() => {
        window.location.href = "/actualizado.html";
      });
  }
});
