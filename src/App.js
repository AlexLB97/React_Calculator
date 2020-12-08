import React, {Component} from 'react';
import Display from './components/Display';
import ButtonGroup from './components/ButtonGroup';
import './App.css';

class App extends Component {
  state = {
    result: ''
  };

  

  getButton = text => {
    const numberArray = ['1','2','3','4','5','6','7','8','9','0','+','-','/','*','.'];
    if (numberArray.includes(text)) {
      if(text === "." || text === "/" || text === "*" || text === "+" || text === "-") {
        if(this.state.result.includes(text)) {
          return;
        } else if (this.state.result.charAt(this.state.result.length-1) === "." || this.state.result.charAt(this.state.result.length-1) === "/" || this.state.result.charAt(this.state.result.length-1) === "*" || this.state.result.charAt(this.state.result.length-1) === "+" || this.state.result.charAt(this.state.result.length-1) === "-") {
          return;
        } else {
          this.updateDisplay(text);
          
        }
      } else {
        this.updateDisplay(text);
      }
    } else if (text === "=") {
      this.calculate();
    } else if(text === 'DEL') {
      this.delete();
    } else if (text === 'AC') {
      this.clear()
    }
    return;
}

  updateDisplay = text => {
    this.setState({result: this.state.result + text});
  }
  
  calculate = () => {
    this.setState({result: (eval(this.state.result)).toString()});
  }

  clear = () => {
    this.setState({result: ''});
  }

  delete = () => {
    this.setState({result: this.state.result.slice(0,-1)});
  }

  render () {
    return (
      <div className="container">
        <div className = "calculator">
          <Display result = {this.state.result} />
          <ButtonGroup getButton = {this.getButton}/>
          
      
        </div>

    </div>
    )
  }
}

export default App;
