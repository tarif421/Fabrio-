import React, { useEffect } from 'react';

const AllProducts = () => {
    useEffect(() => {
        fetch("http://localhost:3000/latestProduct")
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    },[])
    return (
        <div>
           im all prosucts 
        </div>
    );
};

export default AllProducts;