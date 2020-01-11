player = new Player("player", 0);
computer = new Player("computer", 0);

function load_listeners() 
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

    document.getElementById("jumbotron").addEventListener("click", function() {
        window.location.reload(false);
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
    let result_key =
    {
        0: "LOSS",
        1: "WIN",
        2: "DRAW"
    };

    let color_key = 
    {
        0: "bg-danger",
        1: "bg-primary",
        2: "bg-warning"
    };

    let results = document.getElementById("results");
    let result_text = `<p class='${color_key[result]} m-0'>${result_key[result]} The player chose ${player_selection} and the computer chose ${computer_selection}</p>`;
    
    let player_score_bar = document.getElementById("player_score_bar");
    let computer_score_bar = document.getElementById("computer_score_bar");

    if (result_key[result] == "WIN") 
    {
        player.increment_score();
        player_score_bar.style.width = player.get_score() * 10 + "%";
        player_score_bar.innerHTML = "Score: " + player.get_score();
        player_score_bar.classList.add("bg-primary");
    }
    else if (result_key[result] == "LOSS") 
    {
        computer.increment_score();
        computer_score_bar.style.width = computer.get_score() * 10 + "%";
        computer_score_bar.innerHTML = "Score: " + computer.get_score();
        computer_score_bar.classList.add("bg-danger");
    }

    results.innerHTML = result_text + results.innerHTML;

    if (player.get_score() === 10) 
    {
        alert("You won the match!");
        window.location.reload(false);
    } 
    else if (computer.get_score() === 10) 
    {
        alert("You lost the match!");
        window.location.reload(false);
    }
}

load_listeners();