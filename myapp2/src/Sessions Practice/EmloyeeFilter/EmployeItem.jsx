import React from  "react";
import { Card , Image} from "react-bootstrap";
import "./Employee.css"

export const EmployeeItem = ({itemData}) => {
  return (
    <div>
      {/* <h2>Employee</h2> */}
    <Card className="employeeItem">
      <h4>Podar International</h4>
      <Image src= {itemData.imgUrl}   style={{width:"140px"}}/> 
      <span>Name : {itemData.Name}</span>
      <span>Class : {itemData.Class}</span>
      <span>City : {itemData.City}</span>
    </Card>
    </div>
  );
};
