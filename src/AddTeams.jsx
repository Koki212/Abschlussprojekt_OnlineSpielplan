import Box from "@mui/material/Box";
import soccerLogo from "/soccer_logo.svg";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function AddTeams() {
    const navigate = useNavigate();
    const [teamsList, setTeamsList] = useState([{ team: "" }]);

    console.log(teamsList);

    const handleAddTeam = () => {
        setTeamsList([...teamsList, { team: "" }]);
    };

    const handleRemoveTeam = (index) => {
        const list = [...teamsList];
        list.splice(index, 1);
        setTeamsList(list);
    };

    const handleTeamChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...teamsList];
        list[index][name] = value;
        setTeamsList(list);
    };

    return (
        <>
            <div>
                <a>
                    <img src={soccerLogo} className="logo" alt="Soccer logo" />
                </a>
            </div>
            <h2>Mannschaften hinzufügen</h2>
            <Box
                sx={{
                    width: 700,
                    maxWidth: "100%",
                    "& button": { m: 1 },
                }}
            >
                {teamsList.map((singleTeam, index) => (
                    <div key={index}>
                        <Stack direction="row" spacing={2} margin={1}>
                            <TextField
                                margin="normal"
                                size="small"
                                fullWidth
                                label="Bitte geben Sie den Namen der Mannschaft ein"
                                variant="outlined"
                                onChange={(e) => handleTeamChange(e, index)}
                            />
                            {teamsList.length > 1 && (
                                <Button
                                    className="removebuttons"
                                    variant="contained"
                                    color="error"
                                    onClick={() => handleRemoveTeam(index)}
                                >
                                    entfernen
                                </Button>
                            )}
                        </Stack>
                        {teamsList.length - 1 === index && (
                            <Button
                                className="addbuttons"
                                variant="contained"
                                color="success"
                                margin="normal"
                                onClick={handleAddTeam}
                            >
                                hinzufügen
                            </Button>
                        )}
                    </div>
                ))}
            </Box>
            <Box
                sx={{
                    width: 700,
                    maxWidth: "100%",
                    "& button": { m: 1 },
                }}
            >
                <Button
                    className="backbuttons"
                    variant="outlined"
                    margin="normal"
                    padding="normal"
                    color="error"
                    onClick={async () => {
                        await fetch("http://localhost:5173/");
                    }}
                >
                    abbrechen
                </Button>
                <Button
                    className="nextbuttons"
                    variant="contained"
                    margin="normal"
                    padding="normal"
                    onClick={async () => {
                        navigate("/competition");
                    }}
                >
                    Weiter
                </Button>
            </Box>
        </>
    );
}
