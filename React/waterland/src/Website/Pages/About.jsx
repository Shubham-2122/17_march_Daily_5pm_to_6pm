import React, { useEffect, useState } from "react";
import Header from "../Coman/Header";
import Navs from "../Coman/Navs";
import Footer from "../Coman/Footer";
import axios from "axios";

function About() {

   const [team, setteam] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/team");
    console.log(res.data);
    setteam(res.data);
  };
  return (
    <div>
      <Header />
      <Navs title="About Us" desc="About" />
      <div>
        {/* About Start */}
        <div className="container-fluid about py-5">
          <div className="container py-5">
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
        {/* Feature Start */}
        <div className="container-fluid feature pb-5">
          <div className="container pb-5">
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
              <div className="col-6 wow fadeInUp" data-wow-delay="0.2s">
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
              <div className="col-3 wow fadeInUp" data-wow-delay="0.4s">
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
              <div className="col-3 wow fadeInUp" data-wow-delay="0.6s">
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
              <div className="col-3 wow fadeInUp" data-wow-delay="0.2s">
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
              <div className="col-3 wow fadeInUp" data-wow-delay="0.4s">
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
              <div className="col-6 wow fadeInUp" data-wow-delay="0.6s">
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
              {team &&
              team.map((data, index) => {
                return (
                  <div
                    className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="team-item p-4">
                      <div className="team-content">
                        <div className="d-flex justify-content-between border-bottom pb-4">
                          <div className="text-start">
                            <h4 className="mb-0">{data.name}</h4>
                            <p className="mb-0">{data.work}</p>
                          </div>
                          <div>
                            <img
                              src={data.image}
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
                          {data.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Team End */}
      </div>
      <Footer />
    </div>
  );
}

export default About;
