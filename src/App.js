import React from 'react';
import Navbar from './components/Navbar';
import WebRoutes from './components/Webroutes';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <WebRoutes />
    </Router>
  )
};

export default App;
