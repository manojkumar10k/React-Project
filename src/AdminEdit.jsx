import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './App.css'

function AdminEdit() {
    const [image, setImage] = useState("")
    const [Title, setTitle] = useState("")
    const [Price, setPrice] = useState("")
    const [file,setFile]= useState();
    const [id,setId]= useState();

    const { useID } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:3015/productShop/${useID}`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setImage(data.image)
                setTitle(data.Title)
                setPrice(data.Price)
                setId(data.id)
            })
    }, [useID])
    const change = (e) => {
        e.preventDefault()
        const handle = {id, image, Title, Price }
        fetch(`http://localhost:3012/productShop/${useID}`, {
            method: "put",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(handle)
        })
        if (change) {
           navigate("/admin") 
        }
    }
    const changeFile=(e)=> {
        console.log(e.target.files[0]);
        
        setFile(URL.createObjectURL(e.target.files[0]))
        
    }
    return (
        <div >
         <div className="container form-container mt-5 border rounded p-4">
  <h4 className="mb-3">Basic Information</h4>
  <form   onSubmit={change}>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label htmlFor="productName">Product Name</label>
        <input type="text" onChange={(e) => (setTitle(e.target.value))} value={Title}  className="form-control" id="productName" placeholder="Enter product name" />
      </div>
    
    </div>
    <div className="form-row">
      
      <div className="form-group col-md-6 image-container">
        <label>Product Image</label>
        <img src={image} className="img-fluid mb-2 h-50 w-50" alt="Product Image" />
        <button type="button" className="btn btn-primary">Change Image</button>
      </div>
    </div>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label htmlFor="Price">Price</label>
        <input type="text" onChange={(e) => (setPrice(e.target.value))} value={Price} className="form-control" id="Price" placeholder="Enter Price" />
      </div>
   
    </div>

    <div className="form-row">
      <div className="form-group   my-2 text-right">
        <button type="submit" className="btn btn-success">Save Changes</button>
        <Link to={"/admin"}  type="button" className="btn btn-secondary">Cancel</Link>
      </div>
    </div>
  </form>
</div>


     

        </div>
    )
}

export default AdminEdit
