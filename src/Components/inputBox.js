import _ from "lodash";
import React from "react";

class InputBox extends React.Component {

    static defaultProps = {
        handleUpdate: _.noop,
    };

    handleChange(event) {
        this.props.handleUpdate(event.target.value);
    }

    render() {
        return(
          <span>
            <input
              type="text"
              name="inputField"
              onChange={this.handleChange.bind(this)}
            />
          </span>
        )
    }
}

export default InputBox;
