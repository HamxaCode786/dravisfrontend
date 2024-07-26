import React from "react";
import Button from "react-bootstrap/Button";
import social from "../../assets/image/social.png";
import Dropdown from "react-bootstrap/Dropdown";
import Message from "../../assets/image/messagelogo.png";
import { Link } from "react-router-dom";
const bar = () => {
  return (
    <div class="bar_background">
      <div class="layer_background">
        <div class="bar_1">
          <div>
            <img class="img_2" src={social} alt="" />
          </div>
          <div class="buttons_1">
            <Button className="home_1">Home</Button>
            <Link to="/Loginpage">
              <Button className="login">Login</Button>
            </Link>
            <Link to="/registration">
              <Button className="register">Register</Button>
            </Link>
            <Link to="/Loginpage">
              <Button className="start_sale">Start Sale</Button>
            </Link>
          </div>
        </div>
        <div className="hp_fr">
          <h1 class="heading_1">Welcome To</h1>
          <h2 class="heading_2">Social Media Market Place</h2>
          <h3 class="heading_3">Social Media Secure and Quick Marketplace </h3>
        </div>
        <div class="custom-button-group">
          <Button className="fb_1">Account Name</Button>
          <Button className="fb_2">Subscribers</Button>
          <Dropdown.Toggle className="fb_3">Select Category</Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </div>
        <div class="custom-button-group2">
          <Button className="fb_4">Verified Listing</Button>
          <Button className="fb_5">Verified Identity</Button>
        </div>
        <div class="editable_dropdowns">
          <div className="editable_dd2">
            <select
              class="d_1"
              id="editableDropdown"
              onchange="handleChange(this.value)"
            >
              <option value="" disabled selected>
                Price From
              </option>
              <option value="option1">500</option>
              <option value="option2">1000</option>
              <option value="option3">1500</option>
            </select>
            <select
              class="d_2"
              id="editableDropdown"
              onchange="handleChange(this.value)"
            >
              <option value="" disabled selected>
                Price To
              </option>
              <option value="option1">2000</option>
              <option value="option2">3000</option>
              <option value="option3">4000</option>
            </select>
          </div>
          <div className="editable_dd2">
            <select
              class="d_3"
              id="editableDropdown"
              onchange="handleChange(this.value)"
            >
              <option value="" disabled selected>
                Price From
              </option>
              <option value="option1">500</option>
              <option value="option2">1000</option>
              <option value="option3">1500</option>
            </select>
            <select
              class="d_4"
              id="editableDropdown"
              onchange="handleChange(this.value)"
            >
              <option value="" disabled selected>
                Price To
              </option>
              <option value="option1">2000</option>
              <option value="option2">3000</option>
              <option value="option3">4000</option>
            </select>
          </div>
        </div>

        <div class="website_links">
          <Button className="fb_6" a href="https://www.facebook.com/" >
            Facebook
          </Button>
          <Button a href="https://www.instagram.com/" className="fb_6">
            Instagram
          </Button>
          <Button href="https://www.youtube.com/" className="fb_6">
            Youtube
          </Button>
          <Button href="https://www.linkedin.com/" className="fb_6">
            Twitter
          </Button>
        </div>
        <div class="search_Button">
          <Button href="" className="fb_10">
            Search
          </Button>
          
        </div>
        <div class="Message_logo">
          <img className="hp_l1" src={Message} alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default bar;
