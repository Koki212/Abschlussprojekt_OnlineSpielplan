// importing React
import { useEffect, useState } from "react";
// importing react-router-dom
import { useParams } from "react-router-dom";
// importing components from MUI
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";
// importing PropTypes from MUI
import PropTypes from "prop-types";
// importing project components
import { KoPhaseMatchDialog } from "../dialogs/KoPhaseMatchDialog";
import Team from "../models/Team";

export function KoPhaseMatchList(props) {
    const { scoreTeam1, scoreTeam2, penaltyTeam1, penaltyTeam2 } = props;
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");
    const [selectedTeams, setSelectedTeams] = useState([]);
    const [matchResults, setMatchResults] = useState([]);
    const [pairingsSemiFinals, setPairingsSemiFinals] = useState([]);
    const [pairingsFinal, setPairingsFinal] = useState([]);
    const [TeamData, setTeamData] = useState([]);

    let { competitionId } = useParams();
    // API Endpoint
    const API_ENDPOINT_GetTeamsByCompetitionId =
        "http://localhost:5285/api/team/GetAllTeamsByCompetitionId?id=" +
        competitionId;

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

    console.log("TEAMDATA", TeamData);

    const groupA = [];
    TeamData.slice(0, 4)
        .sort((a, b) => b.Points - a.Points)
        .forEach((element) => {
            groupA.push(TeamData.indexOf(element));
        });
    const groupB = [];
    TeamData.slice(4, 8)
        .sort((a, b) => b.Points - a.Points)
        .forEach((element) => {
            groupB.push(TeamData.indexOf(element));
        });
    const groupC = [];
    TeamData.slice(8, 12)
        .sort((a, b) => b.Points - a.Points)
        .forEach((element) => {
            groupC.push(TeamData.indexOf(element));
        });
    const groupD = [];
    TeamData.slice(12, 16)
        .sort((a, b) => b.Points - a.Points)
        .forEach((element) => {
            groupD.push(TeamData.indexOf(element));
        });

    console.log("GROUPS: ", groupA, groupB, groupC, groupD);

    const pairingsQuarterFinals = [
        //first of group A vs second of group B
        [groupA[0], groupB[1]],
        //first of group B vs second of group A
        [groupB[0], groupA[1]],
        //first of group C vs second of group D
        [groupC[0], groupD[1]],
        //first of group D vs second of group C
        [groupD[0], groupC[1]],
    ];

    const handleClickOpenDialog = (teamA, teamB) => {
        setSelectedTeams([teamA, teamB]);
        setOpen(true);
    };

    const handleCloseDialog = (value, scoreTeam1, scoreTeam2) => {
        setOpen(false);
        setSelectedValue(value);

        console.log("Selected Teams:", selectedTeams);

        setMatchResults((prevResults) => ({
            ...prevResults,
            [`${selectedTeams[0]}-${selectedTeams[1]}`]: `${scoreTeam1} : ${scoreTeam2}`,
        }));

        // check if all quarter finals are played
        const allQuarterFinalsPlayed = pairingsQuarterFinals.every(
            ([a, b]) => matchResults[`${a}-${b}`]
        );
        // if all quarter finals are played, calculate the results of the semi finals
        if (allQuarterFinalsPlayed) {
            handleQuarterFinalsResults();
        }

        const allSemiFinalsPlayed = pairingsSemiFinals.every(
            ([a, b]) => matchResults[`${a}-${b}`]
        );
        // if all semi finals are played, calculate the results of the final
        if (allSemiFinalsPlayed) {
            handleSemiFinalsResults();
        }

        const allFinalsPlayed = pairingsFinal.every(
            ([a, b]) => matchResults[`${a}-${b}`]
        );
        // if all finals are played, calculate the results of the final
        if (allFinalsPlayed) {
            handleFinalResults();
        }
    };

    const handleWinner = (
        teamA,
        teamB,
        scoreTeam1,
        scoreTeam2,
        penaltyTeam1,
        penaltyTeam2
    ) => {
        if (scoreTeam1 === scoreTeam2) {
            if (penaltyTeam1 > penaltyTeam2) {
                return teamA;
            } else {
                return teamB;
            }
        } else if (scoreTeam1 > scoreTeam2) {
            return teamA;
        } else {
            return teamB;
        }
    };

    // function to calculate the results of the quarter finals
    const handleQuarterFinalsResults = () => {
        const resultsSemiFinals = pairingsQuarterFinals.map(([a, b]) => {
            const winner = handleWinner(
                a,
                b,
                parseInt(matchResults[`${a}-${b}`].split(":")[0]),
                parseInt(matchResults[`${a}-${b}`].split(":")[1])
            );
            return winner;
        });
        console.log("resultsSemiFinals", resultsSemiFinals);
        setPairingsSemiFinals([
            [resultsSemiFinals[0], resultsSemiFinals[1]],
            [resultsSemiFinals[2], resultsSemiFinals[3]],
        ]);
    };

    // function to calculate the results of the semi finals
    const handleSemiFinalsResults = () => {
        const resultsFinal = pairingsSemiFinals.map(([a, b]) => {
            const winner = handleWinner(
                a,
                b,
                parseInt(matchResults[`${a}-${b}`].split(":")[0]),
                parseInt(matchResults[`${a}-${b}`].split(":")[1])
            );
            return winner;
        });
        console.log("resultsFinal", resultsFinal);
        setPairingsFinal([[resultsFinal[0], resultsFinal[1]]]);
    };

    // function to calculate the results of the final
    const handleFinalResults = () => {
        const resultsOfFinalGame = pairingsFinal.map(([a, b]) => {
            const winner = handleWinner(
                a,
                b,
                parseInt(matchResults[`${a}-${b}`].split(":")[0]),
                parseInt(matchResults[`${a}-${b}`].split(":")[1])
            );
            return winner;
        });
        console.log("resultsFinal", resultsOfFinalGame);
    };

    console.log("pairingsQuarterFinals", pairingsQuarterFinals);
    console.log("matchResults", matchResults);
    console.log("pairingsSemiFinals", pairingsSemiFinals, TeamData);
    console.log("pairingsFinal", pairingsFinal);

    return (
        <>
            <div style={{ fontWeight: "bold", fontSize: 25 }}>
                Viertelfinale
            </div>
            <List>
                {TeamData.length === 16 &&
                    pairingsQuarterFinals.map(([a, b]) => (
                        <ListItemButton
                            onClick={() => handleClickOpenDialog(a, b)}
                            key={`${a}-${b}`}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                backgroundColor: "transparent",
                                "&:hover": {
                                    backgroundColor: "#FAEBD7",
                                },
                            }}
                        >
                            {matchResults[`${a}-${b}`] ? (
                                <Typography fontWeight="bold">
                                    {`${TeamData[a]?.TeamName} ${
                                        matchResults[`${a}-${b}`]
                                    } ${TeamData[b]?.TeamName}`}
                                </Typography>
                            ) : (
                                `${TeamData[a]?.TeamName} vs ${TeamData[b]?.TeamName}`
                            )}
                        </ListItemButton>
                    ))}
            </List>
            <div style={{ fontWeight: "bold", fontSize: 25 }}>Halbfinale</div>
            <List>
                {pairingsSemiFinals.map(([a, b]) => (
                    <ListItemButton
                        onClick={() => handleClickOpenDialog(a, b)}
                        key={`${a}-${b}`}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            backgroundColor: "transparent",
                            "&:hover": {
                                backgroundColor: "#FAEBD7",
                            },
                        }}
                    >
                        {matchResults[`${a}-${b}`] ? (
                            <Typography fontWeight="bold">
                                {`${TeamData[a]?.TeamName} ${
                                    matchResults[`${a}-${b}`]
                                } ${TeamData[b]?.TeamName}`}
                            </Typography>
                        ) : (
                            `${TeamData[a]?.TeamName} vs ${TeamData[b]?.TeamName}`
                        )}
                    </ListItemButton>
                ))}
            </List>
            <div style={{ fontWeight: "bold", fontSize: 25 }}>Finale</div>
            <List>
                {pairingsFinal.map(([a, b]) => (
                    <ListItemButton
                        onClick={() => handleClickOpenDialog(a, b)}
                        key={`${a}-${b}`}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            backgroundColor: "transparent",
                            "&:hover": {
                                backgroundColor: "#FAEBD7",
                            },
                        }}
                    >
                        {matchResults[`${a}-${b}`] ? (
                            <Typography fontWeight="bold">
                                {`${TeamData[a]?.TeamName} ${
                                    matchResults[`${a}-${b}`]
                                } ${TeamData[b]?.TeamName}`}
                            </Typography>
                        ) : (
                            `${TeamData[a]?.TeamName} vs ${TeamData[b]?.TeamName}`
                        )}
                    </ListItemButton>
                ))}
            </List>
            <KoPhaseMatchDialog
                selectedValue={selectedValue}
                selectedTeams={selectedTeams}
                TeamData={TeamData}
                open={open}
                onClose={handleCloseDialog}
                scoreTeam1={scoreTeam1}
                scoreTeam2={scoreTeam2}
                penaltyTeam1={penaltyTeam1}
                penaltyTeam2={penaltyTeam2}
            />
        </>
    );
}

KoPhaseMatchList.propTypes = {
    dataPartition: PropTypes.array.isRequired,
    scoreTeam1: PropTypes.number.isRequired,
    scoreTeam2: PropTypes.number.isRequired,
    penaltyTeam1: PropTypes.number.isRequired,
    penaltyTeam2: PropTypes.number.isRequired,
};
