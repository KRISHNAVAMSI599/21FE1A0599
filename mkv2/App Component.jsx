// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductListPage from './components/ProductListPage';
import ProductDetailPage from './components/ProductDetailPage';
import './App.css';  // Importing CSS for global styles

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ProductListPage} />
        <Route path="/products/:productId" component={ProductDetailPage} />
      </Switch>
    </Router>
  );
};

export default App;
