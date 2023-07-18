import React from 'react'

function Home() {
  return (
    <div className="row">
      <div className="col s6">
        <div>
          <p
            className="flow-text"
            style={{
              maxWidth: "50%",
              marginTop: "220px",
              marginLeft: "150px",
              fontSize: "35px",
              fontFamily: "Roboto, Arial, sans-serif",
              fontWeight: "bold",
            }}
          >
            Welcome To Lecun Group's Car Prediction App
          </p>
        </div>
      </div>
      <div className="col s6">
        <div>
          <img
            className="responsive-img"
            src="https://img.freepik.com/free-vector/suv-car-concept-illustration_114360-12267.jpg?w=740&t=st=1687173473~exp=1687174073~hmac=952bdb9e1ee7883b777bfb12c1cb792f958ebd58b43a7c1b0a25f344e0124de4"
            alt="Image"
            style={{
              maxWidth: "75%",
              marginTop: "120px",
              marginRight: "120px",
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Home