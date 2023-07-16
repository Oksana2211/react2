import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import './style/App.css';
import App from './components/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1 className="title">Карточки с супергероями</h1>
    <App />
  </React.StrictMode>
);


