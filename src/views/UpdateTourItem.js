import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'


export default function UpdateTourItem() {
    const [tourItem, setTourItem] = useState(null)
    const [getTour, setGetTour] = useState({})
    const param = useParams()
    console.log(tourItem)
    const history = useHistory()
    const getTourItem = async () =>{
        const res = await fetch(`https://127.0.0.1:5000/products/item/${param.id}`,{
            method: 'GET',
            headers:{
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
        })
        const data = await res.json()
        setGetTour(data)
        setTourItem({
            title:data.title,
            img_first: data.img_first,
            img_second: data.img_second,
            img_third: data.img_third
        })
    }

    useEffect(()=>{
        getTourItem()
    },[])



    const handleSubmit = async (e) =>{
        e.preventDefault()
        const res = await fetch(`https://127.0.0.1:5000/products/item/${param.id}`,{
            method: "POST",
            headers:{
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(tourItem)
        })
        const data = await res.json()
        if (data.state == "update_success")
        {
            alert("update tour detail done")
            history.push(`/products/${param.id}/items`)
        }
    }

    const change = e =>{
        setTourItem({
            ...tourItem, [e.target.name] : e.target.value
        })
    }

    return (
          <form className="form-row" onSubmit={e=>handleSubmit(e)} onChange={e=>change(e)}>
                        <div className="form-group">
                        <label>Title</label>
                            <input type="text" name="title" className="form-control"  defaultValue={getTour.title}                          />
                        <label>Url First Picture</label>
                            <input type="text" name="img_first" className="form-control" defaultValue={getTour.img_first}
                            />
                        <label>Url Second Picture</label>
                            <input type="text" name="img_second" className="form-control" defaultValue={getTour.img_second}
                            />
                        <label>Url Third Picture</label>
                            <input type="text" name="img_third" className="form-control" defaultValue={getTour.img_third}
                            />
                            <button type="submit">Edit</button>
                        </div>
                
            </form>
    )
}
