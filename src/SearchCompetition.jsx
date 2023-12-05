// importing basic settings
import soccerLogo from "/soccer_logo.svg";
// importing react
import { useState } from "react";
// importing react-router-dom
import { useNavigate } from "react-router-dom";
// importing components from MUI
import Button from "@mui/material/Button";
import { List, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
// importing project components
import CompetitionModel from "./components/models/CompetitionModel";

export default function SearchCompetition() {
    const navigate = useNavigate();
    const [allCompetitionList, setAllCompetitionList] = useState([]);
    const [competitionName, setCompetitionName] = useState("");
    const changeInput = (event) => {
        setCompetitionName(event.target.value);
    };

    const API_ENDPOINT_GetCompetitonByName =
        "http://localhost:5285/api/competition/GetCompetitionByName?name=" +
        competitionName;

    const API_ENDPOINT_GetAllCompetitions =
        "http://localhost:5285/api/competition/GetAllCompetitions";

    function getAllCompetitions() {
        fetch(API_ENDPOINT_GetAllCompetitions, {
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
                setAllCompetitionList(data);
            })
            .catch((error) => {
                console.log("Fehler beim Abrufen der Daten: " + error);
            });
    }
    getAllCompetitions();

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
                    }}
                >
                    suchen
                </Button>
                <List>
                    {allCompetitionList.map((singleCompetition, index) => (
                        <ListItemButton
                            onClick={() => {
                                navigate(
                                    "/competition/" +
                                        singleCompetition.CompetitionId
                                );
                            }}
                            key={index}
                        >
                            {singleCompetition.Name}
                        </ListItemButton>
                    ))}
                </List>
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
