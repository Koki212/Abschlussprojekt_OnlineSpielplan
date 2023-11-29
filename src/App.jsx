// importing basic settings
import soccerLogo from "/soccer_logo.svg";
// import react
import { useNavigate } from "react-router-dom";
// import components from MUI
import Button from "@mui/material/Button";
// import project components
import "./App.css";

function App() {
    const navigate = useNavigate();

    return (
        <>
            <div>
                <a>
                    <img src={soccerLogo} className="logo" alt="Soccer logo" />
                </a>
            </div>
            <h1>Online-Spielplan</h1>
            <div className="newCompetition">
                <Button
                    variant="contained"
                    size="large"
                    onClick={async () => {
                        navigate("/newcompetition");
                    }}
                >
                    Neues Turnier erstellen
                </Button>
            </div>
            <div className="searchCompetition">
                <Button
                    variant="contained"
                    size="large"
                    onClick={async () => {
                        navigate("/searchcompetition");
                    }}
                >
                    Bestehendes Turnier öffnen
                </Button>
            </div>
            <p>Created by Kostadin Rizov</p>
        </>
    );
}

export default App;
