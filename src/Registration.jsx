import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Registration() {
    const [name,setName]= useState("")
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const [users,setUsers] = useState()


  
    useEffect(()=>{
      fetch("http://localhost:3012/user",{
        method:"GET",
        headers:{"content-type":"application/json"}
      })
      .then((res)=>res.json())
      .then((data)=>setUsers(data))
    },[])



   const nav = useNavigate()
    const Change = (e)=>{
        e.preventDefault()

        const findEmail = users.find((u)=>u.email === email)

        if(!findEmail){                                            //1
          const jsdata ={name,email,password}
          fetch("http://localhost:3012/user",{
              method:"POST",
              headers:{"content-type":"application/json"},
              body:JSON.stringify(jsdata)
              
          })
          .then((res)=>{
              if (res) {  
                toast.success("Records inserted..!");
                nav("/login")
              }
            })        
        }else{
          toast.error("Email Already Registered ")
        }

       
    }

  return (
    <div>
<section className=" m-3">
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius: 15}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center ">Create an account</h2>
              <form onSubmit={Change}>
                <div data-mdb-input-init className="form-outline ">
                  <input type="text" required id="form3Example1cg"  className="form-control form-control-lg " onChange={(e)=>setName(e.target.value)} />
                  <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                </div>
                <div data-mdb-input-init className="form-outline">
                  <input type="email" required id="form3Example3cg" className="form-control form-control-lg" onChange={(e)=>setEmail(e.target.value)}  />
                  <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                </div>
                <div data-mdb-input-init className="form-outline ">
                  <input type="password" required id="form3Example4cg" className="form-control form-control-lg"  onChange={(e)=>setPassword(e.target.value)} />
                  <label className="form-label" htmlFor="form3Example4cg">Password</label>
                </div>
               
                <div className="form-check d-flex justify-content-center mb-4">
                  <input className="form-check-input me-2" required type="checkbox" defaultValue id="form2Example3cg" />
                  <label className="form-check-label" htmlFor="form2Example3g">
                    I agree all statements in <a  className="text-body"><u>Terms of service</u></a>
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-success  btn-lg   text-bg-light">Register</button>
                </div>
                <p className="text-center text-muted mt-2 mb-0  d-flex justify-content-center  text-decoration-none">Have already an account? <Link to={"/login"}    className="fw-bold text-body text-decoration-none"><u className='text-decoration-none'>Login here</u></Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Registration
