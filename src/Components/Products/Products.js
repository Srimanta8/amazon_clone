import {Api,ArrowCircleRight,Favorite, ShoppingCart, Star } from "@mui/icons-material";
import React from "react";
import { useLoaderData } from "react-router-dom";
//import { addToCart } from "../../redux/CartSlice";
//import { useDispatch } from "react-redux";

const Products = () => {
  /*const dispatch =useDispatch() */
  const data = useLoaderData();
  const ProductsData = data.data;
  return (
    <div className=" max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-10 px-4">
      {ProductsData.map((item) => (
        <div key={item._id} className="bg-white h-auto border-[1px] border-slate-200 py-8 z-30 hover:border-transparent
        shadow-none hover:shadow-slate-800 duration-200 relative flex flex-col gap-4"
        >
          <div className="w-full h-auto flex items-center justify-center relative group">
          <span className="text-xs capitalize italic absolute bottom-6 right-2 text-gray">{item.category}</span>
            <img
              className="w-52 h-64 object-contain"
              src={item.image}
              alt="productimg"
            />
            <ul className="w-full h-30 bg-lightgray absolute bottom-[-148px] flex flex-col pt-2 pb-1.8
             items-end justify-center gap-2 font-serif px-2 border-1 boder-r  group-hover:bottom-0 duration-700">
              <li className="productli">Compare{''} <span> <Api/> </span></li>
              <li className="productli">Add to Card <span><ShoppingCart/></span></li>
              <li className="productli">View Details{''} <span><ArrowCircleRight/></span></li>
              <li className="productli">Add to Wish List{''} <span><Favorite/></span></li>
            </ul>
          </div> 
          <div className="px-4 z-10 bg-white"> 
            <div className="flex items-center justify-between">
              <h4 className="tracking-wide text-sm text-darkblue font-bold">{item.title.substring(0,20)}</h4>
              <p className="text-sm text-slate-600 font-semibold">${item.price}</p>
            </div>
            <div>
              <p className="text-sm pt-3 mb-1"> {item.description.substring(0,60)}....</p>
              <div className="text-yellow ">
                <Star/>
                <Star/>
                <Star/> 
                <Star/>
                <Star/>
              </div>
            </div>
            <div>
             <button /*onClick={()=>dispatch(addToCart({
              id:item.id,
              title:item.title,
              description:item.description,
              price:item.price,
              category:item.category,
              image:item.image,
              quantity:1,
             }))}*/
             className="w-full font-serif font-medium text-base bg-gradient-to-tr from-yellow to-lightyellow
             hover:from-darkyellow hover:to-mdyellow
             border-darkyellow hover:border-yellow active:bg-gradient-to-bl active:from-yellow 
             active:to-darkyellow duration-200 py-1.5 rounded-md mt-4 ">Add to Card</button>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
