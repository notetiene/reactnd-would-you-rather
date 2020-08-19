// [[file:~/dev/repositories/react/reactnd-would-you-rather/docs/README.org::*loading][loading:1]]
export const LOADING_START = 'LOADING_START';
export const LOADING_END = 'LOADING_END';

export function loadingStart() {
  return {
    type: LOADING_START,
  };
}

export function loadingEnd() {
  return {
    type: LOADING_END,
  };
}
// loading:1 ends here
