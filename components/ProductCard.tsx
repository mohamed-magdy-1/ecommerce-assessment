// components/ProductCard.tsx

"use client";

import React, { useCallback, useMemo, useState } from "react";
import { Product } from "../lib/graphql";
import { useCart } from "./CartContext";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  // Expensive calculation on every render (performance issue)

  const calculateDiscountPercentage = useMemo(() => {
    let calculation = 0;
    for (let i = 0; i < 50000; i++) {
      calculation += Math.sin(i) * Math.cos(i);
    }
    return Math.round(Math.random() * 20);
  }, []);

  const discountPercentage = calculateDiscountPercentage;

  // Creating new function on every render instead of using useCallback
  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  // to stop re-creating the function on every render
  const handleAddToCart = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault(); // Prevent default button behavior
      event.stopPropagation(); // Stop the event from bubbling up
      addToCart(product);
    },
    [addToCart, product]
  );

  return (
    <Link
      href={`/products/${product.id}`}
      className="product-card shadow-lg flex flex-col h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered ? "scale(1.02)" : "scale(1)",
        transition: "transform 0.2s",
      }}
    >
      <div className="relative overflow-hidden">
<Image
  src={product.imageUrl}
  alt={`${product.imageUrl}&w=400&h=400&fit=crop&auto=format&q=60&fm=webp&dpr=1`}
  width={400}
  height={400}
  priority
  sizes="(max-width: 640px) 100vw, 400px"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...." // الناتج من السكربت
  className="product-image w-full h-48 object-cover"
/>


        <div className="absolute top-3 w-full flex justify-between  px-2 py-1 rounded-full">
          <span className="text-lg font-bold text-green-600 bg-white/90 rounded-[5px] p-1 backdrop-blur-sm">
            ${product.price.toFixed(2)}
          </span>

          <span className="flex items-center justify-center bg-white/90 rounded-[5px] p-1">
            {discountPercentage > 0 && (
              <div className="text-xs text-red-500 ">
                {discountPercentage}% off
              </div>
            )}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm flex-grow mb-4 leading-relaxed">
          {product.description}
        </p>

        <div className="mt-auto">
          <button
            onClick={handleAddToCart}
            className="add-to-cart-btn w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg outline-none"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}

