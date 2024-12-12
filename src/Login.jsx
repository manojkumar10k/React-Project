import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [student, setStudent] = useState([])
  const admin = [{ email: "admin@gmail.com", password: "1212" }]



  useEffect(() => {
    fetch("http://localhost:3012/user")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setStudent(data)

      })
  }, [])

  const nav = useNavigate()


  const Change = (e) => {
    e.preventDefault()


    // ----------user Admin---------------- 

    const Aemail = admin.find((f) => f.email === email)
    console.log(Aemail);

    const pass = admin.find((f) => f.password === password)
    console.log(pass);
    if (Aemail && pass) {
      nav("/admin")
      
    }


    // ----------user Email---------------- 
    const checkEmail = student.find((f) => f.email === email)        //1  

    if (checkEmail) {
      localStorage.setItem('user', JSON.stringify(checkEmail))     //1  

    }

    // ----------user Password---------------- 

    const p = student.find(s => s.password === password)



    if (checkEmail && p) {



      window.location.href = '/profile'

    } else {
      toast.error("incorrect Details..!");
    }
  }




  return (
    <div>
      <section className="h-10 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                <div className="card-body p-3 text-center">
                  <form onSubmit={Change}>
                    <div className="mb-md-1 mt-md-3">
                      <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                      <p className="text-white-50 mb-5">Please enter your login and password!</p>
                      <div data-mdb-input-init className="form-outline form-white mb-2">
                        <input required type="email" id="typeEmailX" className="form-control form-control-lg" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label className="form-label" htmlFor="typeEmailX">Email</label>
                      </div>
                      <div data-mdb-input-init className="form-outline form-white mb-4">
                        <input required type="password" id="typePasswordX" className="form-control form-control-lg" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <label className="form-label" htmlFor="typePasswordX">Password</label>
                      </div>
                      <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                      <div className="d-flex justify-content-center text-center mt-4 pt-1">
                        <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg" /></a>
                        <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2" /></a>
                        <a href="#!" className="text-white"><i className="fab fa-google fa-lg" /></a>
                      </div>
                    </div>
                  </form>
                  <div>
                    <p className="mb-0">Don't have an account? <Link to={"/registration"} className="text-white-50 fw-bold">Sign Up</Link>
                    </p>
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

export default Login
