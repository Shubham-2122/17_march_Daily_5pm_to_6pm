import axios from 'axios'
import { NavLink } from 'react-router-dom'

function AHeader() {


  return (
    <div>
        <div>
      {/* Navbar & Hero Start */}
      <div className="container-fluid nav-bar sticky-top px-4 py-2 py-lg-0">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a href className="navbar-brand p-0">
            <h1 className="display-6 text-dark">
              <i className="fas fa-swimmer text-primary me-3" />
              WaterLand
            </h1>
            {/* <img src="img/logo.png" alt="Logo"> */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto py-0">
              <NavLink to="/dash" className="nav-item nav-link ">
                Dashboard
              </NavLink>
              <NavLink to="/about" className="nav-item nav-link">
                About
              </NavLink>
              <NavLink to="/service" className="nav-item nav-link">
                Service
              </NavLink>
               <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  blogs
                </a>
                <div className="dropdown-menu m-0">
                  <NavLink to="/blogmanage" className="dropdown-item">
                    Manage blogs
                  </NavLink>
                  <NavLink to="/addblog" className="dropdown-item">
                    Add blogs
                  </NavLink>
                
                </div>
              </div>
             
               <NavLink to="/teamManger" className="nav-item nav-link">
                Team
              </NavLink>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu m-0">
                  <NavLink to="/feacture" className="dropdown-item">
                    Our Feature
                  </NavLink>
                  <NavLink to="/gallery" className="dropdown-item">
                    Our Gallery
                  </NavLink>
                  <NavLink to="/attri" className="dropdown-item">
                    Attractions
                  </NavLink>
                  <NavLink to="/pack" className="dropdown-item">
                    Ticket Packages
                  </NavLink>
                
                  <NavLink to="/test" className="dropdown-item">
                    Testimonial
                  </NavLink>
                </div>
              </div>
              <NavLink to="/contact" className="nav-item nav-link">
                Contact
              </NavLink>
            </div>
            <div className="team-icon d-none d-xl-flex justify-content-center me-3">
              <a className="btn btn-square btn-light rounded-circle mx-1" href>
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-square btn-light rounded-circle mx-1" href>
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-square btn-light rounded-circle mx-1" href>
                <i className="fab fa-instagram" />
              </a>
              <a className="btn btn-square btn-light rounded-circle mx-1" href>
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
            <a
              href="#"
              className="btn btn-primary rounded-pill py-2 px-4 flex-shrink-0"
            >
              Get Started
            </a>
          </div>
        </nav>
      </div>
      {/* Navbar & Hero End */}
    </div>
    </div>
  )
}

export default AHeader
