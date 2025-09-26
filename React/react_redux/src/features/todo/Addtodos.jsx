import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtodo } from './todoSlice'

function Addtodos() {

    const [form, setform] = useState("")

    const dispatch = useDispatch()

    const dataadd = (e) => {
        e.preventDefault();

        dispatch(addtodo(form))
        setform("")
    }

    return (
        <div>
            <form action="" onSubmit={dataadd}>
                <input type="text" value={form} onChange={(e) => setform(e.target.value)} placeholder='Enter your name' />
                <button >Add Name</button>
            </form>

        </div>
    )
}

export default Addtodos
