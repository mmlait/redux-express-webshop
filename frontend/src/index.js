import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";

import rootReducer from './redux/reducers';
import App from './containers/App.jsx';

const composedEnhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(
  rootReducer,
  composedEnhancers
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
