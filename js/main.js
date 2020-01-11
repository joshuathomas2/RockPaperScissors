function main() 
{
    document.getElementById("rock").addEventListener("click", function() {
        run_game("rock");
    });

    document.getElementById("paper").addEventListener("click", function() {
        run_game("paper");
    });

    document.getElementById("scissors").addEventListener("click", function() {
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

    let computer_selection = selection_key[Math.floor((Math.random() * 3) + 1)];

    if (computer_selection === player_selection)
    {
        add_result(2, computer_selection, player_selection);
    } 
    else if (computer_selection === "rock" && player_selection === "paper") 
    {
        add_result(1, computer_selection, player_selection);
    }
    else if (computer_selection === "rock" && player_selection === "scissors")
    {
        add_result(0, computer_selection, player_selection);
    }
    else if (computer_selection === "paper" && player_selection === "rock")
    {
        add_result(0, computer_selection, player_selection);
    }
    else if (computer_selection === "paper" && player_selection === "scissors") 
    {
        add_result(1, computer_selection, player_selection);
    }
    else if (computer_selection === "scissors" && player_selection === "rock") 
    {
        add_result(1, computer_selection, player_selection);
    }
    else if (computer_selection === "scissors" && player_selection === "paper") 
    {
        add_result(0, computer_selection, player_selection);
    }

}

function add_result(result, computer_selection, player_selection)
{
    result_key =
    {
        0: "LOSE",
        1: "WIN",
        2: "DRAW"
    };

    color_key = 
    {
        0: "bg-danger",
        1: "bg-primary",
        2: "bg-warning"
    };

    results = document.getElementById("results");

    result_text = `<p class='${color_key[result]} m-0'>${result_key[result]} The player chose ${player_selection} and the computer chose ${computer_selection}</p>`;

    results.innerHTML = result_text + results.innerHTML;
}

main();