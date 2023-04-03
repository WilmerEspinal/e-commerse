const listaProductoStarWars = () => {
  return fetch("http://localhost:3000/starwars")
    .then((respuesta) => respuesta.json())
    .catch((error) => alert("ocurrio un error"));
};

const crearProductoStarWars = (image, name, price) => {
  return fetch("http://localhost:3000/starwars", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ image, name, price, id: uuid.v4() }),
  });
};

const listaProductoConsolas = () => {
  return fetch("http://localhost:3000/consolas")
    .then((respuesta) => respuesta.json())
    .catch((error) => console.log(error));
};

const crearProductoConsolas = (image, name, price) => {
  return fetch("http://localhost:3000/consolas", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ image, name, price, id: uuid.v4() }),
  });
};

const listaProductoDiversos = () => {
  return fetch("http://localhost:3000/diversos")
    .then((respuesta) => respuesta.json())
    .catch((error) => console.log(error));
};

const crearProductosDiversos = (image, name, price) => {
  return fetch("http://localhost:3000/diversos", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ image, name, price, id: uuid.v4() }),
  });
};

const eliminarProductoStarWars = (id) => {
  return fetch(`http://localhost:3000/starwars/${id}`, {
    method: "DELETE",
  });
};

const eliminarProductoConsolas = (id) => {
  return fetch(`http://localhost:3000/consolas/${id}`, {
    method: "DELETE",
  });
};
const eliminarProductoDiversos = (id) => {
  return fetch(`http://localhost:3000/diversos/${id}`, {
    method: "DELETE",
  });
};

const detalleProductoStarWars = (id) => {
  return fetch(`http://localhost:3000/starwars/${id}`)
    .then((respuesta) => respuesta.json())
    .catch((error) => console.log(error));
};

const actualizarProductoStarWars = (image, name, price, id) => {
  return fetch(`http://localhost:3000/starwars/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ image, name, price }),
  })
    .then((respuesta) => respuesta)
    .catch((error) => console.log(error));
};

const detalleProductoConsolas = (id) => {
  return fetch(`http://localhost:3000/consolas/${id}`)
    .then((respuesta) => respuesta.json())
    .catch((error) => console.log(error));
};

const actualizarProductoConsol = (image, name, price, id) => {
  return fetch(`http://localhost:3000/consolas/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ image, name, price }),
  })
    .then((respuesta) => respuesta)
    .catch((error) => console.log(error));
};

const detalleProductoDiverso = (id) => {
  return fetch(`http://localhost:3000/diversos/${id}`)
    .then((respuesta) => respuesta.json())
    .catch((error) => console.log(error));
};

const actualizarProductoDiversos = (image, name, price, id) => {
  return fetch(`http://localhost:3000/diversos/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ image, name, price }),
  })
    .then((respuesta) => respuesta)
    .catch((error) => console.log(error));
};

export const productoServicio = {
  listaProductoStarWars,
  crearProductoStarWars,
  listaProductoConsolas,
  crearProductoConsolas,
  listaProductoDiversos,
  crearProductosDiversos,

  eliminarProductoStarWars,
  eliminarProductoConsolas,
  eliminarProductoDiversos,

  detalleProductoStarWars,
  detalleProductoConsolas,
  detalleProductoDiverso,

  actualizarProductoStarWars,
  actualizarProductoConsol,
  actualizarProductoDiversos,
};
