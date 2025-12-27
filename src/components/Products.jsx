import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from './Loader'
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://fakestoreapi.com/products");
      // console.log(response.data); // yaha actual data milega
      setProducts(response.data); // state me save karna
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
    <div className="grid grid-cols-5 max-[1150px]:grid-cols-4 max-[800px]:grid-cols-3 gap-4 p-8">
    {products.map((item) => (
      <PrductCards key={item.id} item={item}/>
    ))}
    </div>
  );
};

function PrductCards({item}){
  const navigate = useNavigate();
  return(
          <div onClick={()=>navigate(`/products/${item.id}`)} className="bg-[#2a3957] rounded-2xl group">
            <img
              src={item.image}
              alt="?"
              className="aspect-square object-contain p-5 group-hover:scale-90 transition-all duration-300"
            />
            <div className="p-3">
              <h4 className="line-clamp-2 group-hover:text-blue-400">{item.title}</h4>
              <div className="flex gap-4 my-2">
                <p className="bg-green-500 w-fit py-0.5 px-2 rounded text-xs">
                  ⭐{item.rating.rate}
                </p>
                <p>{item.rating.count}</p>
              </div>
              <p className="text-[16px] font-medium text-white/75">
                {item.price} Rs
              </p>
            </div>
          </div>
        
  )
}

export default Products;
