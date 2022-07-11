import React from "react";
import Products from "../product/Products";
import './home.css'
import Title from "./hometitle/Title";


const Home=()=>{
    return(
        <>
        <section className="home">
            <img className="background" src="/img/bg.jpg" alt="background" width='100%' height={1000}  />

            <Title  className='title_sale'/>
        </section>
        <Products />
        </>
    )
}

export default Home;