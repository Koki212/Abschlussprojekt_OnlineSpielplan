// importing components from MUI
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
// importing PropTypes from MUI
import PropTypes from "prop-types";
// importing React
import { useState } from "react";

export function KoPhaseMatchDialog(props) {
    const { onClose, selectedValue, open, selectedTeams, TeamData } = props;
    const [scoreTeam1, setScoreTeam1] = useState(0);
    const [scoreTeam2, setScoreTeam2] = useState(0);
    const [penaltyTeam1, setPenaltyTeam1] = useState(0);
    const [penaltyTeam2, setPenaltyTeam2] = useState(0);

    const changeInputScoreTeam1 = (event) => {
        const value = parseInt(event.target.value);
        setScoreTeam1(isNaN(value) ? 0 : Math.max(0, value));
    };

    const changeInputScoreTeam2 = (event) => {
        const value = parseInt(event.target.value);
        setScoreTeam2(isNaN(value) ? 0 : Math.max(0, value));
    };

    const changeInputPenaltyTeam1 = (event) => {
        const value = parseInt(event.target.value, 10);
        setPenaltyTeam1(isNaN(value) ? 0 : Math.max(0, value));
    };

    const changeInputPenaltyTeam2 = (event) => {
        const value = parseInt(event.target.value, 10);
        setPenaltyTeam2(isNaN(value) ? 0 : Math.max(0, value));
    };

    const handleClose = () => {
        onClose(selectedValue, scoreTeam1, scoreTeam2);
    };

    console.log(
        "MATCHDIALOG: scoreTeam1: " + scoreTeam1,
        "scoreTeam2: " + scoreTeam2
    );

    const renderPenaltyShootout = () => {
        return (
            <>
                <Typography variant="h5" align="center">
                    Elfmeterschießen
                </Typography>
                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                    margin={5}
                >
                    <TextField
                        id="outlined-number-team1"
                        label={`Elfmeter ${
                            TeamData[selectedTeams[0]]?.TeamName
                        }`}
                        type="number"
                        size="small"
                        onChange={changeInputPenaltyTeam1}
                        value={penaltyTeam1}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <Typography variant="h5">:</Typography>
                    <TextField
                        id="outlined-number-team2"
                        label={`Elfmeter ${
                            TeamData[selectedTeams[1]]?.TeamName
                        }`}
                        type="number"
                        size="small"
                        onChange={changeInputPenaltyTeam2}
                        value={penaltyTeam2}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Stack>
            </>
        );
    };

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
            {scoreTeam1 === scoreTeam2 && renderPenaltyShootout()}
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
                    onClick={handleClose}
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

KoPhaseMatchDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
    selectedTeams: PropTypes.array.isRequired,
    TeamData: PropTypes.array.isRequired,
};
