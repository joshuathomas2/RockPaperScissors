function main() 
{
    rockButton = document.getElementById("rock");
    paperButton = document.getElementById("paper");
    scissorsButton = document.getElementById("scissors");
    
    rockButton.addEventListener("click", function() {
        run_game("rock");
    });

    paperButton.addEventListener("click", function() {
        run_game("paper");
    });

    scissorsButton.addEventListener("click", function() {
        run_game("scissors");
    });
}

function run_game(player_selection) 
{
    let selection_key = 
    {
        1: "rock",
        2: "paper",
        3: "scissors"
    };

    results = document.getElementById("results");

    let computer_selection = selection_key[Math.floor((Math.random() * 3) + 1)];

    console.log("PLAYER:", player_selection, "COMPUTER:", computer_selection);

    if (computer_selection === player_selection)
    {
        console.log("DRAW");
    } 
    else if (computer_selection === "rock" && player_selection === "paper") 
    {
        console.log("WIN");
    }
    else if (computer_selection === "rock" && player_selection === "scissors")
    {
        console.log("LOSE");
    }
    else if (computer_selection === "paper" && player_selection === "rock")
    {
        console.log("LOSE");
    }
    else if (computer_selection === "paper" && player_selection === "scissors") 
    {
        console.log("WIN");
    }
    else if (computer_selection === "scissors" && player_selection === "rock") 
    {
        console.log("WIN");
    }
    else if (computer_selection === "scissors" && player_selection === "paper") 
    {
        console.log("LOSE");
    }




    
}

main();