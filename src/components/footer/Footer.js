import React from "react";
import { SiFacebook, SiInstagram, SiLinkedin, SiTwitter } from "react-icons/si";
import {
  MDBFooter,
  MDBContainer,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter className="text-center" style={{ backgroundColor: "#0063a7" }}>
      <MDBContainer className="p-4">
        <section style={{ color: "yellow" }}>
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Get the latest deals and more</strong>
                </p>
              </div>

              <MDBCol md="5" start="12">
                <MDBInput
                  contrast
                  type="email"
                  className="mb-4"
                  placeholder="Enter email address"
                />
              </MDBCol>

              <div className="col-auto">
                <MDBBtn outline color="light" type="submit" className="mb-4">
                  Sign up
                </MDBBtn>
              </div>
            </div>
          </form>
        </section>
        <section style={{ backgroundColor: "white", color: "#0063a7" }}>
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Company</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#!" className="text">
                    Our Stores
                  </a>
                </li>
                <li>
                  <a href="#!" className="text">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#!" className="text">
                    News
                  </a>
                </li>
              </ul>
              <br></br>
              <h5 className="text-uppercase">Online Shopping</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text">
                    My Account
                  </a>
                </li>
                <li>
                  <a href="#!" className="text">
                    My Whishlist
                  </a>
                </li>
                <li>
                  <a href="#!" className="text">
                    My Cart
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Our Services</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text">
                    AC Recommendations
                  </a>
                </li>
                <li>
                  <a href="#!" className="text">
                    TV Installations
                  </a>
                </li>
                <li>
                  <a href="#!" className="text">
                    Mobile Services
                  </a>
                </li>
                <li>
                  <a href="#!" className="text">
                    Computer Services
                  </a>
                </li>
                <li>
                  <a href="#!" className="text">
                    Security Camera Installation
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Customer Service</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text">
                    Feedback And Complaints
                  </a>
                </li>
                <li>
                  <a href="#!" className="text">
                    Track Defected Items
                  </a>
                </li>
                <li>
                  <a href="#!" className="text">
                    Terms and conditions
                  </a>
                </li>
                <li>
                  <a href="#!" className="text">
                    Computer Services
                  </a>
                </li>
                <li>
                  <a href="#!" className="text">
                    Refunds And Returns
                  </a>
                </li>
                <li>
                  <a href="#!" className="text">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#!" className="text">
                    FAQ
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Wedding List</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text">
                    About Wedding List
                  </a>
                </li>
                <li>
                  <a href="#!" className="text">
                    Pay For A Couple
                  </a>
                </li>
                <li>
                  <a href="#!" className="text">
                    How Can We Help
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block"></div>

          <div>
            <h1>Find us:</h1>
            <br></br>
            <div style={{ display: "flex" }}>
              <a href="/" className="me-4 text-reset">
                <SiFacebook></SiFacebook>
              </a>
              <a href="/" className="me-4 text-reset">
                <SiInstagram></SiInstagram>
              </a>
              <a href="/" className="me-4 text-reset">
                <SiLinkedin></SiLinkedin>
              </a>
              <a href="/" className="me-4 text-reset">
                <SiTwitter></SiTwitter>
              </a>
            </div>
          </div>
        </section>
      </MDBContainer>
      <ul className="nav text-center">
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Corporate Information
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Forums, Blog & More
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Careers
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Accessibility
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Terms & Conditions
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Privacy
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Interest-Based
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Ads
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Privacy
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Rights
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Do Not Sell My Personal Information
          </a>
        </li>
      </ul>
      <br></br>
      <div className="text-center p-3" style={{ backgroundColor: "#0063a7" }}>
        © Copyright AL-HAFIDH 2022 - Tailored by &nbsp;
        <a className="text-white" href="https://sync.com.lb/">
          SYNC
        </a>
      </div>
    </MDBFooter>
  );
}
