import React, { Component } from 'react';
import './App.css';
import RowsContainer from "./Components/rowsContainer";

class App extends Component {
  // TODO: add total of all rows
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <RowsContainer />
        </header>
      </div>
    );
  }
}

export default App;
