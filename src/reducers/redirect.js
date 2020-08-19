import { REDIRECT_SIGNIN, REDIRECT_UNDO } from '../actions/redirect';

export default (state = {}, action) => {
  switch (action.type) {
    case REDIRECT_SIGNIN:
      return {
        ...state,
        lastLocation: action.payload.location.pathname,
      };
    case REDIRECT_UNDO:
      return {
        ...state,
        lastLocation: null,
      };
    default:
      return state;
  }
};
