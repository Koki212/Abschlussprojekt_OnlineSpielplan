import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import soccerLogo from "/soccer_logo.svg";
import { useState } from "react";
import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function NewCompetition() {
    const navigate = useNavigate();

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
                    margin="small"
                    id="fullWidth"
                    label="Bitte geben Sie den Namen des Turniers ein"
                />
                <Button
                    className="nextbuttons"
                    variant="contained"
                    onClick={async () => {
                        navigate("/newcompetition/addteams");
                    }}
                >
                    Weiter
                </Button>
            </Box>
            <div className="card">
                <Button
                    className="backbuttons"
                    variant="outlined"
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
