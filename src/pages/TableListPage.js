import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Container } from "@mui/system";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

export default function TableList() {
    const [notes, setNotes] = useState([]); 

    // Fetch all the notes from our json server
    useEffect(() => {
        fetch('http://127.0.0.1:8000/notes')
        .then(res => res.json())
        .then(data => setNotes(data));
    }, []);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
    ]

    return (
        <Container sx={{display: 'flex', paddingTop: 10}}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Note Title</TableCell>
                        <TableCell>Note Details</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {notes.map(note => (
                        <TableRow
                        key={note.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {note.id}
                            </TableCell>
                            <TableCell>{note.noteTitle}</TableCell>
                            <TableCell>{note.noteDetails}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    );
}