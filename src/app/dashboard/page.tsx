'use client';

import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import SalesChart from '../../components/SalesChart'; // 

export default function DashboardPage() {
  const cartItems = useAppSelector((state) => state.cart.items);

  const totalProducts = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const distinctItems = cartItems.length;
  const estimatedSales = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '2rem 1.5rem', maxWidth: '1400px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.5rem' }}>
        Dashboard de Ventas
      </h1>
      <p style={{ color: '#64748b', marginBottom: '2rem' }}>
        Resumen general de la actividad y estadísticas del carrito de compras.
      </p>

      {/* Tarjetas de métricas principales */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <p style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>Productos Totales</p>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginTop: '0.5rem' }}>{totalProducts}</p>
        </div>

        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <p style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>Ítems Distintos</p>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginTop: '0.5rem' }}>{distinctItems}</p>
        </div>

        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <p style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>Ventas Estimadas</p>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#059669', marginTop: '0.5rem' }}>${estimatedSales.toFixed(2)}</p>
        </div>
      </div>

      {/* componente aquí */}
      <SalesChart cartItems={cartItems} />
    </div>
  );
}