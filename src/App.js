import React, { Component } from 'react';
import './App.css';
import RowContainer from "./Components/rowContainer"

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <RowContainer />
        </header>
      </div>
    );
  }
}

export default App;
