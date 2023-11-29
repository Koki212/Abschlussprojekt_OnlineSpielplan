// import Box from "@mui/material/Box";
// import soccerLogo from "/soccer_logo.svg";
// import Button from "@mui/material/Button";
// import { TextField } from "@mui/material";
// import Stack from "@mui/material/Stack";
// import { useState } from "react";
// //import * as React from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Team from "./components/models/Team";
// import CompetitionModel from "./components/models/CompetitionModel";

// export default function AddTeams() {
//     const navigate = useNavigate();
//     const competitionName = CompetitionModel.CompetitionName;
//     let { competitionId } = useParams();
//     const [teamsList, setTeamsList] = useState([
//         new Team({ CompetitionId: competitionId }),
//     ]);

//     //if team is added to textfield, increase counter
//     let teamCounter = teamsList.length;
//     const handleTeamChange = (e, index) => {
//         const updatedTeams = [...teamsList];
//         updatedTeams[index].TeamName = e.target.value;
//         setTeamsList(updatedTeams);
//     };

//     const handleAddTeam = () => {
//         if (teamCounter === 16) {
//             return alert(
//                 "Es können maximal 16 Mannschaften hinzugefügt werden"
//             );
//         }
//         setTeamsList([
//             ...teamsList,
//             new Team({
//                 CompetitionId: competitionId,
//                 TeamName: teamsList.TeamName,
//             }),
//         ]);
//     };

//     const handleRemoveTeam = (index) => {
//         const updatedTeams = [...teamsList];
//         updatedTeams.splice(index, 1);
//         setTeamsList(updatedTeams);
//     };

//     const handleSubmit = async (updatedTeams) => {
//         const API_ENDPOINT = `http://localhost:5285/api/team/CreateTeamObject?CompetitionId=${competitionId}`;
//         try {
//             await fetch(API_ENDPOINT, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(
//                     CompetitionModel.competitionId,
//                     updatedTeams.TeamName
//                 ),
//             });
//         } catch (error) {
//             console.error("Fehler beim Erstellen des Teamobjekts:", error);
//         }
//     };

//     return (
//         <>
//             <div>
//                 <a>
//                     <img src={soccerLogo} className="logo" alt="Soccer logo" />
//                 </a>
//             </div>
//             <h1>{competitionName}</h1>
//             <h2>Mannschaften hinzufügen({teamCounter}/16)</h2>
//             <Box
//                 sx={{
//                     width: 700,
//                     maxWidth: "100%",
//                     "& button": { m: 1 },
//                 }}
//             >
//                 {teamsList.map((team, index) => (
//                     <div key={index}>
//                         <Stack direction="row" spacing={2} margin={1}>
//                             <p>{index + 1}.</p>
//                             <TextField
//                                 margin="normal"
//                                 size="small"
//                                 fullWidth
//                                 label="Bitte geben Sie den Namen der Mannschaft ein"
//                                 variant="outlined"
//                                 value={team.TeamName}
//                                 onChange={(e) => handleTeamChange(e, index)}
//                             />
//                             {teamsList.length > 1 && (
//                                 <Button
//                                     className="removebuttons"
//                                     variant="contained"
//                                     color="error"
//                                     onClick={() => handleRemoveTeam(index)}
//                                 >
//                                     entfernen
//                                 </Button>
//                             )}
//                         </Stack>
//                         {teamsList.length - 1 === index && (
//                             <>
//                                 <Button
//                                     className="addbuttons"
//                                     variant="contained"
//                                     color="success"
//                                     margin="normal"
//                                     onClick={() => handleAddTeam()}
//                                 >
//                                     Team hinzufügen
//                                 </Button>
//                                 <Button
//                                     className="nextbuttons"
//                                     variant="contained"
//                                     color="warning"
//                                     margin="normal"
//                                     onClick={() =>
//                                         teamsList.forEach((team) =>
//                                             handleSubmit(team)
//                                         )
//                                     }
//                                 >
//                                     Speichern
//                                 </Button>
//                             </>
//                         )}
//                     </div>
//                 ))}
//             </Box>
//             <Box
//                 sx={{
//                     width: 700,
//                     maxWidth: "100%",
//                     "& button": { m: 1 },
//                 }}
//             >
//                 <Button
//                     className="backbuttons"
//                     variant="outlined"
//                     margin="normal"
//                     padding="normal"
//                     color="error"
//                     onClick={async () => {
//                         navigate("/newcompetition");
//                     }}
//                 >
//                     abbrechen
//                 </Button>
//                 <Button
//                     className="nextbuttons"
//                     variant="contained"
//                     margin="normal"
//                     padding="normal"
//                     onClick={async () => {
//                         navigate(
//                             "/competition/" + CompetitionModel.CompetitionId
//                         );
//                     }}
//                 >
//                     weiter
//                 </Button>
//             </Box>
//         </>
//     );
// }
