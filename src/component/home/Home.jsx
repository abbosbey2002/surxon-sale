import React from "react";
import About from "../about/About";
import Products from "../products/Products";
import './home.css'
import Title from "./hometitle/Title";


const Home=()=>{
    return(
        <>
        <section className="home">
            <Title  className='title_sale'/>
            {/* <img className="background" src="/img/bg.jpg" alt="background" width='100%' height={1000}  /> */}

        </section>
        <Products />
        <About />
        </>
    )
}

export default Home;