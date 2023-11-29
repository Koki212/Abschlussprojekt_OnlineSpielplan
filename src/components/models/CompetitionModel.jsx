class CompetitionModel {
    constructor({ CompetitionId, CompetitionName } = {}) {
        this.CompetitionId = CompetitionId;
        this.CompetitionName = CompetitionName || "";
    }
}

export default CompetitionModel;
