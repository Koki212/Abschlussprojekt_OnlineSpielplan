// importing basic settings
import soccerLogo from "/soccer_logo.svg";
// importing react
import * as React from "react";
import { useParams } from "react-router-dom";
// importing components from MUI
import Button from "@mui/material/Button";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TableHead, TableBody, TableRow, TableCell } from "@mui/material";
// importing project components
//import { GroupTable } from "./components/tables/GroupTable";
import CompetitionModel from "./components/models/CompetitionModel";
import Team from "./components/models/Team";
import { GroupMatchList } from "./components/lists/GroupMatchList.jsx";
import { KoPhaseMatchList } from "./components/lists/KoPhaseMatchList.jsx";

export const TeamDataContext = React.createContext();

export default function Competition() {
    let { competitionId } = useParams();
    const competitionName = CompetitionModel.CompetitionName;
    const [expanded, setExpanded] = React.useState(false);

    // variable for data from backend
    const [TeamData, setTeamData] = React.useState([]);

    // TODO: useEffect for fetching data from backend on page load
    //React.useEffect(() => {
    //const TeamDataContext = React.createContext();

    // for testing purposes
    const API_ENDPOINT_GetTeamsByCompetitionId =
        "http://localhost:5285/api/team/GetAllTeamsByCompetitionId?id=" +
        competitionId;
    //console.log("CompetitionID = " + competitionId);

    // React.useEffect(() => {
    //     const fetchTeamData = async () => {
    //         try {
    //             const response = await fetch(
    //                 API_ENDPOINT_GetTeamsByCompetitionId
    //             );
    //             const data = await response.json();
    //             setTeamData(data);
    //         } catch (error) {
    //             console.error("Fehler beim Abrufen der Teamdaten:", error);
    //         }
    //     };

    //     fetchTeamData();
    // }, /*[competitionId]*/ []);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <div>
                <a>
                    <img src={soccerLogo} className="logo" alt="Soccer logo" />
                </a>
            </div>
            <h1>{competitionName}</h1>
            <Button
                className="testbuttons"
                variant="secondary"
                // onClick={async () => {
                //     await fetch(API_ENDPOINT_GetTeamsByCompetitionId, {
                //         method: "GET",
                //         headers: {
                //             "Content-Type": "application/json",
                //         },
                //     })
                //         .then((response) => response.json())
                //         .then((data) => setTeamData(data));
                // }}
            >
                test button
            </Button>
            <Accordion
                sx={{
                    width: "100%",
                    marginBottom: "10px",
                    marginTop: "10px",
                    backgroundColor: "#e0e0e0",
                    flexShrink: "0",
                }}
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                onClick={async () => {
                    await fetch(API_ENDPOINT_GetTeamsByCompetitionId, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            Team.TeamName = data.TeamName;
                            Team.GamesPlayed = data.GamesPlayed;
                            Team.GamesWon = data.GamesWon;
                            Team.GamesDraw = data.GamesDraw;
                            Team.GamesLost = data.GamesLost;
                            Team.GoalsScored = data.GoalsScored;
                            Team.GoalsConceeded = data.GoalsConceeded;
                            Team.Points = data.Points;
                            setTeamData(data);
                            console.log("Log from Backend: " + TeamData);
                        });
                    //console.log("Fetching Team Data from Backend: ");
                    //console.log(TeamData);
                    // <TeamDataContext.Provider value={TeamData}>
                    //     <GroupTable />;
                    // </TeamDataContext.Provider>;
                    // display data in table

                    // display TeamData in a list
                }}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Gruppen</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {
                        // display TeamData in a table
                        // <TeamDataContext.Provider value={TeamData}>
                        //     <GroupTable />;
                        // </TeamDataContext.Provider>;
                        // display data in table
                        <>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Team</TableCell>
                                    <TableCell align="center">Spiele</TableCell>
                                    <TableCell align="center">S</TableCell>
                                    <TableCell align="center">U</TableCell>
                                    <TableCell align="center">N</TableCell>
                                    <TableCell align="center">Tore</TableCell>
                                    <TableCell align="center">
                                        Gegentore
                                    </TableCell>
                                    <TableCell align="center">TD</TableCell>
                                    <TableCell align="center">Punkte</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {TeamData.map((team) => (
                                    <TableRow
                                        key={team.TeamName}
                                        sx={{
                                            "&:last-child td, &:last-child th":
                                                {
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
                                            {team.GoalsConceeded}
                                        </TableCell>
                                        <TableCell align="center">
                                            {team.GoalDifference}
                                        </TableCell>
                                        <TableCell align="center">
                                            {team.Points}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </>
                    }
                </AccordionDetails>
            </Accordion>
            <Accordion
                sx={{
                    width: "100%",
                    marginBottom: "10px",
                    marginTop: "10px",
                    backgroundColor: "#e0e0e0",
                    flexShrink: "0",
                }}
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Gruppenspiele</Typography>
                </AccordionSummary>
                <AccordionDetails>{GroupMatchList()}</AccordionDetails>
            </Accordion>
            <Accordion
                sx={{
                    width: "100%",
                    marginBottom: "10px",
                    marginTop: "10px",
                    backgroundColor: "#e0e0e0",
                    flexShrink: "0",
                }}
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Endrunde</Typography>
                </AccordionSummary>
                <AccordionDetails>{KoPhaseMatchList()}</AccordionDetails>
            </Accordion>
            <Button
                className="backbuttons"
                variant="outlined"
                href="/"
                onClick={async () => {
                    await fetch("http://localhost:5173/");
                }}
            >
                zurück zur Startseite
            </Button>
        </>
    );
}
