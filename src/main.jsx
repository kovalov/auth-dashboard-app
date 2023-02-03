import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { AuthContextProvider } from './context/authContext';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
