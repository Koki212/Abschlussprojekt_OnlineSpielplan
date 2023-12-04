import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CompetitionModel from "../models/CompetitionModel";
import Team from "../models/Team";
import * as React from "react";
import { useParams } from "react-router-dom";

export function GroupTableC() {
    let { competitionId } = useParams();
    // API Endpoint
    const API_ENDPOINT_GetTeamsByCompetitionId =
        "http://localhost:5285/api/team/GetAllTeamsByCompetitionId?id=" +
        competitionId;
    console.log("CompetitionID = " + CompetitionModel.CompetitionId);
    const [TeamData, setTeamData] = React.useState([]);
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
                Team.TeamName = data.TeamName;
                Team.GamesPlayed = data.GamesPlayed;
                Team.GamesWon = data.GamesWon;
                Team.GamesDraw = data.GamesDraw;
                Team.GamesLost = data.GamesLost;
                Team.GoalsScored = data.GoalsScored;
                Team.GoalsConceded = data.GoalsConceded;
                Team.Points = data.Points;
                setTeamData(data);
                const sortedData = data
                    .slice(8, 12)
                    .sort((a, b) => b.Points - a.Points);
                setTeamData(sortedData);
                //console.log("Log from GroupTable: " + TeamData);
            })
            .catch((error) => {
                console.error("Fehler beim Abrufen der Daten:", error);
            });
    }

    return (
        <div>
            <TableContainer component={Paper}>
                <Table
                    sx={{ minWidth: 650 }}
                    size="small"
                    aria-label="a dense table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Mannschaft</TableCell>
                            <TableCell align="center">Spiele</TableCell>
                            <TableCell align="center">S</TableCell>
                            <TableCell align="center">U</TableCell>
                            <TableCell align="center">N</TableCell>
                            <TableCell align="center">Tore</TableCell>
                            <TableCell align="center">GT</TableCell>
                            <TableCell align="center">T/D</TableCell>
                            <TableCell align="center">Pkt</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {React.useEffect(() => {
                            getDataFromBackend();
                        }, [])}
                        {TeamData.map((team) => (
                            <TableRow
                                key={team.TeamName}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {team.TeamName}
                                </TableCell>
                                <TableCell align="center">
                                    {team.GamesPlayed}
                                </TableCell>
                                <TableCell align="center">
                                    {team.GamesWon}
                                </TableCell>
                                <TableCell align="center">
                                    {team.GamesDraw}
                                </TableCell>
                                <TableCell align="center">
                                    {team.GamesLost}
                                </TableCell>
                                <TableCell align="center">
                                    {team.GoalsScored}
                                </TableCell>
                                <TableCell align="center">
                                    {team.GoalsConceded}
                                </TableCell>
                                <TableCell align="center">
                                    {team.GoalsScored - team.GoalsConceded}
                                </TableCell>
                                <TableCell align="center">
                                    {team.Points}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
