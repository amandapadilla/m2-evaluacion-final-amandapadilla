//Escuchar click sobre tarjeta de serie

const listenClickOnShowCards = () => {
  console.log("Listen click on new showCards DOM elements");
  const showCardsElements = document.querySelectorAll(".js-resultItem");
  for (const showCardsElement of showCardsElements) {
    showCardsElement.addEventListener("click", handleClick);
  }
};
const handleClick = ev => {
  console.log("Handle click on a showCards DOM element");
  const paletteIndex = getClickedPalette(ev);
  if (isFavoritePalette(paletteIndex)) {
    removeFavorite(paletteIndex);
  } else {
    addFavorite(paletteIndex);
  }
  paintPalettes();
};

// //Leer datos seleccionados

//¿Is favorite? true/false
// const getClickedShowCards = ev => {
//   const clickedPaletteIndex = 1;
//   console.log(
//     "Get clicked palette from event and return the clicked palette index >>> Clicked palette:",
//     clickedPaletteIndex
//   );
//   return clickedPaletteIndex;
// };
// const isFavoritePalette = paletteIndex => {
//   if (paletteIndex === 1) {
//     console.log(
//       `Check if paletteIndex ${paletteIndex} it is favorite >>>`,
//       true
//     );
//     return true;
//   } else {
//     console.log(
//       `Check if paletteIndex ${paletteIndex} it is not favorite >>>`,
//       false
//     );
//     return false;
//   }
// };

// //Cambiar estilo de los datos seleccionados

// // const addStylesToSelectedShowCard = () => {
// //   if (isFavoriteShowCard)
// // };

// //Guardar datos seleccionados en un array de FAVORITOS
// const addFavorite = paletteIndex => {
//   favorites.push(paletteIndex);
//   console.log(
//     "Add paletteIndex to `favorites` array >>> Favorites:",
//     favorites
//   );
// };

// //Pintar en FAVORITOS (temporizador 1s) para permitir ver el cambio de la tarjeta

// //Guardar datos en localStorage

// //Traer datos de localStorage tras hacer F5

// ////////////////////////////////////////////

// //OPCIONAL Crear funcionalidad 'Quitar de Favoritos'
// const removeFavorite = paletteIndex => {
//   console.log(
//     "Remove paletteIndex from `favorites` array >>> Favorites:",
//     favorites
//   );
// };

//OPCIONAL Reset Button
