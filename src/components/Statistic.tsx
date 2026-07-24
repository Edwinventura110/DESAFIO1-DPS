// src/components/Statistics.tsx
'use client';

import React from 'react';
import { useAppSelector } from '../redux/hooks';
import '../styles/dashboard.css';

export default function Statistics() {
  const cartItems = useAppSelector((state) => state.cart.items);

  const totalProducts = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const distinctItems = cartItems.length;
  const estimatedSales = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <h3>Productos Totales</h3>
        <p>{totalProducts}</p>
      </div>
      <div className="stat-card">
        <h3>Ítems Distintos</h3>
        <p>{distinctItems}</p>
      </div>
      <div className="stat-card">
        <h3>Ventas Estimadas</h3>
        <p>${estimatedSales.toFixed(2)}</p>
      </div>
    </div>
  );
}