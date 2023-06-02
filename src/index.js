import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/css/app.min.css'; // Ruta relativa al archivo CSS
import './assets/css/bootstrap.min.css'; // Ruta relativa al archivo CSS
import './assets/css/estilos_winwin.css'; // Ruta relativa al archivo CSS
import './assets/css/icons.min.css'; // Ruta relativa al archivo CSS

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);