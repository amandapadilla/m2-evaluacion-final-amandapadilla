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
      console.log ('Respuesta', data);
      data = formatServerData(data);
      saveDataInShowCards(data);
      paintShowCards();
      listenShowCards();
    });
};

searchSubmit.addEventListener("click", getDataFromServer);

//Formatear datos (desde JSON seleccionar sólo nombre y portada)
const formatServerData = data => {
  result =[];
  for (let i=0;i<data.length;i++) {
    result.push({
      name: data.name,
      image: data.image
    });    
    return result}
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


////////////////////////////////////////////

//Escuchar click sobre tarjeta de serie

//Leer datos seleccionados ¿Is favorite? true/false

//Cambiar estilo de los datos seleccionados

//Guardar datos seleccionados en un array de FAVORITOS

//Pintar en FAVORITOS (temporizador 1s) para permitir ver el cambio de la tarjeta

//Guardar datos en localStorage

//Traer datos de localStorage tras hacer F5

////////////////////////////////////////////

//OPCIONAL Crear funcionalidad 'Quitar de Favoritos'
//OPCIONAL Reset Button