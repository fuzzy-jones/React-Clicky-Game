import React, { Component }  from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Characters from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";


class App extends Component {

  state = {
    characters
  };

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Wrapper>
          {this.state.characters.map(character => (
            <Characters 
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
            />
          ))}
        </Wrapper>
      </div>
    )
  }
}

export default App;


