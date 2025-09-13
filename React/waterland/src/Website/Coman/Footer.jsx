import React from "react";

function Footer() {
  return (
    <div>
      <div>
        {/* Footer Start */}
        <div
          className="container-fluid footer py-5 wow fadeIn"
          data-wow-delay="0.2s"
        >
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-md-6 col-lg-6 col-xl-4">
                <div className="footer-item">
                  <a href="index.html" className="p-0">
                    <h4 className="text-white mb-4">
                      <i className="fas fa-swimmer text-primary me-3" />
                      WaterLand
                    </h4>
                    {/* <img src="img/logo.png" alt="Logo"> */}
                  </a>
                  <p className="mb-2">
                    Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem
                    ipsum dolor sit amet, consectetur adipiscing...
                  </p>
                  <div className="d-flex align-items-center">
                    <i className="fas fa-map-marker-alt text-primary me-3" />
                    <p className="text-white mb-0">123 Street New York.USA</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fas fa-envelope text-primary me-3" />
                    <p className="text-white mb-0">info@example.com</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa fa-phone-alt text-primary me-3" />
                    <p className="text-white mb-0">(+012) 3456 7890</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-2">
                <div className="footer-item">
                  <h4 className="text-white mb-4">Quick Links</h4>
                  <a href="#">
                    <i className="fas fa-angle-right me-2" /> About Us
                  </a>
                  <a href="#">
                    <i className="fas fa-angle-right me-2" /> Feature
                  </a>
                  <a href="#">
                    <i className="fas fa-angle-right me-2" /> Attractions
                  </a>
                  <a href="#">
                    <i className="fas fa-angle-right me-2" /> Tickets
                  </a>
                  <a href="#">
                    <i className="fas fa-angle-right me-2" /> Blog
                  </a>
                  <a href="#">
                    <i className="fas fa-angle-right me-2" /> Contact us
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-2">
                <div className="footer-item">
                  <h4 className="text-white mb-4">Support</h4>
                  <a href="#">
                    <i className="fas fa-angle-right me-2" /> Privacy Policy
                  </a>
                  <a href="#">
                    <i className="fas fa-angle-right me-2" /> Terms &amp;
                    Conditions
                  </a>
                  <a href="#">
                    <i className="fas fa-angle-right me-2" /> Disclaimer
                  </a>
                  <a href="#">
                    <i className="fas fa-angle-right me-2" /> Support
                  </a>
                  <a href="#">
                    <i className="fas fa-angle-right me-2" /> FAQ
                  </a>
                  <a href="#">
                    <i className="fas fa-angle-right me-2" /> Help
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-4">
                <div className="footer-item">
                  <h4 className="text-white mb-4">Opening Hours</h4>
                  <div className="opening-date mb-3 pb-3">
                    <div className="opening-clock flex-shrink-0">
                      <h6 className="text-white mb-0 me-auto">
                        Monday - Friday:
                      </h6>
                      <p className="mb-0">
                        <i className="fas fa-clock text-primary me-2" /> 11:00
                        AM - 16:00 PM
                      </p>
                    </div>
                    <div className="opening-clock flex-shrink-0">
                      <h6 className="text-white mb-0 me-auto">
                        Satur - Sunday:
                      </h6>
                      <p className="mb-0">
                        <i className="fas fa-clock text-primary me-2" /> 09:00
                        AM - 17:00 PM
                      </p>
                    </div>
                    <div className="opening-clock flex-shrink-0">
                      <h6 className="text-white mb-0 me-auto">Holiday:</h6>
                      <p className="mb-0">
                        <i className="fas fa-clock text-primary me-2" /> 09:00
                        AM - 17:00 PM
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-white mb-2">Payment Accepted</p>
                    <img
                      src="img/payment.png"
                      className="img-fluid"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}
        {/* Copyright Start */}
        <div className="container-fluid copyright py-4">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-md-6 text-center text-md-start mb-md-0">
                <span className="text-body">
                  <a href="#" className="border-bottom text-white">
                    <i className="fas fa-copyright text-light me-2" />
                    Your Site Name
                  </a>
                  , All right reserved.
                </span>
              </div>
              <div className="col-md-6 text-center text-md-end text-body">
                {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
                {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
                {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
                Designed By{" "}
                <a
                  className="border-bottom text-white"
                  href="https://htmlcodex.com"
                >
                  HTML Codex
                </a>{" "}
                Distributed By{" "}
                <a
                  className="border-bottom text-white"
                  href="https://themewagon.com"
                >
                  ThemeWagon
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright End */}
      </div>
    </div>
  );
}

export default Footer;
