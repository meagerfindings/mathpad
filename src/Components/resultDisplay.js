import React from "react";

class ResultDisplay extends React.Component {

  static defaultProps = {
    value: 0,
  };

  render () {
    return (
      this.props.value
    )
  }
}

export default ResultDisplay;
