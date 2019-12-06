import React, {useState, useEffect} from 'react'
import '../assets/css/tourItem.css'
import {useParams, useHistory} from 'react-router-dom'

export default function TourItems() {

    const [tourItem, setTourItem] = useState({})
    const [getTourItems, setGetTourItem] = useState([])
    console.log('getTourItem',getTourItems[0])
    const param = useParams()
    const history = useHistory()
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const res = await fetch(`https://127.0.0.1:5000/products/${param.id}/items`,{
            method: "POST",
            headers:{
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(tourItem)
        })
        const data = await res.json()
        if (data.state === "success")
        {
            alert("add success information")
            getTourItem()
        }
    }

    const getTourItem = async () =>{
        const res = await fetch(`https://127.0.0.1:5000/products/${param.id}/items`,{
            method:"GET",
            headers:{
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        setGetTourItem(data.product_items)
    }
    

    useEffect(()=>{
        getTourItem()
    },[])

    const remove_tourItem = async (id) =>{
        const res = await fetch(`https://127.0.0.1:5000/products/item/${id}`,{
            method: "DELETE",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        if (data.state === "delete_success")
        {
            alert("delete success")
            getTourItem()
        }
    }

    return (
        <div className="container-fluid tourInfo-body">
            <div className="d-flex justify-content-center flex-row align-items-center tourInfo-wrapper">
                <h1 className="text-center mb-5 title-productInfo">Add Tour Information</h1>
                <form className="form-admin d-flex justify-content-center flex-column align-items-center tourInfoForm" method="POST" onSubmit={e=>handleSubmit(e)}>
                
                    <div className="form-group tour-form-child">
                    <input
                        className="form-control"
                        type="text"
                        name="title"    
                        placeholder="Title Of Tour"
                        onChange = {(e)=>setTourItem({...tourItem, title: e.target.value})}
                    />
                    </div>
                    <div className="form-group tour-form-child">
                    <input
                        className="form-control"
                        type="text"
                        name="img_first"
                        placeholder="Url First Image"
                        onChange = {(e)=>setTourItem({...tourItem, img_first: e.target.value})}
                    />
                    </div>
                    <div className="form-group tour-form-child">
                    <input
                        className="form-control"
                        type="text"
                        name="img_second"
                        placeholder="Url Second Image"
                        onChange = {(e)=>setTourItem({...tourItem, img_second: e.target.value})}
                    />
                    </div>
                    <div className="form-group tour-form-child">
                    <input
                        className="form-control"
                        type="text"
                        name="img_third"
                        placeholder="Url Third Image"
                        onChange = {(e)=>setTourItem({...tourItem, img_third: e.target.value})}
                    />
                    </div>
                    <div className="form-group mt-5">
                    <button className="btn btn-primary btn-block" type="submit">
                        Add Tour Item
                    </button>

                    </div>
                </form>
            </div>
         
         

            <table className="table table-hover">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Tour Title</th>
                <th scope="col">Url_first</th>
                <th scope="col">Url_second</th>
                <th scope="col">Url_third</th>
                </tr>
            </thead>
            {getTourItems && getTourItems.map(tourItem=>{
                return (
    
                 <tbody key={tourItem.id} >
                    <tr>
                    <th scope="row" onClick={()=>history.push(`/products/${tourItem.id}/info`)}>{tourItem.id}</th>
                    <td onClick={()=>history.push(`/products/${tourItem.id}/info`)}>{tourItem.title}</td>
                    <td onClick={()=>history.push(`/products/${tourItem.id}/info`)}>{tourItem.img_first}</td>
                    <td onClick={()=>history.push(`/products/${tourItem.id}/info`)}>{tourItem.img_second}</td>
                    <td onClick={()=>history.push(`/products/${tourItem.id}/info`)}>{tourItem.img_third}</td>
                    <td>
                        <button onClick={()=>remove_tourItem(tourItem.id)}>Delete</button>
                        <button onClick={()=>history.push('/products/items/' + tourItem.id)}>Edit</button>

                        </td>
                    </tr>
                </tbody>
    
                )
            })}
            
                            
    
        </table>

            </div>
    )
}
