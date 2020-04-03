import React, { Component} from 'react';
import './App.css';
import Person from './Person/Person' ;


class App extends Component {
  state = {
    persons : [
      {name : 'vaseem',age : 24},
      {name : 'Jyo', age : 24}
    ],
    otherState : 'some other value' 
  }

  

  switchNameHandler = () => {
    
    this.setState(
      {
        persons : [
          {name : 'Basha',age : 24},
          {name : 'Bujji', age : 24}
        ]
      }
    );
    console.log(this.state);
  }

  render() {
    return(
      <div className="App">
        <h1>Hello new lappy, start with REACT</h1>
        <p>Only one root element is allowed in JSX</p>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies are : Programming</Person>
        <button onClick={this.switchNameHandler}>Switch Name</button>
      </div>
    );
  }
}

export default App;
