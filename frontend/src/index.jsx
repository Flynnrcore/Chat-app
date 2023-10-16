import ReactDOM from 'react-dom/client';
import App from './components/App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('chat'));
root.render(<App />);
