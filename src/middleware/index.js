// [[file:~/dev/repositories/react/reactnd-would-you-rather/docs/README.org::*Middlewares][Middlewares:1]]
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
});
export default (history) => composeEnhancers(
  applyMiddleware(
    routerMiddleware(history),
    thunk,
  ),
);
// Middlewares:1 ends here
