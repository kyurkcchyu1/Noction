import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import {ExpandLess, ExpandMore, StarBorder} from "@mui/icons-material";
import {Collapse} from "@mui/material";

const drawerWidth = 240;

const SideBar = () => {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {['User Management', 'System Management'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <PersonIcon /> : <WysiwygIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            {/*<Collapse in={open} timeout="auto" unmountOnExit>*/}
                            {/*    <List component="div" disablePadding>*/}
                            {/*        <ListItemButton sx={{ pl: 4 }}>*/}
                            {/*            <ListItemIcon>*/}
                            {/*                <StarBorder />*/}
                            {/*            </ListItemIcon>*/}
                            {/*            <ListItemText primary="Starred" />*/}
                            {/*        </ListItemButton>*/}
                            {/*    </List>*/}
                            {/*</Collapse>*/}
                        </ListItem>
                    ))}
                </List>
                <Divider />
            </Box>
        </Drawer>
    );
};

export default SideBar;