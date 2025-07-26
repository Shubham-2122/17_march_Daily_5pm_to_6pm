// props :- one compoenent to anothor compoennt use
// props meas properites 
// props parameter define use 
// props class  construcro super
// compoent call value
// props it's a we can not change 

import React, { Component } from 'react'

class ClassProps extends Component {
    constructor(props){
        super(props);
        this.data = props;
    }
    render() {
        return (
       
                <div className="col-md-4">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={this.data.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{this.data.title}</h5>
                            <p className="card-text">{this.data.desc}</p>
                            <button className='btn btn-success'>show now</button>
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>

                </div>
        )
    }
}

export default ClassProps
