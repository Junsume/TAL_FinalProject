import { useParams } from 'react-router-dom';
import React, {useState, useEffect} from 'react'
import Products from "../Database/Products.json";
import Nevbar from '../components/Nevbar'
import './product.css';
import { Link } from 'react-router-dom'
import ItemCard from '../components/ItemCard';

const ProductList = () => {
  const params = useParams();
  console.log(params)

  const Product = Products.filter(product => product.categoryId === params.categoryId);
  console.log(Product)

  return (
    <div>
      <div className='row'>
        <Nevbar/>
        <h1 className=' p-2 ' style={{textAlign:'center', color: 'rgb(250 248 249)'}}>
          ........
        </h1>
      </div>
      <div className='row p-2 m-2'>
        {Product.map(product => (
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
  );
};

export default ProductList;