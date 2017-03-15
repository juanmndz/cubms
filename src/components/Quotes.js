import React from 'react';
const styles = {}

styles.correct = "text-success"
styles.wrong = "text-danger"


const Quotes = ({inputMessage, quotes}) => {
  let strSplitQuote = quotes[0].split("");
  let strSplitMessage = inputMessage.split("");
  const letterChecker = strSplitQuote.map((letter, index) => {
    const isActive = strSplitQuote[index] === strSplitMessage[index]
    const style = isActive ? styles.correct : styles.wrong

    return (
      <span key={index}  className={style}>
        {letter}
      </span>
    )
  })
  return (
    <div className="col-md-12 text-center">
      <h6>{letterChecker}</h6>
      <small>- by <cite>A Tales of Two City</cite></small>
    </div>
  );
};

export default Quotes;
