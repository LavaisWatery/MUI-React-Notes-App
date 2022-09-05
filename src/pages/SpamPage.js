import { Box, Button, Container, Slider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRandomInt } from "../util/Util";

const useStyles = makeStyles({
    root: {
        
    }
})

export default function Spam() {
    const classes = useStyles();
    const navigate = useNavigate();
    const [noteAmmount, setNoteAmount] = useState(30)

    const onSubmit = () => {
        var names = []

        fetch('test.txt')
        .then(resp => resp.text())
        .then(text => names = text.split('\n'))
        .then(() => start())

        async function start() {
            for(let i = 0; i < (noteAmmount - 1); i++) {
                await next()
            }

            navigate('/tablelist')
        }

        function next() {
            const noteTitle = names[getRandomInt(names.length)]
            const noteDetails = "Details"

            return fetch('http://127.0.0.1:8000/notes', {
                method: 'POST',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({noteTitle, noteDetails})
            })
        }
    }

    return (
        <Box display="flex" justifyContent="center" marginTop={10}>
            <Container>
                <Slider 
                aria-label="# of Notes"
                defaultValue={30}
                valueLabelDisplay="auto"
                step={1}
                min={1}
                max={100}
                onChange={(event) => setNoteAmount(event.target.value)}
                />            
                <Button variant="outlined" onClick={onSubmit}>Create notes</Button>
            </Container>
        </Box>
    )
}