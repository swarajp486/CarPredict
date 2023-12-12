import React, { useEffect, useState } from 'react'
const baseUrl="https://carpredictapi.onrender.com"
function Admin() {
  const [alluser,setAlluser]=useState([])
  const [restart,setRestart]=useState('')
  // using useEffect  to fetch data of car delar who is signup in database when ever restart usestate is change
  useEffect(()=>{
    fetch(`${baseUrl}/admin` , {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({}),
      })
        .then((res) => res.json())
        .then((data) => {
          setAlluser(data)
          
         // console.log(data, "admin data");
         
        });
  },[restart])

  // handleelet function will call when admin want to remove any car delar from  mongoDB database
  const handledelet=(e)=>{
    //console.log(e.target.value)
    fetch("http://localhost:5000/delete", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          _id:e.target.value
        }),
      })
        .then((res) => res.json())
        .then((data) =>{
          
         // console.log(data)
// after deleteing car delar  restart usestate will change and by this useEffect will run automatically the admin 
//page change and the data of car delar wil appear on page
          setRestart(e.target.value)
        }
          
      );

  }


 // console.log(alluser.userdetail)
  return (
    <div className="container"> 
    <div className='row'>
    {
      alluser.status &&
      alluser.userdetail.map((item)=>{
      return ( 
      <div className="col M6 S6 grid-exampl ">
      <div className='card teal lighten-2 center-align rounded-3'>
          <div className="card-content flow-text " >
            <h5>Name : {item.firstName} </h5>
            <h6>Email:{item.email}</h6>
            <button className='#f57f17  rounded-2 yellow darken-4 btn' value={item._id} onClick={handledelet}>Delete</button>
           </div>
       </div>
       </div>)
      })
    
    }
    </div> 
    
    </div>
  )
}

export default Admin