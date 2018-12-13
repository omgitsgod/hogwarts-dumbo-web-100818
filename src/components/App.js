import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Pig from './Pig'
import PigIndex from './PigIndex'


class App extends Component {


  render() {
    return (
      <div className="App">
          < Nav />
          <PigIndex hogs={hogs} />
      </div>
    )
  }
}

export default App;
