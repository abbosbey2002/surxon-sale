import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const Product=()=>{

    const {id}=useParams()
    const [product, setProduct]=useState([])
    const [loading, setLoading]=useState(false)

    useEffect(()=>{
        const getProdut=async () =>{
            setLoading(true)
            const response=await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json())
            setLoading(false);
        }
        getProdut();
    }, [])

    const Loading=()=>{
        return(
           <>
            Loading..............
           </>
        )
    }
      const ShowProduct=()=>{
        return(
           <>
           <div className="box">
            <img src={product.image} alt={product.title} height='400px' width='400px' />
            <h4>{product.category}</h4>
            <h1>{product.title}</h1>
           </div>
           </>
        )
    }


    return(
        <>
        <div className="container">
        {loading: <loading /> ? <ShowProduct>}
        </div>
        </>
    )
}