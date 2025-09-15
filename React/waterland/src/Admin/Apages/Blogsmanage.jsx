import React, { useEffect, useState } from "react";
import AHeader from "../Acoman/AHeader";
import ANavs from "../Acoman/ANavs";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import axios from "axios";
import { toast } from "react-toastify";

function Blogsmanage() {
  const [blogs, setblogs] = useState([]);
  console.log(blogs);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/blogs");
    setblogs(res.data);
  };

  const [singleblog, setsingleblog] = useState({
    id: "",
    name: "",
    date: "",
    event: "",
    image: "",
    desc: ""
  })

  const getsingleblog = async (id) => {
    const res = await axios.get(`http://localhost:3000/blogs/${id}`)
    console.log(res.data)
    setsingleblog(res.data)
  }

  const deleteblogs = async (id) => {
    const res = await axios.delete(`http://localhost:3000/blogs/${id}`)
    console.log(res.data)
    toast.success("Blog data remove success..!")
    fetchdata();
  }


  // update blogs
  const [edit, setedit] = useState(null)
  // update change show
  const [blogedit, setblogedit] = useState({
    id: "",
    name: "",
    date: "",
    event: "",
    image: "",
    desc: ""
  })

  const getproduct = (data) => {
    setedit(data)
    setblogedit(data)
    console.log(data)
  }
  const getchange = (e) => {
    setblogedit({
      ...blogedit,
      [e.target.name]: e.target.value
    })
    console.log(blogedit)
  }

  const updatedata = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:3000/blogs/${blogedit.id}`, blogedit)
      console.log(res.data)
      toast.success("blogs update")
       setedit(null)
      fetchdata()
     
      setblogedit({
        id: "",
        name: "",
        date: "",
        event: "",
        image: "",
        desc: ""
      })
      
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div>
      <AHeader />
      <ANavs title="BlogManage" desc="/Blogmange" />
      <h1 className="text-center">Blogs Manage data</h1>
      <div className="container mt-5">
        <MDBTable>
          <MDBTableHead>
            <tr className="text-center">
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
              <th scope="col">Eevent</th>
              <th scope="col">Action</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {blogs &&
              blogs.map((data, index) => {
                return (
                  <tr className="text-center" key={index}>
                    <th scope="row">{data.id}</th>
                    <td>{data.name}</td>
                    <td>{data.date}</td>
                    <td>{data.event}</td>
                    <td>
                      <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => getsingleblog(data.id)}>View</button>
                      <button className="btn btn-success mx-2" onClick={() => getproduct(data)}>Edit</button>
                      <button className="btn btn-danger" onClick={() => deleteblogs(data.id)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
          </MDBTableBody>
        </MDBTable>
      </div>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div className="col-12 wow fadeInUp" data-wow-delay="0.2s">
                <div className="blog-item">
                  <div className="blog-img">
                    <a href="#">
                      <img
                        src={singleblog.image}
                        className="img-fluid w-100 rounded-top"
                        alt="Image"
                      />
                    </a>
                    <div className="blog-category py-2 px-4">{singleblog.event}</div>
                    <div className="blog-date">
                      <i className="fas fa-clock me-2" />
                      {singleblog.date}
                    </div>
                  </div>
                  <div className="blog-content p-4">
                    <a href="#" className="h4 d-inline-block mb-4">
                      {singleblog.name}
                    </a>
                    <p className="mb-4">
                      {singleblog.desc}
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
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      {
        edit && (
          <div className="container">
            <div className="row">
              <div className="col-xl-12 " >
                <div className="bg-light p-5 rounded h-100">
                  <h4 className="text-primary mb-4 text-center">Updates blogs</h4>
                  <form >
                    <div className="row g-4">
                      <div className="col-lg-12 col-xl-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control border-0"
                            id="name"
                            placeholder="Your Name"
                            onChange={getchange}
                            name="name"
                            value={blogedit.name}

                          />
                          <label htmlFor="name">blog Name</label>
                        </div>
                      </div>

                      <div className="col-lg-12 col-xl-6">
                        <div className="form-floating">
                          <input
                            type="date"
                            className="form-control border-0"
                            id="date"
                            value={blogedit.date}
                            placeholder="date"
                            onChange={getchange}
                            name="date"

                          />
                          <label htmlFor="date">Your Date</label>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-floating">
                          <select
                            class="form-select"
                            aria-label="Default select example"

                            name="event"
                            value={blogedit.event}
                            onChange={getchange}

                          >
                            <option selected>Your select Event</option>
                            <option value="Vacation">Vacation</option>
                            <option value="Insight">Insight</option>
                          </select>
                          <label htmlFor="event">Your Event</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="url"
                            className="form-control border-0"
                            id="image"
                            placeholder="image"
                            value={blogedit.image}
                            onChange={getchange}
                            name="image"

                          />
                          <label htmlFor="image">Your Images</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            className="form-control border-0"
                            placeholder="Leave a message here"
                            id="message"
                            style={{ height: 160 }}
                            onChange={getchange}
                            defaultValue={""}
                            name="desc"
                            value={blogedit.desc}
                          />
                          <label htmlFor="message">Message</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row">
                          <div className="col-6"> <button onClick={updatedata} className="btn btn-primary w-100 py-3">
                            update blogs
                          </button></div>
                          <div className="col-6">
                            <button onClick={() => setedit(null)} className="btn btn-primary w-100 py-3">
                              cancle blogs
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )
      }

    </div>
  );
}

export default Blogsmanage;
