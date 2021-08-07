import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import { createBrowserHistory } from 'history'
import Header from './header/Header';
import Comment from './comment/Comment'
import About from './about/About';
import Introduction from './Introduction/Introduction';
import News from './news/News';
import Meet from './meet/Meet';
import Carousel_custom from './carousel/Carousel';
import Footer from './footer/Footer';
import Login from './login/Login';




const newHistory = createBrowserHistory();

function App() {
  return (
        <Router history={newHistory}>
        <div className="App">
          <Switch>

            <Route path='/login'>
              <Login />
            </Route>
            
            <Route path='/' exact>
              <Header />
              <Comment />
              <About />
              <Meet />
              <Introduction />
              <News />
              <Carousel_custom />
              <Footer />
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
