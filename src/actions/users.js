// [[file:~/dev/repositories/react/reactnd-would-you-rather/docs/README.org::*users][users:1]]
export const RECEIVE_USERS = 'RECEIVE_USERS';

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}
// users:1 ends here
