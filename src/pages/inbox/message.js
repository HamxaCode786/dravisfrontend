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
import { useState } from 'react';
import { useTheme, useMediaQuery } from "@mui/material";

const drawerWidth = 300;

const Sale = () => {
  const menuItems = [
    { text: 'Home', path: '/', icon: <HomeTwoToneIcon /> },
    { text: 'Profile', path: '/profilesection', icon: <AccountCircleOutlinedIcon /> },
    { text: 'Add New Listing', path: "/startsale", icon: <CampaignOutlinedIcon /> },
    { text: 'My Add', path: '/myadpage', icon: <StarBorderOutlinedIcon /> },
    { text: 'Favourites', path: '/favourites', icon: <MapsUgcOutlinedIcon /> },
    { text: 'Inbox', path: '/inbox', icon: <InboxIcon /> },
    { text: 'Billings', path: '/billings', icon: <LocalAtmOutlinedIcon /> },
    { text: 'Password', path: '', icon: <EnhancedEncryptionOutlinedIcon /> },
    { text: 'Logout', path: '/', icon: <LogoutRoundedIcon /> }
  ];

  /* Drawer Toggle Code */
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // 'md' is equivalent to 768px
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };



/* ChatBot Configurations */

  // const [message, setMessage] = useState('');
  // const [chat, setChat] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const handleSend = async () => {
  //   if (!message.trim()) return;

  //   const userMessage = { from: 'user', text: message };
  //   setChat([...chat, userMessage]);
  //   setMessage('');

  //   setLoading(true);

  //   try {
  //     console.log('Sending request with API key:',);
  //     console.log('Sending message:', message);

  //     const response = await axios.post(
  //       
  //       {
  //         prompt: message,
  //         max_tokens: 150,
  //         n: 1,
  //         stop: null,
  //         temperature: 0.5,
  //       },
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'Authorization': `Bearer ${}`,
  //         },
  //       }
  //     );

  //     console.log('API response:', response.data);

  //     if (response.data && response.data.choices && response.data.choices.length > 0) {
  //       const botMessage = { from: 'bot', text: response.data.choices[0].text.trim() };
  //       setChat([...chat, userMessage, botMessage]);
  //     } else {
  //       console.error('Unexpected API response format:', response.data);
  //     }
  //   } catch (error) {
  //     console.error('Error sending message to OpenAI:', error);
  //   }

  //   setLoading(false);
  

  return (
    <div className="drawer_1">
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              zIndex: isMobile ? "1300" : "-1",
              height: "100%",
              position: isMobile ? "fixed" : "static",
              backgroundColor: isMobile
                ? theme.palette.background.paper
                : "rgba(0, 0, 0, 0.02)",
            },
          }}
          variant={isMobile ? "temporary" : "permanent"}
          open={isMobile ? mobileOpen : true}
          onClose={handleDrawerToggle}
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
        {/* <div style={{ padding: '20px' }}>
      <h1>Inbox</h1>
      <div style={{ border: '1px solid #ccc', padding: '10px', height: '300px', overflowY: 'scroll' }}>
        {chat.map((entry, index) => (
          <div key={index} style={{ textAlign: entry.from === 'user' ? 'right' : 'left' }}>
            <p><strong>{entry.from === 'user' ? 'You' : 'Bot'}:</strong> {entry.text}</p>
          </div>
        ))}
        {loading && <p>Loading...</p>}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        style={{ width: '80%', padding: '10px', marginRight: '10px' }}
      />
      <button onClick={handleSend} style={{ padding: '10px' }}>Send</button>
    </div> */}
         
        </Box>
      </Box>
    </div>
  );
}

export default Sale;
