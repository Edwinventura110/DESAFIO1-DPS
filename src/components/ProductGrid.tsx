// src/components/ProductGrid.tsx
'use client';

import React from 'react';
import { Product } from '../types/Product';
import ProductCard from './ProductCard';
import '../styles/product-gird.css';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="catalog-container">
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}