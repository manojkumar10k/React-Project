import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Admin() {


    const [student, setStudent] = useState([])

    useEffect(() => {
        fetch("http://localhost:3015/productShop")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setStudent(data);
            })
    }, [])

    return (
        <table class="table table-sm">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    <th> 
                        <th><Link className="btn btn-primary btn-sm  text-font" to={"/adminAdd"} >Add</Link></th>
                    </th>
                </tr>
            </thead>
            {
                student && student.map((v) => (
                    <tbody className=' container-fluid'>
                        <tr >
                            <th scope="row">{v.id}</th>
                            <td><img src={v.image} alt="Product 1" className="img-fluid" width={100} /></td>
                            <td>{v.Title}</td>
                            <td>{v.Price}</td>
                            <td>
                                <Link className='btn   btn-primary btn-sm  ' to={`/adminEdit/${v.id}`}>Edit</Link>
                                <Link className="btn btn-primary btn-sm  text-font" to={`/adminDelete/${v.id}`} >Delete</Link>
                            </td>
                        </tr>
                    </tbody>
                ))
            }

        </table>
    )
}

export default Admin
