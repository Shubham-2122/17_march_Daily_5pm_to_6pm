import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showuser } from '../Slice/userSlice'

function Read() {

    const {users, loading} = useSelector((state)=>state.user)

    console.log(users)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(showuser())
    },[])

  return (
    <div>
      
    </div>
  )
}

export default Read
