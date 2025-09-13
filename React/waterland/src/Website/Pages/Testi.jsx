import React from "react";
import Header from "../Coman/Header";
import Navs from "../Coman/Navs";
import { Helmet } from "react-helmet";
import Footer from "../Coman/Footer";

function Testi() {
  return (
    <div>
          <Helmet>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="lib/wow/wow.min.js"></script>
        <script src="lib/easing/easing.min.js"></script>
        <script src="lib/waypoints/waypoints.min.js"></script>
        <script src="lib/counterup/counterup.min.js"></script>
        <script src="lib/lightbox/js/lightbox.min.js"></script>
        <script src="lib/owlcarousel/owl.carousel.min.js"></script>

        <script src="js/main.js"></script>
      </Helmet>
        <Header />
        <Navs title="Testimonials" desc="Testimonials" />
      {/* Testimonial Start */}
      <div
        className="container-fluid testimonial py-5"
        style={{ marginTop: 100 }}
      >
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: 800 }}
          >
            <h4 className="text-primary">Testimonials</h4>
            <h1 className="display-5 text-white mb-4">Our Clients Riviews</h1>
            <p className="text-white mb-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              adipisci facilis cupiditate recusandae aperiam temporibus corporis
              itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
              obcaecati, ipsam mollitia hic.
            </p>
          </div>
          <div
            className="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="testimonial-item p-4">
              <p className="text-white fs-4 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                mollitia fugiat, nihil autem reprehenderit aperiam maxime minima
                consequatur, nam iste eius velit perferendis voluptatem at atque
                neque soluta reiciendis doloremque.
              </p>
              <div className="testimonial-inner">
                <div className="testimonial-img">
                  <img
                    src="img/testimonial-1.jpg"
                    className="img-fluid"
                    alt="Image"
                  />
                  <div className="testimonial-quote btn-lg-square rounded-circle">
                    <i className="fa fa-quote-right fa-2x" />
                  </div>
                </div>
                <div className="ms-4">
                  <h4>Person Name</h4>
                  <p className="text-start text-white">Profession</p>
                  <div className="d-flex text-primary">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star text-white" />
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item p-4">
              <p className="text-white fs-4 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                mollitia fugiat, nihil autem reprehenderit aperiam maxime minima
                consequatur, nam iste eius velit perferendis voluptatem at atque
                neque soluta reiciendis doloremque.
              </p>
              <div className="testimonial-inner">
                <div className="testimonial-img">
                  <img
                    src="img/testimonial-2.jpg"
                    className="img-fluid"
                    alt="Image"
                  />
                  <div className="testimonial-quote btn-lg-square rounded-circle">
                    <i className="fa fa-quote-right fa-2x" />
                  </div>
                </div>
                <div className="ms-4">
                  <h4>Person Name</h4>
                  <p className="text-start text-white">Profession</p>
                  <div className="d-flex text-primary">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star text-white" />
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item p-4">
              <p className="text-white fs-4 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                mollitia fugiat, nihil autem reprehenderit aperiam maxime minima
                consequatur, nam iste eius velit perferendis voluptatem at atque
                neque soluta reiciendis doloremque.
              </p>
              <div className="testimonial-inner">
                <div className="testimonial-img">
                  <img
                    src="img/testimonial-3.jpg"
                    className="img-fluid"
                    alt="Image"
                  />
                  <div className="testimonial-quote btn-lg-square rounded-circle">
                    <i className="fa fa-quote-right fa-2x" />
                  </div>
                </div>
                <div className="ms-4">
                  <h4>Person Name</h4>
                  <p className="text-start text-white">Profession</p>
                  <div className="d-flex text-primary">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
      <Footer />
    </div>
  );
}

export default Testi;
