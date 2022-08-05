import React from "react";
import './navbar.css'

const Navbar=()=>{
    return(
        <>
        <nav>
            <div>
                <a href="#cer" className="brend navbar_all_items"> Surxon <span className=''>Sale</span> </a>
            </div>
            <div className="nav_items">
                <ul className="ul_items">
                    <li> <a href="#e" className="nav_item navbar_all_items"> Home </a>  </li>
                    <li> <a href="#cds" className="nav_item navbar_all_items"> Products </a>  </li>
                    <li> <a href="#sdc" className="nav_item navbar_all_items"> About </a>  </li>
                    <li> <a href="#csd" className="nav_item navbar_all_items"> Contact </a>  </li>
                    
                </ul>
            </div>
            <div>
                <a href="#vfs" className="sign navbar_all_items sign">Sign</a>
                <a href="#eg" className="login navbar_all_items sign">Login</a>
            </div>
            <div>
              <div className="bar_menu"> <i className="fa-solid fa-bars"> M</i> </div>  
              <i className="fa-solid"></i>
              
            </div>
        </nav>
        </>
    )
}


export default Navbar;