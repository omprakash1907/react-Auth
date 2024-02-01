import React from 'react'
import { useNavigate } from 'react-router-dom'

const MainDash = () => {

    const nevigate = useNavigate()

    return (
        <div className='bg-theme vh-100  d-flex  justify-content-center  align-items-center '>
            <div className="intro-box p-4 text-center">
                <h1>Make the first move</h1>
                <p className='px-5'>Start meeting new people in your area! If you already have an account, sign in to use Bumble on the web. </p>
                <div className="d-flex justify-content-center ">
                    <button className='button-submit  bg-warning  rounded-1 px-4 me-2 ' onClick={()=>nevigate('/signup')}>Join</button>
                    <button className='button-submit  bg-black border-2 border-black   rounded-1 px-4 text-white'  onClick={()=>nevigate('/login')}>Sign In</button>
                </div>
            </div>
        </div>
    )
}

export default MainDash
