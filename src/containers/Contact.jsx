import { useState } from "react";
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from "@mui/material";

const Contact = ({ open, handleClose }) => {
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Send me a message</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Do you like my project? You have questions? Contact me!
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="subject"
                    label="Subject"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={subject}
                    onChange={handleSubjectChange}
                />
                <TextField
                    label="Message"
                    fullWidth
                    multiline
                    rows={5}
                    variant="standard"
                    value={message}
                    onChange={handleMessageChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button
                    href={`mailto:sarah.hitier@sfr.fr?subject=${subject}&body=${message}`}
                    onClick={handleClose}
                >
                    Send
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Contact;
