import React, {useState, useEffect} from 'react'
import Navibar from "../components/Navibar";
import ErrorPage from "../views/ErrorPage"
import '../assets/css/adminpage.css'
import {useHistory} from 'react-router-dom'

export default function Adminpage(props) {
    const [product, setProduct] = useState({})
    const [tourAds, setTourAd] = useState([])
    const getTourAd = async () =>{
      const res = await fetch("https://127.0.0.1:5000/getProduct")
      const data = await res.json()
      setTourAd(data.products)
    } 
  
    useEffect(() => {
      getTourAd();
    }, []);
  
    const history = useHistory()
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const res = await fetch("https://127.0.0.1:5000/products",{
            method:"POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
          })
        const data = await res.json()
        if (data.state === "success")
        {
            alert("add new tour success")
            getTourAd()
        }

    }
    const remove_tour = async (id) =>{
      const res = await fetch(`https://127.0.0.1:5000/products/${id}`,{
        method:"DELETE",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      const data = await res.json()
      if (data.state === "delete_success")
      {
        alert("delete success")
        getTourAd()
        // window.history.replaceState({}, document.title, window.location.pathname)
      }
    }



     if (!props.user) return  <ErrorPage />
     return( 
        <div>
        <Navibar user={props.user} token={props.token} setUser = {props.setUser}/>
        <form className="form-admin" method="POST" onSubmit={e=>handleSubmit(e)}>
     
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Tour Name"
            onChange = {(e)=>setProduct({...product, name: e.target.value})}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="codeTourImg"
            placeholder="Url Image"
            onChange = {(e)=>setProduct({...product, codeTourImg: e.target.value})}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="number"
            name="durationDay"
            placeholder="How long tour go?"
            onChange = {(e)=>setProduct({...product, durationDay: e.target.value})}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="number"
            name="prices"
            placeholder="Price for Tour"
            onChange = {(e)=>setProduct({...product, prices: e.target.value})}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-block" type="submit">
            Create Tour
          </button>

          </div>
          </form>
        
                <table className="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Url</th>
                        <th scope="col">Day</th>
                        <th scope="col">Prices</th>
                        </tr>
                    </thead>


                                    
                {tourAds && tourAds.map(tourAd=>{
                    return (

                     <tbody key={tourAd.id} >
                        <tr>
                        <th scope="row" onClick={()=>history.push(`/products/${tourAd.id}/items`)}>{tourAd.id}</th>
                        <td onClick={()=>history.push(`/products/${tourAd.id}/items`)}>{tourAd.name}</td>
                        <td onClick={()=>history.push(`/products/${tourAd.id}/items`)}>{tourAd.codeTourImg}</td>
                        <td onClick={()=>history.push(`/products/${tourAd.id}/items`)}>{tourAd.durationDay}</td>
                        <td onClick={()=>history.push(`/products/${tourAd.id}/items`)}>{tourAd.prices}</td>
                        <td>
                        <button onClick={()=>remove_tour(tourAd.id)}>Delete</button>
                        <button onClick={()=> history.push('/products/' + tourAd.id)}>Edit</button>
                        </td>
                        </tr>
                         </tbody>

                    )
                })}
              
                </table>
       

</div>
          
    )
}
