/*import React from 'react';
import Logo_listing from '../../assets/image/drawerimage.png';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import EnhancedEncryptionOutlinedIcon from '@mui/icons-material/EnhancedEncryptionOutlined';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import AppBar from '@mui/material/AppBar';

const drawerWidth = 400;


const Sale = () => {
  return (
    <div class="drawer_1">
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
            position:'static',
            backgroundColor: 'rgba(0, 0, 0, 0.02)',
        }}}
        variant="permanent"
        anchor="left"
      >
        
        <List>
        <div Class="drawer_logo">
          <img class="drawer_img"  src={Logo_listing}/>
        </div>
          {['Home', 'Profile', 'Add New Listing', 'My Add', 'Favourites', 'Inbox','Billings','Password','Logout'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                
                <ListItemIcon>
                {index === 0 && <InboxIcon/>, path: "/"}
                {index === 1 && <HomeTwoToneIcon/>}
                {index === 2 && <AccountCircleOutlinedIcon/>}
                {index === 3 && <CampaignOutlinedIcon/>}
                {index === 4 && <StarBorderOutlinedIcon/>}
                {index === 5 && <MapsUgcOutlinedIcon/>}
                {index === 6 && <LocalAtmOutlinedIcon/>}
                {index === 7 && <EnhancedEncryptionOutlinedIcon/>}
                {index === 8 && <LogoutRoundedIcon/>}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        
      </Box>
      
    </Box>
    </div>
  );
}
export default Sale */

// src/components/Sale.js
import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import EnhancedEncryptionOutlinedIcon from "@mui/icons-material/EnhancedEncryptionOutlined";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import Logo_listing from "../../assets/image/drawerimage.png";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Toolbar from "@mui/material/Toolbar";
import CropFreeIcon from "@mui/icons-material/CropFree";
import { Icon } from "@mui/material";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import { useTheme, useMediaQuery } from "@mui/material";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBInput,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { MDBTextArea } from "mdb-react-ui-kit";
import Drop from "./drop";
import Message from "../../assets/image/messagelogo.png";
const drawerWidth = 210;

const Sale = () => {
  const [age, setAge] = React.useState("");

  
  const menuItems = [
    { text: "Home", path: "/", icon: <HomeTwoToneIcon /> },
    {
      text: "Profile",
      path: "/profilesection",
      icon: <AccountCircleOutlinedIcon />,
    },
    {
      text: "Add New Listing",
      path: "/startsale",
      icon: <CampaignOutlinedIcon />,
    },
    { text: "My Add", path: "/myadpage", icon: <StarBorderOutlinedIcon /> },
    { text: "Favourites", path: "/favourites", icon: <MapsUgcOutlinedIcon /> },
    { text: "Inbox", path: "/inbox", icon: <InboxIcon /> },
    { text: "Billings", path: "/billings", icon: <LocalAtmOutlinedIcon /> },
    { text: "Password", path: "", icon: <EnhancedEncryptionOutlinedIcon /> },
    { text: "Logout", path: "/", icon: <LogoutRoundedIcon /> },
  ];

  /* Drawer Toggle Button Code */

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // 'md' is equivalent to 768px
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <div className="drawer_1">
      <Box sx={{ display: "flex" }}>
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
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Box>
            <Toolbar className="ab_sales">
              {isMobile && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
              )}
              <Container className="icon_sale1">
                <Icon className="s1">
                  <CropFreeIcon />
                </Icon>
                <Icon className="s2">
                  <NotificationsActiveOutlinedIcon />
                </Icon>
                <Icon className="s3">
                  <ChatOutlinedIcon />
                </Icon>
              </Container>
            </Toolbar>
          </Box>
          <Box>
            <Box className="fh_startsale"> Add New Listing</Box>
            <Box className="sh_startsale"> Add New Listing</Box>
          </Box>
          <Box className="th_startsale"> Add New List</Box>
          <Box className="border_1">
            <Box className="alert-1">
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert className="st_1" variant="outlined" severity="info">
                  <p>
                    <b>Search Social Media Account.</b>
                    <br />
                    Add Link Subscribers and Income from this Social Media
                    Account.{" "}
                  </p>
                </Alert>
              </Stack>
            </Box>
            <MDBContainer fluid className="trying_ss_123">
              <MDBCard className="mx-5 mb-5 p-5 ss">
                <MDBCardBody className="p-2.5 hamza_1">
                  <MDBInput
                    className="dummy_1"
                    wrapperClass="mb-6"
                    label="Link of Social Media Account/Channel/Group which want to sale"
                    id="form1"
                    type="email"
                  />

                  <MDBRow className="row_123">
                    <MDBDropdown className="borders_ss1">
                      <MDBDropdownToggle className="dssp">
                        Choose Subject
                      </MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem link>Action</MDBDropdownItem>
                        <MDBDropdownItem link>Another action</MDBDropdownItem>
                        <MDBDropdownItem link>
                          Something else here
                        </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>{" "}
                    <MDBInput
                      className="dummy_6"
                      wrapperClass="mb-6"
                      label="Enter Price"
                      id="Form control lg"
                      type="text"
                    />
                  </MDBRow>
                  <MDBRow className="row_123">
                    <MDBInput
                      className="dummy_6"
                      wrapperClass="mb-6 hamza_12345"
                      label="Income in $ per month"
                      id="Form control lg"
                      type="text"
                    />

                    <MDBInput
                      className="dummy_6"
                      wrapperClass="mb-6"
                      label="Expense in $ per month"
                      id="Form control lg"
                      type="text"
                    />
                  </MDBRow>
                  <MDBDropdown className="borders_ss12">
                    <MDBDropdownToggle className="dssp2">
                      Choose Subject
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dssp_3">
                      <MDBDropdownItem link>Action</MDBDropdownItem>
                      <MDBDropdownItem link>Another action</MDBDropdownItem>
                      <MDBDropdownItem link>
                        Something else here
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                  <MDBTextArea
                    className="dummy_8"
                    label="Description"
                    id="textAreaExample"
                    rows="{2}"
                  />
                </MDBCardBody>
              </MDBCard>
            </MDBContainer>
            <Box className="after_form">
              <h1 className="ss_img">
                Attach screenshots (proof of income, etc.)
              </h1>
              <Drop />
              <h1 className="ss_img2">
                If you do not need to leave contacts and open DM on the page, we
                are ready to give you 50% more rating after the transaction is
                completed, as this will make it easier for us to control. Rating
                is one of the main factors of trust from buyers. An additional
                rating will be automatically added after the completion of the
                transaction if you check the box below, but in case of violation
                of this agreement, we will have to block you.
              </h1>
              <FormGroup className="chexbox_12">
                <FormControlLabel
                  className="checkbox_1"
                  control={<Checkbox defaultChecked />}
                  label="I agree to remove contacts / close DM on the page to get 50% more rating"
                />
              </FormGroup>
            </Box>
            <Container className="ss_button1">
              <Button className="ss_bs1">Add In Listing</Button>
            </Container>
          </Box>
          <div className="logo_every_page">
            <img className="logo_eps" src={Message} alt="" />
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Sale;
