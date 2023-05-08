//randomly returns 'Rock', 'Paper', or 'Scissors'
function getComputerChoice()    {
    let computerChoices = ["rock", "paper", "scissors"];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)]
}

function playRound(playerSelection, computerSelection)    {
    playerSelection = "rock";
    computerSelection = getComputerChoice();
    
    if 
        ((computerSelection === "scissors" && playerSelection.toLowerCase() === "rock") ||
        (computerSelection === "rock" && playerSelection.toLowerCase() === "paper") ||
        (computerSelection === "paper" && playerSelection.toLowerCase() === "scissors"))    {
        
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else if 
        ((computerSelection === "scissors" && playerSelection.toLowerCase() === "rock") ||
        (computerSelection === "rock" && playerSelection.toLowerCase() === "paper") ||
        (computerSelection === "paper" && playerSelection.toLowerCase() === "scissors"))    {
        
        return "It's a tie! You both chose " + playerSelection;
    }

    else    {
        return "You lose! " + computerSelection + " beats " + playerSelection;
}

}

playerSelection = "rock";
computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));