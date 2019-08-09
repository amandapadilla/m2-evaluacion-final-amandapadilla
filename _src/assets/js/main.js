"use strict";

// RECUERDA HACER console.log(); para probar las funciones
// debugger;

//Almacenar constantes
const inputSearch = document.querySelector(".js-inputSearch");
const searchSubmit = document.querySelector(".js-searchSubmit");
let showCards = [];

//Escuchar click de búsqueda

//Leer datos de búsqueda
const formatInputSearchValue = () => {
  const inputSearchValue = inputSearch.value;
  return inputSearchValue.toLowerCase();
};

//Traer datos del servidor ¿Es posible traer con la URL sólo los datos que queremos?
const getDataFromServer = ev => {
  event.preventDefault();
  const searchUrl = `http://api.tvmaze.com/search/shows?q=${inputSearch.value}`; //no tiene el lowercase porque no funcionaba llamando la función formatInputSearchValue
  return fetch(searchUrl)
    .then(response => response.json())
    .then(data => {
      data = formatServerData(data);
      saveDataInShowCards(data);
      paintShowCards();
      // listenShowCards();
    });
};

searchSubmit.addEventListener("click", getDataFromServer);

//Formatear datos (desde JSON seleccionar sólo nombre y portada)
const formatServerData = data => {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    result.push({
      name: data[i].show.name,
      image: data[i].show.image.medium //¿Es la ruta correcta de llamada a los datos del JSON? Data=undefined
    });
  }
  return result;
};

//Recoger datos de búsqueda (nombre, portada)
const saveDataInShowCards = data => {
  showCards = data;
};
debugger;
const paintShowCards = () => {
  for (
    let showCardsIndex = 0;
    showCardsIndex < showCards.length;
    showCardsIndex++
  ) {
    console.log(showCards[showCardsIndex].show.name);
    console.log(showCards[showCardsIndex].show.image.medium);
  }
};

// // Pintar resultados en display --- Componer función
// //

// let showCardsList = document.querySelector(".js-resultList");
// showCardsList = [showCards];

// for (
//   let showCardsIndex = 0;
//   showCardsIndex < showCardsList.length;
//   showCardsIndex++
// ) {
//   const newShowCard = showCardsList.createElement("li");
//   const addFavoriteClassToNewShowCard = newShowCard;
//   newShowCard;
//   const newShowCardContent = showCardsList.createTextNode(
//     `${name}, ${showImage}`
//   );
// }

// addFavoriteClassToNewShowCard = "js-resultItem";
// showCardsList.appendChild(newShowCard); // ¿No es necesario porque ya está creado el ul?

//¿Cómo hago el bucle para que me pinte todos los resultados? Y cómo agrego la clase a los items <li></li>

////////////////////////////////////////////

//Escuchar click sobre tarjeta de serie

// //Leer datos seleccionados

//¿Is favorite? true/false

// //Cambiar estilo de los datos seleccionados - toggle

// // const addStylesToSelectedShowCard = () => {
// //   if (isFavoriteShowCard)
// // };

// //Guardar datos seleccionados en un array de FAVORITOS

// //Pintar en FAVORITOS (temporizador 1s) para permitir ver el cambio de la tarjeta opcional

// //Guardar datos en localStorage

// //Traer datos de localStorage tras hacer F5

// ////////////////////////////////////////////

// //OPCIONAL Crear funcionalidad 'Quitar de Favoritos'
