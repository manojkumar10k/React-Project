import React, { useEffect, useState } from 'react'
import { json, Link, useNavigate, useParams } from 'react-router-dom'

function ShopView() {
  const { viewId } = useParams();
  const [title, setTitle] = useState("")
  const [id, setID] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")
  const [product, setProduct] = useState()

  const navigate  = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3015/productShop/${viewId}`)
      .then((res) => { return res.json() })
      .then((data) => {
        setTitle(data.Title)
        setID(data.id)
        setImage(data.image)
        setPrice(data.Price)
        setProduct(data)
      })



  })


  const handleAddtoCart = () => {
    const user = JSON.parse(localStorage.getItem('user'))

    if(user){

      const cartKey = `cart_${user.id}`
      const cart = JSON.parse(localStorage.getItem(cartKey)) || [];

      const productIndex = cart.findIndex((item)=>item.id === viewId)
    
      if(productIndex !== -1){
        cart[productIndex].quantity += 1;
      }else{
        cart.push({...product,quantity : 1})
      }

      localStorage.setItem(cartKey,JSON.stringify(cart))

    navigate('/cart')
    }

    window.location.reload();

  }
  return (
    <div>
      <section style={{ backgroundColor: '#eee' }}>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-4">
              <div className="card" style={{ borderRadius: 15 }}>
                <div className="bg-image hover-overlay ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
                  <img src={image} style={{ borderTopLeftRadius: 15, borderTopRightRadius: 15 }} className="img-fluid" alt="Laptop" />
                  <a href="#!">
                    <div className="mask" />
                  </a>
                </div>
                <div className="card-body pb-0">
                  <div className="d-flex justify-content-between">
                    <div>
                      <p><a href="#!" className="text-dark">{title}</a></p>
                      {/* <p className="small text-muted">{price}</p> */}
                      <p><a href="#!" className="text-dark">{price}</a></p>

                    </div>
                    <div>
                      <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <p className="small text-muted">Rated 4.0/5</p>
                    </div>
                  </div>
                </div>
                <hr className="my-0" />

                <hr className="my-0" />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
                    <Link to={"/"} className="text-dark fw-bold">Cancel</Link>
                    <button type="button" onClick={handleAddtoCart} data-mdb-button-init data-mdb-ripple-init className="btn btn-primary">Buy now</button>
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

export default ShopView
