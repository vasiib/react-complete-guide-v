import React, { Component} from 'react';
import './App.css';
import Person from './Person/Person' ;


class App extends Component {
  
  render() {
    return(
      <div className="App">
        <h1>Hello new lappy ,start with REACT</h1>
        <p>Only one root element is allowed in JSX</p>
        <Person />
      </div>
    );
  }
}

export default App;
