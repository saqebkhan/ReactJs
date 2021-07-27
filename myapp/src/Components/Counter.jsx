import React, { useState } from "react";
import { Button } from 'react-bootstrap';

 export const Counter = () => {
  const [cntr, setCntr] = useState(0);
  return (
    <div>
        
      <table>
        <tr>
          <td>
            <Button
              variant={cntr >= 2 ? "success" : "danger"}
              disabled={!cntr > 0}
              onClick={() => setCntr(cntr - 1)}>
                  -
                  </Button>
           
          </td>
          <h1>{cntr}</h1>
          <td>
            <Button
              variant={cntr <=1 ? "success" : "success " }
              onClick={() => setCntr(cntr + 1)}
              disabled={cntr > 9}>
               +
            </Button>
          </td>
        </tr>
      </table>
      
    </div>
  );
};

export default Counter;
