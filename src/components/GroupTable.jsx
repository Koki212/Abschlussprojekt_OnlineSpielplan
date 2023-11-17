import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// TODO: this need to be replaced with data from the backend
function createData(
    name,
    gamesPlayed,
    gamesWon,
    gamesDrawn,
    gamesLost,
    goalsScored,
    goalsConceded,
    goalDifference,
    points
) {
    return {
        name,
        gamesPlayed,
        gamesWon,
        gamesDrawn,
        gamesLost,
        goalsScored,
        goalsConceded,
        goalDifference,
        points,
    };
}

const groupA = [
    createData("Mannschaft 1", 3, 2, 0, 1, 7, 4, 3, 6),
    createData("Mannschaft 2", 3, 2, 0, 1, 7, 4, 3, 6),
    createData("Mannschaft 3", 3, 2, 0, 1, 7, 4, 3, 6),
    createData("Mannschaft 4", 3, 2, 0, 1, 7, 4, 3, 6),
];

const groupB = [
    createData("Mannschaft 5", 3, 2, 0, 1, 7, 4, 3, 6),
    createData("Mannschaft 6", 3, 2, 0, 1, 7, 4, 3, 6),
    createData("Mannschaft 7", 3, 2, 0, 1, 7, 4, 3, 6),
    createData("Mannschaft 8", 3, 2, 0, 1, 7, 4, 3, 6),
];

const groupC = [
    createData("Mannschaft 9", 3, 2, 0, 1, 7, 4, 3, 6),
    createData("Mannschaft 10", 3, 2, 0, 1, 7, 4, 3, 6),
    createData("Mannschaft 11", 3, 2, 0, 1, 7, 4, 3, 6),
    createData("Mannschaft 12", 3, 2, 0, 1, 7, 4, 3, 6),
];

const groupD = [
    createData("Mannschaft 13", 3, 2, 0, 1, 7, 4, 3, 6),
    createData("Mannschaft 14", 3, 2, 0, 1, 7, 4, 3, 6),
    createData("Mannschaft 15", 3, 2, 0, 1, 7, 4, 3, 6),
    createData("Mannschaft 16", 3, 2, 0, 1, 7, 4, 3, 6),
];

//iterate over the groups and create a table for each group
const groups = [groupA, groupB, groupC, groupD];

export default function GroupTable() {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table
                    sx={{ minWidth: 650 }}
                    size="small"
                    aria-label="a dense table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>Mannschaft</TableCell>
                            <TableCell align="center">Spiele</TableCell>
                            <TableCell align="center">S</TableCell>
                            <TableCell align="center">U</TableCell>
                            <TableCell align="center">N</TableCell>
                            <TableCell align="center">Tor</TableCell>
                            <TableCell align="center">GT</TableCell>
                            <TableCell align="center">T/D</TableCell>
                            <TableCell align="center">Pkt</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {groups.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">
                                    {row.gamesPlayed}
                                </TableCell>
                                <TableCell align="center">
                                    {row.gamesWon}
                                </TableCell>
                                <TableCell align="center">
                                    {row.gamesDrawn}
                                </TableCell>
                                <TableCell align="center">
                                    {row.gamesLost}
                                </TableCell>
                                <TableCell align="center">
                                    {row.goalsScored}
                                </TableCell>
                                <TableCell align="center">
                                    {row.goalsConceded}
                                </TableCell>
                                <TableCell align="center">
                                    {row.goalDifference}
                                </TableCell>
                                <TableCell align="center">
                                    {row.points}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
