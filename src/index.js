import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorkerRegistration';

import { Provider } from 'react-redux';
import { store } from 'utils/reduxStore/configureStore';

import { getCurrentTranslation } from './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <IntlProvider
        locale={'en'}
        key={'en'}
        messages={getCurrentTranslation('en')}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </IntlProvider>
    </Provider>
  </React.StrictMode>,
);

serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
