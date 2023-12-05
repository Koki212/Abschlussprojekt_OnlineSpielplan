import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { MatchDialog } from "../dialogs/MatchDialog";

export function KoPhaseMatchList() {
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
                <ListItem>VIERTELFINALE</ListItem>
                <ListItemButton onClick={handleClickOpenDialog}>
                    Erster Gruppe A vs Zweiter Gruppe B
                </ListItemButton>
                {/* <MatchDialog
                    selectedValue={selectedValue}
                    open={open}
                    onClose={handleCloseDialog}
                /> */}
                <ListItemButton onClick={handleClickOpenDialog}>
                    Erster Gruppe B vs Zweiter Gruppe A
                </ListItemButton>
                <ListItemButton onClick={handleClickOpenDialog}>
                    Erster Gruppe C vs Zweiter Gruppe D
                </ListItemButton>
                <ListItemButton onClick={handleClickOpenDialog}>
                    Erster Gruppe D vs Zweiter Gruppe C
                </ListItemButton>
            </List>
            <List>
                <ListItem>HALBFINALE</ListItem>
                <ListItemButton onClick={handleClickOpenDialog}>
                    Sieger VF1 vs Sieger VF2
                </ListItemButton>
                <ListItemButton onClick={handleClickOpenDialog}>
                    Sieger VF3 vs Sieger VF4
                </ListItemButton>
            </List>
            <List>
                <ListItem>Spiel um Platz 3</ListItem>
                <ListItemButton onClick={handleClickOpenDialog}>
                    Verlierer HF1 vs Verlierer HF2
                </ListItemButton>
            </List>
            <List>
                <ListItem>FINALE</ListItem>
                <ListItemButton onClick={handleClickOpenDialog}>
                    Sieger HF1 vs Sieger HF2
                </ListItemButton>
            </List>
        </>
    );
}
