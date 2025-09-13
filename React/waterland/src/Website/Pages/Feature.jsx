import React from "react";
import Header from "../Coman/Header";
import Navs from "../Coman/Navs";
import Footer from "../Coman/Footer";

function Feature() {
  return (
    <div>
        <Header />
        <Navs title="Our Features" desc="Feature" />
      {/* Feature Start */}
      <div className="container-fluid feature py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: 800 }}
          >
            <h4 className="text-primary">Our Features</h4>
            <h1 className="display-5 mb-4">
              Explore Waterland Park Best Features
            </h1>
            <p className="mb-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              adipisci facilis cupiditate recusandae aperiam temporibus corporis
              itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
              obcaecati, ipsam mollitia hic.
            </p>
          </div>
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
      <Footer />
    </div>
  );
}

export default Feature;
