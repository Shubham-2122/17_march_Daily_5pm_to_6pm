import React, { useState } from "react";
import AHeader from "../Acoman/AHeader";
import ANavs from "../Acoman/ANavs";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Addblog() {

    const redirect = useNavigate()

    const [form,setfrom] = useState({
        id:"",
        name:"",
        date:"",
        event:"",
        image:"",
        desc:""
    })

    // event handler
    const handlechange=(e)=>{
        setfrom({
            ...form,
            id: new Date().getTime().toString(),
            [e.target.name]:e.target.value
        })
        console.log(form)
    }

    // submit data
    const addblog=async(e)=>{
      e.preventDefault()
     const res = await axios.post("http://localhost:3000/blogs",form)
     console.log(res.data)
     
     toast.success("blog add successfuly..!")
     redirect("/blogmanage") 
     setfrom({
      id:"",
        name:"",
        date:"",
        event:"",
        image:"",
        desc:""
     })   
     
    }

  return (
    <div>
      <AHeader />
      <ANavs title="Add Blogs" desc="Add blogs" />
      <div className="container">
        <div className="row">
          <div className="col-xl-12 " >
            <div className="bg-light p-5 rounded h-100">
              <h4 className="text-primary mb-4 text-center">Add blogs</h4>
              <form onSubmit={addblog}>
                <div className="row g-4">
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0"
                        id="name"
                        placeholder="Your Name"
                        value={form.name}
                        name="name"
                        onChange={handlechange}
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
                        value={form.date}
                        placeholder="date"
                        name="date"
                        onChange={handlechange}
                      />
                      <label htmlFor="date">Your Date</label>
                    </div>
                  </div>
                   <div className="col-lg-12">
                    <div className="form-floating">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        value={form.event}
                        name="event"
                        onChange={handlechange}
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
                        value={form.image}
                        name="image"
                        onChange={handlechange}
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
                        defaultValue={""}
                        name="desc"
                        onChange={handlechange}
                        value={form.desc}
                      />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addblog;
