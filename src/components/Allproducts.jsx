import React from 'react'
import Products from '../Database/Products.json'
import { Link } from 'react-router-dom'
import ItemCard from './ItemCard';
import {useState, useEffect} from 'react'
import Nevbar from './Nevbar'

const Allproducts = () => {
    const [product, setProduct] = useState(Products);

  return (
    <div>
        <div className='row'>
            <Nevbar/>
        </div>
        <div className='row p-2 m-2'>
            {Products.map(product => (
            // <li key={product.id}>{product.name}</li>
            <div className='col p-2'>
                <ItemCard
                id={product.id}
                name={product.name}
                price={product.price}
                thumbnail={product.thumbnail}
                description={product.description}
                />
            </div>
            ))}
        </div>
    </div>
  )
}

export default Allproducts
