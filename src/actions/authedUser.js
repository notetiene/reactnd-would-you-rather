// [[file:~/dev/repositories/react/reactnd-would-you-rather/docs/README.org::*authedUser][authedUser:1]]
export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const SIGNOUT_AUTHED_USER = 'SIGNOUT_AUTHED_USER';

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}

export function signOut() {
  return {
    type: SIGNOUT_AUTHED_USER,
  };
}
// authedUser:1 ends here
