import soccerLogo from "/soccer_logo.svg";
import Button from "@mui/material/Button";
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
            <Button
                className="backbuttons"
                variant="outlined"
                href="/"
                onClick={async () => {
                    navigate("/newcompetition");
                }}
            >
                Back
            </Button>
        </>
    );
}
