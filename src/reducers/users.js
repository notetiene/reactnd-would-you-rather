import { RECEIVE_USERS } from '../actions/users';

export default function usersReducer(state = {}, action) {
  const {
    users,
  } = action;

  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...users,
      };
    default:
      return state;
  }
}
