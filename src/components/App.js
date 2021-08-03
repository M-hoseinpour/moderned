import React from 'react';
import { Router, Switch, Route } from 'react-router';
import './App.css';
import { createBrowserHistory } from 'history'
import Header from './header/Header';
import Comment from './comment/Comment'
import About from './about/About';
import Introduction from './Introduction/Introduction';
import News from './news/News';
import Meet from './meet/Meet';




const newHistory = createBrowserHistory();

function App() {
  return (
        <Router history={newHistory}>
        <div className="App">
          <Switch>

            <Route path='/login'>
              <h1>you came to login congrats!!!</h1>
            </Route>

            <Route path='/' exact>
              <Header />
              <Comment />
              <About />
              <Meet />
              <Introduction />
              <News /> 
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
