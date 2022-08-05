
import React, {useState, useEffect} from "react";
// import Skeleton from "react-loading-skeleton";
import {NavLink} from 'react-router-dom';
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
   return(
    <>
     <div className="buttons" key={45}>
      <button className="btn_red">All</button>
      <button className="btn_red">Men`s clothing</button>
      <button className="btn_red">Women's clothing</button>
      <button className="btn_red">Electronic</button>
      <button className="btn_red">Jevelery</button>
    </div>
    {filter.map((product)=>{
      return(
        <>
       <div className="box" id={product.id}>
         <img src={product.image} alt={product.title} />
        <h1>{product.title}</h1>
        <p>${product.price}</p>
        <NavLink to={`/products/${product.id}`}> Buy now </NavLink>
       </div>
        </>
      )
    })}
    </>
   )
  } 
    
    
   

    return(
        <>
        <div className="">
          <h1>Latest Products</h1>
        </div>
        <hr />

        <div className="container">
          {loading ?  <Loading/> : <ShowProducts/>}
        </div>
      </>
    )
};

export default Products;