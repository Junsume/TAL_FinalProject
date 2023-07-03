import React, { useEffect, useState } from 'react';
import Nevbar from '../components/Nevbar';
import ItemCard from '../components/ItemCard';
import fev from "../assets/delete.svg"
const Cart = () => {
  const [itemCount, setItemCount] = useState(0);
  const storedList = localStorage.getItem('myList');
  let myList = storedList ? JSON.parse(storedList) : [];

  useEffect(() => {
    setItemCount(myList.length);
  }, [myList]);

  function removeItemFromList(item) {
    // Retrieve the list from local storage
    const storedList = localStorage.getItem('myList');
    let myList = storedList ? JSON.parse(storedList) : [];
  
    // Find the index of the item in the list
    const index = myList.findIndex((existingItem) => existingItem.id === item.id);
  
    if (index === -1) {
      console.log('Item not found in the list');
      return; // Exit the function if the item is not found
    }
  
    // Remove the item from the list
    myList.splice(index, 1);
  
    // Save the updated list back to local storage
    localStorage.setItem('myList', JSON.stringify(myList));
  
    setIsRemoved(true); // Set the state to indicate the item is removed
  }
  

  return (
    <div style={{justifyContent:'center'}}>
      <div className='row'>
        <Nevbar/>
        <h1 className=' p-2 ' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' , textAlign:'center', color: 'rgb(250 248 249)'}}>
          My Cart
        </h1>
      </div>
      <div className='row m-2'>
        {myList.map(product => (
          <div className='col m-2 p-1'>
            <ItemCard
              id={product.id}
              name={product.name}
              price={product.price}
              thumbnail={product.thumbnail}
              description={product.description}
            />
            <button href='#' className="card border-light col-sm-6 col-md-4 col-lg-3 p-2 m-1" key={product.id} onClick={() => removeItemFromList(product)} style={{ width: '370px', backgroundColor: '#8b0613'}}> 
              <img src={fev} alt="delete" className='m-auto' style={{ height: '30px'}}/>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
