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

  const [singleblog,setsingleblog] = useState({
    id:"",
        name:"",
        date:"",
        event:"",
        image:"",
        desc:""
  })

  const getsingleblog = async(id)=>{
    const res = await axios.get(`http://localhost:3000/blogs/${id}`)
    console.log(res.data)
    setsingleblog(res.data)
  }

  const deleteblogs=async(id)=>{
    const res = await axios.delete(`http://localhost:3000/blogs/${id}`)
    console.log(res.data)
    toast.success("Blog data remove success..!")
    fetchdata();
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
                      <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>getsingleblog(data.id)}>View</button>
                      <button className="btn btn-success mx-2">Edit</button>
                      <button className="btn btn-danger" onClick={()=>deleteblogs(data.id)}>Delete</button>
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
    </div>
  );
}

export default Blogsmanage;
