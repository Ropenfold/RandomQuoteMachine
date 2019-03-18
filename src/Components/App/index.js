import React, { Component } from "react";
import "./App.css";
import QuoteBox from "../QuoteBox";

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuoteBox className="quotebox" />
      </div>
    );
  }
}

export default App;
