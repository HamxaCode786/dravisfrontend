import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import Box from "@mui/material/Box";
const Purchase = () => {
  return (
    <div>
      <div className="cd_h1">
        <Box>
          <Box className="fh_startsale"> Create A Deal</Box>
          <Box className="sh_startsale">Request To Purchase</Box>
        </Box>
        <h1 className="createdeal_h1_pp">Request To Purchase</h1>
        <Box className="th_startsalepp">
          <Box>
            <h1 className="createdeal_h1_pph1">Transaction ID</h1>
            <h1 className="createdeal_h1_pph1">Transaction Amount: 129$</h1>
            <h1 className="createdeal_h1_pph1">Transfer To mmg@gmail.com</h1>
            <h1 className="createdeal_h1">Transaction Steps</h1>
            <p1 className="create_dealp1">
              1. A 4-8% ($3 minimum) service charge is paid by the buyer.
              <br></br>
            </p1>

            <p2 className="create_dealp1">
              2. The escrow agent is appointed manager by the seller.<br></br>
            </p2>

            <p3 className="create_dealp1">
              3. After seven days—seven days is the minimum duration needed to
              designate a new principal owner in the control panel—the seller
              grants the esc row agency primary ownership rights.<br></br>
            </p3>

            <p4 className="create_dealp1">
              4-The escrow agent alerts the buyer to pay the seller, checks
              everyth ing, and removes the other managers.<br></br>
            </p4>

            <p5 className="create_dealp1">
              5. The vendor is paid by the buyer.<br></br>
            </p5>

            <p6 className="create_dealp1">
              6-The escrow agent transfers ownership rights to the buyer upon
              the seller's approval.<br></br>
            </p6>
            <Box className="createdealemail_1">
              <h4 className="create_dealp2">
                Chose Payment Method and pay <br></br>
              </h4>
            </Box>
            <div class="form-outline12" data-mdb-input-init>
              <input type="email" id="typeEmail" class="form-control" />
              <label class="form-labelcdp" for="typeEmail">
                Enter Your Email Adress
              </label>
            </div>
            <div className="d-grid gap-2cdb">
              <MDBBtn className="cd_button_last"> Pay Now</MDBBtn>
            </div>
            <div class="pp_forms121">
              <div class="form-outline_res1" data-mdb-input-init>
                <input type="text" id="typeText" class="form-control" />
                <label class="form-labelcdp" for="typeText">
                  Name
                </label>
              </div>
              <div class="form-outline_res1" data-mdb-input-init>
                <input type="text" id="typeText" class="form-control" />
                <label class="form-labelcdp" for="typeText">
    
                  Sur Name
                </label>
              </div>
            </div>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Purchase;
