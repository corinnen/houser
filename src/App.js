import React, { Component } from 'react';
import route from './route'
import Header from './component/Header/Header';
import {Link} from 'react-router-dom'


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div><Header /></div>
        <div>
          <ul>
            <Link to='/'>Dashboard</Link>
            {/* <Link to='/wizard'>Cancel</Link> */}
          </ul>
        </div>
        {route}
      </div>
    );
  }
}

export default App;
