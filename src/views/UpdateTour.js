import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import { func } from 'prop-types'


export default function UpdateTour() {
    const [tour, setTour] = useState({})
    const [tourEdit, setTourEdit] = useState(null)
    console.log('123',tourEdit)
    const param = useParams()
    const history = useHistory()
    const getTourInfo = async () =>{
        const res = await fetch(`https://127.0.0.1:5000/products/${param.id}`,{
            method:'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
          const data = await res.json()
          setTour(data)
          setTourEdit({
            name:data.name,
            url:data.Url,
            day:data.day,
            price:data.price
        })
    }

    useEffect(()=>{
        getTourInfo()
    },[])


    
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const res = await fetch(`https://127.0.0.1:5000/products/${param.id}`,{
            method:"POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(tourEdit)
          })
        const data = await res.json()
        if (data.state === "success_change")
        {
            alert("change success")
            history.push("/dadmin")
            window.location.reload(false)
        }
      }
    
    
    const change = e =>{
        setTourEdit({
        ...tourEdit, [e.target.name]:e.target.value
        })
    }
    
    
    return (
        <div>
            <form className="form-row" onSubmit={e=>handleSubmit(e)} onChange={e=>change(e)}>
                        <div className="form-group">
                        <label>Name</label>
                            <input type="text" name="name" className="form-control"  defaultValue={tour.name}                          />
                        <label>Url Image</label>
                            <input type="text" name="url" className="form-control" defaultValue={tour.Url}
                            />
                        <label>Duration Day</label>
                            <input type="number" name="day" className="form-control" defaultValue={tour.day}
                            />
                        <label>Price</label>
                            <input type="number" name="price" className="form-control" defaultValue={tour.price}
                            />
                            <button type="submit">Edit</button>
                        </div>
                
            </form>
        </div>
    )
}
