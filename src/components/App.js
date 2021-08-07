import React, { useEffect, useState } from 'react';
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
import { IMAGES } from "./Images"



const newHistory = createBrowserHistory();

function App() {
  
  const [imgsLoaded, setImgsLoaded] = useState(false)

  useEffect(() => {
    const loadImage = image => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = image.url
    
        loadImg.onload = () =>
          resolve(image.url)
            
        loadImg.onerror = err => reject(err)
      })
    }

    Promise.all(IMAGES.map(image => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch(err => console.log("Failed to load images", err))
  }, [])
  
  
  
  
  
  return (
        <Router history={newHistory}>
        <div className="App">
          <Switch>

            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/' exact>
            {imgsLoaded ? (
              <div>
                  <Header />
                  <Comment />
                  <About />
                  <Meet />
                  <Introduction />
                  <News />
                  <Carousel_custom />
                  <Footer />
              </div>
              ) : (
                <div className='loading'>
                  <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </div>
                )}
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
