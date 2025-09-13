import React, { useEffect, useState } from "react";
import Header from "../Coman/Header";
import Navs from "../Coman/Navs";
import Footer from "../Coman/Footer";
import axios from "axios";

function Blog() {

  const [blogs,setblogs] = useState([])

  useEffect(()=>{
    fetchdata()
  },[])

  const fetchdata=async()=>{
    const res = await axios.get("http://localhost:3000/blogs")
    setblogs(res.data)
  }

  return (
    <div>
      <Header />
      <Navs title="Our Blog" desc="Blog" />
      {/* Blog Start */}
      <div className="container-fluid blog py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: 800 }}
          >
            <h4 className="text-primary">Our Blog</h4>
            <h1 className="display-5 mb-4">Latest Blog &amp; Articles</h1>
            <p className="mb-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              adipisci facilis cupiditate recusandae aperiam temporibus corporis
              itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
              obcaecati, ipsam mollitia hic.
            </p>
          </div>
          <div className="row g-4">
            
            {
              
              blogs && blogs.map((data,index)=>{
                console.log(blogs)
                return(
                   <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
              <div className="blog-item">
                <div className="blog-img">
                  <a href="#">
                    <img
                      src={data.image}
                      className="img-fluid w-100 rounded-top"
                      alt="Image"
                    />
                  </a>
                  <div className="blog-category py-2 px-4">{data.event}</div>
                  <div className="blog-date">
                    <i className="fas fa-clock me-2" />
                    {data.date}
                  </div>
                </div>
                <div className="blog-content p-4">
                  <a href="#" className="h4 d-inline-block mb-4">
                    {data.name}
                  </a>
                  <p className="mb-4">
                    {data.desc}
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
                )
              })
            }
           
          </div>
        </div>
      </div>
      {/* Blog End */}
      <Footer />
    </div>
  );
}

export default Blog;
