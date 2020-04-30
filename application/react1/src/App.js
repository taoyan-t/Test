import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './components/home/home'
import './App.css'
import About from './components/about'


export default function App () {
  return (
    <div className="App">
      <Router basename={window.__POWERED_BY_QIANKUN__ ? '/react1' : '/'}>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
      <header>
        <h1 className='nav'>react</h1>
      </header>
    </div>
  )
}


