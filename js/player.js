class Player
{
    constructor(player_name, score) 
    {
        this.player_name = player_name;
        this.score = score;
    }

    get_name() {
        return this.player_name;
    }

    get_score() {
        return this.score;
    }

    increment_score() {
        this.score += 1;
    }
}