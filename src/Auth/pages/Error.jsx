import React from 'react'
import error from '../image/404-error-template-3.avif'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const nevigate = useNavigate()
  return (
    <div className='container error-bg vh-100 '>
        <button className="button-submit  bg-warning  rounded-5 px-4" onClick={()=>nevigate('/home')}>Home <i class="fa-solid fa-house text-white ms-2 "></i></button>
    </div>
  )
}

export default Error
