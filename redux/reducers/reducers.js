import {initialState} from './state';
import {SIGNUP} from '../types/types';
export const reducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case SIGNUP:
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
    default:
      return state;
  }
};
