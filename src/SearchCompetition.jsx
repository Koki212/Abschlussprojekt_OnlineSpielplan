import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import soccerLogo from "/soccer_logo.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CompetitionModel from "./components/models/CompetitionModel";

export default function SearchCompetition() {
    const navigate = useNavigate();

    const [competitionName, setCompetitionName] = useState("");
    const changeInput = (event) => {
        setCompetitionName(event.target.value);
    };

    const API_ENDPOINT_GetCompetitonByName =
        "http://localhost:5285/api/competition/GetCompetitionByName?name=" +
        competitionName;

    return (
        <>
            <div>
                <a>
                    <img src={soccerLogo} className="logo" alt="Soccer logo" />
                </a>
            </div>
            <h2>Turnier suchen</h2>
            <Box
                sx={{
                    width: 700,
                    maxWidth: "100%",
                    "& button": { m: 1 },
                }}
            >
                <TextField
                    fullWidth
                    margin="normal"
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
                        await fetch(API_ENDPOINT_GetCompetitonByName, {
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
                                console.log(data);
                            });
                        navigate(
                            "/competition/" + CompetitionModel.CompetitionId
                        );
                        // alert("Turnier wurde nicht gefunden");
                    }}
                >
                    suchen
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
