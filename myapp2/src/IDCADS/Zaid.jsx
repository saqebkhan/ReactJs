import React from 'react';
import "./Zaid.css";
import {Row, Col, Button} from "react-bootstrap";
import Zaide from './Zaid';

export const Zaid = () => {
    return(
        <div>            
            {/* Hadding */}
                <Row><Col md={6}>
            <h1 className="heading"> Wegiver </h1>
            <h3>Free Crowdfunding For India</h3>
            
            </Col>
            </Row>
            
            
            <br />
            <Row>
            <Col md={6}>

                {/* Containt */}
            <p clasName="para">Raise found online for medical emergencies adn <br />
            social causes </p>
            </Col>
            </Row>
            

            {/* Button */}

            <Button className="btn">Start a fundraise - it's FREE  </Button>
            
            
            
            

             {/* Static */}

             <div className="col">
             <Row>
             <Col xs={2}>
             <p>170,000+ <br/> Fundraiser  </p>
             </Col>
             <Col xs={2}>
             <p>170,000+ <br/> Fundraiser  </p>
             </Col>
             <Col xs={2}>
             <p>170,000+ <br/> Fundraiser  </p>
             </Col>
             </Row>
             </div>
        </div>
    )
};

export default Zaid;