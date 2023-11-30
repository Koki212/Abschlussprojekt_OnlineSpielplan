import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
//import CompetitionModel from "../models/CompetitionModel";
import CompetitionModel from "./components/models/CompetitionModel";
import * as React from "react";
//import Competition from "../../Competition";
//import TeamData from "../models/TeamData";

// fetch data from backend
const API_ENDPOINT_GetTeamsByCompetitionId =
    "http://localhost:5285/api/team/GetAllTeamsByCompetitionId?id=" +
    CompetitionModel.CompetitionId;
console.log("CompetitionID = " + CompetitionModel.CompetitionId);

// export function GroupTableData() {
//     const [TeamData, setTeamData] = React.useState([]);
//     const fetchTeamData = async () => {
//         try {
//             const response = await fetch(API_ENDPOINT_GetTeamsByCompetitionId);
//             const data = await response.json();
//             setTeamData(data);
//         } catch (error) {
//             console.error("Fehler beim Abrufen der Teamdaten:", error);
//         }
//         return { TeamData };
//     };
//     fetchTeamData();
//     console.log("Log from GroupTable: " + TeamData);
// }

//initialize Teamdata which is send from Competition.jsx
// const TeamData = Competition.TeamData;
// console.log(TeamData);

// const TeamData = [
//     {
//         TeamName: TeamData.TeamName,
//         GamesPlayed: TeamData.GamesPlayed,
//         GamesWon: TeamData.GamesWon,
//         GamesDraw: TeamData.GamesDraw,
//         GamesLost: TeamData.GamesLost,
//         GoalsScored: TeamData.GoalsScored,
//         GoalsConceded: TeamData.GoalsConceded,
//         Points: TeamData.Points,
//         CompetitionId: TeamData.CompetitionId,
//     },
// ];

//map data to table
// const GroupTableData = TeamData.map((team) => (
//     <TableRow
//         key={team.TeamName}
//         sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//     >
//         <TableCell component="th" scope="row">
//             {team.TeamName}
//         </TableCell>
//         <TableCell align="center">{team.GamesPlayed}</TableCell>
//         <TableCell align="center">{team.GamesWon}</TableCell>
//         <TableCell align="center">{team.GamesDraw}</TableCell>
//         <TableCell align="center">{team.GamesLost}</TableCell>
//         <TableCell align="center">{team.GoalsScored}</TableCell>
//         <TableCell align="center">{team.GoalsConceeded}</TableCell>
//         <TableCell align="center">{team.GoalDifference}</TableCell>
//         <TableCell align="center">{team.Points}</TableCell>
//     </TableRow>
// ));

export function GroupTable() {
    const TeamData = React.useContext(TeamDataContext);
    console.log("Log from GroupTable: " + TeamData);
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
                            <TableCell>Mannschaft</TableCell>
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
                    {<TableBody>{/*TeamData.TeamName*/}</TableBody>}
                </Table>
            </TableContainer>
        </div>
    );
}
