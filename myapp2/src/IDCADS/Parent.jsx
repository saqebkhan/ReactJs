import {React, useState} from 'react';
import Child from './Child'

export const Parent = () => {
    const [nam, setNam]  = useState("saqeb")
  

    return (
        <div>
            <Child />
            <Child />
        </div>
    );
};

export default Parent;