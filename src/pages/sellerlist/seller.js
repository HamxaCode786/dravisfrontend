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
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Toolbar from "@mui/material/Toolbar";
import CropFreeIcon from "@mui/icons-material/CropFree";
import { Icon } from "@mui/material";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import { useTheme, useMediaQuery } from "@mui/material";
import Table from "react-bootstrap/Table";
import { FaYoutube } from "react-icons/fa";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
} from "mdb-react-ui-kit";
import Logomessage from "../../assets/image/messagelogo.png";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import Pagination from "react-bootstrap/Pagination";


import Form from "react-bootstrap/Form";
const drawerWidth = 210;

const Seller = () => {
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

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // 'md' is equivalent to 768px
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };



  /* for adding pagination intables */
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>

    
    );


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
            <Box className="fh_startsale"> List of Sellers</Box>
            <Box className="sh_startsale"> Search Seller List</Box>
          </Box>
          <Box className="th_startsale"> List of Sellers</Box>
          <Box className="border_1">
            <Box className="alert_psp">
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert className="st_1" variant="outlined" severity="info">
                  <b>Search Social Media Account.</b>
                  <br />
                  Add Link Subscribers and Income from this Social Media
                  Account.
                </Alert>
              </Stack>
            </Box>
            <MDBContainer fluid className="sl_form_up">
              <MDBCard className="mx-5 mb-5 p-5 ss">
                <MDBCardBody className="sl_cardbody_123">
                  <Form.Select
                    className="seller_d11"
                    aria-label="Default select example"
                  >
                    <option className="dd_sl_1">Select Social Network</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <MDBRow className="sl_row_123">
                    <MDBCol className="col_slp" col="6">
                      <MDBInput
                        className=" seller_d1 "
                        wrapperClass="mb-4  seller_d1_font"
                        label="Subscribers from"
                        id="Form control lg"
                        type="text"
                      />
                    </MDBCol>

                    <MDBCol className="col_slp" col="6">
                      <MDBInput
                        className="dummy_1 seller_d1"
                        wrapperClass="mb-4 seller_d1_font"
                        label="Subscribers to"
                        id="Form control lg"
                        type="text"
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="sl_row_123">
                    <MDBCol className="col_slp" col="6">
                      <MDBInput
                        className="dummy_1 seller_d1 "
                        wrapperClass="mb-4 seller_d1_font"
                        label="Price From"
                        id="Form control lg"
                        type="text"
                      />
                    </MDBCol>

                    <MDBCol className="col_slp" col="6">
                      <MDBInput
                        className="dummy_1 seller_d1"
                        wrapperClass="mb-4 seller_d1_font"
                        label="Price To"
                        id="Form control lg"
                        type="text"
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBInput
                    className="dummy_1 seller_d12"
                    wrapperClass="mb-4 seller_d1_font"
                    label="Verified Identity"
                    id="Form control lg"
                    type="text"
                  />
                  <Container className="seller_search_button">
                    <Button className="s_s_bt1">Search</Button>
                  </Container>
                </MDBCardBody>
              </MDBCard>
            </MDBContainer>
            <Box className="table_heightf">
            <div class="table-responsive">
              <Table className="tb_custom">
                <thead className="table_headfavourite">
                  <tr className="table_headfavourite2">
                    <th className="head_1_1_2">Date of Creation</th>
                    <th className="head_1_1_2">Account/Channel Group Name </th>
                    <th className="head_1_1">Amount</th>
                    <th className="head_1_1">Subscriber</th>
                    <th className="head_1_1">Status</th>
                    <th className="head_1_1">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="date_1_2">05-03-2023</td>
                    <td>
                      <h4 className="youtube_headings1">
                        <FaYoutube className="yt_iconfp" /> XYZ Gaming Zone
                      </h4>
                      <p className="youtube_headings">
                        Gaming and Entertainment\Channel earning from 6Month
                      </p>
                    </td>
                    <td className="date_1_1">$ 60</td>
                    <td className="date_1_1">2000+</td>
                    <td>
                      <Button className="fb_g1">Sale</Button>
                    </td>
                    <td>
                      <Button className="fb_g2">Open</Button>
                    </td>
                  </tr>
                  <tr>
                    <td className="date_1_2">05-03-2023</td>
                    <td>
                      <h4 className="youtube_headings1">
                        <FaYoutube className="yt_iconfp" /> XYZ Gaming Zone
                      </h4>
                      <p className="youtube_headings">
                        Gaming and Entertainment\Channel earning from 6Month
                      </p>
                    </td>
                    <td className="date_1_1">$ 60</td>
                    <td className="date_1_1">2000+</td>
                    <td>
                      <Button className="fb_g1">Sale</Button>
                    </td>
                    <td>
                      <Button className="fb_g2">Open</Button>
                    </td>
                  </tr>
                  <tr>
                    <td className="date_1_2">05-03-2023</td>
                    <td>
                      <h4 className="youtube_headings1">
                        <FaYoutube className="yt_iconfp" /> XYZ Gaming Zone
                      </h4>
                      <p className="youtube_headings">
                        Gaming and Entertainment\Channel earning from 6Month
                      </p>
                    </td>
                    <td className="date_1_1">$ 60</td>
                    <td className="date_1_1">2000+</td>
                    <td>
                      <Button className="fb_g1">Sale</Button>
                    </td>
                    <td>
                      <Button className="fb_g2">Open</Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <div>
                <Pagination className="pagi01">{items}</Pagination>
                <br />
              </div>
            </div>
          </Box>





          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Seller;
