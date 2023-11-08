/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
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
import AuthContext from '../contexts/index.jsx';
import useAuth from '../hooks/index.jsx';

const AuthProvider = ({ children }) => {
  const checkLogged = Boolean(localStorage.getItem('userId'));
  const [loggedIn, setLoggedIn] = useState(checkLogged);

  const logIn = () => setLoggedIn(true);
  const logOut = () => {
    localStorage.removeItem('userId');
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const CheckLogged = ({ children }) => {
  const { loggedIn } = useAuth();
  const location = useLocation();

  return (
    loggedIn ? children : <Navigate to="/login" state={{ from: location }} />
  );
};

const App = () => (
  <AuthProvider>
    <div className="h-100">
      <div className="h-100" id="chat">
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
      </div>
    </div>
  </AuthProvider>
);

export default App;
