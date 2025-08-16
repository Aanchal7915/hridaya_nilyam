import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // <-- Add this line
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* <-- Add this line */}
      <App />
    </BrowserRouter> {/* <-- Add this line */}
    
  </React.StrictMode>
);

