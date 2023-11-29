import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { MatchDialog } from "../dialogs/MatchDialog";

export function GroupMatchList() {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState("");

    const handleClickOpenDialog = () => {
        setOpen(true);
    };

    const handleCloseDialog = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };
    return (
        <>
            <List>
                <ListItem>Gruppe A</ListItem>
                <ListItemButton onClick={handleClickOpenDialog}>
                    Mannschaft A1 vs Mannschaft A2
                </ListItemButton>
                <MatchDialog
                    selectedValue={selectedValue}
                    open={open}
                    onClose={handleCloseDialog}
                />
                <ListItemButton onClick={handleClickOpenDialog}>
                    Mannschaft A1 vs Mannschaft A3
                </ListItemButton>
                <ListItemButton onClick={handleClickOpenDialog}>
                    Mannschaft A1 vs Mannschaft A4
                </ListItemButton>
                <ListItemButton onClick={handleClickOpenDialog}>
                    Mannschaft A2 vs Mannschaft A3
                </ListItemButton>
                <ListItemButton onClick={handleClickOpenDialog}>
                    Mannschaft A2 vs Mannschaft A4
                </ListItemButton>
                <ListItemButton onClick={handleClickOpenDialog}>
                    Mannschaft A3 vs Mannschaft A4
                </ListItemButton>
            </List>
            <List>
                <ListItem>Gruppe B</ListItem>
                <ListItemButton onClick={handleClickOpenDialog}>
                    Mannschaft B1 vs Mannschaft B2
                </ListItemButton>
                <ListItemButton onClick={handleClickOpenDialog}>
                    Mannschaft B1 vs Mannschaft B3
                </ListItemButton>
                <ListItemButton onClick={handleClickOpenDialog}>
                    Mannschaft B1 vs Mannschaft B4
                </ListItemButton>
                <ListItemButton onClick={handleClickOpenDialog}>
                    Mannschaft B2 vs Mannschaft B3
                </ListItemButton>
                <ListItemButton onClick={handleClickOpenDialog}>
                    Mannschaft B2 vs Mannschaft B4
                </ListItemButton>
                <ListItemButton onClick={handleClickOpenDialog}>
                    Mannschaft B3 vs Mannschaft B4
                </ListItemButton>
            </List>
            <List>
                <ListItem>Gruppe C</ListItem>
                <ListItemButton onClick={handleClickOpenDialog}>
                    Mannschaft C1 vs Mannschaft C2
                </ListItemButton>
                <ListItemButton onClick={handleClickOpenDialog}>
                    Mannschaft C1 vs Mannschaft C3
                </ListItemButton>
                <ListItemButton onClick={handleClickOpenDialog}>
                    Mannschaft C1 vs Mannschaft C4
                </ListItemButton>
                <ListItemButton onClick={handleClickOpenDialog}>
                    Mannschaft C2 vs Mannschaft C3
                </ListItemButton>
                <ListItemButton onClick={handleClickOpenDialog}>
                    Mannschaft C2 vs Mannschaft C4
                </ListItemButton>
                <ListItemButton onClick={handleClickOpenDialog}>
                    Mannschaft C3 vs Mannschaft C4
                </ListItemButton>
            </List>
            <List>
                <ListItem>Gruppe D</ListItem>
                <ListItemButton onClick={handleClickOpenDialog}>
                    Mannschaft D1 vs Mannschaft D2
                </ListItemButton>
                <ListItemButton onClick={handleClickOpenDialog}>
                    Mannschaft D1 vs Mannschaft D3
                </ListItemButton>
                <ListItemButton onClick={handleClickOpenDialog}>
                    Mannschaft D1 vs Mannschaft D4
                </ListItemButton>
                <ListItemButton onClick={handleClickOpenDialog}>
                    Mannschaft D2 vs Mannschaft D3
                </ListItemButton>
                <ListItemButton onClick={handleClickOpenDialog}>
                    Mannschaft D2 vs Mannschaft D4
                </ListItemButton>
                <ListItemButton onClick={handleClickOpenDialog}>
                    Mannschaft D3 vs Mannschaft D4
                </ListItemButton>
            </List>
        </>
    );
}
