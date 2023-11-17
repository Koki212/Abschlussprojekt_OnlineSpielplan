//import soccerLogo from "/soccer_logo.svg";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import * as React from "react";
import { Accordion } from "@mui/material";
import { AccordionSummary, AccordionDetails } from "@mui/material";
import { Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import GroupTable from "./components/GroupTable";
import CompetitionModel from "./components/models/CompetitionModel";

export default function Competition() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const competitionId = CompetitionModel.CompetitionId;
    const competitionName = CompetitionModel.CompetitionName;

    //console.log(Competition);
    return (
        <>
            <Box
                sx={{
                    width: 700,
                    maxWidth: "100%",
                    "& button": { m: 1 },
                }}
            >
                <p></p>
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
                        <Typography align="left">Gruppe A</Typography>
                        <GroupTable rows={GroupTable} />
                        <Typography align="left" marginTop={5}>
                            Gruppe B
                        </Typography>
                        <GroupTable rows={GroupTable} />
                        <Typography align="left" marginTop={5}>
                            Gruppe C
                        </Typography>
                        <GroupTable rows={GroupTable} />
                        <Typography align="left" marginTop={5}>
                            Gruppe D
                        </Typography>
                        <GroupTable rows={GroupTable} />
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
                        <Typography>GRUPPENSPIELE</Typography>
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
                        <Typography>ENDRUNDE</Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>

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
