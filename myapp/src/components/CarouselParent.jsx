import React from "react";
import { CarouselChild } from "./CarouselChild";
import { CarouselReducer } from "../Reducer/CarouselReducer";
export const CarouselParent= () => {
  console.log(CarouselReducer)

  return(
    <div>
      {CarouselReducer.Data.map((kuchbhi)=>{
        return <CarouselChild kaimebhi={kuchbhi} />
      })}
    </div>
  );


};
