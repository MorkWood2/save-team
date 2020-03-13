import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Quote } from './components/Quote';
import { Content } from './components/Content';
import { Photos } from './components/pages/Photos';
import { Testimonials } from './components/pages/Testimonials';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Quote />
        <Content />
        <Switch>
          <Route exact path='/testimonials' component={Testimonials} />
          <Route exact path='/photos' component={Photos} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
