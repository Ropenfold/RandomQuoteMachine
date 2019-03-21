import React, { Component } from "react";
import "./App.css";
import QuoteBox from "../QuoteBox";

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
      .then(res =>
        this.setState({
          quotes: res.quotes
        })
      );
    //console.log("fetch request", quotes);
    //let random = this.getRandomQuote();
    //this.setState({ random });
  }

  getRandomQuote = () => {
    const random = this.state.quotes[
      Math.floor(Math.random() * this.state.quotes.length)
    ];
    console.log("console log in get random quote:", random);

    return random;
  };

  render() {
    //console.log(this.state.quotes[0]);

    return (
      <div>
        {this.state.quotes.map(i => (
          <div>
            {i.quote} - by {i.author}
          </div>
        ))}
        {/* {console.log("console log in render:", this.state.quotes.quote)}
        <span className="quote">{this.state.quotes.quote}</span>
        <span className="author">{this.state.quotes.author}</span> */}
      </div>
    );
  }
}

export default App;
