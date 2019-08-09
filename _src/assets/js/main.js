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
const getDataFromServer = event => {
  event.preventDefault();
  const searchUrl = `http://api.tvmaze.com/search/shows?q=${inputSearch.value}`; //no tiene el lowercase porque no funcionaba llamando la función formatInputSearchValue
  return fetch(searchUrl)
    .then(response => response.json())
    .then(data => {
      data = formatServerData(data);
      saveDataInShowCards(data);
      paintShowCards();
      listenShowCards();
    });
};

searchSubmit.addEventListener("click", getDataFromServer);

//Formatear datos (desde JSON seleccionar sólo nombre y portada)
//Si tiene imagen pinta la imagen y si no pinta el default
const formatServerData = data => {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    // if (
    //   result.push({
    //     name: data[i].show.name,
    //     image: undefined
    //   })
    // ) {
    //   console.log(document.write('<img
    //   src="./assets/images/default-image.png">'));
    // } else {
    result.push({
      name: data[i].show.name,
      image: data[i].show.image.medium
    });
  }
  return result;
};

//Recoger datos de búsqueda (nombre, portada)
const saveDataInShowCards = data => {
  showCards = data;
};

// Pintar resultados en display
const paintShowCards = () => {
  let showCardsList = document.querySelector(".js-resultList");
  let htmlCode = "";
  for (
    let showCardsIndex = 0;
    showCardsIndex < showCards.length;
    showCardsIndex++
  ) {
    const showCardsName = showCards[showCardsIndex].name;
    const showCardsImg = showCards[showCardsIndex].image;
    htmlCode += `<li class="result-itemName js-showCardsName" data-index="${showCardsIndex}">${showCardsName}<img src="${showCardsImg}" class="result-itemImage js-showCardsImage"></li>`;
  }
  showCardsList.innerHTML = htmlCode;
};

////////////////////////////////////////////

//Escuchar click sobre tarjeta de serie
const showCardsFavorite = [];
let showCardsIndex;

const addShowCardsToFavorites = event => {
  event.preventDefault();
  showCardsIndex = parseInt(event.currentTarget.dataset.index);
  // addStylesToSelectedShowCard ();
  // getShowCardsFavoritesList();
  paintFavoritesShowCards();
  // setFavoritesInLocalStorage ();
};
const listenShowCards = () => {
  let cards = document.querySelectorAll(".js-resultList");
  for (showCardsIndex of cards) {
    showCardsIndex.addEventListener("click", addShowCardsToFavorites);
  }
};
//Cambiar estilo de los datos seleccionados - classList.toggle

// const addStylesToSelectedShowCard = () => {
//   if (showCards)
// };

// //Pintar en FAVORITOS
const paintFavoritesShowCards = () => {
  let showCardsFavoritesList = document.querySelector(".js-favoritesList");
  let htmlCode = "";
  for (
    let showCardsIndex = 0;
    showCardsIndex < showCards.length;
    showCardsIndex++
  ) {
    const showCardsName = showCards[showCardsIndex].name;
    const showCardsImg = showCards[showCardsIndex].image;
    htmlCode += `<li class="result-favoriteName js-favoriteShowName" data-index="${showCardsIndex}">${showCardsName}<img src="${showCardsImg}" class="result-favoriteImage js-favoriteShowImage"></li>`;
  }
  showCardsFavoritesList.innerHTML = htmlCode;
};

//Guardar datos en localStorage

// const setFavoritesInLocalStorage = () => {
//   const showCardsName = showCards[showCardsIndex].name;
//   localStorage.setItem("show", JSON.stringify(showCardsName));
// };

//Traer datos de localStorage tras hacer F5

// const getFavoritesFromLocalStorage = () => {
//   const getFavoritesShowsList = JSON.parse(localStorage.getItem("show"));
// };

// ////////////////////////////////////////////

// //OPCIONAL Crear funcionalidad 'Quitar de Favoritos'
//¿Is already in favorites? true/false
// const isInFavoritesShowCard = () => {
//   if (showCards === favoriteShowCard) {
//    return false;
//   }else{
//     return true;
//   }
// }
