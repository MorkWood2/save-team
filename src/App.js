import React from 'react';
import { Header } from './components/Header';
import { Quote } from './components/Quote';
import { Content } from './components/Content';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Quote />
      <Content />
    </div>
  );
}

export default App;
