import React from "react";
import InputBox from "./inputBox";
import ResultDisplay from "./resultDisplay";
import mathParser from "../Helpers/mathParser";

class RowContainer extends React.Component {

  state = {
    inputValue: this.props.inputValue,
    recalculate: false,
    currentValue: 0,
    stringValue: "",
  };

  render () {
    return (
      <form>
        <InputBox handleUpdate={this.setInputValue} value={this.state.stringValue}/>
        <input
          type="submit"
          value="Calculate"
          onClick={this.handleSubmit.bind(this)}
        />
        <ResultDisplay value={this.state.currentValue} />
        <br/>
        <ResultDisplay value={this.state.stringValue} />
      </form>
    )
  }

  setInputValue = (newValue) => {
    this.setState({inputValue: newValue});
  };

  handleSubmit(event) {
    const calculatedValue = this.calculateValue(this.state.inputValue);
    this.updateCurrentValue(calculatedValue);
    this.updateStringValue(this.state.inputValue, calculatedValue);
    event.preventDefault();
  };

  updateCurrentValue = (newValue) => {
    this.setState({currentValue: newValue});
  };

  calculateValue = (inputValue) => {
    return mathParser(inputValue);
  };

  updateStringValue(inputValue, calculatedValue) {
    const stringValue = inputValue + " = " + calculatedValue.toString();
    this.setState( {stringValue});
  };
}

export default RowContainer;
