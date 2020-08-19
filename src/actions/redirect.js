import { replace } from 'connected-react-router';

export const REDIRECT_SIGNIN = 'REDIRECT_SIGNIN';
export const REDIRECT_UNDO = 'REDIRECT_UNDO';
const SIGNIN_PATHNAME = '/signin';
const ROOT_PATHNAME = '/';

export function redirectSignin(location) {
  return (dispatch) => {
    dispatch({
      type: REDIRECT_SIGNIN,
      payload: {
        location,
      },
    });
    dispatch(replace(SIGNIN_PATHNAME));
  };
}

export function redirectUndo({ lastLocation }) {
  return (dispatch) => {
    dispatch({
      type: REDIRECT_UNDO,
    });
    dispatch(replace(lastLocation || ROOT_PATHNAME));
  };
}
