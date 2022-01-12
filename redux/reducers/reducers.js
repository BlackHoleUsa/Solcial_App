import {initialState} from './state';
import {AUTH} from '../types/types';
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
    default:
      return state;
  }
};
