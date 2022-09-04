import { KeyboardArrowRight } from "@mui/icons-material";
import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const field = {
    display: 'block',
    marginBottom: 1
}

export default function CreatePage() {
    // Form details
    const [noteTitle, setNoteTitle] = useState(""); 
    const [noteDetails, setNoteDetails] = useState("");
    
    // Access to react dom navigation
    const navigation = useNavigate()

    // Our submit for creating a new note
    const handleSubmit = (event) => {
        event.preventDefault(); 

        fetch('http://localhost:8000/notes', { // Fetch and send a post request
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({noteTitle, noteDetails})
        })
        .then(() => navigation('/list')) // send client back to /list page
    }

    // Notes form
    return (
        <div>
            <Typography sx={{marginTop: 1}} variant="h5" color="textSecondary" component="h2" gutterBottom>
                Create a new note
            </Typography>

            <form onSubmit={handleSubmit}>
                <TextField sx={field} label="Note title" variant="outlined" color="secondary" onChange={(event) => setNoteTitle(event.target.value)} fullWidth required/>
                <TextField sx={field} label="Note details" multiline rows={4} variant="outlined" color="secondary" onChange={(event) => setNoteDetails(event.target.value)} fullWidth required/>

                <Button type="submit" color="secondary" variant="contained" endIcon={<KeyboardArrowRight/>}>
                    Submit
                </Button>
            </form>
        </div>
    );
}