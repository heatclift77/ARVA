import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
export default function App() {
    const dispatch = useDispatch()
    const { message } = useSelector(state=>state.tests)
    return (
        <div>
            <h1>{message}</h1>
            <input type="text" onChange={()=>{dispatch({type:"test", message:e.target.value})}} />
        </div>
    )
}
