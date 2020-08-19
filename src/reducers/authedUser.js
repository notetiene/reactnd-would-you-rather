// [[file:~/dev/repositories/react/reactnd-would-you-rather/docs/README.org::*authedUser][authedUser:1]]
import {
  SET_AUTHED_USER,
  SIGNOUT_AUTHED_USER,
} from '../actions/authedUser';

export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.id;
    case SIGNOUT_AUTHED_USER:
      return null;
    default:
      return state;
  }
}
// authedUser:1 ends here
