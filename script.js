//randomly returns 'Rock', 'Paper', or 'Scissors'
function getComputerChoice()    {
    let computerChoices = ["rock", "paper", "scissors"];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)]
}


let playerScore;
let computerScore;
let computerSelection;
let playerSelection;

game();

function game() {
  playerScore = 0;
  computerScore = 0;

  //5 total rounds
  for (let i = 0; i < 5; i++) {
     userInput();
  }
  console.log(theWinnerIs());
  
  //call the function to declare who the winner is; best out of 5 rounds
  function theWinnerIs()  {
      if (playerScore > computerScore)    {
        alert("You won! " + playerScore + " : " + computerScore);
        return "You won! " + playerScore + " : " + computerScore;
      }

      else if (computerScore > playerScore)    {
        alert("You lost! " + playerScore + " : " + computerScore);
        return "You lost! " + playerScore + " : " + computerScore;

      }
      else {
        alert("You tied!");
        return "You tied!";
      }
  }
}

function userInput()  {
  playerSelection = prompt("Choose: Rock/Paper/Scissors");
  
  //if user types anything other than the 3 options, alert will appear and will again prompt
  if ((playerSelection.toLowerCase() == "rock") ||
      (playerSelection.toLowerCase() == "paper") ||
      (playerSelection.toLowerCase() == "scissors"))  {
    console.log(playRound(playerSelection, computerSelection));
  }
  else  {
    alert("Not a valid entry. Please choose Rock/Paper/Scissors");
    userInput();
  }
}

function playRound(playerSelection, computerSelection)    {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();
  
    if (computerSelection == playerSelection) {
      alert("It's a tie! You both chose " + playerSelection + ". Current Score: Player: " + playerScore + ", Computer: " + computerScore);
      return "It's a tie! You both chose " + playerSelection + ". Current Score: Player: " + playerScore + ", Computer: " + computerScore;
    }
    else if ((computerSelection == "rock" && playerSelection == "scissors") ||
              (computerSelection == "paper" && playerSelection == "rock") ||
              (computerSelection == "scissors" && playerSelection == "paper")){
      computerScore++;
      alert("You lose! " + computerSelection + " beats " + playerSelection + ". Current Score: Player: " + playerScore + ", Computer: " + computerScore);
      return "You lose! " + computerSelection + " beats " + playerSelection + ". Current Score: Player: " + playerScore + ", Computer: " + computerScore;
    }
    else  {
      playerScore++;
      alert("You win! " + playerSelection + " beats " + computerSelection + ". Current Score: Player: " + playerScore + ", Computer: " + computerScore);
      return "You win! " + playerSelection + " beats " + computerSelection + ". Current Score: Player: " + playerScore + ", Computer: " + computerScore; 
    }   
}