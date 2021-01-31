import React from 'react';
import { GlobalStyle } from './assets/styles/GlobalStyle';

import Header from './components/elements/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
