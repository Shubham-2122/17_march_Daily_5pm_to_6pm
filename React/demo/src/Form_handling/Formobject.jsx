import React, { useState } from 'react'

function Formobject() {

    const [form, setform] = useState({
        name: "",
        email: "",
        mobile: "",
        password: ""
    })

    const getchange=(e)=>{
        setform({
            ...form,
            // name = value
            [e.target.name] : e.target.value
        })
        console.log(form)
    }

    return (
        <div>
            <div className="container">
                {/* without reduce code */}
                {/* <div className="col-md-6 mx-auto">
                    <form action="/action_page.php">
                        <div className="mb-3 mt-3">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input type="text" value={form.name} onChange={(e) => setform({ ...form, name: e.target.value })} className="form-control" id="name" placeholder="Enter name" />
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email" value={form.email} onChange={(e) => setform({ ...form, email: e.target.value })} className="form-control" id="email" placeholder="Enter email" />
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="mobile" className="form-label">mobile:</label>
                            <input type="text" value={form.mobile} onChange={(e) => setform({ ...form, mobile: e.target.value })} className="form-control" id="mobile" placeholder="Enter mobile" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pwd" className="form-label">Password:</label>
                            <input type="password" value={form.password} onChange={(e) => setform({ ...form, password: e.target.value })} className="form-control" id="pwd" placeholder="Enter password" />
                        </div>
                        <div className="form-check mb-3">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div> */}

                {/* with reducer code */}

                  <div className="col-md-6 mx-auto">
                    <form action="/action_page.php">
                        <div className="mb-3 mt-3">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input type="text" value={form.name} onChange={getchange} name='name'  className="form-control" id="name" placeholder="Enter name" />
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email" value={form.email} onChange={getchange} className="form-control" name='email' id="email" placeholder="Enter email" />
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="mobile" className="form-label">mobile:</label>
                            <input type="text" value={form.mobile} onChange={getchange} className="form-control" name='mobile' id="mobile" placeholder="Enter mobile" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pwd" className="form-label">Password:</label>
                            <input type="password" value={form.password} onChange={getchange} className="form-control" name='password' id="pwd" placeholder="Enter password" />
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

export default Formobject
