import {initialState} from './state';
import {
  AUTH,
  SELECTED_AUCTION_ITEM,
  SELECTED_STORE_ITEM,
  SELECTED_RAFFLE_ITEM,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  ADD_QTY,
  REMOVE_QTY,
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
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.filter(todo => todo._id !== action.payload._id),
      };
    case ADD_QTY:
      const index = state.cart.findIndex(
        item => item._id === action.payload._id,
      );
      const newCart = [...state.cart];
      newCart[index].qty = state.cart[index].qty + 1;
      return {
        ...state,
        cart: newCart,
      };
    case REMOVE_QTY:
      const removeIndex = state.cart.findIndex(
        item => item._id === action.payload._id,
      );
      const removeCart = [...state.cart];
      if (state.cart[removeIndex].qty < 2) {
        removeCart[removeIndex].qty = 1;
      } else {
        removeCart[removeIndex].qty = state.cart[removeIndex].qty - 1;
      }

      return {
        ...state,
        cart: removeCart,
      };

    default:
      return state;
  }
};
