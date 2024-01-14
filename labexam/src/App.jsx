import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout.jsx';
import "./pages/app.css"

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Layout />
      </div>
    </BrowserRouter>
  );
};

export default App;
