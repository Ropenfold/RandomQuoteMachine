import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: []
    };
  }
  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then(data => data.json())
      .then(res => this.setState({ quotes: res.quotes }));
    //console.log(quotes);
  }

  render() {
    //console.log(this.state.quotes[0]);
    const random = this.state.quotes[
      Math.floor(Math.random() * this.state.quotes.length)
    ];
    console.log(random);
    return (
      <div>
        {this.state.quotes.map(i => (
          <div>
            {i.quote} - by {i.author}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
