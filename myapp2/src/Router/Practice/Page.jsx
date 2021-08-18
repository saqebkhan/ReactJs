import React from "react";
import Practice from "./Practice";
import { cardDetails } from "./reducer";

export const Page = () => {
  return (
    <div>
      {cardDetails.info.map((item) => (
        <Practice item={item} />
      ))}
    </div>
  );
};

export default Page;
