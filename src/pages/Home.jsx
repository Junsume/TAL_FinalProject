import React, {useState, useEffect} from 'react'
import Nevbar from '../components/Nevbar'
import Category from '../Database/Category.json'
import Products from '../Database/Products.json'
import { Link } from 'react-router-dom'
// import Allproducts from '../components/Allproducts'


function Home() {
  const [data, setData] = useState(Category);
  const [product, setProduct] = useState(Products);
  console.log(Category)
  return (
    <div>
      <div className='row'>
        <Nevbar/>
        <h1 className=' p-2' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' , textAlign:'center', color: 'rgb(250 248 249)'}}>
          Categories Available
        </h1>
      </div>
      {/* <div>
        <Allproducts/>
      </div> */}
      <div className='row'>
        {data.map(item => (
          <div key={item.id} className="card m-auto mt-4" style={{ width: '400px', height: '150px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', borderRadius: '8px' , color:'white' , backgroundColor: 'nevy blue'}}>
            <h5 className="card-header" style={{backgroundColor:'#10b1b1' , color: 'black'}} >{item.name}</h5>
            <div className="card-body">
              <p className="card-text">{item.description}</p>
              <Link to={`/categories/${item.id}/products`}>
                <a href="#" className="btn btn-primary">
                  View Products
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Home