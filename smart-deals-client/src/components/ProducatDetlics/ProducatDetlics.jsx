import React from 'react';
import { useLoaderData } from 'react-router';

const ProducatDetlics = () => {
    const producat = useLoaderData();
    console.log(producat);
    
    return (
        <div>
            <h1>Producat Detlise Pages</h1>
        </div>
    );
};

export default ProducatDetlics;