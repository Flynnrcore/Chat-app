import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { Provider as RollbarProvider, ErrorBoundary } from '@rollbar/react';
import { io } from 'socket.io-client';

import init from './init.jsx';

const rollbarConfig = {
  accessToken: '6b42d6c004e843c7b693b647060858d7',
  environment: 'testenv',
};

const app = async () => {
  const soket = io();
  const root = ReactDOM.createRoot(document.getElementById('chat'));
  const vdom = await init(soket);
  root.render(
    <RollbarProvider config={rollbarConfig}>
      <ErrorBoundary>
        {vdom}
      </ErrorBoundary>
    </RollbarProvider>,
  );
};

app();
