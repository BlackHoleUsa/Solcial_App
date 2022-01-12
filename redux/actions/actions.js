import {AUTH} from '../types/types';
export const setAuth = data => ({
  type: AUTH,
  payload: data,
});
