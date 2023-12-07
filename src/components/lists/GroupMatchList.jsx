// importing React
import React, { useEffect } from "react";
// importing react-router-dom
import { useParams } from "react-router-dom";
// importing components from MUI
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
// importing PropTypes from MUI
import PropTypes from "prop-types";
// importing project components
import { MatchDialog } from "../dialogs/MatchDialog";
import Team from "../models/Team";

export function GroupMatchList(props) {
    const { dataPartition, scoreTeam1, scoreTeam2 } = props;
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState("");
    const [selectedTeams, setSelectedTeams] = React.useState([]);

    const handleClickOpenDialog = (teamA, teamB) => {
        setSelectedTeams([teamA, teamB]);
        setOpen(true);
    };

    const handleCloseDialog = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    console.log("scoreTeam1: " + scoreTeam1, "scoreTeam2: " + scoreTeam2);

    let { competitionId } = useParams();
    // API Endpoint
    const API_ENDPOINT_GetTeamsByCompetitionId =
        "http://localhost:5285/api/team/GetAllTeamsByCompetitionId?id=" +
        competitionId;
    const [TeamData, setTeamData] = React.useState([]);

    useEffect(() => {
        // function to get data from backend
        function getDataFromBackend() {
            fetch(API_ENDPOINT_GetTeamsByCompetitionId, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error("Fehler beim Abrufen der Daten");
                    }
                })
                .then((data) => {
                    Team.TeamId = data.TeamId;
                    Team.TeamName = data.TeamName;
                    Team.GamesPlayed = data.GamesPlayed;
                    Team.GamesWon = data.GamesWon;
                    Team.GamesDraw = data.GamesDraw;
                    Team.GamesLost = data.GamesLost;
                    Team.GoalsScored = data.GoalsScored;
                    Team.GoalsConceded = data.GoalsConceded;
                    Team.Points = data.Points;
                    setTeamData(data);
                    const sortedData = data.slice(...dataPartition);
                    setTeamData(sortedData);
                })
                .catch((error) => {
                    console.error("Fehler beim Abrufen der Daten:", error);
                });
        }

        getDataFromBackend();
    }, [dataPartition, API_ENDPOINT_GetTeamsByCompetitionId]);

    const pairings = [];
    for (let i = 0; i < TeamData.length; i++) {
        for (let j = i + 1; j < TeamData.length; j++) {
            pairings.push([i, j]);
        }
    }

    console.log("PAIRINGS", pairings, TeamData);

    return (
        <>
            <List>
                {pairings.map(([a, b]) => (
                    <ListItemButton
                        onClick={() => handleClickOpenDialog(a, b)}
                        key={`${a}-${b}`}
                    >
                        {/*TeamData[a]?.TeamName + " vs " + TeamData[b]?.TeamName*/}
                        {TeamData[a]?.TeamName +
                            " " +
                            scoreTeam1 +
                            " " +
                            " : " +
                            " " +
                            scoreTeam2 +
                            " " +
                            TeamData[b]?.TeamName}
                    </ListItemButton>
                ))}
                <MatchDialog
                    selectedValue={selectedValue}
                    selectedTeams={selectedTeams}
                    TeamData={TeamData}
                    open={open}
                    onClose={handleCloseDialog}
                    scoreTeam1={scoreTeam1}
                    scoreTeam2={scoreTeam2}
                />
            </List>
        </>
    );
}

GroupMatchList.propTypes = {
    dataPartition: PropTypes.array.isRequired,
    scoreTeam1: PropTypes.number.isRequired,
    scoreTeam2: PropTypes.number.isRequired,
};
