import React from "react";
import Header from "../Coman/Header";
import Footer from "../Coman/Footer";
import { Helmet } from "react-helmet";

function Home() {
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
      <div>
        <Header />
        {/* Carousel Start */}
        <div className="header-carousel owl-carousel">
          <div className="header-carousel-item">
            <img
              src="img/carousel-1.jpg"
              className="img-fluid w-100"
              alt="Image"
            />
            <div className="carousel-caption">
              <div className="container align-items-center py-4">
                <div className="row g-5 align-items-center">
                  <div
                    className="col-xl-7 fadeInLeft animated"
                    data-animation="fadeInLeft"
                    data-delay="1s"
                    style={{ animationDelay: "1s" }}
                  >
                    <div className="text-start">
                      <h4 className="text-primary text-uppercase fw-bold mb-4">
                        Welcome To WaterLand
                      </h4>
                      <h1 className="display-4 text-uppercase text-white mb-4">
                        The Biggest Theme &amp; Amusement Park
                      </h1>
                      <p className="mb-4 fs-5">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy...
                      </p>
                      <div className="d-flex flex-shrink-0">
                        <a
                          className="btn btn-primary rounded-pill text-white py-3 px-5"
                          href="#"
                        >
                          Our Packages
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-5 fadeInRight animated"
                    data-animation="fadeInRight"
                    data-delay="1s"
                    style={{ animationDelay: "1s" }}
                  >
                    <div className="ticket-form p-5">
                      <h2 className="text-dark text-uppercase mb-4">
                        book your ticket
                      </h2>
                      <form>
                        <div className="row g-4">
                          <div className="col-12">
                            <input
                              type="text"
                              className="form-control border-0 py-2"
                              id="name"
                              placeholder="Your Name"
                            />
                          </div>
                          <div className="col-12 col-xl-6">
                            <input
                              type="email"
                              className="form-control border-0 py-2"
                              id="email"
                              placeholder="Your Email"
                            />
                          </div>
                          <div className="col-12 col-xl-6">
                            <input
                              type="phone"
                              className="form-control border-0 py-2"
                              id="phone"
                              placeholder="Phone"
                            />
                          </div>
                          <div className="col-12">
                            <select
                              className="form-select border-0 py-2"
                              aria-label="Default select example"
                            >
                              <option selected>Select Packages</option>
                              <option value={1}>Family Packages</option>
                              <option value={2}>Basic Packages</option>
                              <option value={3}>Premium Packages</option>
                            </select>
                          </div>
                          <div className="col-12">
                            <input
                              className="form-control border-0 py-2"
                              type="date"
                            />
                          </div>
                          <div className="col-12">
                            <input
                              type="number"
                              className="form-control border-0 py-2"
                              id="number"
                              placeholder="Guest"
                            />
                          </div>
                          <div className="col-12">
                            <button
                              type="button"
                              className="btn btn-primary w-100 py-2 px-5"
                            >
                              Book Now
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-carousel-item">
            <img
              src="img/carousel-2.jpg"
              className="img-fluid w-100"
              alt="Image"
            />
            <div className="carousel-caption">
              <div className="container py-4">
                <div className="row g-5 align-items-center">
                  <div
                    className="col-xl-7 fadeInLeft animated"
                    data-animation="fadeInLeft"
                    data-delay="1s"
                    style={{ animationDelay: "1s" }}
                  >
                    <div className="text-start">
                      <h4 className="text-primary text-uppercase fw-bold mb-4">
                        Welcome To WaterLand
                      </h4>
                      <h1 className="display-4 text-uppercase text-white mb-4">
                        The Greatest Water and Amusement Park
                      </h1>
                      <p className="mb-4 fs-5">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy...
                      </p>
                      <div className="d-flex flex-shrink-0">
                        <a
                          className="btn btn-primary rounded-pill text-white py-3 px-5"
                          href="#"
                        >
                          Our Packages
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-5 fadeInRight animated"
                    data-animation="fadeInRight"
                    data-delay="1s"
                    style={{ animationDelay: "1s" }}
                  >
                    <div className="ticket-form p-5">
                      <h2 className="text-dark text-uppercase mb-4">
                        book your ticket
                      </h2>
                      <form>
                        <div className="row g-4">
                          <div className="col-12">
                            <input
                              type="text"
                              className="form-control border-0 py-2"
                              id="name"
                              placeholder="Your Name"
                            />
                          </div>
                          <div className="col-12 col-xl-6">
                            <input
                              type="email"
                              className="form-control border-0 py-2"
                              id="email"
                              placeholder="Your Email"
                            />
                          </div>
                          <div className="col-12 col-xl-6">
                            <input
                              type="phone"
                              className="form-control border-0 py-2"
                              id="phone"
                              placeholder="Phone"
                            />
                          </div>
                          <div className="col-12">
                            <select
                              className="form-select border-0 py-2"
                              aria-label="Default select example"
                            >
                              <option selected>Select Packages</option>
                              <option value={1}>Family Packages</option>
                              <option value={2}>Basic Packages</option>
                              <option value={3}>Premium Packages</option>
                            </select>
                          </div>
                          <div className="col-12">
                            <input
                              className="form-control border-0 py-2"
                              type="date"
                            />
                          </div>
                          <div className="col-12">
                            <input
                              type="number"
                              className="form-control border-0 py-2"
                              id="number"
                              placeholder="Guest"
                            />
                          </div>
                          <div className="col-12">
                            <button
                              type="button"
                              className="btn btn-primary w-100 py-2 px-5"
                            >
                              Book Now
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Carousel End */}
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
        {/* About Start */}
        <div className="container-fluid about pb-5">
          <div className="container pb-5">
            <div className="row g-5">
              <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.2s">
                <div>
                  <h4 className="text-primary">About Waterland</h4>
                  <h1 className="display-5 mb-4">
                    The Best Theme &amp; Amusement Park For Your Family
                  </h1>
                  <p className="mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Facilis eligendi illum inventore maiores incidunt vero id.
                    Est ipsam, distinctio veritatis earum inventore ab fugit
                    officiis ut ullam, laudantium facere sapiente?
                  </p>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="d-flex">
                        <div className="me-3">
                          <i className="fas fa-glass-cheers fa-3x text-primary" />
                        </div>
                        <div>
                          <h4>Food &amp; Drinks</h4>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex">
                        <div className="me-3">
                          <i className="fas fa-dot-circle fa-3x text-primary" />
                        </div>
                        <div>
                          <h4>Many Attractions</h4>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex">
                        <div className="me-3">
                          <i className="fas fa-hand-holding-usd fa-3x text-primary" />
                        </div>
                        <div>
                          <h4>Affordable Price</h4>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex">
                        <div className="me-3">
                          <i className="fas fa-lock fa-3x text-primary" />
                        </div>
                        <div>
                          <h4>Safety Lockers</h4>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.4s">
                <div className="position-relative rounded">
                  <div className="rounded" style={{ marginTop: 40 }}>
                    <div className="row g-0">
                      <div className="col-lg-12">
                        <div className="rounded mb-4">
                          <img
                            src="img/about.jpg"
                            className="img-fluid rounded w-100"
                            alt
                          />
                        </div>
                        <div className="row gx-4 gy-0">
                          <div className="col-6">
                            <div className="counter-item bg-primary rounded text-center p-4 h-100">
                              <div className="counter-item-icon mx-auto mb-3">
                                <i className="fas fa-thumbs-up fa-3x text-white" />
                              </div>
                              <div className="counter-counting mb-3">
                                <span
                                  className="text-white fs-2 fw-bold"
                                  data-toggle="counter-up"
                                >
                                  150
                                </span>
                                <span className="h1 fw-bold text-white">
                                  K +
                                </span>
                              </div>
                              <h5 className="text-white mb-0">
                                Happy Visitors
                              </h5>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="counter-item bg-dark rounded text-center p-4 h-100">
                              <div className="counter-item-icon mx-auto mb-3">
                                <i className="fas fa-certificate fa-3x text-white" />
                              </div>
                              <div className="counter-counting mb-3">
                                <span
                                  className="text-white fs-2 fw-bold"
                                  data-toggle="counter-up"
                                >
                                  122
                                </span>
                                <span className="h1 fw-bold text-white">
                                  {" "}
                                  +
                                </span>
                              </div>
                              <h5 className="text-white mb-0">
                                Awwards Winning
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded bg-primary p-4 position-absolute d-flex justify-content-center"
                    style={{
                      width: "90%",
                      height: 80,
                      top: "-40px",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    <h3 className="mb-0 text-white">20 Years Experiance</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
        {/* Service Start */}
        <div className="container-fluid service py-5">
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
        {/* Ticket Packages Start */}
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="row g-5 align-items-center">
              <div
                className="col-lg-12 col-xl-4 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="packages-item h-100">
                  <h4 className="text-primary">Ticket Packages</h4>
                  <h1 className="display-5 mb-4">
                    Choose The Best Packages For Your Family
                  </h1>
                  <p className="mb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tenetur adipisci facilis cupiditate recusandae aperiam
                    temporibus corporis itaque quis facere, numquam, ad culpa
                    deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                  </p>
                  <p>
                    <i className="fa fa-check text-primary me-2" />
                    Best Waterpark in the world
                  </p>
                  <p>
                    <i className="fa fa-check text-primary me-2" />
                    Best Packages For Your Family
                  </p>
                  <p>
                    <i className="fa fa-check text-primary me-2" />
                    Enjoy Various Kinds of Water Park
                  </p>
                  <p className="mb-5">
                    <i className="fa fa-check text-primary me-2" />
                    Win Up To 3 Free All Day Tickets
                  </p>
                  <a
                    href="#"
                    className="btn btn-primary rounded-pill py-3 px-5"
                  >
                    {" "}
                    Book Now
                  </a>
                </div>
              </div>
              <div
                className="col-lg-6 col-xl-4 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="pricing-item bg-dark rounded text-center p-5 h-100">
                  <div className="pb-4 border-bottom">
                    <h2 className="mb-4 text-primary">Family Packages</h2>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Possimus, dolorum!
                    </p>
                    <h2 className="mb-0 text-primary">
                      $260,90
                      <span className="text-body fs-5 fw-normal">/family</span>
                    </h2>
                  </div>
                  <div className="py-4">
                    <p className="mb-4">
                      <i className="fa fa-check text-primary me-2" />
                      All Access To Waterpark
                    </p>
                    <p className="mb-4">
                      <i className="fa fa-check text-primary me-2" />
                      Get Two Gazebo
                    </p>
                    <p className="mb-4">
                      <i className="fa fa-check text-primary me-2" />
                      Free Soft Drinks
                    </p>
                    <p className="mb-4">
                      <i className="fa fa-check text-primary me-2" />
                      Get Four Lockers
                    </p>
                    <p className="mb-4">
                      <i className="fa fa-check text-primary me-2" />
                      Free Four Towels
                    </p>
                  </div>
                  <a href="#" className="btn btn-light rounded-pill py-3 px-5">
                    {" "}
                    Book Now
                  </a>
                </div>
              </div>
              <div
                className="col-lg-6 col-xl-4 wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <div className="pricing-item bg-primary rounded text-center p-5 h-100">
                  <div className="pb-4 border-bottom">
                    <h2 className="text-dark mb-4">Basic Packages</h2>
                    <p className="text-white mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Possimus, dolorum!
                    </p>
                    <h2 className="text-dark mb-0">
                      $60,90
                      <span className="text-white fs-5 fw-normal">/person</span>
                    </h2>
                  </div>
                  <div className="text-white py-4">
                    <p className="mb-4">
                      <i className="fa fa-check text-dark me-2" />
                      Get Small Gazebo
                    </p>
                    <p className="mb-4">
                      <i className="fa fa-check text-dark me-2" />
                      Free Soft Drink
                    </p>
                    <p className="mb-4">
                      <i className="fa fa-check text-dark me-2" />
                      Get One Locker
                    </p>
                    <p className="mb-4">
                      <i className="fa fa-check text-dark me-2" />
                      Free Towel
                    </p>
                  </div>
                  <a href="#" className="btn btn-dark rounded-pill py-3 px-5">
                    {" "}
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Ticket Packages End */}
        {/* Attractions Start */}
        <div className="container-fluid attractions py-5">
          <div className="container attractions-section py-5">
            <div
              className="text-center mx-auto pb-5 wow fadeInUp"
              data-wow-delay="0.2s"
              style={{ maxWidth: 800 }}
            >
              <h4 className="text-primary">Attractions</h4>
              <h1 className="display-5 text-white mb-4">
                Explore WaterLand Park Attractions
              </h1>
              <p className="text-white mb-0">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tenetur adipisci facilis cupiditate recusandae aperiam
                temporibus corporis itaque quis facere, numquam, ad culpa
                deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
              </p>
            </div>
            <div
              className="owl-carousel attractions-carousel wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div
                className="attractions-item wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <img
                  src="img/attraction-1.jpg"
                  className="img-fluid rounded w-100"
                  alt
                />
                <a href="#" className="attractions-name">
                  Roller Coaster
                </a>
              </div>
              <div
                className="attractions-item wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <img
                  src="img/attraction-2.jpg"
                  className="img-fluid rounded w-100"
                  alt
                />
                <a href="#" className="attractions-name">
                  Carousel
                </a>
              </div>
              <div
                className="attractions-item wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <img
                  src="img/attraction-3.jpg"
                  className="img-fluid rounded w-100"
                  alt
                />
                <a href="#" className="attractions-name">
                  Arcade Game
                </a>
              </div>
              <div
                className="attractions-item wow fadeInUp"
                data-wow-delay="0.8s"
              >
                <img
                  src="img/attraction-4.jpg"
                  className="img-fluid rounded w-100"
                  alt
                />
                <a href="#" className="attractions-name">
                  Hanging Carousel
                </a>
              </div>
              <div
                className="attractions-item wow fadeInUp"
                data-wow-delay="1s"
              >
                <img
                  src="img/attraction-2.jpg"
                  className="img-fluid rounded w-100"
                  alt
                />
                <a href="#" className="attractions-name">
                  Carousel
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Attractions End */}
        {/* Gallery Start */}
        <div className="container-fluid gallery pb-5">
          <div className="container pb-5">
            <div
              className="text-center mx-auto pb-5 wow fadeInUp"
              data-wow-delay="0.2s"
              style={{ maxWidth: 800 }}
            >
              <h4 className="text-primary">Our Gallery</h4>
              <h1 className="display-5 mb-4">Captured Moments In Waterland</h1>
              <p className="mb-0">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tenetur adipisci facilis cupiditate recusandae aperiam
                temporibus corporis itaque quis facere, numquam, ad culpa
                deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
              </p>
            </div>
            <div className="row g-4">
              <div className="col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                <div className="gallery-item">
                  <img
                    src="img/gallery-1.jpg"
                    className="img-fluid rounded w-100 h-100"
                    alt
                  />
                  <div className="search-icon">
                    <a
                      href="img/gallery-1.jpg"
                      className="btn btn-light btn-lg-square rounded-circle"
                      data-lightbox="Gallery-1"
                    >
                      <i className="fas fa-search-plus" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 wow fadeInUp" data-wow-delay="0.4s">
                <div className="gallery-item">
                  <img
                    src="img/gallery-2.jpg"
                    className="img-fluid rounded w-100 h-100"
                    alt
                  />
                  <div className="search-icon">
                    <a
                      href="img/gallery-2.jpg"
                      className="btn btn-light btn-lg-square rounded-circle"
                      data-lightbox="Gallery-2"
                    >
                      <i className="fas fa-search-plus" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 wow fadeInUp" data-wow-delay="0.6s">
                <div className="gallery-item">
                  <img
                    src="img/gallery-3.jpg"
                    className="img-fluid rounded w-100 h-100"
                    alt
                  />
                  <div className="search-icon">
                    <a
                      href="img/gallery-3.jpg"
                      className="btn btn-light btn-lg-square rounded-circle"
                      data-lightbox="Gallery-3"
                    >
                      <i className="fas fa-search-plus" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 wow fadeInUp" data-wow-delay="0.2s">
                <div className="gallery-item">
                  <img
                    src="img/gallery-4.jpg"
                    className="img-fluid rounded w-100 h-100"
                    alt
                  />
                  <div className="search-icon">
                    <a
                      href="img/gallery-4.jpg"
                      className="btn btn-light btn-lg-square rounded-circle"
                      data-lightbox="Gallery-4"
                    >
                      <i className="fas fa-search-plus" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 wow fadeInUp" data-wow-delay="0.4s">
                <div className="gallery-item">
                  <img
                    src="img/gallery-5.jpg"
                    className="img-fluid rounded w-100 h-100"
                    alt
                  />
                  <div className="search-icon">
                    <a
                      href="img/gallery-5.jpg"
                      className="btn btn-light btn-lg-square rounded-circle"
                      data-lightbox="Gallery-5"
                    >
                      <i className="fas fa-search-plus" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                <div className="gallery-item">
                  <img
                    src="img/gallery-6.jpg"
                    className="img-fluid rounded w-100 h-100"
                    alt
                  />
                  <div className="search-icon">
                    <a
                      href="img/gallery-6.jpg"
                      className="btn btn-light btn-lg-square rounded-circle"
                      data-lightbox="Gallery-6"
                    >
                      <i className="fas fa-search-plus" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Gallery End */}
        {/* Blog Start */}
        <div className="container-fluid blog pb-5">
          <div className="container pb-5">
            <div
              className="text-center mx-auto pb-5 wow fadeInUp"
              data-wow-delay="0.2s"
              style={{ maxWidth: 800 }}
            >
              <h4 className="text-primary">Our Blog</h4>
              <h1 className="display-5 mb-4">Latest Blog &amp; Articles</h1>
              <p className="mb-0">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tenetur adipisci facilis cupiditate recusandae aperiam
                temporibus corporis itaque quis facere, numquam, ad culpa
                deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
              </p>
            </div>
            <div className="row g-4">
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                <div className="blog-item">
                  <div className="blog-img">
                    <a href="#">
                      <img
                        src="img/blog-2.jpg"
                        className="img-fluid w-100 rounded-top"
                        alt="Image"
                      />
                    </a>
                    <div className="blog-category py-2 px-4">Vacation</div>
                    <div className="blog-date">
                      <i className="fas fa-clock me-2" />
                      August 19, 2025
                    </div>
                  </div>
                  <div className="blog-content p-4">
                    <a href="#" className="h4 d-inline-block mb-4">
                      Why Children Dont Like Getting Out Of The Water
                    </a>
                    <p className="mb-4">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ullam aspernatur nam quidem porro sapiente, neque a
                      quibusdam....
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary rounded-pill py-2 px-4"
                    >
                      Read More <i className="fas fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                <div className="blog-item">
                  <div className="blog-img">
                    <a href="#">
                      <img
                        src="img/blog-3.jpg"
                        className="img-fluid w-100 rounded-top"
                        alt="Image"
                      />
                    </a>
                    <div className="blog-category py-2 px-4">Insight</div>
                    <div className="blog-date">
                      <i className="fas fa-clock me-2" />
                      August 19, 2025
                    </div>
                  </div>
                  <div className="blog-content p-4">
                    <a href="#" className="h4 d-inline-block mb-4">
                      5 Ways To Enjoy Waterland This Spring Break
                    </a>
                    <p className="mb-4">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ullam aspernatur nam quidem porro sapiente, neque a
                      quibusdam....
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary rounded-pill py-2 px-4"
                    >
                      Read More <i className="fas fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                <div className="blog-item">
                  <div className="blog-img">
                    <a href="#">
                      <img
                        src="img/blog-1.jpg"
                        className="img-fluid w-100 rounded-top"
                        alt="Image"
                      />
                    </a>
                    <div className="blog-category py-2 px-4">Insight</div>
                    <div className="blog-date">
                      <i className="fas fa-clock me-2" />
                      August 19, 2025
                    </div>
                  </div>
                  <div className="blog-content p-4">
                    <a href="#" className="h4 d-inline-block mb-4">
                      3 Tips for Your Family Spring Break at Amusement Park
                    </a>
                    <p className="mb-4">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ullam aspernatur nam quidem porro sapiente, neque a
                      quibusdam....
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary rounded-pill py-2 px-4"
                    >
                      Read More <i className="fas fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Blog End */}
        {/* Team Start */}
        <div className="container-fluid team pb-5">
          <div className="container pb-5">
            <div
              className="text-center mx-auto pb-5 wow fadeInUp"
              data-wow-delay="0.2s"
              style={{ maxWidth: 800 }}
            >
              <h4 className="text-primary">Meet Our Team</h4>
              <h1 className="display-5 mb-4">
                Our Waterland Park Dedicated Team Member
              </h1>
              <p className="mb-0">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tenetur adipisci facilis cupiditate recusandae aperiam
                temporibus corporis itaque quis facere, numquam, ad culpa
                deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
              </p>
            </div>
            <div className="row g-4 justify-content-center">
              <div
                className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="team-item p-4">
                  <div className="team-content">
                    <div className="d-flex justify-content-between border-bottom pb-4">
                      <div className="text-start">
                        <h4 className="mb-0">David James</h4>
                        <p className="mb-0">Profession</p>
                      </div>
                      <div>
                        <img
                          src="img/team-1.jpg"
                          className="img-fluid rounded"
                          style={{ width: 100, height: 100 }}
                          alt
                        />
                      </div>
                    </div>
                    <div className="team-icon rounded-pill my-4 p-3">
                      <a
                        className="btn btn-primary btn-sm-square rounded-circle me-3"
                        href
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-primary btn-sm-square rounded-circle me-3"
                        href
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="btn btn-primary btn-sm-square rounded-circle me-3"
                        href
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a
                        className="btn btn-primary btn-sm-square rounded-circle me-0"
                        href
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                    <p className="text-center mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Autem, quibusdam eveniet itaque provident sequi deserunt.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="team-item p-4">
                  <div className="team-content">
                    <div className="d-flex justify-content-between border-bottom pb-4">
                      <div className="text-start">
                        <h4 className="mb-0">William John</h4>
                        <p className="mb-0">Profession</p>
                      </div>
                      <div>
                        <img
                          src="img/team-2.jpg"
                          className="img-fluid rounded"
                          style={{ width: 100, height: 100 }}
                          alt
                        />
                      </div>
                    </div>
                    <div className="team-icon rounded-pill my-4 p-3">
                      <a
                        className="btn btn-primary btn-sm-square rounded-circle me-3"
                        href
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-primary btn-sm-square rounded-circle me-3"
                        href
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="btn btn-primary btn-sm-square rounded-circle me-3"
                        href
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a
                        className="btn btn-primary btn-sm-square rounded-circle me-0"
                        href
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                    <p className="text-center mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Autem, quibusdam eveniet itaque provident sequi deserunt.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <div className="team-item p-4">
                  <div className="team-content">
                    <div className="d-flex justify-content-between border-bottom pb-4">
                      <div className="text-start">
                        <h4 className="mb-0">Michael John</h4>
                        <p className="mb-0">Profession</p>
                      </div>
                      <div>
                        <img
                          src="img/team-3.jpg"
                          className="img-fluid rounded"
                          style={{ width: 100, height: 100 }}
                          alt
                        />
                      </div>
                    </div>
                    <div className="team-icon rounded-pill my-4 p-3">
                      <a
                        className="btn btn-primary btn-sm-square rounded-circle me-3"
                        href
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-primary btn-sm-square rounded-circle me-3"
                        href
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="btn btn-primary btn-sm-square rounded-circle me-3"
                        href
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a
                        className="btn btn-primary btn-sm-square rounded-circle me-0"
                        href
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                    <p className="text-center mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Autem, quibusdam eveniet itaque provident sequi deserunt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team End */}
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
        <Footer />
      </div>
    </div>
  );
}

export default Home;
