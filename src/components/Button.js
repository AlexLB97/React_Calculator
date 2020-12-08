import React, { Component } from 'react';

class Display extends Component {


    updateDisplay = () => {
        console.log(this.props.text);
      }
    render () {
        const {text} = this.props;
        return(
            
            <button className = {this.props.classes} text = {text} onClick = {() => this.props.getButton(text)}>{text}</button>
        )
    }
}

export default Display;