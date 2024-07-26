import React from "react";
import Button from "react-bootstrap/Button";
import Card from "../../assets/image/card.png";

const card = () => {
  return (
    <div>
        <div className="first_bar_cb">
      <div className="divch_1">
        <h1 class="ch_1">Sorted By</h1>
      </div>
      <div class="card_buttons1">
        <Button className="cb_1">Account Name</Button>
        <Button className="cb_2">Subscriber</Button>
        <Button className="cb_3">Income</Button>
      </div>
      </div>

      <div className="cards_area">
        <div class="card_section1">
          <div class="card_1">
            <h1>
              Premium <span>Add</span>
            </h1>
            <img class="cimg_1" src={Card} alt="" />
            <h2>Branded Gaming Kit</h2>
            <h3>Gaming</h3>
            <h4>$499</h4>
            <h5>Income: 150$ Per Month</h5>
            <h6>Subscriber: 180000</h6>
            <h7>Easy To Purchase</h7>

            <Button className="cardbutton_1">Buy Channel</Button>
          </div>
          <div class="card_1">
            <h1>
              Premium <span>Add</span>
            </h1>
            <img class="cimg_1" src={Card} alt="" />
            <h2>Branded Gaming Kit</h2>
            <h3>Gaming</h3>
            <h4>$499</h4>
            <h5>Income: 150$ Per Month</h5>
            <h6>Subscriber: 180000</h6>
            <h7>Easy To Purchase</h7>
            <Button className="cardbutton_1">Buy Channel</Button>
          </div>
          <div class="card_1">
            <h1>
              Premium <span>Add</span>
            </h1>
            <img class="cimg_1" src={Card} alt="" />
            <h2>Branded Gaming Kit</h2>
            <h3>Gaming</h3>
            <h4>$499</h4>
            <h5>Income: 150$ Per Month</h5>
            <h6>Subscriber: 180000</h6>
            <h7>Easy To Purchase</h7>
            <Button className="cardbutton_1">Buy Channel</Button>
          </div>
        </div>
        <div class="card_section2">
          <div class="card_1">
            <h1>
              Premium <span>Add</span>
            </h1>
            <img class="cimg_1" src={Card} alt="" />
            <h2>Branded Gaming Kit</h2>
            <h3>Gaming</h3>
            <h4>$499</h4>
            <h5>Income: 150$ Per Month</h5>
            <h6>Subscriber: 180000</h6>
            <h7>Easy To Purchase</h7>
            <Button className="cardbutton_1">Buy Channel</Button>
          </div>
          <div class="card_1">
            <h1>
              Premium <span>Add</span>
            </h1>
            <img class="cimg_1" src={Card} alt="" />
            <h2>Branded Gaming Kit</h2>
            <h3>Gaming</h3>
            <h4>$499</h4>
            <h5>Income: 150$ Per Month</h5>
            <h6>Subscriber: 180000</h6>
            <h7>Easy To Purchase</h7>
            <Button className="cardbutton_1">Buy Channel</Button>
          </div>
          <div class="card_1">
            <h1>
              Premium <span>Add</span>
            </h1>
            <img class="cimg_1" src={Card} alt="" />
            <h2>Branded Gaming Kit</h2>
            <h3>Gaming</h3>
            <h4>$499</h4>
            <h5>Income: 150$ Per Month</h5>
            <h6>Subscriber: 180000</h6>
            <h7>Easy To Purchase</h7>
            <Button className="cardbutton_1">Buy Channel</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
