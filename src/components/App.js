import React from 'react';
import { Router, Switch, Route } from 'react-router';
import './App.css';
import Navbar from './header/Navbar';
import { createBrowserHistory } from 'history'
import Header from './header/Header';
import Comment from './comment/Comment'

const newHistory = createBrowserHistory();


function App() {
  return (
    <div className="App">
        <Router history={newHistory}>
        <div className="App">
          <Switch>
            <Route path='/login'>
              <h1>you came to login congrats!!!</h1>
            </Route>

            <Route path='/' exact>
              <Header />
              <Comment />
            </Route>
          </Switch>
        </div>
    </Router>
    </div>
  );
}

export default App;
