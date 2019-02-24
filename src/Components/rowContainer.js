import React from "react";
import InputBox from "./inputBox";
import ResultDisplay from "./resultDisplay";
import mathParser from "../Helpers/mathParser";

class RowContainer extends React.Component {
  static defaultProps = {
    inputValue: 0,
  };

  state = {
    inputValue: this.props.inputValue,
    recalculate: false,
    currentValue: 0,
  };

  render () {
    return (
      <form>
        <InputBox handleUpdate={this.setInputValue}/>
        <input
          type="submit"
          value="Calculate"
          onClick={this.handleSubmit.bind(this)}
        />
        <ResultDisplay value={this.state.currentValue} />
      </form>
    )
  }

  setInputValue = (newValue) => {
    this.setState({inputValue: newValue});
  };

  handleSubmit(event) {
    const calculatedValue = this.calculateValue(this.state.inputValue);
    this.updateCurrentValue(calculatedValue);
    event.preventDefault();
  };

  updateCurrentValue = (newValue) => {
    this.setState({currentValue: newValue});
  };

  calculateValue = (inputValue) => {
    return mathParser(inputValue);
  };
}

export default RowContainer;
