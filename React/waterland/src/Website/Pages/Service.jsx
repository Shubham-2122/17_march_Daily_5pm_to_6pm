import React from "react";
import Header from "../Coman/Header";
import Navs from "../Coman/Navs";
import Footer from "../Coman/Footer";
import { Helmet } from "react-helmet";

function Service() {
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
        <Navs title="Our Services" desc="Service" />
      <div>
        {/* Service Start */}
        <div
          className="container-fluid service py-5"
          style={{ marginTop: 100 }}
        >
          <div className="container service-section py-5">
            <div
              className="text-center mx-auto pb-5 wow fadeInUp"
              data-wow-delay="0.2s"
              style={{ maxWidth: 800 }}
            >
              <h4 className="text-primary">Our Service</h4>
              <h1 className="display-5 text-white mb-4">
                Explore Waterland Park service
              </h1>
              <p className="mb-0 text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tenetur adipisci facilis cupiditate recusandae aperiam
                temporibus corporis itaque quis facere, numquam, ad culpa
                deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
              </p>
            </div>
            <div className="row g-4">
              <div className="col-0 col-md-1 col-lg-2 col-xl-2" />
              <div
                className="col-md-10 col-lg-8 col-xl-8 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="service-days p-4">
                  <div className="py-2 border-bottom border-top d-flex align-items-center justify-content-between flex-wrap">
                    <h4 className="mb-0 pb-2 pb-sm-0">Monday - Friday</h4>{" "}
                    <p className="mb-0">
                      <i className="fas fa-clock text-primary me-2" />
                      11:00 AM - 16:00 PM
                    </p>
                  </div>
                  <div className="py-2 border-bottom d-flex align-items-center justify-content-between flex-shrink-1 flex-wrap">
                    <h4 className="mb-0 pb-2 pb-sm-0">Saturday - Sunday</h4>{" "}
                    <p className="mb-0">
                      <i className="fas fa-clock text-primary me-2" />
                      09:00 AM - 17:00 PM
                    </p>
                  </div>
                  <div className="py-2 border-bottom d-flex align-items-center justify-content-between flex-shrink-1 flex-wrap">
                    <h4 className="mb-0">Holiday</h4>{" "}
                    <p className="mb-0">
                      <i className="fas fa-clock text-primary me-2" />
                      09:00 AM - 17:00 PM
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-0 col-md-1 col-lg-2 col-xl-2" />
              <div
                className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="service-item p-4">
                  <div className="service-content">
                    <div className="mb-4">
                      <i className="fas fa-home fa-4x" />
                    </div>
                    <a href="#" className="h4 d-inline-block mb-3">
                      Private Gazebo
                    </a>
                    <p className="mb-0">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Amet vel beatae numquam.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="service-item p-4">
                  <div className="service-content">
                    <div className="mb-4">
                      <i className="fas fa-utensils fa-4x" />
                    </div>
                    <a href="#" className="h4 d-inline-block mb-3">
                      Delicious Food
                    </a>
                    <p className="mb-0">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Amet vel beatae numquam.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <div className="service-item p-4">
                  <div className="service-content">
                    <div className="mb-4">
                      <i className="fas fa-door-closed fa-4x" />
                    </div>
                    <a href="#" className="h4 d-inline-block mb-3">
                      Safety Lockers
                    </a>
                    <p className="mb-0">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Amet vel beatae numquam.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                data-wow-delay="0.8s"
              >
                <div className="service-item p-4">
                  <div className="service-content">
                    <div className="mb-4">
                      <i className="fas fa-swimming-pool fa-4x" />
                    </div>
                    <a href="#" className="h4 d-inline-block mb-3">
                      River Rides
                    </a>
                    <p className="mb-0">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Amet vel beatae numquam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Service End */}
        {/* Feature Start */}
        <div className="container-fluid feature py-5">
          <div className="container py-5">
            <div className="row g-4">
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                <div className="feature-item">
                  <img
                    src="img/feature-1.jpg"
                    className="img-fluid rounded w-100"
                    alt="Image"
                  />
                  <div className="feature-content p-4">
                    <div className="feature-content-inner">
                      <h4 className="text-white">Best Pools</h4>
                      <p className="text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis porro soluta voluptatum laborum mollitia
                        blanditiis suscipit,
                      </p>
                      <a
                        href="#"
                        className="btn btn-primary rounded-pill py-2 px-4"
                      >
                        Read More <i className="fa fa-arrow-right ms-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                <div className="feature-item">
                  <img
                    src="img/feature-2.jpg"
                    className="img-fluid rounded w-100"
                    alt="Image"
                  />
                  <div className="feature-content p-4">
                    <div className="feature-content-inner">
                      <h4 className="text-white">Waterslides</h4>
                      <p className="text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis porro soluta voluptatum laborum mollitia
                        blanditiis suscipit,
                      </p>
                      <a
                        href="#"
                        className="btn btn-primary rounded-pill py-2 px-4"
                      >
                        Read More <i className="fa fa-arrow-right ms-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                <div className="feature-item">
                  <img
                    src="img/feature-3.jpg"
                    className="img-fluid rounded w-100"
                    alt="Image"
                  />
                  <div className="feature-content p-4">
                    <div className="feature-content-inner">
                      <h4 className="text-white">River Rides</h4>
                      <p className="text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis porro soluta voluptatum laborum mollitia
                        blanditiis suscipit,
                      </p>
                      <a
                        href="#"
                        className="btn btn-primary rounded-pill py-2 px-4"
                      >
                        Read More <i className="fa fa-arrow-right ms-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Feature End */}
        {/* Testimonial Start */}
        <div className="container-fluid testimonial py-5">
          <div className="container py-5">
            <div
              className="text-center mx-auto pb-5 wow fadeInUp"
              data-wow-delay="0.2s"
              style={{ maxWidth: 800 }}
            >
              <h4 className="text-primary">Testimonials</h4>
              <h1 className="display-5 text-white mb-4">Our Clients Riviews</h1>
              <p className="text-white mb-0">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tenetur adipisci facilis cupiditate recusandae aperiam
                temporibus corporis itaque quis facere, numquam, ad culpa
                deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
              </p>
            </div>
            <div
              className="owl-carousel testimonial-carousel wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="testimonial-item p-4">
                <p className="text-white fs-4 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                  mollitia fugiat, nihil autem reprehenderit aperiam maxime
                  minima consequatur, nam iste eius velit perferendis voluptatem
                  at atque neque soluta reiciendis doloremque.
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
                  mollitia fugiat, nihil autem reprehenderit aperiam maxime
                  minima consequatur, nam iste eius velit perferendis voluptatem
                  at atque neque soluta reiciendis doloremque.
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
                  mollitia fugiat, nihil autem reprehenderit aperiam maxime
                  minima consequatur, nam iste eius velit perferendis voluptatem
                  at atque neque soluta reiciendis doloremque.
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
      </div>
      <Footer />
    </div>
  );
}

export default Service;
