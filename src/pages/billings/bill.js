import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import EnhancedEncryptionOutlinedIcon from '@mui/icons-material/EnhancedEncryptionOutlined';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import Logo_listing from '../../assets/image/drawerimage.png';


const drawerWidth = 300;



const ad = () => {
    const menuItems = [
        { text: 'Home', path: '/', icon: <HomeTwoToneIcon /> },
        { text: 'Profile', path: '/profilesection', icon: <AccountCircleOutlinedIcon /> },
        { text: 'Add New Listing', path: '/startsale', icon: <CampaignOutlinedIcon /> },
        { text: 'My Add', path: "/myadpage", icon: <StarBorderOutlinedIcon /> },
        { text: 'Favourites', path: '/favourites', icon: <MapsUgcOutlinedIcon /> },
        { text: 'Inbox', path: '/inbox', icon: <InboxIcon /> },
        { text: 'Billings', path: '', icon: <LocalAtmOutlinedIcon /> },
        { text: 'Password', path: '', icon: <EnhancedEncryptionOutlinedIcon /> },
        { text: 'Logout', path: '/', icon: <LogoutRoundedIcon /> }
      ];
    
  return (
    
    <div className="drawer_1">
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              zIndex: '-1',
              height: '100%',
              position: 'static',
              backgroundColor: 'rgba(0, 0, 0, 0.02)',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <List>
            <div className="drawer_logo">
              <img className="drawer_img" src={Logo_listing} alt="Logo" />
            </div>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.path}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <p>Billings</p>
        </Box>
      </Box>
    </div>
  );
}
export default ad