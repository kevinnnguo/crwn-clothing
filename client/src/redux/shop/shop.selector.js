import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;


export const SelectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const SelectCollectionsForPreview = createSelector(
  [SelectShopCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const SelectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [SelectShopCollections],
    (collections) => collections ? collections[collectionUrlParam] : null
  )
);

export const SelectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
)

export const SelectIsCollectionLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
)