// importing basic settings
import soccerLogo from "/soccer_logo.svg";
// importing react
import { useState, useEffect } from "react";
// importing react-router-dom
import { useParams } from "react-router-dom";
// importing components from MUI
import Button from "@mui/material/Button";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// importing project components
import CompetitionModel from "./components/models/CompetitionModel";
// import Team from ".components/models/Team";
import { GroupMatchList } from "./components/lists/GroupMatchList.jsx";
import { KoPhaseMatchList } from "./components/lists/KoPhaseMatchList.jsx";
import { GroupTable } from "./components/tables/GroupTable.jsx";

export default function Competition() {
    const [expanded, setExpanded] = useState(false);

    let { competitionId } = useParams();

    const API_ENDPOINT_GetCompetitionById =
        "http://localhost:5285/api/competition/GetCompetitionById?id=" +
        competitionId;
    const [competitionData, setCompetitionData] = useState([]);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    console.log("CompetitionData: ", competitionData);

    useEffect(() => {
        // function to get Competitiondata from backend
        function getCompetitionDataFromBackend() {
            fetch(API_ENDPOINT_GetCompetitionById, {
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
                    CompetitionModel.CompetitionId = data.CompetitionId;
                    CompetitionModel.CompetitionName = data.Name;
                    setCompetitionData(data);
                })
                .catch((error) => {
                    console.error("Fehler beim Abrufen der Daten:", error);
                });
        }
        getCompetitionDataFromBackend();
    }, [setCompetitionData, API_ENDPOINT_GetCompetitionById]);

    return (
        <>
            <div>
                <a>
                    <img src={soccerLogo} className="logo" alt="Soccer logo" />
                </a>
            </div>
            <h1>{CompetitionModel.CompetitionName}</h1>
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
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Gruppen</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography fontWeight="bold" fontSize={25}>
                        Gruppe A
                    </Typography>
                    <GroupTable dataPartition={[0, 4]} />
                </AccordionDetails>
                <AccordionDetails>
                    <Typography fontWeight="bold" fontSize={25}>
                        Gruppe B
                    </Typography>
                    <GroupTable dataPartition={[4, 8]} />
                </AccordionDetails>
                <AccordionDetails>
                    <Typography fontWeight="bold" fontSize={25}>
                        Gruppe C
                    </Typography>
                    <GroupTable dataPartition={[8, 12]} />
                </AccordionDetails>
                <AccordionDetails>
                    <Typography fontWeight="bold" fontSize={25}>
                        Gruppe D
                    </Typography>
                    <GroupTable dataPartition={[12, 16]} />
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
                <AccordionDetails>
                    <Typography fontWeight="bold" fontSize={25}>
                        Gruppe A
                    </Typography>
                    <GroupMatchList dataPartition={[0, 4]} />
                </AccordionDetails>
                <AccordionDetails>
                    <Typography fontWeight="bold" fontSize={25}>
                        Gruppe B
                    </Typography>
                    <GroupMatchList dataPartition={[4, 8]} />
                </AccordionDetails>
                <AccordionDetails>
                    <Typography fontWeight="bold" fontSize={25}>
                        Gruppe C
                    </Typography>
                    <GroupMatchList dataPartition={[8, 12]} />
                </AccordionDetails>
                <AccordionDetails>
                    <Typography fontWeight="bold" fontSize={25}>
                        Gruppe D
                    </Typography>
                    <GroupMatchList dataPartition={[12, 16]} />
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
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Endrunde</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <KoPhaseMatchList />
                </AccordionDetails>
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
