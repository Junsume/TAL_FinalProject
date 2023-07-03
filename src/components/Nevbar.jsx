import { Link } from "react-router-dom";
import products from '../Database/Products.json';
import React, { useState, useEffect } from 'react'
import ItemCard from "./ItemCard";

function Nevbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredResults = products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );

    setSearchResults(filteredResults);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(event);
  };

  const handleButtonClick = () => {
    handleSearch({ target: { value: searchQuery } });
  };

  const [itemCount, setItemCount] = useState(0);
  const storedList = localStorage.getItem('myList');
  let myList = storedList ? JSON.parse(storedList) : [];

  useEffect(() => {
    setItemCount(myList.length);
  }, [myList]);

  return (
    <div >
      <nav className="navbar navbar-expand-lg bg-body-tertiary position-absolute top-0 start-0 col-12" >
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#"><img className="m-2" src="/src/assets/download.png" alt="icon" style={{height:'35px'}}/>Shop Now</a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={`/`}>
                  <button className="btn ms-5 btn-sm" >
                    Home
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={`/Cart`}>
                  <button className="btn ms-5 btn-sm" >
                    My Cart ({itemCount})
                  </button>
                </Link>
              </li>
            </ul>
            <form className="d-flex" onSubmit={handleSubmit} role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchQuery} onChange={handleSearch} />
              <button className="btn btn-outline-success" type="submit" onClick={handleButtonClick}>Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div className="row mt-5">
        <div className='row p-2 m-2'>
          {searchResults.map(product => (
            <div className='col p-2' key={product.id}>
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
    </div>
  )
}

export default Nevbar;
