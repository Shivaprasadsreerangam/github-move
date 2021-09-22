import React from "react";
import Game from "./MemoryGameStart";
import EndGame from "./MemoryEndGame";

class MemoryGame_1 extends React.Component {
  state = {
    showLogin: true,
    showEndGame: false,
    name: "",
    score: 0,
  };

  handleLogin = (name, boolean) => {
    this.setState({ name: name, showLogin: boolean });
  };

  handleEndGame = (boolean) => {
    if (boolean) {
      this.setState({ showEndGame: boolean, score: this.state.score + 1 });
    } else {
      this.setState({ showEndGame: boolean });
    }
  };
  render() {
    const { showLogin, name, score, showEndGame } = this.state;
    return (
      <div>
        
        {showEndGame ? <EndGame newGame={this.handleEndGame} /> : null}
        <Game endGame={this.handleEndGame} />
      </div>
    );
  }
}

export default MemoryGame_1;