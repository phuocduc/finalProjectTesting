import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

export default function TourInfo() {
    const [tours, setTour] = useState([])
    const param = useParams()
    const getTourInfo = async () =>{
        const res = await fetch(`https://127.0.0.1:5000/destinations/${param.id}`,{
            method:"GET",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
        })
        const data = await res.json()
        console.log('data',data)
        setTour(data)
    }

    useEffect(()=>{
        getTourInfo()
    },[])

    return (
        <div>
            sdf
        </div>
    )
}
