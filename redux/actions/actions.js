import {
  AUTH,
  SELECTED_AUCTION_RAFFLE_ITEM,
  SELECTED_STORE_ITEM,
} from '../types/types';
export const setAuth = data => ({
  type: AUTH,
  payload: data,
});
export const setSelectedAuctionRaffleItem = data => ({
  type: SELECTED_AUCTION_RAFFLE_ITEM,
  payload: data,
});
export const setSelectedStoreItem = data => ({
  type: SELECTED_STORE_ITEM,
  payload: data,
});
