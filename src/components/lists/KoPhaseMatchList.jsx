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

export function KoPhaseMatchList(props) {
    const { scoreTeam1, scoreTeam2 } = props;
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState("");
    const [selectedTeams, setSelectedTeams] = React.useState([]);
    const [matchResults, setMatchResults] = React.useState([]);

    const handleClickOpenDialog = (teamA, teamB) => {
        setSelectedTeams([teamA, teamB]);
        setOpen(true);
    };

    const handleCloseDialog = (value, scoreTeam1, scoreTeam2) => {
        setOpen(false);
        setSelectedValue(value);
        setMatchResults((prevResults) => ({
            ...prevResults,
            [`${selectedTeams[0]}-${selectedTeams[1]}`]: `${
                TeamData[selectedTeams[0]]?.TeamName
            } ${scoreTeam1} : ${scoreTeam2} ${
                TeamData[selectedTeams[1]]?.TeamName
            }`,
        }));
    };

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
                })
                .catch((error) => {
                    console.error("Fehler beim Abrufen der Daten:", error);
                });
        }

        getDataFromBackend();
    }, [API_ENDPOINT_GetTeamsByCompetitionId]);

    const winnersGroupA = [];
    TeamData.slice(0, 4)
        .sort((a, b) => b.Points - a.Points)
        .forEach((element) => {
            winnersGroupA.push(TeamData.indexOf(element));
        });
    const winnersGroupB = [];
    TeamData.slice(4, 8)
        .sort((a, b) => b.Points - a.Points)
        .forEach((element) => {
            winnersGroupB.push(TeamData.indexOf(element));
        });
    const winnersGroupC = [];
    TeamData.slice(8, 12)
        .sort((a, b) => b.Points - a.Points)
        .forEach((element) => {
            winnersGroupC.push(TeamData.indexOf(element));
        });
    const winnersGroupD = [];
    TeamData.slice(12, 16)
        .sort((a, b) => b.Points - a.Points)
        .forEach((element) => {
            winnersGroupD.push(TeamData.indexOf(element));
        });

    console.log(
        "WINNERS",
        winnersGroupA,
        winnersGroupB,
        winnersGroupC,
        winnersGroupD
    );

    const pairingsQuarterFinals = [
        //first of group A vs second of group B
        [winnersGroupA[0], winnersGroupB[1]],
        //first of group B vs second of group A
        [winnersGroupB[0], winnersGroupA[1]],
        //first of group C vs second of group D
        [winnersGroupC[0], winnersGroupD[1]],
        //first of group D vs second of group C
        [winnersGroupD[0], winnersGroupC[1]],
    ];

    console.log("PAIRINGS", pairingsQuarterFinals, TeamData);

    return (
        <>
            <List>
                {pairingsQuarterFinals.map(([a, b]) => (
                    <ListItemButton
                        onClick={() => handleClickOpenDialog(a, b)}
                        key={`${a}-${b}`}
                    >
                        {matchResults[`${a}-${b}`] ||
                            `${TeamData[a]?.TeamName} vs ${TeamData[b]?.TeamName}`}
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

KoPhaseMatchList.propTypes = {
    dataPartition: PropTypes.array.isRequired,
    scoreTeam1: PropTypes.number.isRequired,
    scoreTeam2: PropTypes.number.isRequired,
};
