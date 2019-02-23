import React, { Component } from 'react';
import './App.css';
import InputBox from "./Components/inputBox.js";

class App extends Component {

  static defaultProps = {
    inputValue: 0,
  };

  state = {
    displayValue: this.props.inputValue,
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.displayValue}
          <InputBox handleUpdate={this.setInputValue}/>
        </header>
      </div>
    );
  }

  setInputValue = (newValue) => {
    this.setState({displayValue: newValue});
  }
}

export default App;
