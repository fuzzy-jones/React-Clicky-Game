import React, { Component }  from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Characters from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";

// Fisher–Yates Shuffle
function shuffle(array) {
  let copy = [], n = array.length, i;

  // While there remain elements to shuffle…
  while (n) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * array.length);

    // If not already shuffled, move it to the new array.
    if (i in array) {
      copy.push(array[i]);
      delete array[i];
      n--;
    }
  }

  return copy;
}


class App extends Component {

  state = {
    characters,
    score: 0,
    topScore: 0
  };

  clickedImage = id => {
    this.handleIncrement()
  }

  // handleIncrement increases this.state.score by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
  };

  // shuffle up images
  makeShuffle = () => {
    this.setState({ characters: shuffle(characters) })
  }
  

  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Jumbotron />
        <Wrapper>
          {this.state.characters.map(character => (
            <Characters 
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
              clickedImage={this.clickedImage}
            />
          ))}
        </Wrapper>
      </div>
    )
  }
}

export default App;


