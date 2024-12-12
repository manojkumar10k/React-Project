import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function AdminDelete() {
  const {useID} = useParams()
 const nav = useNavigate()
  useEffect(()=>{
    fetch(`http://localhost:3015/productShop/${useID}`,{
      method:"delete",
    })
    .then(()=>{
        nav("/admin")
    })
  },[useID])
  return null;
}
export default AdminDelete
