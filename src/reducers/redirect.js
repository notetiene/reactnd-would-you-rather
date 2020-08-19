// [[file:~/dev/repositories/react/reactnd-would-you-rather/docs/README.org::*redirect][redirect:1]]
import { REDIRECT_SIGNIN, REDIRECT_UNDO } from '../actions/redirect';

export default (state = {}, action) => {
  switch (action.type) {
// redirect:1 ends here

// [[file:~/dev/repositories/react/reactnd-would-you-rather/docs/README.org::*redirect][redirect:2]]
    case REDIRECT_SIGNIN:
      return {
        ...state,
        lastLocation: action.payload.location.pathname,
      };
// redirect:2 ends here

// [[file:~/dev/repositories/react/reactnd-would-you-rather/docs/README.org::*redirect][redirect:3]]
    case REDIRECT_UNDO:
      return {
        ...state,
        lastLocation: null,
      };
    default:
      return state;
  }
};
// redirect:3 ends here
