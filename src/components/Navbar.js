import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { makeStyles} from '@material-ui/core/styles';
import MobileRightMenuSlider from "@material-ui/core/Drawer"
import {
AppBar,
Toolbar,
ListItem,
IconButton,
ListItemText,
ListItemIcon,
Avatar,
Divider,
List,
Typography,
Box,
} from "@material-ui/core";
import {
 ArrowBack,
 AssignmentInd,
 Home,
 Apps,
 ContactMail

} from "@material-ui/icons"
import avatar from "../images/avatar.png"
//CSS STYLES
const useStyles = makeStyles( theme=> ({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)

    },
    listItem: {
        color: "tan"
    }
}));


const menuItems = [
    {
        listIcon:<Home/>,
        listTest: "Home",
        ListPath: "/"

    },
    {
        listIcon:<AssignmentInd/>,
        listTest: "Resume",
        ListPath: "/resume"

    },
    {
        listIcon:<Apps/>,
        listTest: "Portfolio"

    },
    {
        listIcon:<ContactMail/>,
        listTest: "Contacts"

    },
]

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })

    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open});
    };
    const classes = useStyles();
    
    const sideList = slider => (
        <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider(slider, false)}>
        <Avatar className={classes.avatar} src={avatar} alt="avatarme" />
        <Divider />
        <List>
            {menuItems.map((lsItem, key)=>(

            <ListItem button key={key} component={Link} to={lsItem.ListPath}>
                <ListItemIcon className={classes.listItem}>{lsItem.listIcon}</ListItemIcon>
                <ListItemText className={classes.listItem} primary={lsItem.listTest} /> 
                </ListItem>
                ) )};

        </List>
        </Box>

    )
    return (
        <>

       

         
        <Box component="nav">
            <AppBar position="static" style={{background:  "#222"}}>
                <Toolbar>   
                    <IconButton onClick={toggleSlider("right", true)}>
                      <ArrowBack style={{ color: "tomato"}} />
                    </IconButton>
                    <Typography variant="h5" style={{ color: "tan"}}>
                      PortFolio
                    </Typography>
                    < MobileRightMenuSlider anchor="right" open={state.right} onClose={toggleSlider("right", false)}>
                        {sideList("right")}
                    </MobileRightMenuSlider>
                </Toolbar>
            </AppBar>
            
        </Box>
        </>
    );
};

export default Navbar;
