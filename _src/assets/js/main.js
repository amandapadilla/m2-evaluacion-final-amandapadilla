"use strict";

// RECUERDA HACER console.log(); para probar las funciones
debugger;

//Almacenar constantes
const inputSearch = document.querySelector(".js-inputSearch");
const searchSubmit = document.querySelector(".js-searchSubmit");
let data;
let showCards;
debugger;
//Escuchar click de búsqueda

//Leer datos de búsqueda
const formatInputSearchValue = () => {
  const inputSearchValue = inputSearch.value;
  return inputSearchValue.toLowerCase();
};
debugger;
//Traer datos del servidor ¿Es posible traer con la URL sólo los datos que queremos?
const getDataFromServer = async ev => {
  event.preventDefault();
  const searchUrl = `http://api.tvmaze.com/search/shows?q=${formatInputSearchValue()}`;
  const response = await fetch(searchUrl) //probar con serie girls, pero se debe modificar la url para traer sólo lo que queremos. ¿Como programo que la última palabra la tome del input?
    ;
  const data = await response.json();
  data = formatServerData(data);
  saveDataInShowCards(data);
  paintShowCards();
  // listenShowCards();
};
searchSubmit.addEventListener("click", getDataFromServer);
debugger;
//Formatear datos (desde JSON seleccionar sólo nombre y portada)
const formatServerData = data => {
    result =[];
  for (let i=0;i<data.length;x++) {
    result.push({
        name: data.name,
        image: data.image
        });    
  return result;
};
debugger;
//Recoger datos de búsqueda (nombre, portada)
const saveDataInShowCards = (data) => {
  showCards = data;
};
//Pintar resultados en display --- REHACER CÓDIGO
debugger;
const paintShowCards = () => {
  const showCardsList = document.querySelector('.js-displayResults');
  let htmlCode = '';
  for (let cardIndex = 0; cardIndex < showCards.length; cardIndex++) {
    htmlcode += `<li class="result-item" ${getFavoriteByClass(cardIndex)} js-showCard" data-index="${cardIndex}">`;
    htmlCode += `<p class="showCards__name">${showCards[cardIndex].name}</p>`;
    htmlCode += `<p class="showCards__image">${showCards[cardIndex].image}</p>`;
    htmlCode += '<ul class="result-list">';
    // for (const cardsList of palettes[paletteIndex].colors) {
    //     htmlCode += `<li class="palettes__color" style="background-color: #${color}"></li>`;
    //   }
    //   htmlCode += '</ul>';
    //   htmlCode += '</li>';
    }
    listElement.innerHTML = htmlCode;
    // console.log('Paint palettes form `palettes` array into DOM >>> Palettes:', palettes, 'Favorites:', favorites);
  };
  debugger;
  const getFavoriteByClass = cardIndex => {
    if (isFavoriteShow(cardIndex)) {
      return 'showCards__item--favorite';
    } else {
      return '';
    }
  };
  debugger;
////////////////////////////////////////////

//Escuchar click sobre tarjeta de serie

//Leer datos seleccionados

//Cambiar estilo de los datos seleccionados

//Guardar datos seleccionados en un array de FAVORITOS

//Pintar en FAVORITOS (temporizador 1s) para permitir ver el cambio de la tarjeta

//Guardar datos en localStorage

//Traer datos de localStorage tras hacer F5

////////////////////////////////////////////

//OPCIONAL Crear funcionalidad 'Quitar de Favoritos'
//OPCIONAL 