import React from 'react';
import '../Components/css/NavBar.css' 

export const NavBar = () => {
    return (
        <div>
            <div class="header">
        
        <div class="overlay"></div>
        <div class="container">
            <nav>
                <h1 class="brand"><a href="index.html">Br<span>a</span>nd</a></h1>
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