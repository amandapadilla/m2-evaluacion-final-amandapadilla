"use strict";

// RECUERDA HACER console.log(); para probar las funciones
//debugger;

//Almacenar constantes
const inputSearch = document.querySelector(".js-inputSearch");
const searchSubmit = document.querySelector(".js-searchSubmit");
let data;
let showCards;

//Escuchar click de búsqueda

//Leer datos de búsqueda
const formatInputSearchValue = () => {
  const inputSearchValue = inputSearch.value;
  return inputSearchValue.toLowerCase();
};

//Traer datos del servidor ¿Es posible traer con la URL sólo los datos que queremos?
const getDataFromServer = ev => {
  event.preventDefault();
  const searchUrl = `http://api.tvmaze.com/search/shows?q=${formatInputSearchValue()}`;
  return fetch(searchUrl) //probar con serie girls, pero se debe modificar la url para traer sólo lo que queremos. ¿Como programo que la última palabra la tome del input?
    .then(response => response.json())
    .then(data => {
      console.log( data);
      data = formatServerData(data);
      //   saveDataInShowCards(data);
      //   paintShowCards();
    });
};
searchSubmit.addEventListener("click", getDataFromServer);

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

//Recoger datos de búsqueda (nombre, portada)
const saveDataInShowCards = (data) => {
    showCards = data;
};
//Pintar resultados en display

const paintShowCards = () => {
    const displayCardsList = document.querySelector('.js-resultList');
    for (let cardIndex = 0; cardIndex < showCards.length; cardIndex++) {









      htmlCode += `<li class="result-item" ${getFavoriteClassName(cardIndex)} js-palette" data-index="${paletteIndex}">`;
      htmlCode += `<p class="palettes__name">${palettes[paletteIndex].name}</p>`;
      htmlCode += '<ul class="palettes__colors">';
      for (const color of palettes[paletteIndex].colors) {
        htmlCode += `<li class="palettes__color" style="background-color: #${color}"></li>`;
      }
      htmlCode += '</ul>';
      htmlCode += '</li>';
    }
    listElement.innerHTML = htmlCode;
    console.log('Paint palettes form `palettes` array into DOM >>> Palettes:', palettes, 'Favorites:', favorites);
  };
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