"use strict";


// RECUERDA HACER console.log(); para probar las funciones
// debugger;

//Almacenar constantes
const inputSearch = document.querySelector(".js-inputSearch");
const searchSubmit = document.querySelector(".js-searchSubmit");
let showCards = [];
let data;

//Escuchar click de búsqueda

//Leer datos de búsqueda
const formatInputSearchValue = () => {
  const inputSearchValue = inputSearch.value;
  return inputSearchValue.toLowerCase();
};

//Traer datos del servidor ¿Es posible traer con la URL sólo los datos que queremos?
const getDataFromServer = (ev) => {
  event.preventDefault();
  const searchUrl = `http://api.tvmaze.com/search/shows?q=${formatInputSearchValue()}`;
  
  return fetch(searchUrl)
    .then (response => response.json())
    .then (data => {
      
      data = formatServerData(data);
      saveDataInShowCards(data);
      paintShowCards();
      listenShowCards();
    });
};

searchSubmit.addEventListener("click", getDataFromServer);

//Formatear datos (desde JSON seleccionar sólo nombre y portada)
const formatServerData = data => {
  const result =[];
  for (let i=0;i<data.length;i++) {
    result.push({
      name: data.name,
      image: data.image
    });
  };
  return result;
  console.log ('Respuesta', data);
};

//Recoger datos de búsqueda (nombre, portada)
const saveDataInShowCards = (data) => {
  showCards = data;
};
//Pintar resultados en display --- REHACER CÓDIGO

const newShowCard = document.createElement('li');
const newShowCardContent = document.createTextNode(showCards);
newShowCard.appendChild(newShowCardContent);
const showCardsList = document.querySelector('.js-displayResults');
showCardsList.appendChild(newShowCard);
  
//¿Cómo hago el bucle para que me pinte todos los resultados?
const addFavoriteClassToNewShowCard = showCardsIndex 

////////////////////////////////////////////

//Escuchar click sobre tarjeta de serie
const listenClickOnShowCards = () => {
  console.log('Listen click on new showCards DOM elements');
  const paletteElements = document.querySelectorAll('.js-palette');
  for (const paletteElement of paletteElements) {
    paletteElement.addEventListener('click', handleClick);
  }
};
const handleClick = ev => {
  console.log('Handle click on a palette DOM element');
  const paletteIndex = getClickedPalette(ev);
  if (isFavoritePalette(paletteIndex)) {
    removeFavorite(paletteIndex);
  } else {
    addFavorite(paletteIndex);
  }
  paintPalettes();
};

//Leer datos seleccionados ¿Is favorite? true/false
const getClickedPalette = ev => {
  const clickedPaletteIndex = 1;
  console.log('Get clicked palette from event and return the clicked palette index >>> Clicked palette:', clickedPaletteIndex);
  return clickedPaletteIndex;
};
const isFavoritePalette = paletteIndex => {
  if (paletteIndex === 1) {
    console.log(`Check if paletteIndex ${paletteIndex} it is favorite >>>`, true);
    return true;
  } else {
    console.log(`Check if paletteIndex ${paletteIndex} it is not favorite >>>`, false);
    return false;
  }
};

//Cambiar estilo de los datos seleccionados

// const addStylesToSelectedShowCard = () => {
//   if (isFavoriteShowCard) 
// };

//Guardar datos seleccionados en un array de FAVORITOS
const addFavorite = paletteIndex => {
  favorites.push(paletteIndex);
  console.log('Add paletteIndex to `favorites` array >>> Favorites:', favorites);
};

//Pintar en FAVORITOS (temporizador 1s) para permitir ver el cambio de la tarjeta

//Guardar datos en localStorage

//Traer datos de localStorage tras hacer F5

////////////////////////////////////////////

//OPCIONAL Crear funcionalidad 'Quitar de Favoritos'
const removeFavorite = paletteIndex => {
  console.log('Remove paletteIndex from `favorites` array >>> Favorites:', favorites);
};

//OPCIONAL Reset Button