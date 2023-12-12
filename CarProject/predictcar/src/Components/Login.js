import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const baseUrl="https://carpredictapi.onrender.com"
export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [post, setPost] = useState({});
  const handelChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

//this usEffect will run when post usestate chnage
  useEffect(() => {
    //console.log("post>>>", post);
    if (post.status) {
      localStorage.setItem("token", post.data);
      if (post.userType === "admin") {
        navigate("/admin");
      } else {
        navigate("/predict");
      }
    }
  }, [post]);
//after login button  handlesumbit function call and fetch wiil execute and and response will come 

  const handleSumbit = (e) => {
    //console.log("e", e);
    e.preventDefault();
    fetch(`${baseUrl}/loginuser`, {
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
      .then((data) => {
        setPost(data);

        

        // console.log(data, "userLogin");
        // //navigate('/')
      });
  };

  return (
    <div className="mx-auto my-container">
      {post.error && (
        <div className="red card-panel">{post.error} with that email!</div>
      )}
      {post.status && (
        <div className="green card-panel">You are Login now!</div>
      )}
      {/* <h3 className="center-align fs-2">Login</h3> */}
      <form onSubmit={handleSumbit}>
        <div className="card hoverable  rounded-3">
          <div className="card-content white-text ">
          <label  className="form-label fs-5 text-black">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handelChange}
              required
            />
            <label  className="form-label fs-5 text-black">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handelChange}
              required
            />
            <div className="center mt-2">
            <Link to="/signup">
              <p>Don't have and account?</p>
            </Link>
            <button className="btn mt-2 rounded-2 #f57f17 yellow darken-4"  type="submit">Login</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
