import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
import logo from '../image/Bumble-Logo.png'
import profile from '../image/Screenshot 2024-01-31 231447.png'
import swal from 'sweetalert'

const Home = () => {
  const nevigate = useNavigate()

  const handleLogout = () => {
    signOut(auth).then(() => {
      localStorage.removeItem('token')
      swal("Registerd Successfully!", "You clicked the button!", "success");
    }).catch((error) => {
      swal("Invalid!", "You clicked the button!", "error");
    });
    nevigate('/')
  }
  return (
    <div >
      <div className="header">
        <div className="container">
          <div className="d-flex justify-content-between  align-items-center ">
            <div className="logo">
              <img src={logo} alt="" className='img-fluid' style={{ width: "150px" }} />
            </div>
            <div>
              <button className='button-submit  bg-warning  rounded-1 px-4' onClick={handleLogout}>LogOut</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="d-flex justify-content-between  ">
          <img src={profile} alt="" className='img-fluid ' style={{ height: "650px" }} />
          <div style={{backgroundColor:"#fff7d8"}} className=' rounded-4 mt-2 w-100 ms-2'>
            <div className="p-4 ">
              <h1>Bhumika</h1>
              <p>About B</p>
              <p>Go forth on your path, as it exists only through your walking. Augustine of Hippo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
