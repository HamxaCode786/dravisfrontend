import React from "react";
import Logo1 from '../../assets/image/61258443d8f96ca9488a5fc153c21c73.png'
import Forgotpw from '../../assets/image/forgotpw.png'
const Password = () => {
  return (
    <div>
      <section className="bg-light p-3 p-md-4 p-xl-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-xxl-11">
              <div className="card border-light-subtle shadow-sm card_background_fp">
                <div className="row g-0">
                  <div className="col-12 col-md-6">
                    <img
                      classname=""
                      loading="lazy"
                      src={Forgotpw}
                      alt="card left image"
                    />
                  </div>
                  <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <div className="col-12 col-lg-11 col-xl-10">
                      <div className="card-body p-3 p-md-4 p-xl-5">
                        <div className="row">
                          <div className="col-12">
                            <div className="mb-5">
                              <div className="text-center mb-4">
                                <a href="#!">
                                  <img className="fp_logo"
                                    src={Logo1}
                                    alt="social media marketing logo"
                                    width={175}
                                    height={57}
                                  />
                                </a>
                              </div>
                              <h2 className="h4 text-center">Password Reset</h2>
                              <h3 className="fs-6 fw-normal text-secondary text-center m-0">
                                Provide the email address associated with your
                                account to recover your password.
                              </h3>
                            </div>
                          </div>
                        </div>
                        <form action="#!">
                          <div className="row gy-3 overflow-hidden">
                            <div className="col-12">
                              <div className="form-floating mb-3">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="name@example.com"
                                  required=""
                                />
                                <label htmlFor="email" className="form-label">
                                  Email
                                </label>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="d-grid">
                                <button
                                  className="btn btn-dark btn-lg"
                                  type="submit"
                                >
                                  Reset Password
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                        <div className="row">
                          <div className="col-12">
                            <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-5">
                              <a
                                href="#!"
                                className="link-secondary text-decoration-none"
                              >
                                Login
                              </a>
                              <a
                                href="#!"
                                className="link-secondary text-decoration-none"
                              >
                                Register
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Password;
