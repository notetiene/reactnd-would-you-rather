import { createBrowserHistory } from 'history';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import createRootReducer from './reducers';
import createMiddlewares from './middleware';

export const history = createBrowserHistory();
const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = createRootReducer(history);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(preloadedState) {
  const store = createStore(
    persistedReducer,
    preloadedState,
    createMiddlewares(history),
  );
  const persistor = persistStore(store);

  return {
    store,
    persistor,
  };
}
