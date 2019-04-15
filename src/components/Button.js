import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    return (
      <div className={`Button ${(this.props.children)==="+"? "green fa fa-plus":(this.props.children)==="-"? "red fa fa-minus":"orange refresh-img fa fa-refresh"}`} onClick={() => this.props.handleClick()}>
      </div>
    );
  }
}

export default Button;