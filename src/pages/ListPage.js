import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react"
import NoteCard from "../components/NoteCard";

export default function ListPage() {
    const [notes, setNotes] = useState([]); 

    // Fetch all the notes from our json server
    useEffect(() => {
        fetch('http://localhost:8000/notes')
        .then(res => res.json())
        .then(data => setNotes(data))
    }, []);

    // Delete function for our note cards
    const handleDelete = async (noteID) => {
        await fetch('http://localhost:8000/notes/' + noteID, { // Send delete request to server for the note id
            method: 'DELETE'
          })
          setNotes(notes.filter(note => note.id != noteID)) // Set new notes after filtering
    }

    // Create container with a grid for our notecards, set small, medium, large variables for the amount of grids
    return (
        <Container sx={{paddingTop: 10}}>
            <Grid container spacing={3}>
                {notes.map(note => (
                    <Grid item xs={12} md={6} lg={4} key={note.id}>
                        <NoteCard note={note} deleteHandle={handleDelete}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}