import React from 'react';
import '../Components/css/NavBar.css' 

export const NavBar = () => {
    return (
        <div>
            <div class="header">
        
        <div class="overlay"></div>
        <div class="container">
            <nav>
                <h1 class="brand"><a href="index.html"><span style={{color:"blue"}}><b>Pickup</b></span><span style={{color:"yellow"}}>Biz</span></a></h1>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">About</a></li>
                   <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>
        </div>
    );
};

export default NavBar;
