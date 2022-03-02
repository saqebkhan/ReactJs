import React from 'react';
import Child from './Child'

const Parent = () => {
    const getter = (data)=> {
        console.log(data)
    }
    getter()
    return (
        <div>
            <Child />
        </div>
    );
};

export default Parent;