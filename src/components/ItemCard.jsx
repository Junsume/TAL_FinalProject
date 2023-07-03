import React from 'react'
import { Link } from "react-router-dom";

const ItemCard = ({id, name, price, thumbnail,description }) => {

  return (
    <div>
      <div className="card border-light col-sm-6 col-md-4 col-lg-3" key={id}  style={{ width: '370px', height: '400px' }}>
         <img src={thumbnail} alt={name} className="card-img-top " style={{ width: '400px', height: '450px'}} />
         <div className="card-body" style={{color:'white'}}>
          <div className='row card border-light p-2 m-2' style={{backgroundColor: '#24c7c7'}} >
          <h5 className="card-name ms-3 col">{name}</h5>
          <p className="card-text ms-4 mt-0 col" style={{color:'#eef4fb'}}>--- In {description}</p>
          </div>
           <div className="card-footer">
             <div className='row'>
             <span className="card-price ms-2 col">$ {price}</span>
               <div className='d-flex col justify-content-end'>
                 <Link to={`/products/${id}`}>
                   <a href="#" className="btn btn-primary" >
                     View
                   </a>
                 </Link>
                </div>
             </div>
           </div>
         </div>
       </div>
    </div>
  )
}

export default ItemCard

