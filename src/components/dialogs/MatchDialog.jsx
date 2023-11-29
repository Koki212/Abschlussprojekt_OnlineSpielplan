import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export function MatchDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Match</DialogTitle>
            <Stack direction={"row"} spacing={2} margin={5}>
                <h3>Team 1</h3>
                <TextField
                    id="outlined-number"
                    type="number"
                    size="small"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <h2>:</h2>
                <TextField
                    id="outlined-number"
                    type="number"
                    size="small"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <h3>Team 2</h3>
            </Stack>
            <Button
                color="success"
                variant="contained"
                margin="normal"
                onClick={handleClose}
            >
                Speichern
            </Button>
        </Dialog>
    );
}

MatchDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};
