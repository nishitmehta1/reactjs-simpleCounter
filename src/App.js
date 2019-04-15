import React, { Component } from 'react';
import Button from './components/Button.js';
import Display from './components/Display.js';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }

  add = () => {
    this.setState({
      count: this.state.count + 1
    })
  };
  
  reset = () => {
    this.setState({
      count: 0
    })
  };

  sub = () => {
    this.setState({
      count: this.state.count - 1
    })
  };
  
  render() {
    return (
      <div className="App">
        <div className="clicker">
          <div className="row">
            <Display>{this.state.count}</Display>
          </div>
          <div className="row">
            <Button handleClick = {this.add}>+</Button>
            <Button handleClick = {this.reset}></Button>
            <Button handleClick = {this.sub}>-</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
