// importing components from MUI
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
// importing PropTypes from MUI
import PropTypes from "prop-types";
// importing React
import { useState } from "react";

export function MatchDialog(props) {
    const { onClose, selectedValue, open, selectedTeams, TeamData } = props;
    const [scoreTeam1, setScoreTeam1] = useState(0);
    const [scoreTeam2, setScoreTeam2] = useState(0);

    const changeInputScoreTeam1 = (event) => {
        const value = parseInt(event.target.value);
        setScoreTeam1(isNaN(value) ? 0 : Math.max(0, value));
    };

    const changeInputScoreTeam2 = (event) => {
        const value = parseInt(event.target.value);
        setScoreTeam2(isNaN(value) ? 0 : Math.max(0, value));
    };

    const handleClose = () => {
        onClose(selectedValue, scoreTeam1, scoreTeam2);
    };

    console.log(
        "MATCHDIALOG: scoreTeam1: " + scoreTeam1,
        "scoreTeam2: " + scoreTeam2
    );

    const API_ENDPOINT_CalculatePoints =
        "http://localhost:5285/CalculatePointsObject?team1Id=" +
        TeamData[selectedTeams[0]]?.TeamId +
        "&team2Id=" +
        TeamData[selectedTeams[1]]?.TeamId +
        "&scoreTeam1=" +
        scoreTeam1 +
        "&scoreTeam2=" +
        scoreTeam2;

    return (
        <Dialog onClose={handleClose} open={open} maxWidth="xl">
            <DialogTitle>Match</DialogTitle>
            <Stack
                direction={"row"}
                spacing={2}
                margin={5}
                justifyContent="center"
                alignItems="center"
            >
                <h3>{TeamData[selectedTeams[0]]?.TeamName}</h3>
                <TextField
                    id="outlined-number"
                    type="number"
                    size="small"
                    onChange={changeInputScoreTeam1}
                    value={scoreTeam1}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <h2>:</h2>
                <TextField
                    id="outlined-number"
                    type="number"
                    size="small"
                    onChange={changeInputScoreTeam2}
                    value={scoreTeam2}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <h3>{TeamData[selectedTeams[1]]?.TeamName}</h3>
            </Stack>
            <Stack
                direction={"row"}
                spacing={2}
                margin={5}
                justifyContent="center"
                alignItems="center"
            >
                <Button
                    color="success"
                    variant="contained"
                    margin="normal"
                    onClick={async () => {
                        await fetch(API_ENDPOINT_CalculatePoints, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                Team1Id: TeamData[selectedTeams[0]]?.TeamId,
                                Team2Id: TeamData[selectedTeams[1]]?.TeamId,
                                ScoreTeam1: scoreTeam1,
                                ScoreTeam2: scoreTeam2,
                            }),
                        })
                            .then((response) => {
                                if (response.ok) {
                                    return response.json();
                                } else {
                                    throw new Error(
                                        "Fehler beim Abrufen der Daten"
                                    );
                                }
                            })
                            .then((data) => {
                                console.log(data);
                            })
                            .catch((error) => {
                                console.error(
                                    "Fehler beim Abrufen der Daten:",
                                    error
                                );
                            });
                        handleClose();
                    }}
                >
                    Speichern
                </Button>
                <Button
                    color="error"
                    variant="contained"
                    margin="normal"
                    onClick={handleClose}
                >
                    Abbrechen
                </Button>
            </Stack>
        </Dialog>
    );
}

MatchDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
    selectedTeams: PropTypes.array.isRequired,
    TeamData: PropTypes.array.isRequired,
};
