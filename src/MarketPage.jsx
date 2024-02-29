import React, {useState} from 'react';
import ProductCard from './components/ProductCard.jsx'
import {Card, CardMedia, Typography} from "@mui/material";

const MarketPage = () => {
    const shopItems = [
        {
            id: 6,
            img: "/assets/img/product1.png",
            name: "健康黄皮水果",
            price: "34.00",
            discount: "24% Off",
            description:"消化不良"
        },
        {
            id: 7,
            img: "/assets/img/product2.png",
            name: "生态莲雾",
            price: "258.00",
            discount: "40% Off",
            description:"精神压力大"
        },
        {
            id: 8,
            img: "/assets/img/product3.png",
            name: "富硒地瓜",
            price: "104.00",
            discount: "35% Off",
            description:"老年人群"
        },
        {
            id: 9,
            img: "/assets/img/product4.png",
            name: "特色菠萝蜜",
            price: "299.00",
            discount: "40% Off",
            description:"精神压力大"
        },
        {
            id: 10,
            img: "/assets/img/product5.png",
            name: "养生枸杞",
            price: "129.00",
            discount: "28% Off",
            description:"钙流失"
        },
        {
            id: 11,
            img: "/assets/img/product6.png",
            name: "野生灵芝",
            price: "189.00",
            discount: "30% Off",
            description:"睡眠不好"
        },
    ];

    return (
        <div className="min-h-screen flex flex-col justify-center my-20">
            {/* heading */}
            <h1 className="font-semibold text-3xl text-center text-black">
                健康助农市场
            </h1>

            {/* card flow */}
            <div className="flex flex-wrap md:flex-wrap justify-center md:pt-8">
                {shopItems.map((item) =>
                    (
                    <div key={item.id} className="w-2/4 md:w-1/3 lg:w-1/4">
                <ProductCard key={item.id}
                             id={item.id}
                             imgpath={item.img}
                             name={item.name}
                             price={item.price}
                             description={item.description}/>
            </div>
            ))}
        </div>
</div>
)
    ;
};

export default MarketPage;
