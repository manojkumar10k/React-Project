/* eslint-disable no-undef */
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'

function Cart() {
  const [cartItem, setCartItem] = useState()
  // eslint-disable-next-line no-unused-vars
  const [subtotal, setSubtotal] = useState(0);


  useEffect(() => {


    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      const cart = JSON.parse(localStorage.getItem(`cart_${user.id}`))
      setCartItem(cart)
    }

    const total = cartItem && cartItem.reduce((sum, item) => sum + item.quantity * parseFloat(item.Price.slice(0, -1)), 0);
    setSubtotal(total);

  }, [cartItem])



  console.log(subtotal);
  


  const handleDeleteCart = (item) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const cartKey = `cart_${user.id}`
    window.location.href = '/profile'           //1  

    let cart = JSON.parse(localStorage.getItem(cartKey)) || [];

    cart = cart.filter((i) => i.id !== item.id)
    localStorage.setItem(cartKey, JSON.stringify(cart))
    setCartItem(cart)

    alert("Delete Successfully...")



  }



  const handelchange = (productId, quantity) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const cartKey = `cart_${user.id}`

    let cart = JSON.parse(localStorage.getItem(cartKey)) || [];
    console.log(handelchange);



    cart = cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity };
      }
      return item;
    });

    localStorage.setItem(cartKey, JSON.stringify(cart));
    setCartItem(cart);

    const productToUpdate = cart.find(item => item.id === productId);

    fetch(`http://localhost:3015/productShop/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productToUpdate),
    })
      .then(response => {
        if (response.ok) {
          toast.success('Cart item quantity updated');
        }
      })
  }

  return (
    <div>
      <div>
        {/* <h1>{student}</h1> */}

        {/* Start Hero Section */}
        <div className="hero">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <div className="intro-excerpt">
                  <h1>Cart</h1>
                </div>
              </div>
              <div className="col-lg-7">
              </div>
            </div>
          </div>
        </div>
        {/* End Hero Section */}
        <div className="untree_co-section before-footer-section">
          <div className="container">
            <div className="row mb-5">
              <form className="col-md-12" method="post">
                <div className="site-blocks-table">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Image</th>
                        <th className="product-name">Product</th>
                        <th className="product-price">Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-total">Total</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        cartItem && cartItem.map((item) => (
                          <tr key={item.id}>
                            <td className="product-thumbnail">
                              <img src={item.image} alt="Image" className="img-fluid" />
                            </td>
                            <td className="product-name">
                              <h2 className="h5 text-black">{item.Title}</h2>
                            </td>
                            <td>${item.Price.slice(0, -1)}</td>
                            <td>
                              <div className="input-group mb-3 d-flex align-items-center quantity-container" style={{ maxWidth: 120 }}>
                                <div className="input-group-prepend">
                                  <button
                                    className="btn btn-outline-black decrease"
                                    type="button"
                                    onClick={() => {
                                      if (item.quantity > 1) {
                                        handelchange(item.id, item.quantity - 1);
                                      }
                                    }}
                                  >
                                    −
                                  </button>

                                </div>
                                <span >{item.quantity}</span>
                                <div className="input-group-append">
                                  <button className="btn btn-outline-black increase" type="button" onClick={() => { handelchange(item.id, item.quantity + 1) }}>+</button>
                                </div>
                              </div>
                            </td>
                            <td>${item.quantity * item.Price.slice(0, -1)}</td>
                            <td><a href="#" className="btn btn-black btn-sm" onClick={() => { handleDeleteCart(item) }}>X</a></td>
                          </tr>
                        ))
                      }

                    </tbody>
                  </table>
                </div>
              </form>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="row mb-5">
                  <div className="col-md-6">
                    <Link to={"/shop"} className="btn btn-outline-black btn-sm btn-block">Continue Shopping</Link>
                  </div>
                </div>
            
              </div>
              <div className="col-md-6 pl-5">
                <div className="row justify-content-end">
                  <div className="col-md-7">
                    <div className="row">
                      <div className="col-md-12 text-right border-bottom mb-5">
                        <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <span className="text-black">Subtotal</span>
                      </div>
                      <div className="col-md-6 text-right">
                        <strong className="text-black">${subtotal}</strong>
                      </div>
                    </div>
                    <div className="row mb-5">
                      <div className="col-md-6">
                        <span className="text-black">Total</span>
                      </div>
                      <div className="col-md-6 text-right">
                        <strong className="text-black">${subtotal}</strong>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <button className="btn btn-black btn-lg py-3 btn-block" onclick="window.location='checkout.html'">Proceed To Checkout</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart
