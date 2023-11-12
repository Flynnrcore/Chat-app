/* eslint-disable react/jsx-no-constructed-context-values */
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';

import Navbar from './Navbar.jsx';
import LoginPage from './LoginPage.jsx';
import ErrorPage from './ErrorPage.jsx';
import ChatPage from './ChatPage.jsx';
import { useAuth } from '../hooks/index.jsx';
import AuthProvider from './AuthProvider.jsx';

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
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  </AuthProvider>
);

export default App;
