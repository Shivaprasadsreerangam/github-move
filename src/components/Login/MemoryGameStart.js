import React from "react";
import Images from "./Images";

class MemoryGameStart extends React.Component {
  render() {
    return (
      
      <div className="game">
        <h1>Game start</h1>
        <Images endGame={this.props.endGame} />
      </div>
    );
  }
}

export default MemoryGameStart;