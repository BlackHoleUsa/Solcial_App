import {initialState} from './state';
import {
  AUTH,
  SELECTED_AUCTION_ITEM,
  SELECTED_STORE_ITEM,
  SELECTED_RAFFLE_ITEM,
  ADD_CART_ITEM,
} from '../types/types';
export const reducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case AUTH:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          firstName: payload.firstName,
          lastName: payload.lastName,
          email: payload.email,
          id: payload.id,
          authToken: payload.authToken,
        },
      };
    case SELECTED_AUCTION_ITEM:
      return {
        ...state,
        selectedAuctionItem: payload,
      };
    case SELECTED_STORE_ITEM:
      return {
        ...state,
        selectedStoreItem: payload,
      };
    case SELECTED_RAFFLE_ITEM:
      return {
        ...state,
        selectedRaffleItem: payload,
      };
    case ADD_CART_ITEM:
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    default:
      return state;
  }
};
