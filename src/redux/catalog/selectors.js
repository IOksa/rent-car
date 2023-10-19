//Чтобы потом легче было в одном месте поменять, если изменился state
export const selectAdvertsState = state => state.adverts.adverts;
export const selectIsLoading = state=> state.adverts.isLoading;
export const selectError = state => state.adverts.error;

export const selectIsAdding = state => state.adverts.isAdding;

export const selectFilterState = state => state.filter.value;