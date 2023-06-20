import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import DiceImage1 from "./images/Dice1.jpg";
import DiceImage2 from "./images/Dice2.jpg";
import DiceImage3 from "./images/Dice3.jpg";
import DiceImage4 from "./images/Dice4.jpg";
import DiceImage5 from "./images/Dice5.jpg";
import DiceImage6 from "./images/Dice6.jpg";





function App() 
{
    var diceImages = [
      DiceImage1,
      DiceImage2,
      DiceImage3,
      DiceImage4,
      DiceImage5,
      DiceImage6
    ]

    const [image, setNewImage] = useState(diceImages[0])
    const [image2, setNewImage2] = useState(diceImages[1])

    const rollDice = () => {
      //Generate random number
      var randomNum1 = Math.floor(Math.random () * 6);
      var randomNum2 = Math.floor(Math.random () * 6); 

      setNewImage(diceImages [randomNum1]);
      setNewImage2(diceImages [randomNum2]);
    }

  return (
    <div className="App">
      <center>
        <h1>Just play the game</h1>
        <div className='container'>
        <img className='square' src={image}></img>
        <div style={{width: '5px', display: 'inline-block'}}></div>
        <img className='square' src={image2}></img>
        </div>
        <button type="button" class="btn btn-outline-primary" onClick={rollDice}>rollDice</button>
      </center>

    </div>
  );
}

export default App;
