import React from 'react';
import CharacterCard from './CharacterCard';
//import WordCard from './WordCard';
import './App.css'
import _ from 'lodash';

let message = 'Hello'

//const fn = () => {

//}
const prepareStateFromWord = (given_word) => {
  let word = given_word.toUpperCase() /*????????????? */
  let chars = _.shuffle(Array.from(word)) /*???????????? */
  return {
  word,
  chars,
  attempt: 1,
  guess: [],
  completed: false,
  restartGame: 1
  }
 }

class App extends React.Component {

  state = prepareStateFromWord(message);

  activationHandler = (c) => {
    let guess = [...this.state.guess, c]
    this.setState({ guess })
    if (guess.length === this.state.chars.length) {
      if(guess.join('').toString() === this.state.word){
        this.setState({guess: [], completed: true})
        }else{
        this.setState({guess: [], attempt: this.state.attempt + 1})
        }

   }}
   restartGame = () => {
    this.setState({
      restartGame: this.state.restartGame + 1,
      completed: !this.state.completed
    });
  };
   

    render(){
      return(
        <div className="App">
            <div className="App-header">
          {
            Array.from(this.state.chars).map((item, index) => 
                  <CharacterCard value={item} key={index}
                  attempt={this.state.attempt}
                  activationHandler= {this.activationHandler}
                  restartGame = {this.state.restartGame}/>

                  )
          }
          <h2 className = "card2">Selected</h2>
        {
          Array.from(this.state.guess).map((item, index) => (
            <CharacterCard
              value={item}
              key={index}
              activationHandler={this.activationHandler}
            />
          ))
        }
        <div className = "card2">Attemp {this.state.attempt}</div>
    
        {
          this.state.completed && <h4>Complete</h4>
        }
        {
          this.state.completed &&<button onClick={this.restartGame}>New Game</button>
        }

</div>
        </div>
      )
    }

     

}


export default App;