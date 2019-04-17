import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import cards from './cards.json';
import Header from './components/Header';
import Footer from './components/Footer';
import Loser from './components/Loser'
import Win from './components/Win';

class App extends Component {

  state = {
    cardsArray: cards,
    score: 0,
    highscore: 0,
    lost: false,
    used: [],
    unused: [],
    win: false
  };

  lostGame() {
    this.setState({
      used: [], score: 0, lost: true
    })
  }

  clicked = id => {
    if (this.state.used.indexOf(id) !== -1) {
      this.lostGame();
    } else {
      let usedCardArray = this.state.used;
      usedCardArray.push(id);
      this.setState({ used: usedCardArray, score: this.state.score + 1, lost: false })
      if (this.state.highscore <= this.state.score) {
        this.setState({ highscore: this.state.score + 1 })
        console.log(this.state.score);
        console.log(this.state.highscore);
      }
    }
  }


  random() {
    let randomCardArray = [...cards];
    for (let i = randomCardArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = randomCardArray[i];
      randomCardArray[i] = randomCardArray[j];
      randomCardArray[j] = temp;
    };
    return randomCardArray;
  };

  render() {
    const randomArray = this.random();
    if (this.state.lost) {
      return <Loser />
    } 
    if (this.state.win) {
      return <Win />
    }
    return (
      <div className="backgroundImg">
        <Header score={this.state.score} highscore={this.state.highscore}>SpongeBob ClickPants</Header>
        <div className="row">
          {randomArray.map(card => {
            return (<Card
              clicked={this.clicked}
              id={card.id}
              key={card.id}
              image={card.image}
            />);
          })}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
