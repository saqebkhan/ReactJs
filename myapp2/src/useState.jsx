import React from 'react';

const useState = () => {
    const [value, setvalue]=useState(" ")
    return (
        <div>
            <h1 onChange={(e) => setvalue(e.target.value)}></h1>
        </div>
    );
};

export default useState;