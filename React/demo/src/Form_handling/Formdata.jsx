// state :- form hadling data save api pass
import React, { useState } from 'react'

function Formdata() {

    const [name,setname] = useState("");
    const [email,setemail] = useState("");
    const [mobile,setmobile] = useState("");
    const [password,setpassword] = useState("")

    return (
        <div>
          <div className="container">
            <div className="col-md-6 mx-auto">
                  <form action="/action_page.php">
                <div className="mb-3 mt-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" value={name} onChange={(e)=>setname(e.target.value)} className="form-control" id="name" placeholder="Enter name" name="name" />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} className="form-control" id="email" placeholder="Enter email" name="email" />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="mobile" className="form-label">mobile:</label>
                    <input type="text" value={mobile} onChange={(e)=>setmobile(e.target.value)} className="form-control" id="mobile" placeholder="Enter mobile" name="mobile" />
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">Password:</label>
                    <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                </div>
                <div className="form-check mb-3">
                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
          </div>

        </div>
    )
}

export default Formdata
