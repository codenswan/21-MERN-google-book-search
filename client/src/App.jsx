import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Saved from './pages/Saved.jsx';
import Search from './pages/Search';
// import NoMatch from "./pages/NoMatch"
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={'/search'}>
            <Search />
          </Route>
          <Route exact path={['/', '/saved']}>
            <Saved />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
