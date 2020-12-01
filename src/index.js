import ReactDOM from 'react-dom';
import React from 'react';
import App from 'App';
import {removeConsole} from 'utils/helper';
import * as serviceWorker from 'utils/serviceWorker';
import 'global/index.scss';
import {Provider} from 'react-redux';
import {store} from 'redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

if (process.env.NODE_ENV === 'production') {
  serviceWorker.register();
  removeConsole();
} else {
  serviceWorker.unregister();
}
