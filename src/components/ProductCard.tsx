// src/components/ProductCard.tsx
'use client';

import React from 'react';
import { Product } from '../types/Product';
import { useAppDispatch } from '../redux/hooks';
import { addToCart } from '../redux/cartSlice';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="product-card">
      <div>
        <img src={product.image} alt={product.title} className="product-image" />
        <h3 className="product-title">{product.title}</h3>
      </div>
      <div>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button
          className="btn-add"
          onClick={() => dispatch(addToCart(product))}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}