import React from "react";
import Header from "../Coman/Header";
import Navs from "../Coman/Navs";
import Footer from "../Coman/Footer";
import { Helmet } from "react-helmet";

function Attraction() {
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
        <Navs title="Attractions" desc="Attractions" />
      {/* Attractions Start */}
      <div
        className="container-fluid attractions py-5"
        style={{ marginTop: 100 }}
      >
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              adipisci facilis cupiditate recusandae aperiam temporibus corporis
              itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
              obcaecati, ipsam mollitia hic.
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
            <div className="attractions-item wow fadeInUp" data-wow-delay="1s">
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
      <Footer />
    </div>
  );
}

export default Attraction;
