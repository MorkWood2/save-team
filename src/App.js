import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/pages/Home';
import Photos from './components/pages/Photos';
import Testimonials from './components/pages/Testimonials';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/testimonials' component={Testimonials} />
          <Route exact path='/photos' component={Photos} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
