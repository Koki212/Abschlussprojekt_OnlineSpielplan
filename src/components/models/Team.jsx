class Team {
    constructor({
        TeamId,
        TeamName,
        GamesPlayed,
        GamesWon,
        GamesDraw,
        GamesLost,
        GoalsScored,
        GoalsConceded,
        Points,
        CompetitionId,
    } = {}) {
        this.TeamId = TeamId || "";
        this.TeamName = TeamName || "";
        this.GamesPlayed = GamesPlayed || 0;
        this.GamesWon = GamesWon || 0;
        this.GamesDraw = GamesDraw || 0;
        this.GamesLost = GamesLost || 0;
        this.GoalsScored = GoalsScored || 0;
        this.GoalsConceded = GoalsConceded || 0;
        this.Points = Points || 0;
        this.CompetitionId = CompetitionId;
    }
}

export default Team;
