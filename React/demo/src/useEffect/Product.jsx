import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Product() {

    const [data, setdata] = useState([])

    useEffect(() => {
        Productdata()
    }, [])

    const Productdata = async () => {
        const res = await axios.get("https://fakestoreapi.com/products")
        setdata(res.data)
    }

    return (
        <div>
            <h1>Hello this Card data print</h1>
            <div className="container">
                <div className="row">
                    {
                        data && data.map((product,index) => {
                            // console.log(product)
                            return (
                                // key={product.id}
                                <div className="col-md-4" key={index}>
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img src={product.image} style={{height:"300px"}} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.id}</h5>
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text">{product.description.slice(1,100)}</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Product
