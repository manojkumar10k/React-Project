import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function AdminAdd() {
    
    const [image, setImage] = useState("")
    const [Title, setTitle] = useState("")
    const [Price, setPrice] = useState("")
    const [file,setFile]= useState();

   const nav = useNavigate()

    const Change = (e)=>{
        e.preventDefault()
      fetch("http://localhost:3015/productShop",{
        method:"post",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({Title,Price,image})
        
        
      })
    
    
}


  return (
    <div>


<div className="container mt-5" style={{maxWidth: 500}}>
  <h2 className="text-center mb-4">Add Product Details</h2>
  <form onSubmit={Change} >
    {/* Product Name */}
    <div className="form-group">
      <label htmlFor="productName">Product Name</label>
      <input type="text" className="form-control" id="productName" name="productName" placeholder="Enter product name" required  onChange={(e)=>setTitle(e.target.value)}   />
    </div>
    {/* Product Description */}
    
    {/* Product Price */}
    <div className="form-group">
      <label htmlFor="productPrice">Price</label>
      <input type="number" className="form-control" id="productPrice" name="productPrice" placeholder="Enter price" required  onChange={(e)=>setPrice(e.target.value)}    />
    </div>
    {/* Product Image */}
    <div className="form-group  d-grid">
      <label htmlFor="productImage  ">Product Image</label>
      <input type="text" className="form-control-file" id="productImage" name="productImage" required  placeholder="Enter Image"  onChange={(e)=>setImage(e.target.value)}/>
    </div>
    
    {/* Submit Button */}
    <button type="submit" className="btn btn-primary btn-block my-2">Add Product</button>
    <Link  to={"/admin"} type="submit" className="btn  btn-danger my-2">Go Back</Link>
  </form>
</div>

    </div>
  )
}

export default AdminAdd
