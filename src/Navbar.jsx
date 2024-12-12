import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsCart } from 'react-icons/bs'
function Navbar() {

  const [isLogin, setIsLogin] = useState(false)
  const [cartCount, setCartCount] = useState(0);


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    setIsLogin(!!user)

    if (user) {
      const cart = JSON.parse(localStorage.getItem(`cart_${user.id}`)) || [];
      setCartCount(cart.length);
    } else {
      setCartCount(0);
    }
    
  }, [])

  const user = JSON.parse(localStorage.getItem('user'));
 
  return (
    <div>

      {/* Start Header/Navigation */}
      <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">
        <div className="container">
          <a className="navbar-brand" href="index.html">Furni<span>.</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item active">
                <Link to={"/"} className="nav-link" href="index.html">Home</Link>
              </li>
              <li><Link to={"/shop"} className="nav-link" href="shop.html">Shop</Link></li>
              <li><Link to={"/about"} className="nav-link" href="about.html">About us</Link></li>
              <li><Link to={"/services"} className="nav-link" href="services.html">Services</Link></li>
              <li><Link to={"/blog"} className="nav-link" href="blog.html">Blog</Link></li>
              <li><Link to={"/contact"} className="nav-link" href="contact.html">Contact us</Link></li>

            </ul>
            <ul className=" navbar-nav ms-auto ">

              {
                isLogin ? (
                  <li><NavLink to="/profile" className="btn btn-dark btn-sm"><i className="fa-solid fa-user fa-xl" style={{ color: "#FFD43B" }}></i> Profile</NavLink></li>

                ) : (
                  <>
                    <li><NavLink to="/registration" className=" btn  btn-sm">Register</NavLink></li>
                    <li  ><NavLink to="/login" className=" btn   border-0 bg-warning btn-sm">Login</NavLink></li>
                  </>
                )
              }



            </ul>

            <ul className="custom-navbar-nav navbar-nav ms-auto ">

              {/* <li><Link className="nav-link">Logout</Link></li> */}

            </ul>

            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              {/* <select name="h" id="1">  */}
              {/* <op value=""><p  className="nav-link">hello</p></op */}
              {/* <li><Link to={"/registration"} className="nav-link">Register</Link></li> */}
              {/* <li ><Link to={"/login"} className="nav-link">Login</Link></li> */}
              <li ><Link to={"/cart"} className="nav-link   d-flex "><img src="images/cart.svg" className='cart-box '  /><a href="" className=' mb-4     cartCount'>{ cartCount}</a></Link></li>
              {/* <li><Link to={"/cart"} className="nav-link"> <BsCart/>0</Link></li> */}
              {/* <section>g
               <option value=""> <li><Link to={"/registration"} className="nav-link"><img src="images/user.svg" /></Link></li></option>

        <option value=""><li><Link to={"/cart"} className="nav-link"><img src="images/cart.svg" /></Link></li></option>
       </section> */}
            </ul>
          </div>
        </div>
      </nav>
      {/* End Header/Navigation */}

    </div>
  )
}

export default Navbar
