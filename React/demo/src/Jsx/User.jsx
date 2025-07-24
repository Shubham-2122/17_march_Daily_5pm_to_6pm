// JSX :- Javscript syntax xml/exsation
// jsx :- html retrun 
// js vs jsx :- litla bit fast 0.1
// js and jsx :-  without $ singe print dom
// jsx return javscript {} "= varibale name/ console.log()"

import React from 'react'

function User() {

    // console.log("hello jsx")
    // console.log(2+5)
    let data = "vivek"

    let sum = 10 + 10

    let user = <ul>
        <li>one</li>
        <li>two</li>
        <li>Three</li>
        <li>four</li>
    </ul>

    console.log(data)

    return (
        <div>
            <h1>Hello thi jsx compoent</h1>
            <h2>Hdasjfkljil sd</h2>
            <h1>hello {data}</h1>

            {sum}

            {user}

            {
                console.log("hello")
            }
        </div>
    )
}

export default User
