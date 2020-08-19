// [[file:~/dev/repositories/react/reactnd-would-you-rather/docs/README.org::*loading][loading:1]]
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
// loading:1 ends here
