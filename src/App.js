import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/index';

const App = () => (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );

export default App;;
