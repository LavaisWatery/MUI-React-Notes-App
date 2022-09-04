import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Lyrics } from "@mui/icons-material";

export default function Header() {
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' sx={{ mr: 2 }}>
                    <Lyrics/>
                </IconButton>

                <Typography variant='h5' noWrap component='div' sx={{display: {xs: 'none', sm: 'block'}}}>
                    Test MUI Notes App
                </Typography>
            </Toolbar>
        </AppBar>
    );
}