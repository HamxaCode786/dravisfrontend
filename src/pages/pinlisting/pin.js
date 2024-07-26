import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import Box from "@mui/material/Box";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";


const Pin = () => {
  return (
    <div>
      <div className="cd_h1">
        <Box>
          <Box className="fh_startsale">Pin Listing</Box>
          <Box className="sh_startsale">Add Pin Listing And Pay</Box>
        </Box>
        <h1 className="createdeal_h1_pp">Pin Listing</h1>
        <Box className="th_startsalepp">
          <Box>
          <Box className='alert_plp11'>
            <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert className="st_1" variant="outlined" severity="info">
                  <b>Search Social Media Account.</b>
                  <br />
                  Add Link Subscribers and Income from this Social Media
                  Account.
                </Alert>
              </Stack>
              </Box>
            <h1 className="pin_listing_h1_pph1">Read Carefully</h1>

            <p1 className="pin_listing_p1">
              Add pin for top searching in every week.<b> 50 to 70 pages </b>
              daily updated in this page that why your listing go bottom in the
              page did not search on top. Price to pin your listing for one week
              -<b>$15</b>. A premium PIN makes your listing even more visible as
              it will always stay at the top of search.
              <br></br>
            </p1>

            <Box className="createdealemail_1">
              <h4 className="create_dealp2">
                Add Information for Top Searching <br></br>
              </h4>
            </Box>
            <Box>
              <div className="DD_pinpage">
                <MDBDropdown className="dd_plp1">
                  <MDBDropdownToggle className="d1122">BTS</MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>Action</MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </div>
              <div className="dd_2pinp">
                <MDBDropdown>
                  <MDBDropdownToggle className="d1122">Standard</MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>Action</MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
                <MDBDropdown>
                  <MDBDropdownToggle className="d1122">One Week</MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>Action</MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </div>
            </Box>
            <div>
                <h1 className="pin_list_heading_3">Total Amount: $2.5 </h1>
            </div>
            <div className="last_button_pinlist">
            <MDBBtn className="cd_button_last"> Pay Now</MDBBtn>
            <MDBBtn className="cd_button_last_2"> Pin One More</MDBBtn>
            </div>
            
          </Box>
        </Box>
        
        <h1 className="createdeal_h1_pp">Highlight Listing</h1>
        <Box className="th_startsalepp">
          <Box>

            

            <Box className="createdealemail_1">
            <Box className='alert_plp'>
            <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert className="st_1" variant="outlined" severity="info">
                  <b>Search Social Media Account.</b>
                  <br />
                  Add Link Subscribers and Income from this Social Media
                  Account.
                </Alert>
              </Stack>
              </Box>
              <h4 className="create_dealp2">
                Add Information for Top Searching <br></br>
              </h4>
            </Box>
            <Box>
              <div className="DD_pinpage">
                <MDBDropdown>
                  <MDBDropdownToggle className="d1122">BTS</MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>Action</MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </div>
              <div className="dd_2pinp">
                <MDBDropdown>
                  <MDBDropdownToggle className="d1122">One Week</MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>Action</MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
                <MDBDropdown>
                  <MDBDropdownToggle className="d1122">Heading Color</MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>Action</MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </div>
            </Box>
            <div>
                <h1 className="pin_list_heading_3">Total Amount: $0.5 </h1>
            </div>
            <div className="last_button_pinlist">
            <MDBBtn className="cd_button_last"> Pay Now</MDBBtn>
            <MDBBtn className="cd_button_last_2">Highlight One More</MDBBtn>
            </div>
            <h1 className="pin_list_heading_31">Total Amount: $3.00 </h1>
            <div className="d-grid gap-2cdb">
              <MDBBtn className="cd_button_last_last_page"> Pay For Everything At One Time</MDBBtn>
            </div>
            
          </Box>
        </Box>

      </div>
    </div>
  );
};

export default Pin;
