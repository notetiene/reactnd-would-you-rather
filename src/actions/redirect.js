// [[file:~/dev/repositories/react/reactnd-would-you-rather/docs/README.org::*redirect][redirect:1]]
import { replace } from 'connected-react-router';

export const REDIRECT_SIGNIN = 'REDIRECT_SIGNIN';
export const REDIRECT_UNDO = 'REDIRECT_UNDO';
const SIGNIN_PATHNAME = '/signin';
const ROOT_PATHNAME = '/';
// redirect:1 ends here

// [[file:~/dev/repositories/react/reactnd-would-you-rather/docs/README.org::*redirect][redirect:2]]
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
// redirect:2 ends here

// [[file:~/dev/repositories/react/reactnd-would-you-rather/docs/README.org::*redirect][redirect:3]]
export function redirectUndo({ lastLocation }) {
  return (dispatch) => {
    dispatch({
      type: REDIRECT_UNDO,
    });
    dispatch(replace(lastLocation || ROOT_PATHNAME));
  };
}
// redirect:3 ends here
