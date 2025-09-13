import React, { useEffect, useState } from "react";
import AHeader from "../Acoman/AHeader";
import ANavs from "../Acoman/ANavs";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import axios from "axios";

function TeamMange() {

        const [team,setteam] = useState([])

    useEffect(()=>{
      fetchdata()
    },[])

  const fetchdata=async()=>{
    const res= await axios.get("http://localhost:3000/team")
    setteam(res.data)
  }

  const [singleteam,setsingleteam] = useState({
    id:"",
    name:"",
    work:"",
    image:"",
    desc:""
  })

  const getteam = async(id)=>{
    const res = await axios.get(`http://localhost:3000/team/${id}`)
    console.log(res.data)
    setsingleteam(res.data)
  }

  const deletedata=async(id)=>{
    const res = await axios.delete(`http://localhost:3000/team/${id}`)
    console.log(res.data)
    fetchdata()
  }

  return (
    <div>
      <AHeader />
      <ANavs title="Team Manage" desc="Team manger" />
      <h1 className="text-center">Team Manage data</h1>
      <div className="container mt-5">
        <MDBTable>
          <MDBTableHead>
            <tr className="text-center">
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">work</th>
              <th scope="col">Action</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {team &&
              team.map((data, index) => {
                return (
                  <tr className="text-center" key={index}>
                    <th scope="row">{data.id}</th>
                    <td>{data.name}</td>
                    <td>{data.work}</td>
                    <td>
                      <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>getteam(data.id)}>View</button>
                      <button className="btn btn-success mx-2">Edit</button>
                      <button className="btn btn-danger" onClick={()=>deletedata(data.id)}>Delete</button>
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
        <div
                    className="col-12 wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="team-item p-4">
                      <div className="team-content">
                        <div className="d-flex justify-content-between border-bottom pb-4">
                          <div className="text-start">
                            <h4 className="mb-0">{singleteam.name}</h4>
                            <p className="mb-0">{singleteam.work}</p>
                          </div>
                          <div>
                            <img
                              src={singleteam.image}
                              className="img-fluid rounded"
                              style={{ width: 100, height: 100 }}
                              alt
                            />
                          </div>
                        </div>
                        <div className="team-icon d-flex justify-content-center rounded-pill my-4 p-3">
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
                          {singleteam.desc}
                        </p>
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

export default TeamMange;
