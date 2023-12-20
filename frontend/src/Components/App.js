/* eslint-disable react/jsx-no-constructed-context-values */
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';

import { ToastContainer as ToastDiv } from 'react-toastify';
import Navbar from './Navbar.jsx';
import LoginPage from './LoginPage.jsx';
import ErrorPage from './ErrorPage.jsx';
import ChatPage from './ChatPage.jsx';
import { useAuth } from '../hooks/index.jsx';
import AuthProvider from './AuthProvider.jsx';
import SignupPage from './SignupPage.jsx';

const CheckLogged = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  return auth.user ? children : <Navigate to="/login" state={{ from: location }} />;
};

const App = () => (
  <AuthProvider>
    <div className="d-flex flex-column h-100">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={(
              <CheckLogged>
                <ChatPage />
              </CheckLogged>
            )}
          />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <ToastDiv />
      </BrowserRouter>
    </div>
  </AuthProvider>
);

export default App;
