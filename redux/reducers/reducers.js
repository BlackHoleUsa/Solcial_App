import {initialState} from './state';
import {AUTH, SELECTED_AUCTION_RAFFLE_ITEM} from '../types/types';
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
    case SELECTED_AUCTION_RAFFLE_ITEM:
      return {
        ...state,
        selectedRaffleAuctionItem: payload,
      };
    default:
      return state;
  }
};
