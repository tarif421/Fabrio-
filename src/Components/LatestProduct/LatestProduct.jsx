import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router";

const LatestProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/latestProduct")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => err);
  }, []);

  return (
    <>
      <div>
        <h1 className="font-bold text-4xl  text-[#384bb4] mt-15 font-serif" >Latest Products</h1>
        <p  className="text-xs mt-2">
          Discover our high-quality garments ready for bulk production. <br />
          Customizable to your brand's needs.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-10 gap-5 ">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <div>
        <Link to="/allProducts">
        <button className="font-semibold text-xl text-[#384bb4] btn">View All Products →</button>
        </Link>
      </div>
    </>
  );
};

export default LatestProduct;
