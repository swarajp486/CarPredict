import React,{useState} from 'react'

export default function Predict() {
    const [formData,setFormData]=useState({})
    const [post,setPost]=useState([])
    
    //if we input age and salary than handelchange call and set the age and salary to formData useState
    const handelChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    // while submit button click handlesumbit function will call and it request flask api by passing a data and wait for response
    const handleSumbit=async (e)=>{
        e.preventDefault()
        //console.log(formData)
        await fetch("http://127.0.0.1:5001/predict", {
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
          setPost(data)
         

          //console.log(data, "predict value");
      
        });
    }
  return (
    <>
    <div className="mx-auto my-container">
        <form onSubmit={handleSumbit}>
        <div className='card hoverable rounded-3'>
          <div className='card-content white-text'>
                <label  class="form-label fs-5 text-black">Age</label>
                  <input
                    type="number"
                    name='age'
                    placeholder='Age'
                    
                    onChange={handelChange}
                    required
                  />
                  <label  class="form-label fs-5 text-black">Annual Salary </label>
                  <input
                    type="number"
                    name='salary'
                    placeholder='Salary'
                    
                    onChange={handelChange}
                    required
                  />
                <div className="center mt-2">
                  <button className='btn rounded-2 #f57f17 yellow darken-4' type="submit">Predict</button>
                </div>
            </div>
          </div>
        </form>
        

        
    </div>
    {
      post.status &&
      <div className='container' >
      <div className="card teal  rounded-3">
        <div className="card-content white-text">
            <h5>Prediction : {post.prediction?"Yes":"No"} </h5>
            <h5>Probability_of_buying: {post.probability_of_buying.toFixed(3)}</h5>
          </div>
      </div>
      </div>
  }
  </>
  )
}
