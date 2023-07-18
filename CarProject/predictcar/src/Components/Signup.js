import React,{useState} from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    const [formData,setFormData]=useState({})
    const [post,setPost]=useState([])
    const [secretkey,setSecretkey]=useState('')
    const handelChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    
    const handleSumbit=(e)=>{
      e.preventDefault()
        if(formData.userType==='admin' && secretkey!=='swaraj'){
          
          alert('Invalid Admin')
        }else{
        fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          ...formData,
        }),
      })
        .then((res) => res.json())
        .then((data) =>{
          setPost(data)
          //console.log(data)
        }
          
        );
    }

     
    }
  //console.log(formData)

   
  return (
    <div className="mx-auto my-container">
      {post.error &&
        <div className='red card-panel'>{post.error} with that email!</div>
      }
      {post.status &&
        <div className='green card-panel'>You are Signup can Login now!</div>
      }
       {/* <h3 className='center-align fs-2' >Signup</h3> */}
      <form onSubmit={handleSumbit}>
      <div className='card  hoverable rounded-3'>
      <div className='card-content white-text' >
        <div className='center'>
             <label>
                <input 
                className="with-gap" 
                name="userType" 
                type="radio" 
                value='user'
                onClick={handelChange}
                
            />
              <span>User</span>
            </label>
          
              <label className='ms-3'>
                <input 
                 className="with-gap " 
                name="userType" 
                type="radio" 
                value='admin'
                onClick={handelChange}
             />
                <span>Admin</span>
              </label>
        </div>
        
        <div className='mt-2'>
          
              {formData.userType==='admin'?(
                <>
                  <label  className="form-label fs-5 text-black">SecretKey</label>
                  <input
                  type="text"
                  placeholder='Secret Key'
                  name='secretkey'
                  onChange={(e)=>setSecretkey(e.target.value)}
                  required
              />
              </>
              ):null}
              
            <label  className="form-label fs-5 text-black">FirstName</label>
            <input
                  type="text"
                  placeholder='First Name'
                  name='firstName'
                  onChange={handelChange}
                  required
                />
              <label  className="form-label fs-5 text-black">LastName</label>
                <input
                  type="text"
                  placeholder='Last Name'
                  name='lastName'
                  onChange={handelChange}
                  required
                />
                <label  className="form-label fs-5 text-black">Email</label>
                <input
                  type="email"
                  name='email'
                  placeholder='Email'
                  onChange={handelChange}
                  required
                />
                <label  className="form-label fs-5 text-black">Password</label>
                <input
                  type="password"
                  name='password'
                  placeholder='Password'
                  onChange={handelChange}
                  required
                />
        </div>
        <div className="center mt-2">
            <Link to='/login'><p>Already have and account?</p></Link> 
            <button className='btn mt-2 rounded-2 #f57f17 yellow darken-4' type="submit">Signup</button>
        </div>
      </div>
    </div>
    </form>
    </div>
  )
}
