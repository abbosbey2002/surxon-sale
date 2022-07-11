
import React, {useState, useEffect} from "react";
// import Skeleton from "react-loading-skeleton";
// import {NavLink} from 'react-router-dom';
import './products.css';

const Products=()=>{
  const [data, setData]=useState([]);
  const [filter, setFilter]=useState(data)
  const [loading, setLoading]=useState(false)
  let  componentMounted=true;

  useEffect(()=>{
    const getProducts=async ()=>{
      setLoading(true)
      const response=await fetch("https://fakestoreapi.com/products")
      console.log(response)
      if(componentMounted){
        setData(await response.clone().json())
        setFilter(await response.json())
        setLoading(false);
        console.log('product=',filter)
      }
      return ()=>{
        componentMounted=false;
      }
    }
   getProducts();


  }, []);

  
    componentMounted=true;

  const Loading=()=>{
    return(
      <>
      Loading................
      </>
    )
  }

  const ShowProducts=()=>{
    <div className="buttons">
      <button className="btn">All</button>
      <button className="btn">Men's clothing</button>
      <button className="btn">Women's clothing</button>
      <button className="btn">Jewelery</button>
      <button className="btn">Electronic</button>
    </div>
  }

   

    return(
        <>
        <div className="container">
          <h1>Latest Products</h1>
        </div>

        <div className="container">
          {loading ?  <Loading/> : <ShowProducts/>}
        </div>
      </>
    )
};

export default Products;