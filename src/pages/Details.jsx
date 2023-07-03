// import { useParams } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
// import Products from "../Database/Products.json";
// import Nevbar from '../components/Nevbar';
// import './product.css';
// import { Link } from 'react-router-dom';

// const Details = () => {
//   const params = useParams();
//   const product = Products.find((product) => product.id === params.productId);
//   const [isAdded, setIsAdded] = useState(false);

//   useEffect(() => {
//     // Check if the item is already in the list
//     const storedList = localStorage.getItem('myList');
//     let myList = storedList ? JSON.parse(storedList) : [];
//     const isItemExists = myList.find((existingItem) => existingItem.id === product.id);
//     setIsAdded(!!isItemExists); // Update the state based on item existence
//   }, [product.id]);

//   function addItemToList(item) {
//     // Retrieve the list from local storage
//     const storedList = localStorage.getItem('myList');
//     let myList = storedList ? JSON.parse(storedList) : [];

//     // Check if the item already exists in the list
//     const isItemExists = myList.find((existingItem) => existingItem.id === item.id);

//     if (isItemExists) {
//       console.log('Item already exists in the list');
//       return; // Exit the function if the item is already present
//     }

//     // Add the item to the list
//     myList.push(item);

//     // Save the updated list back to local storage
//     localStorage.setItem('myList', JSON.stringify(myList));

//     setIsAdded(true); // Set the state to indicate the item is added
//   }

//   return (
//     <div className='row ms-4 ps-4' style={{ width: '1300px'}} >
//       <div>
//         <Nevbar />
//         <h1 className='shadow p-2 col-sm-2 col-md-3 col-lg-12' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' , textAlign:'center'}}>
//           {product.name} 
//         </h1>
//       </div>   
//       <div className='row'> 
//         <div className='col-7'>
//           <img src={product.thumbnail} className="img-thumbnail mx-auto d-block shadow bg-body-tertiary rounded" alt="image" style={{ maxWidth: '1000px', maxHeight: '400px'}}></img>
//         </div>
//         <div className='col-sm-12 col-md-12 col-lg-3 p-2'>
//           <div className='row m-auto'>
//             <h4>Price :  <span className="badge bg-secondary p-3 m-4">${product.price}</span></h4>
//           </div>
//           <div className='row' style={{ maxWidth: '400px' , textAlign:'center'}}>
//             {isAdded ? (
//               <button type="button" className="btn btn-success row m-2" disabled>
//                 Already Added
//               </button>
//             ) : (
//               <button
//                 onClick={() => addItemToList(product)}
//                 type="button"
//                 className="btn btn-primary row m-2"
//               >
//                 Add to Cart
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Details;

import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Products from "../Database/Products.json";
import Nevbar from '../components/Nevbar';
import './product.css';
import { Link } from 'react-router-dom';

const Details = () => {
  const params = useParams();
  const product = Products.find((product) => product.id === params.productId);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    // Check if the item is already in the list
    const storedList = localStorage.getItem('myList');
    let myList = storedList ? JSON.parse(storedList) : [];
    const isItemExists = myList.find((existingItem) => existingItem.id === product.id);
    setIsAdded(!!isItemExists); // Update the state based on item existence
  }, [product.id]);

  function addItemToList(item) {
    // Retrieve the list from local storage
    const storedList = localStorage.getItem('myList');
    let myList = storedList ? JSON.parse(storedList) : [];

    // Check if the item already exists in the list
    const isItemExists = myList.find((existingItem) => existingItem.id === item.id);

    if (isItemExists) {
      console.log('Item already exists in the list');
      return; // Exit the function if the item is already present
    }

    // Add the item to the list
    myList.push(item);

    // Save the updated list back to local storage
    localStorage.setItem('myList', JSON.stringify(myList));

    setIsAdded(true); // Set the state to indicate the item is added
  }

  return (
    <div className='row mt-4 ms-4 ps-4 m-3 p-4' style={{ width: '1300px' , backgroundColor: '#81c07b'}} >
      <div>
        <Nevbar />
        <h1 className='shadow p-2 col-sm-2 col-md-3 col-lg-12' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' , textAlign:'center' , color:'rgb(250 248 249)' , backgroundColor:'#317e42'}}>
          {product.name} 
        </h1>
      </div>   
      <div className='row'> 
        <div className='col-7'>
          <img src={product.thumbnail} className="mt-2 img-thumbnail mx-auto d-block shadow bg-body-tertiary rounded" alt="image" style={{ maxWidth: '1000px', maxHeight: '400px'}}></img>
        </div>
        <div className='col-sm-12 col-md-12 col-lg-3 m-auto p-2'>
          <div className='row m-auto'>
            <h4>Price: <span className="badge bg-secondary p-3 m-4">${product.price}</span></h4>
          </div>
          <div className='row' style={{ maxWidth: '400px' , textAlign:'center'}}>
            {isAdded ? (
              <button type="button" className="btn btn-success row m-2" disabled>
                Already Added
              </button>
            ) : (
              <button
                onClick={() => addItemToList(product)}
                type="button"
                className="btn btn-primary row m-2"
                disabled={!product.inStock}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
            )}
          </div>
          <div className='m-auto mt-4'>
            {product.delivery ? (
              <div className='row m-auto'>
                <h5 className="text-success">Delivery is available</h5>
              </div>
            ) : (
              <div className='row m-auto'>
                <h5 className="text-danger" style={{color:'red'}}>Delivery is not available</h5>
              </div>
            )}

            {product.inStock ? (
              <div className='row m-auto'>
                <h5 className="text-success">In Stock</h5>
              </div>
            ) : (
              <div className='row m-auto'>
                <h5 className="text-danger" style={{color:'red'}}>Out of Stock!</h5>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;