import React, { useEffect, useState } from 'react'

function UseTable() {

    const [data, setdata] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = () => {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "GET"
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                // console.log(data)
                setdata(data)
            })
    }

    return (
        <div>
            <h1>hello this user table data</h1>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">name</th>
                        <th scope="col">email</th>
                        <th scope="col">address</th>
                        <th scope="col">company name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((user) => {
                            console.log(user)
                            return (
                                <tr>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address.city}</td>
                                    <td>{user.company.name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UseTable
