import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import App from './components/App.js';
import store from './slices/index.js';

const root = ReactDOM.createRoot(document.getElementById('chat'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
