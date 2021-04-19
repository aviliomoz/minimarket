import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { productsReducer } from './reducers/productsReducer';
import { uiReducer } from './reducers/uiReducer';

const reducers = combineReducers({
  products: productsReducer,
  ui: uiReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);
