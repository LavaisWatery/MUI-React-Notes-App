import { SubjectOutlined } from "@mui/icons-material";
import { colors, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

// Custom styles for our page children
const useStyles = makeStyles({
    page: {
        background: '#f9f9f9',
        width: '100%',
    },
    root: {
        display: 'flex'
    }
})


// We want to pass children in so it doesn't discard the rest of our pages since we're using our App.js to display this
export default function SiteLayout({ children }) {
    const classes = useStyles();
    const navigation = useNavigate()

    const siteMenuItems = [
        {
            display: 'Home Page',
            icon: <SubjectOutlined color="secondary" />,
            path: '/'
        },
        {
            display: 'Create Notes',
            icon: <SubjectOutlined color="secondary" />,
            path: '/create'
        },
        {
            display: 'View Notes',
            icon: <SubjectOutlined color="secondary" />,
            path: '/list'
        },
        {
            display: "Table View",
            icon: <SubjectOutlined color="secondary" />,
            path: '/tablelist'
        },
        {
            display: "Spam Test",
            icon: <SubjectOutlined color="secondary" />,
            path: '/spam'
        }
    ]

    return (
        <div className={classes.root}>
            <Drawer variant="permanent"  anchor="center" sx={{width: 240,".MuiDrawer-paper": {width: 240}}}>
                <div>
                    <Typography sx={{textAlign: "center"}} variant="h5">
                        MUI Notes 
                    </Typography>
                </div>
                <Divider sx={{background: colors.grey[500]}}/>

                <List>
                    {siteMenuItems.map(item => (
                            <ListItem button key={item.display} onClick={() => navigation(item.path)}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.display}/>
                            </ListItem>
                        ))
                    }
                </List>                
                <Divider sx={{background: colors.grey[500]}}/>
                
            </Drawer>

            <div className={classes.page}>
                <Header/>
                {children}
            </div>
        </div>
    )
}