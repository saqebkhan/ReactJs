import React from 'react';

const Child = (props) => {
    let name = 'Saqeb';
    props.getter(name)
    return (
        <div>
            <h1>{props.getter(name)}</h1>
        </div>
    );
};

export default Child;