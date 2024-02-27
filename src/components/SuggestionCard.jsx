import React from "react";
import { FaStar } from "react-icons/fa";
import toast from "react-hot-toast";


const ProductCard = ({id, name, price, imgpath, description}) =>{
    return (
        <div className=" flex flex-col w-full lg:w-2/6 border-2 border-DarkColor p-3 rounded-lg gap-5 hover:bg-PrimaryColor transition duration-300 ease-in-out cursor-pointer">
            <div>
                <ImQuotesLeft size={25} />
                <h1 className=" text-xl font-semibold text-ExtraDarkColor pt-4">
                    {name}
                </h1>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                consequatur fuga suscipit perspiciatis totam. Eos esse nisi omnis dicta,
                aperiam distinctio fuga ipsam rerum rem.
            </p>
        </div>
    );


}
export default ProductCard;