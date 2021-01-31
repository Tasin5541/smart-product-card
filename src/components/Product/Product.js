import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./Product.css";

export default function Product() {
  const colorCode = {
    blue: "#2196f3",
    black: "#505050",
    green: "#e7f567",
    ash: "#b4c3ae",
    yellow: "#f8b300",
    red: "#b02727",
  };

  const productDetails = [
    {
      productKey: 1,
      productName: "Phillips Headphone",
      ProductCompany: "Phillips",
      productPhoto: "headphone.png", //1:1.38 aspect ratio
      productPrice: "49.99",
      productColor: "blue",
    },
    {
      productKey: 2,
      productName: "Beats Studio3",
      ProductCompany: "Beats",
      productPhoto: "beats-headphone.png",
      productPrice: "249.99",
      productColor: "yellow",
    },
    {
      productKey: 3,
      productName: "Apple AirPods Max",
      ProductCompany: "Apple",
      productPhoto: "apple-headphone.png",
      productPrice: "549.00",
      productColor: "ash",
    },
    {
      productKey: 4,
      productName: "Anker Life Q10",
      ProductCompany: "Anker",
      productPhoto: "red-headphone.png",
      productPrice: "31.99",
      productColor: "red",
    },
  ];

  const productShow = productDetails.map((product) => {
    return (
      <ProductCard
        key={product.productKey}
        productDetails={product}
        colorCode={colorCode[product.productColor]}
      />
    );
  });

  return <div className="product">{productShow}</div>;
}
