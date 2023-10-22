//Чтобы потом легче было в одном месте поменять, если изменился state
export const selectAdvertsState = state => state.adverts.adverts;
export const selectIsLoading = state=> state.adverts.isLoading;
export const selectError = state => state.adverts.error;

export const selectIsAdding = state => state.adverts.isAdding;

export const selectCountAllAdverts=state=>state.adverts.countAllAdverts;

export const selectFilterState = state => state.filter.value;

export const selectMake = state => state.filter.make;
export const selectPrice = state => state.filter.price;
export const selectMileageMin = state => state.filter.mileageMin;
export const selectMileageMax = state => state.filter.mileageMax;


export const selectFavorites = state => state.favorites;