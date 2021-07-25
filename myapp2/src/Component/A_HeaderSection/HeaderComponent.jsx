import React from 'react';

import "./HeaderSection.css"
import Button from 'react-bootstrap/Button';


const HeaderComponent = () => {
    return (
        <div>
    <nav>
       <a href="">Home</a>
       <div class="dropdown1">
        <a href="">Services</a>
         <div class="droplist">
            <a href="">Services1</a>
            <a href="">Services2</a>
            <a href="">Services3</a>
         </div>
       </div>
       <a href="">About</a>
       <div class="dropdown1">
       <a href="">Products</a>
       <div class="droplist">
       <a href="">Laptops</a>
       <a href="">Monitors</a>
       <a href="">CPU</a>
       <a href="">Other Computer Accessories</a>
       </div>
       </div>
       <a href="">Contet Us</a>

                <button>Search</button>
                <input type="text" />
                
        </nav>
        <br></br>
        <br></br>

        <br></br>
        <br></br>



        <Button variant="primary">Sufyan</Button>

            </div>
    );
};

export default HeaderComponent;