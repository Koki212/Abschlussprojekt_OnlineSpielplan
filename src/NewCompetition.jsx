// importing basic settings
import soccerLogo from "/soccer_logo.svg";
// importing react
import { useState } from "react";
// importing react-router-dom
import { useNavigate } from "react-router-dom";
// importing components from MUI
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
// importing project components
import CompetitionModel from "./components/models/CompetitionModel";

export default function NewCompetition() {
    const navigate = useNavigate();
    const [competitionName, setCompetitionName] = useState("");
    const changeInput = (event) => {
        setCompetitionName(event.target.value);
    };

    const API_ENDPOINT_CreateCompetition =
        "http://localhost:5285/api/competition/CreateCompetition?name=" +
        competitionName;

    const API_ENDPOINT_GetCompetitionByName =
        "http://localhost:5285/api/competition/GetCompetitionByName?name=" +
        competitionName;

    console.log(competitionName);

    return (
        <>
            <div>
                <a>
                    <img src={soccerLogo} className="logo" alt="Soccer logo" />
                </a>
            </div>
            <h2>Neues Turnier erstellen</h2>
            <Box
                sx={{
                    width: 700,
                    maxWidth: "100%",
                    "& button": { m: 1 },
                }}
            >
                <TextField
                    fullWidth
                    margin="dense"
                    id="fullWidth"
                    label="Bitte geben Sie den Namen des Turniers ein"
                    // save the value of the input field
                    onChange={changeInput}
                    value={competitionName}
                />
                <Button
                    className="nextbuttons"
                    variant="contained"
                    onClick={async () => {
                        console.log(competitionName);
                        await fetch(API_ENDPOINT_CreateCompetition, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                name: competitionName,
                            }),
                        });
                        await fetch(API_ENDPOINT_GetCompetitionByName, {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                            },
                        })
                            .then((response) => response.json())
                            .then((data) => {
                                CompetitionModel.CompetitionId =
                                    data.CompetitionId;
                                CompetitionModel.CompetitionName = data.Name;
                                console.log(
                                    "Fetching competition data from backend: CompetitionId= " +
                                        data.CompetitionId
                                );
                            });
                        navigate(
                            "/" + CompetitionModel.CompetitionId + "/addteams"
                        );
                    }}
                >
                    Weiter
                </Button>
            </Box>
            <div className="card">
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
            </div>
        </>
    );
}
