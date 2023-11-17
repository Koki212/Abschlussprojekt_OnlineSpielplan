class CompetitionModel {
    constructor({ CompetitionId, CompetitionName } = {}) {
        this.CompetitionId = CompetitionId;
        this.CompetitionName = CompetitionName || "";
        //this.Teams = [];
    }
}

export default CompetitionModel;
