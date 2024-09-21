import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import {ToastContainer} from 'react-toastify';
import { TourProvider } from './context/TourContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TourProvider>

    <App />
    </TourProvider>
    <ToastContainer 
      position='top-center'
    />
  </React.StrictMode>
);

