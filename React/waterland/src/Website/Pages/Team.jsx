import React, { useEffect, useState } from "react";
import Header from "../Coman/Header";
import Navs from "../Coman/Navs";
import Footer from "../Coman/Footer";
import axios from "axios";

function Team() {
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
      <Navs title="Our Team" desc="Team" />
      {/* Team Start */}
      <div className="container-fluid team py-5">
        <div className="container py-5">
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              adipisci facilis cupiditate recusandae aperiam temporibus corporis
              itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
              obcaecati, ipsam mollitia hic.
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
      <Footer />
    </div>
  );
}

export default Team;
