import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

const selectCollection = (collectionUrlParam) => {
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );
};

const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);

export {
  selectCollection,
  selectCollections,
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
};
