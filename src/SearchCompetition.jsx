import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import soccerLogo from "/soccer_logo.svg";
import { useNavigate } from "react-router-dom";

export default function SearchCompetition() {
    const navigate = useNavigate();
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
                />
                <Button
                    className="nextbuttons"
                    variant="contained"
                    onClick={async () => {
                        alert("Turnier wurde nicht gefunden");
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
