import React from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import { useState,useEffect } from 'react';
import Loader from './Loader';


const SingleProduct = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      console.log(response.data); // yaha actual data milega
      setProduct(response.data); // state me save karna
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if(loading) return <Loader />
  return (
    <div className="max-w-[350px] bg-[#2a3957] rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 ml-[550px] mt-3 mb-5">
  <img
    src={product?.image}
    alt={product?.title || "Product Image"}
    className="aspect-square object-contain p-6 bg-[#1f2a40] group-hover:scale-95 transition-transform duration-300"
  />
  <div className="p-4 space-y-2">
    <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
      {product?.title}
    </h4>

    <div className="flex items-center gap-3">
      <span className="bg-green-500 text-white text-xs font-medium py-1 px-2 rounded-full shadow-sm">
        ⭐ {product?.rating?.rate}
      </span>
      <span className="text-gray-300 text-sm">{product?.rating?.count} reviews</span>
    </div>

    <p className="text-[18px] font-bold text-yellow-400">
      ₹ {product?.price}
    </p>

    <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
      {product?.description}
    </p>

    <button className="w-full mt-3 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors duration-300">
      Buy Now
    </button>
  </div>
</div>
  )
}

export default SingleProduct