import React from 'react';
import { Router } from '@reach/router';

import { GlobalStyle } from './assets/styles/GlobalStyle';

import Header from './components/elements/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Home path="/"/>
        <Movie path="/:movieId"/>
        <NotFound default/>
      </Router>
      <GlobalStyle/>
    </div>
  );
}

export default App;
