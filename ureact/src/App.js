import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Comp/Person'

class App extends Component{
  state = {
    persons: [
      {name: 'Juan', age: '41'},
      {name: 'Pla', age: '42'}
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        {name: 'Juan Pla', age: '41'},
        {name: 'Pla Juan', age: '42'}
      ]
    })
  }


  render(){
    return (
      <div className="App">
        <h1>Hi, I am a React APP</h1>
        <p>This is really working fine </p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >Hobby: Shooting</Person>      
      </div>
    );
  }

}

/*
function App() {
  return (
    <div className="App">
      <h1>Hi, I am a React APP</h1>
      <p>This is really working</p>
      <Person name="Juan" age="41" />
      <Person name="Pla" age="42" >Hobby: Shooting</Person>      
    </div>
  );
}
*/
export default App;
