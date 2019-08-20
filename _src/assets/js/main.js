"use strict";

// RECUERDA HACER console.log(); para probar las funciones
// debugger;

//Almacenar constantes
const inputSearch = document.querySelector(".js-inputSearch");
const searchSubmit = document.querySelector(".js-searchSubmit");
let showCards = [];
let favorites = [];

//Escuchar click de búsqueda

//Leer datos de búsqueda

//Traer datos del servidor
const getDataFromServer = event => {
  event.preventDefault();
  const searchUrl = `http://api.tvmaze.com/search/shows?q=${inputSearch.value}`;
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
const formatServerData = data => {
  let result = [];
  for (let i = 0; i < data.length; i++) {
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
    // const showCardsLang = showCards[showCardsIndex].language;
    htmlCode += `<li class="result__item js-showCard" data-index="${showCardsIndex}"><p class="result__item--name">${showCardsName}</p><img src="${showCardsImg}" class="result__item--image js-showCardsImage"></li>`;
  }
  showCardsList.innerHTML = htmlCode;
};

////////////////////////////////////////////

//Escuchar click sobre tarjeta de serie
let showCardsIndex;

const addShowCardsToFavorites = event => {
  event.preventDefault();
  showCardsIndex = parseInt(event.currentTarget.dataset.index);
  favorites.push(showCards[showCardsIndex]);
  paintFavoritesShowCards();
  setFavoritesInLocalStorage();
};

const listenShowCards = () => {
  let cards = document.querySelectorAll(".js-showCard");
  for (const card of cards) {
    card.addEventListener("click", addShowCardsToFavorites);
  }
};

// //Pintar en FAVORITOS
const paintFavoritesShowCards = () => {
  let showCardsFavoritesList = document.querySelector(".js-favoritesList");
  let htmlCode = "";
  for (
    let showCardsIndex = 0;
    showCardsIndex < favorites.length;
    showCardsIndex++
  ) {
    const favoritesName = favorites[showCardsIndex].name;
    const favoritesImg = favorites[showCardsIndex].image;
    htmlCode += `<li class="favorites__item js-favoriteShowName" data-index="${showCardsIndex}"><p class="favorites__name">${favoritesName}</p><img src="${favoritesImg}" class="favorites__image js-favoriteShowImage"></li>`;
  }
  showCardsFavoritesList.innerHTML = htmlCode;
};

//Guardar datos en localStorage

const setFavoritesInLocalStorage = () => {
  const favoritesName = favorites[showCardsIndex].name;
  localStorage.setItem("show", JSON.stringify(favoritesName));
};

//Traer datos de localStorage tras hacer F5 ----CORREGIR FUNCIÓN

const getFavoritesFromLocalStorage = () => {
  let getFavorites = JSON.parse(localStorage.getItem("show"));
};
getFavoritesFromLocalStorage();
// ////////////////////////////////////////////
