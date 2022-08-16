/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */

// export function findRecipe(recipes, searchedSlug) {
//   const recipe = recipes.find((testedRecipe) => {
//     return testedRecipe.slug === searchedSlug;
//   });
//   return recipe;
// }

export function findTrip(trips, searchedID) {
  const trip = trips.find((testedTrip) => {
    return testedTrip.id === searchedID;
  });
  return trip;
}
