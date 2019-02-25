import _ from "lodash";
import React from "react";

class InputBox extends React.Component {

    static defaultProps = {
      handleUpdate: _.noop,
      // value: "",
    };

    render() {
        return(
          <span>
            <input
              type="text"
              name="inputField"
              onChange={this.handleChange.bind(this)}
              // value={this.props.value}
            />
          </span>
        )
    }

    handleChange(event) {
        this.props.handleUpdate(event.target.value);
    }
}

export default InputBox;
