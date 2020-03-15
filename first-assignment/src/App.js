import React, { Component } from 'react';
import './App.css';
import UserInput from './userInput';
import UserOutput from './userOutput';

class App extends Component{
  state = {
    userName: 'Mussum'
  }

  userInputHandler = (event) =>{
    this.setState({
      userName: event.target.value
    })
  }

  render(){
    return(
      <div>
        <UserInput changed={this.userInputHandler} name={this.state.userName} />
        <UserOutput username={this.state.userName}/>
        <UserOutput username={this.state.userName}/>
      </div>      
    )          
  }
}

export default App;
