import React, { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const ProductDetails = () => {
  const product = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleBooking = () => {
    if (!user || user.role === "admin" || user.role === "manager") {
      alert("You cannot book this product.");
      return;
    }
    navigate(`/booking/${product._id}`);
  };

  if (!product) return <p>Product not found</p>;

  return (
    <div className="max-w-5xl mx-auto p-5">
      <h1 className="font-bold text-4xl  text-[#384bb4] mt-15 font-serif mb-20" >Product Details</h1>
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Product Image */}
        <div className="flex-1">
          <img
            src={product.productImage}
            alt={product.productName}
            className="w-full h-80 object-cover rounded"
          />
        </div>
            
        {/* Product Info */}
        <div className="flex-1">
          <h1 className="text-3xl my-4 font-bold">{product.productName}</h1>
          {/* price stock */}
         
            <p className="text-[#5c6dc9] font-bold text-lg text-left ">
              price: ${product.price}
            </p>
            <p className="text-left text-xl"><span className="font-semibold">Category:</span> {product.category}</p>
          
            <p className="text-left text-xl"><span className="font-semibold">Description:</span> {product.description}</p>
              <p className="text-left text-xl"><span className="font-semibold">Stock:</span> {product.availableQuantity}</p>
            <p className="text-left text-xl"><span className="font-semibold">Minimum Order:</span> {product.minimumOrder}</p>

            {/* Payment Options */}
          {product.paymentOptions?.length > 0 && (
            <div className="mt-3">
              <strong className="text-lg flex ">Payment Options:</strong>
              <ul className="list-disc list-inside flex flex-col justify-end">
                {product.paymentOptions.map((option, i) => (
                  <button className="btn w-[] " key={i}>{option}</button>
                ))}
              </ul>
            </div>
          )}
    
          

          {product.features && product.features.length > 0 && (
            <div className="mt-4">
              <strong>Features:</strong>
              <ul className="list-disc list-inside">
                {product.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Order / Booking Button */}
  <Link to="/booking">
          <button
            onClick={handleBooking}
            disabled={!user || user.role === "admin" || user.role === "manager"}
            className={`mt-6 btn ${
              !user || user.role === "admin" || user.role === "manager"
                ? "btn-disabled"
                : "btn-primary"
            }`}
          >
            {!user || user.role === "admin" || user.role === "manager"
              ? "Cannot Book"
              : "Book / Order Now"}
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
