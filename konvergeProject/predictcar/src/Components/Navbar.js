import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
function Navbar() {
  const token =localStorage.getItem('token')
  const navigate=useNavigate()
  return (
    <div class="navbar-fixed">
    <nav className='#69f0ae green accent-2 '>
    <div className="nav-wrapper mx-5 ">
      <Link to="/" className="brand-logo left ">Home</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down ">
        {
          token?
          <>
          <li><Link to="/predict"><h5>Predict</h5></Link></li>
          <li><button className='#f57f17 yellow darken-4 btn' onClick={()=>{
            localStorage.removeItem('token')
            navigate('/login')
          }}>Logout</button></li>
          </>
          :
          <>
          <li><Link to="/login"><h5>Login</h5> </Link></li>
          <li><Link to="/signup"><h5>Signup</h5></Link></li>
          </>
        }
        
        
        
      </ul>
    </div>
  </nav>
  </div>
  )
}

export default Navbar