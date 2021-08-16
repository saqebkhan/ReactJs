import React, {useState} from "react";
import {Card, Row, Col} from "react-bootstrap";
import { useSelector } from "react-redux";
import {getAllGroup} from "../Components/State/selectors/groupSelector";

const FetchingdataFromRedux=()=>{
    const selector = useSelector(getAllGroup)
    const [data,] = useState(selector);

    return(
        <div>
            {data.map((items)=>{
                return(
                    
            <Row><Col md={4}></Col>
            <Col md={2}>
            <Card style={{width:"18rem"}}>
                
                <Card.Title>Hello Redux==={items.name}</Card.Title>
                <Card.Body>this is Cars==={items.desc}</Card.Body>
            
            </Card>
            </Col>
            </Row>
                )})}

        </div>
    )
}
export default FetchingdataFromRedux;