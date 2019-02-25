import _ from "lodash";
import React, { Component } from 'react';
import './App.css';
import RowContainer from "./Components/rowContainer"

class App extends Component {

  state = {
    rows: [{ id: 1, name: "Row 1"}]
  };

  addRow = () => {
    const rowCount = this.state.rows.length;
    const newRows = [
      ...this.state.rows,
      { id: rowCount + 1, name: `Row ${rowCount}` }
    ];

    this.setState({ rows: newRows });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.addRow}>Add row</button>
          {this.renderRows()}
        </header>
      </div>
    );
  }

  renderRows = () => {
    return _.map(this.state.rows, ((item) => (
      <RowContainer key={item.id} name={item.name}/>
    )))
  };
}

export default App;
