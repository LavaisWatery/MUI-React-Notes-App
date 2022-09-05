import { AppBar, Button, CssBaseline, IconButton, Toolbar, Typography } from "@mui/material";
import { Lyrics } from "@mui/icons-material";
import { Box } from "@mui/system";

export default function Header() {
    return (
        <AppBar position='static' sx={{position: 'relative'}}>
            <CssBaseline/>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' sx={{ mr: 2 }}>
                    <Lyrics/>
                </IconButton>

                <Typography variant='h5' noWrap component='div' sx={{display: {xs: 'none', sm: 'block'}}}>
                    Test MUI Notes App
                </Typography>

                <Box sx={{display:"flex", justifyContent:"flex-end", alignItems:"flex-end"}}>
                    <Button color="secondary">test</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}