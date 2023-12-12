// importing basic settings
import soccerLogo from "/soccer_logo.svg";
// importing react
import { useState, useEffect } from "react";
// importing react-router-dom
import { useNavigate } from "react-router-dom";
// importing components from MUI
import Button from "@mui/material/Button";
import { List } from "@mui/material";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import { CircularProgress } from "@mui/material";
// importing project components
import CompetitionModel from "./components/models/CompetitionModel";

export default function SearchCompetition() {
    const navigate = useNavigate();
    const [allCompetitionList, setAllCompetitionList] = useState([]);
    const [competitionName, setCompetitionName] = useState("");
    const [loading, setLoading] = useState(false);

    const changeInput = (event) => {
        setCompetitionName(event.target.value);
    };

    const API_ENDPOINT_GetCompetitonByName =
        "http://localhost:5285/api/competition/GetCompetitionByName?name=" +
        competitionName;

    const API_ENDPOINT_GetAllCompetitions =
        "http://localhost:5285/api/competition/GetAllCompetitions";

    useEffect(() => {
        // Funktion, um alle Wettbewerbe abzurufen
        const getAllCompetitions = async () => {
            try {
                setLoading(true);
                const response = await fetch(API_ENDPOINT_GetAllCompetitions, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    CompetitionModel.CompetitionId = data.CompetitionId;
                    CompetitionModel.CompetitionName = data.Name;
                    setAllCompetitionList(data);
                } else {
                    throw new Error("Fehler beim Abrufen der Daten");
                }
            } catch (error) {
                console.error("Fehler beim Abrufen der Daten:", error);
            } finally {
                setLoading(false);
            }
        };

        getAllCompetitions();
    }, [API_ENDPOINT_GetAllCompetitions]);

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
                    display: "flex",
                    alignItems: "center",
                    width: 700,
                    maxWidth: "100%",
                    "& button": { m: 1 },
                }}
            >
                <TextField
                    fullWidth
                    margin="normal"
                    id="fullWidth"
                    size="small"
                    label="Bitte geben Sie den Namen des Turniers ein"
                    // save the value of the input field
                    onChange={changeInput}
                    value={competitionName}
                />
                <Button
                    className="nextbuttons"
                    variant="contained"
                    onClick={async () => {
                        try {
                            setLoading(true);
                            const response = await fetch(
                                API_ENDPOINT_GetCompetitonByName,
                                {
                                    method: "GET",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                }
                            );
                            if (response.ok) {
                                const data = await response.json();
                                CompetitionModel.CompetitionId =
                                    data.CompetitionId;
                                CompetitionModel.CompetitionName = data.Name;
                                navigate(
                                    "/competition/" +
                                        CompetitionModel.CompetitionId
                                );
                            } else {
                                throw new Error(
                                    "Fehler beim Abrufen der Daten"
                                );
                            }
                        } catch (error) {
                            console.error(
                                "Fehler beim Abrufen der Daten:",
                                error
                            );
                        } finally {
                            setLoading(false);
                        }
                    }}
                >
                    suchen
                </Button>
            </Box>
            <List>
                {loading && <CircularProgress />}
                {allCompetitionList.map((singleCompetition, index) => (
                    <ListItemButton
                        onClick={() => {
                            CompetitionModel.CompetitionName =
                                singleCompetition.Name;
                            CompetitionModel.CompetitionId =
                                singleCompetition.CompetitionId;
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
