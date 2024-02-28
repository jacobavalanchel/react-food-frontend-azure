import React from "react";
import { FaStar } from "react-icons/fa";
import toast from "react-hot-toast";


const ProductCard = ({id, name, price, imgpath, description}) =>{
    const addToCart = new Promise((resolve,reject) =>{

        setTimeout(()=>{
            console.log("resolved");
            resolve();

        },2000);

    })
    const addToCartOnTap=()=>{
        // console.log("tapped");
        // toast.promise(addToCart,
        //     {loading: 'Loading',
        //     success: 'Got the data',
        //     error: 'Error when fetching',});
        toast.success("已添加购物车")
    }

    return(
        <div className="h-[370px] 2xl:h-[420px] text-black rounded-lg shadow-lg m-1 cursor-pointer bg-lime-50 hover:bg-lime-100"
             key={id}
        >
            <div>
                <img
                    src={imgpath}
                    alt="img"
                    className="h-56 2xl:h-64 rounded-t-xl w-full"
                />
            </div>
            <div className=" flex flex-col justify-center items-center">
                <h1 className=" font-semibold text-xl pt-4">{name}</h1>
                <div className=" flex gap-10 pt-2">
                    <h2 className=" font-medium text-lg ">${price}</h2>
                    <h2 className=" font-medium text-DarkColor">{description}</h2>
                </div>

                <div className=" flex gap-8 pt-4">
                    <button
                        className=" bg-lime-300 hover:bg-lime-400 active:bg-lime-500 text-black px-4 py-2 font-medium "
                        onClick={addToCartOnTap}
                    >
                       添加至购物车
                    </button>
                    <div className=" flex gap-1 items-center">
                        <h2>5.0</h2>
                        <FaStar className=" text-yellow-300"/>
                    </div>
                </div>
            </div>
        </div>
    )


}
export default ProductCard;