import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import axios from "axios";
import { useState } from "react";


const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/register', { email, password });
      setSuccess(response.data.message);
      console.log(response.data);
      setError('');
    } catch (error) {
      setError(error.response?.data.message || 'An error occurred');
    }
  };




  return (
    <div>
      <MDBContainer fluid>
        <MDBCard className="text-black m-5" style={{ borderRadius: '25px' }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center rp_heading"
              >
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 signup_heading1">
                  Sign up
                </p>

                <form onSubmit={handleSubmit} className="w-100">
                  <div className="d-flex flex-row align-items-center mb-4 form_width12">
                    <MDBIcon fas icon="user me-3" size="lg" />
                    <MDBInput
                      label="Your Name"
                      id="form1"
                      type="text"
                      className="form_height_12"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4 form_width12">
                    <MDBIcon fas icon="envelope me-3" size="lg" />
                    <MDBInput
                      label="Your Email"
                      id="form2"
                      type="email"
                      className="form_height_12"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4 form_width12">
                    <MDBIcon fas icon="lock me-3" size="lg" />
                    <MDBInput
                      label="Password"
                      id="form3"
                      type="password"
                      className="form_height_12"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4 form_width12">
                    <MDBIcon fas icon="key me-3" size="lg" />
                    <MDBInput
                      label="Repeat your password"
                      id="form4"
                      type="password"
                      className="form_height_12"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <MDBCheckbox
                      name="flexCheck"
                      value=""
                      id="flexCheckDefault"
                      label="Subscribe to our newsletter"
                    />
                  </div>

                  <MDBBtn className="mb-4 hehehe_rb2" size="md" type="submit">
                    Register
                  </MDBBtn>
                </form>
                {error && <p className="text-danger">{error}</p>}
                {success && <p className="text-success">{success}</p>}
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center hehehe_1"
              >
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  fluid
                />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
};

export default Register;
