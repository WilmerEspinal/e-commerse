import { productoServicio } from "../service/product-service.js";

////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
const templateProductoStarWars = (image, name, price, id) => {
  const div = document.createElement("div");
  const content = `
    <figure>
    <img src="${image}" alt="">
    <div class="icons">
        <button class="btndelete" id="${id}"><i class="fa-solid fa-trash"></i></button>
        <a href="editar.html?starwars=${id}" class="editar"><i class="fa-solid fa-pen"></i></a>
    </div>
    </figure>
    <p class="product__name">${name}</p>
    <p class="product__price">${price}</p>
    <a class="product__link" href="">Ver producto</a>`;
  div.innerHTML = content;

  const btnDelete = div.querySelector("button");
  btnDelete.addEventListener("click", () => {
    const idStarWasrs = btnDelete.id;

    console.log(idStarWasrs);
    productoServicio.eliminarProductoStarWars(idStarWasrs).then((respuesta) => {
      console.log(respuesta);
    });
  });
  return div;
};
const containerStarWars = document.querySelector("[data-starwars]");
productoServicio
  .listaProductoStarWars()
  .then((data) => {
    data.forEach((starwars) => {
      const newproduct = templateProductoStarWars(
        starwars.image,
        starwars.name,
        starwars.price,
        starwars.id
      );
      containerStarWars.appendChild(newproduct);
    });
  })
  .catch((error) => console.log(error));

////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
const templateProductoConsolas = (image, name, price, id) => {
  const div = document.createElement("div");
  const content = `
    <figure>
    <img src="${image}" alt="">
    <div class="icons">
        <button class="consola" id="${id}"><i class="fa-solid fa-trash"></i></button>
        <a href="editar.html?consola=${id}" class="editar"><i class="fa-solid fa-pen"></i></a>
    </div>
    </figure>
    <p class="product__name">${name}</p>
    <p class="product__price">${price}</p>
    <a class="product__link" href="">Ver producto</a>`;
  div.innerHTML = content;

  const btnDelete = div.querySelector(".consola");
  btnDelete.addEventListener("click", () => {
    const idCosolas = btnDelete.id;

    console.log(idCosolas);
    productoServicio.eliminarProductoConsolas(idCosolas).then((respuesta) => {
      console.log(respuesta);
    });
  });
  return div;
};

const containerConsolas = document.querySelector("[data-consolas]");
productoServicio
  .listaProductoConsolas()
  .then((data) => {
    data.forEach((consolas) => {
      const productoConsolas = templateProductoConsolas(
        consolas.image,
        consolas.name,
        consolas.price,
        consolas.id
      );
      containerConsolas.appendChild(productoConsolas);
    });
  })
  .catch((error) => console.log(error));

////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
const templateProductoDiverso = (image, name, price, id) => {
  const div = document.createElement("div");
  const content = `
    <figure>
    <img src="${image}" alt="">
    <div class="icons">
        <button class="diverso" id="${id}"><i class="fa-solid fa-trash"></i></button>
        <a href="editar.html?diverso=${id}" class="editar"><i class="fa-solid fa-pen"></i></a>
    </div>
    </figure>
    <p class="product__name">${name}</p>
    <p class="product__price">${price}</p>
    <a class="product__link" href="">Ver producto</a>`;
  div.innerHTML = content;

  const btnDelete = div.querySelector(".diverso");
  btnDelete.addEventListener("click", () => {
    const idDiverso = btnDelete.id;

    console.log(idDiverso);
    productoServicio.eliminarProductoDiversos(idDiverso).then((respuesta) => {
      console.log(respuesta);
    });
  });
  return div;
};

const containerDiversos = document.querySelector("[data-diversos]");
productoServicio
  .listaProductoDiversos()
  .then((data) => {
    data.forEach((diversos) => {
      const productoDiverso = templateProductoDiverso(
        diversos.image,
        diversos.name,
        diversos.price,
        diversos.id
      );
      containerDiversos.appendChild(productoDiverso);
    });
  })
  .catch((error) => console.log(error));
