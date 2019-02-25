import _ from "lodash";
import React from "react";
import RowContainer from "./rowContainer"

class RowsContainer extends React.Component {
  state = {
    rows: [{id: 1, name: "Row 1"}]
  };

  render(){
    return (
      <div className="rowsContainer">
        <button onClick={this.addRow}>Add row</button>
        {this.renderRows()}
      </div>
    )
  }

  renderRows = () => {
    return _.map(this.state.rows, ((item) => (
      <RowContainer key={item.id} name={item.name}/>
    )))
  };

  addRow = () => {
    const rowCount = this.state.rows.length;
    const newRows = [
      ...this.state.rows,
      {id: rowCount + 1, name: `Row ${rowCount}`}
    ];

    this.setState({rows: newRows});
  };
}

export default RowsContainer
