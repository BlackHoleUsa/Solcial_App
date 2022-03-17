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
  CLEAR_CART,
  LOG_OUT,
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
      console.log(action.payload);
      return {
        ...state,
        cart: state.cart.filter(
          todo => todo.selectedSize !== action.payload.selectedSize,
        ),
      };
    case ADD_QTY:
      const index = state.cart.findIndex(
        item => item.newId === action.payload.newId,
      );
      const newCart = [...state.cart];
      newCart[index].qty = state.cart[index].qty + 1;
      return {
        ...state,
        cart: newCart,
      };
    case REMOVE_QTY:
      const removeIndex = state.cart.findIndex(
        item => item.newId === action.payload.newId,
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
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case LOG_OUT:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          firstName: '',
          lastName: '',
          email: '',
          id: '',
          authToken: '',
        },
      };
    default:
      return state;
  }
};
