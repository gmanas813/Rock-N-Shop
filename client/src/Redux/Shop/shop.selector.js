import {createSelector} from 'reselect';

const shopSelector= state=> state.shop;


export const selectCollections = createSelector(
    [shopSelector],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectColl = collurl => createSelector(
    [selectCollections],
    collections => collections ? collections[collurl] : []
);

export const selectCollFetch = createSelector(
    [shopSelector],
    shop => shop.isFetch
);

export const selectCollLoaded = createSelector(
    [shopSelector],
    shop => !!shop.collections
);