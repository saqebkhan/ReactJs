import React from "react";
import { EmployeeReducer } from "../Reducer/EmployeeReducer";
import {item} from "./item"
const list = () => {
  return
  <div>
      {EmployeeReducer.Data.map((item)=>{
      return
      <item data={item}/>
      
})}
  </div>
};
