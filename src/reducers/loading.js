import {
  LOADING_START,
  LOADING_END,
} from '../actions/loading';

export default function loading(state = null, action) {
  switch (action.type) {
    case LOADING_START:
      return true;
    case LOADING_END:
      return false;
    default:
      return state;
  }
}
