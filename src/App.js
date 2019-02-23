import React, { Component } from 'react';
import './App.css';
import InputBox from "./Components/inputBox.js";
import mathParser from "./Helpers/mathParser";

class App extends Component {

  static defaultProps = {
    inputValue: 0,
  };

  state = {
    inputValue: this.props.inputValue,
    displayValue: this.props.inputValue,
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form>
            <InputBox handleUpdate={this.setInputValue}/>
            <input
              type="submit"
              value="Calculate"
              onClick={this.handleSubmit.bind(this)}
            />
            {this.state.displayValue}
          </form>
        </header>
      </div>
    );
  }

  setInputValue = (newValue) => {
    this.setState({inputValue: newValue});
  };

  handleSubmit(event) {
    this.calculateValue();
    event.preventDefault();
  }

  calculateValue = () => {
    const displayValue = mathParser(this.state.inputValue);
    this.setState({displayValue});
  };
}

// TODO: extract what we have into a rowContainer

export default App;
