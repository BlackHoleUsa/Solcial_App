import {
  AUTH,
  SELECTED_AUCTION_ITEM,
  SELECTED_STORE_ITEM,
  SELECTED_RAFFLE_ITEM,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  ADD_QTY,
  REMOVE_QTY,
  CLEAR_CART,
} from '../types/types';
export const setAuth = data => ({
  type: AUTH,
  payload: data,
});
export const setSelectedAuctionItem = data => ({
  type: SELECTED_AUCTION_ITEM,
  payload: data,
});
export const setSelectedStoreItem = data => ({
  type: SELECTED_STORE_ITEM,
  payload: data,
});
export const setSelectedRaffleItem = data => ({
  type: SELECTED_RAFFLE_ITEM,
  payload: data,
});
export const setCartItem = data => ({
  type: ADD_CART_ITEM,
  payload: data,
});
export const setRemoveCartItem = data => ({
  type: REMOVE_CART_ITEM,
  payload: data,
});
export const setAddQty = data => ({
  type: ADD_QTY,
  payload: data,
});
export const setRemoveQty = data => ({
  type: REMOVE_QTY,
  payload: data,
});
export const setClearCart = data => ({
  type: CLEAR_CART,
});
