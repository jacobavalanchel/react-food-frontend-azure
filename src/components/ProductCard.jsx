import React from "react";
import toast from "react-hot-toast";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {IconButton} from "@mui/material";

const ProductCard = ({id, name, price, imgpath, description}) => {
    const addToCart = new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("resolved");
            resolve();

        }, 2000);

    })
    const addToCartOnTap = () => {
        // console.log("tapped");
        // toast.promise(addToCart,
        //     {loading: 'Loading',
        //     success: 'Got the data',
        //     error: 'Error when fetching',});
        toast.success("已添加购物车")
    }

    return (
        <div className="text-black rounded-lg shadow-lg m-1 cursor-pointer bg-lime-50 hover:bg-lime-100"
             key={id}
        >

            <div className=" flex flex-col justify-center items-center">
                <img
                    src={imgpath}
                    alt="img"
                    className="h-[10rem] md:h-[20rem] rounded-t-xl w-full object-cover"
                />

                <div className="gap-1 flex flex-col items-center justify-center">
                    <h1 className=" font-semibold text-lg pt-4">{name}</h1>
                    <div className="flex flex-row items-center justify-center">
                        <h2 className=" font-medium text-lg ">￥{price}</h2>
                        <IconButton color="primary" aria-label="add to shopping cart" onClick={addToCartOnTap}>
                            <AddShoppingCartIcon/>
                        </IconButton>
                    </div>

                </div>
            </div>
        </div>
    )


}
export default ProductCard;