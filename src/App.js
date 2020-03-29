import React, { Component} from 'react';
import './App.css';
import Person from './Person/Person' ;


class App extends Component {
  state = {
    persons : [
      {name : 'vaseem',age : 24},
      {name : 'Basha', age : 24}
    ]
  }

  render() {
    return(
      <div className="App">
        <h1>Hello new lappy, start with REACT</h1>
        <p>Only one root element is allowed in JSX</p>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies are : Programming</Person>
      </div>
    );
  }
}

export default App;
