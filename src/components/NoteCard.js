import { DeleteOutlined } from "@mui/icons-material";
import { Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material";

export default function NoteCard({note, deleteHandle}) {
    return (
        <div>
            <Card>
                <CardHeader action={
                    <IconButton onClick={() => deleteHandle(note.id)}>
                        <DeleteOutlined />
                    </IconButton>
                } title={note.noteTitle}>
                </CardHeader> 

                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        { note.noteDetails }
                    </Typography>
                </CardContent>
            </Card>
        </div>        
    )
}