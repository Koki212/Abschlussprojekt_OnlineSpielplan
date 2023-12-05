// importing basic settings
import soccerLogo from "/soccer_logo.svg";
// importing react
import * as React from "react";
// importing components from MUI
import Button from "@mui/material/Button";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// importing project components
import CompetitionModel from "./components/models/CompetitionModel";
import { GroupMatchList } from "./components/lists/GroupMatchList.jsx";
import { KoPhaseMatchList } from "./components/lists/KoPhaseMatchList.jsx";
import { GroupTable } from "./components/tables/GroupTable.jsx";

export default function Competition() {
    const competitionName = CompetitionModel.CompetitionName;
    const [expanded, setExpanded] = React.useState(false);

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
                    Gruppe A<GroupTable dataPartition={[0, 4]} />
                </AccordionDetails>
                <AccordionDetails>
                    Gruppe B<GroupTable dataPartition={[4, 8]} />
                </AccordionDetails>
                <AccordionDetails>
                    Gruppe C<GroupTable dataPartition={[8, 12]} />
                </AccordionDetails>
                <AccordionDetails>
                    Gruppe D<GroupTable dataPartition={[12, 16]} />
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
                    Gruppe A<GroupMatchList dataPartition={[0, 4]} />
                </AccordionDetails>
                <AccordionDetails>
                    Gruppe B<GroupMatchList dataPartition={[4, 8]} />
                </AccordionDetails>
                <AccordionDetails>
                    Gruppe C<GroupMatchList dataPartition={[8, 12]} />
                </AccordionDetails>
                <AccordionDetails>
                    Gruppe D<GroupMatchList dataPartition={[12, 16]} />
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
