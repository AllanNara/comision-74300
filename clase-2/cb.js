const listadoFrutas = ["peras", "manzanas", "bananas"];

function consologearItem(item) {
  console.log(item);
}

// listadoFrutas.forEach(consologearItem);
// listadoFrutas.forEach((item) => console.log(item));

// for (let i = 0; i < listadoFrutas.length; i++) {
//   consologearItem(listadoFrutas[i])
// }


function filtrarManzana(item) {
  if (item !== "manzanas") return item;
  if (item === "manzanas") return undefined
}

// const listadoFiltrado = listadoFrutas.filter(filtrarManzana);
const listadoFiltrado = listadoFrutas.filter((item) => { if(item !== "manzanas") return item });

console.log({ listadoFiltrado });
