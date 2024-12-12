import React from 'react'
import product from "../images/product-1.png"
import producta from "../images/product-2.png"
import productc from "../images/product-3.png"
import { Link } from 'react-router-dom'
function Services() {
  const obj =[
    {id:1,image:product,Title:"Nordic Chair",Price:"80$"},
    {id:2,image:producta,Title:"Nordic r",Price:"80$"},
    {id:3,image:productc,Title:"Nordic Chair",Price:"80$"}

]
  return (
    <div>
     <div>
  {/* Start Hero Section */}
  <div className="hero">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-5">
          <div className="intro-excerpt">
            <h1>Services</h1>
            <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
            <p>
            <Link to={"/shop"} href className="btn btn-secondary me-2">Shop Now</Link>
            <Link   to={"/about"} className="btn btn-white-outline">Explore</Link>
            </p>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="hero-img-wrap">
            <img src="images/couch.png" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Hero Section */}
  {/* Start Why Choose Us Section */}
  <div className="why-choose-section">
    <div className="container">
      <div className="row my-5">
        <div className="col-6 col-md-6 col-lg-3 mb-4">
          <div className="feature">
            <div className="icon">
              <img src="images/truck.svg" alt="Image" className="imf-fluid" />
            </div>
            <h3>Fast &amp; Free Shipping</h3>
            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-3 mb-4">
          <div className="feature">
            <div className="icon">
              <img src="images/bag.svg" alt="Image" className="imf-fluid" />
            </div>
            <h3>Easy to Shop</h3>
            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-3 mb-4">
          <div className="feature">
            <div className="icon">
              <img src="images/support.svg" alt="Image" className="imf-fluid" />
            </div>
            <h3>24/7 Support</h3>
            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-3 mb-4">
          <div className="feature">
            <div className="icon">
              <img src="images/return.svg" alt="Image" className="imf-fluid" />
            </div>
            <h3>Hassle Free Returns</h3>
            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-3 mb-4">
          <div className="feature">
            <div className="icon">
              <img src="images/truck.svg" alt="Image" className="imf-fluid" />
            </div>
            <h3>Fast &amp; Free Shipping</h3>
            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-3 mb-4">
          <div className="feature">
            <div className="icon">
              <img src="images/bag.svg" alt="Image" className="imf-fluid" />
            </div>
            <h3>Easy to Shop</h3>
            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-3 mb-4">
          <div className="feature">
            <div className="icon">
              <img src="images/support.svg" alt="Image" className="imf-fluid" />
            </div>
            <h3>24/7 Support</h3>
            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-3 mb-4">
          <div className="feature">
            <div className="icon">
              <img src="images/return.svg" alt="Image" className="imf-fluid" />
            </div>
            <h3>Hassle Free Returns</h3>
            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Why Choose Us Section */}
  {/* Start Product Section */}
  <div className="product-section pt-0">
    <div className="container">
      <div className="row">
        {/* Start Column 1 */}
        <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
          <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
          <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
          <p><a href="#" className="btn">Explore</a></p>
        </div> 
        {/* End Column 1 */}
        {/* Start Column 2 */}





        {
            obj.map((v)=>(
                            <div key={v.id} className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                                <Link to={"/shop"} className="product-item">
                                    <img src={v.image} className="img-fluid product-thumbnail" />
                                    <h3 className="product-title">{v.Title}</h3>
                                    <strong className="product-price">{v.Price}</strong>
                                    <span className="icon-cross">
                                        <img src="images/cross.svg" className="img-fluid" />
                                    </span>
                                </Link>
                            </div>
))
}





        {/* <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
          <a className="product-item" href="#">
            <img src="images/product-1.png" className="img-fluid product-thumbnail" />
            <h3 className="product-title">Nordic Chair</h3>
            <strong className="product-price">$50.00</strong>
            <span className="icon-cross">
              <img src="images/cross.svg" className="img-fluid" />
            </span>
          </a>
        </div>  */}
        {/* End Column 2 */}
        {/* Start Column 3 */}
        {/* <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
          <a className="product-item" href="#">
            <img src="images/product-2.png" className="img-fluid product-thumbnail" />
            <h3 className="product-title">Kruzo Aero Chair</h3>
            <strong className="product-price">$78.00</strong>
            <span className="icon-cross">
              <img src="images/cross.svg" className="img-fluid" />
            </span>
          </a>
        </div> */}
        {/* End Column 3 */}
        {/* Start Column 4 */}
        {/* <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
          <a className="product-item" href="#">
            <img src="images/product-3.png" className="img-fluid product-thumbnail" />
            <h3 className="product-title">Ergonomic Chair</h3>
            <strong className="product-price">$43.00</strong>
            <span className="icon-cross">
              <img src="images/cross.svg" className="img-fluid" />
            </span>
          </a>
        </div> */}
        {/* End Column 4 */}
      </div>
    </div>
  </div>
  {/* End Product Section */}
  {/* Start Testimonial Slider */}
  <div className="testimonial-section before-footer-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 mx-auto text-center">
          <h2 className="section-title">Testimonials</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="testimonial-slider-wrap text-center">
            <div id="testimonial-nav">
              <span className="prev" data-controls="prev"><span className="fa fa-chevron-left" /></span>
              <span className="next" data-controls="next"><span className="fa fa-chevron-right" /></span>
            </div>
            <div className="testimonial-slider">
              <div className="item">
                <div className="row justify-content-center">
                  <div className="col-lg-8 mx-auto">
                    <div className="testimonial-block text-center">
                      <blockquote className="mb-5">
                        <p>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                      </blockquote>
                      <div className="author-info">
                        <div className="author-pic">
                          <img src="images/person-1.png" alt="Maria Jones" className="img-fluid" />
                        </div>
                        <h3 className="font-weight-bold">Maria Jones</h3>
                        <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
              {/* END item */}
              <div className="item">
                <div className="row justify-content-center">
                  <div className="col-lg-8 mx-auto">
                    <div className="testimonial-block text-center">
                      <blockquote className="mb-5">
                        <p>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                      </blockquote>
                      <div className="author-info">
                        <div className="author-pic">
                          <img src="images/person-1.png" alt="Maria Jones" className="img-fluid" />
                        </div>
                        <h3 className="font-weight-bold">Maria Jones</h3>
                        <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
              {/* END item */}
              <div className="item">
                <div className="row justify-content-center">
                  <div className="col-lg-8 mx-auto">
                    <div className="testimonial-block text-center">
                      <blockquote className="mb-5">
                        <p>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                      </blockquote>
                      <div className="author-info">
                        <div className="author-pic">
                          <img src="images/person-1.png" alt="Maria Jones" className="img-fluid" />
                        </div>
                        <h3 className="font-weight-bold">Maria Jones</h3>
                        <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
              {/* END item */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Testimonial Slider */}
</div>


		
    </div>
  )
}

export default Services
