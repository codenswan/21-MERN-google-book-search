import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Banner from './components/Banner.jsx';
import Saved from './pages/Saved.jsx';
import Search from './pages/Search';
import NoMatch from "./pages/NoMatch"
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <Banner />
        <Switch>
          <Route exact path={'/search'}>
            <Search />
          </Route>
          <Route exact path={['/', '/saved']}>
            <Saved />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
