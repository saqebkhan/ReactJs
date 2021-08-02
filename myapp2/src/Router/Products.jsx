import React from 'react';
import { Row,Col } from 'react-bootstrap';


const Products = () => {
    return (
        <div>
            <center>
            <h1 style={{textAlign:"centre"}}>These are Products</h1><br/>
            <Row><Col md={4}>
                <figure>
            <img src="pp1.jpg" alt="" /><figcaption>product 1</figcaption><br/><br/>
            <img src="pp2.jpg" alt="" /><figcaption>product 2</figcaption><br/><br/>
            <img src="pp4.jpg" alt="" /><figcaption>product 3</figcaption><br/><br/>
            <img src="pp5.jpg" alt="" /><figcaption>product 4</figcaption><br/><br/>
            <img src="pp6.jpg" alt="" /><figcaption>product 5</figcaption><br/><br/>
            <img src="pp7.jpg" alt="" /><figcaption>product 6</figcaption><br/><br/>
            </figure>

            </Col>
            
                <Col md={4}>
                <img src="pp1.jpg" alt="" /><figcaption>product 7</figcaption><br/><br/>
            <img src="pp2.jpg" alt="" /><figcaption>product 8</figcaption><br/><br/>
            <img src="pp4.jpg" alt="" /><figcaption>product 9</figcaption><br/><br/>
            <img src="pp5.jpg" alt="" /><figcaption>product 10</figcaption><br/><br/>
            <img src="pp6.jpg" alt="" /><figcaption>product 11</figcaption><br/><br/>
            <img src="pp7.jpg" alt="" /><figcaption>product 12</figcaption><br/><br/>
                </Col>
                <Col md={4}>
                <img src="pp1.jpg" alt="" /><figcaption>product 13</figcaption><br/><br/>
            <img src="pp2.jpg" alt="" /><figcaption>product 14</figcaption><br/><br/>
            <img src="pp4.jpg" alt="" /><figcaption>product 15</figcaption><br/><br/>
            <img src="pp5.jpg" alt="" /><figcaption>product 16</figcaption><br/><br/>
            <img src="pp6.jpg" alt="" /><figcaption>product 17</figcaption><br/><br/>
            <img src="pp7.jpg" alt="" /><figcaption>product 18</figcaption><br/><br/>
                </Col>
            </Row>
            </center>
            
        </div>
    );
};

export default Products;