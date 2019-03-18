import React from "react";
import css from "./quotebox.css";

const QuoteBox = props => {
  return (
    <div className="App">
      <div style={css.quotebox} className="quote-box">
        <div className="quote">Mountains are there to be climbed</div>
        <div className="author">Ole Gunnar Solskjaer</div>
      </div>
    </div>
  );
};

export default QuoteBox;
