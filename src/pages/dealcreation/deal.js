import React from "react";
import { MDBBtn, MDBCheckbox } from "mdb-react-ui-kit";
import Box from "@mui/material/Box";
import Xelle from "../../assets/image/banktransfer.png";
import Zelle from "../../assets/image/zelle.png";
import Gpay from "../../assets/image/Gpay.png";
import Paypal from "../../assets/image/paypal.png";
import Bitcoin from "../../assets/image/bitcoint.png";
import Cashapp from "../../assets/image/cashapp.png";

const deal = () => {
  return (
    <div>
      <div className="cd_h1">
        <Box>
          <Box className="fh_startsale"> Create a Deal</Box>
          <Box className="sh_startsale"> Add Information and Create a Deal</Box>
        </Box>
        <Box className="th_startsale12">
          <MDBCheckbox
            name="inlineCheck"
            id="inlineCheckbox1"
            value="option1"
            label={<img src={Xelle} width="90px" alt="" />}
            inline
          />
          <MDBCheckbox
            name="inlineCheck"
            id="inlineCheckbox2"
            value="option2"
            label={<img src={Zelle} width="90px" alt="" />}
            inline
          />
          <MDBCheckbox
            name="inlineCheck"
            id="inlineCheckbox3"
            value="option3"
            label={<img src={Gpay} width="95px" alt="" />}
            inline
          />
          <MDBCheckbox
            name="inlineCheck"
            id="inlineCheckbox1"
            value="option1"
            label={<img src={Paypal} width="100px" alt="" />}
            inline
          />
          <MDBCheckbox
            name="inlineCheck"
            id="inlineCheckbox1"
            value="option1"
            label={<img src={Bitcoin} width="90px" alt="" />}
            inline
          />
          <MDBCheckbox
            name="inlineCheck"
            id="inlineCheckbox1"
            value="option1"
            label={<img src={Cashapp} width="120px" alt="" />}
            inline
          />
        </Box>
        <Box>
          <h1 className="createdeal_h1">Transaction Steps</h1>
          <p1 className="create_dealp1">
            1. A 4-8% ($3 minimum) service charge is paid by the buyer.<br></br>
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
            6-The escrow agent transfers ownership rights to the buyer upon the
            seller's approval.<br></br>
          </p6>
          <Box className="createdealemail_1">
            <h4 className="create_dealp2">
              Email address associated with the account which should be
              designated as the owner<br></br>
            </h4>
          </Box>
          <div class="form-outline12" data-mdb-input-init>
            <input type="email" id="typeEmail" class="form-control" />
            <label class="form-labelcdp" for="typeEmail">
              Enter Your Email Adress
            </label>
          </div>
          <div className="d-grid gap-2cdb">
      <MDBBtn className="cd_button_last"> Create Deal</MDBBtn>
    </div>
        </Box>
      </div>
    </div>
  );
};

export default deal;
