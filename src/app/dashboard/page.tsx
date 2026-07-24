// src/app/dashboard/page.tsx
'use client';

import React from 'react';
import { useAppSelector } from '../../redux/hooks';

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

      {/* Sección de Gráfico de Barras Visual */}
      <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1.5rem' }}>
          Distribución de Cantidades por Producto
        </h3>

        {cartItems.length === 0 ? (
          <p style={{ color: '#94a3b8', textAlign: 'center', padding: '2rem 0' }}>
            No hay datos suficientes para mostrar el gráfico. Agrega productos al carrito.
          </p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {cartItems.map((item) => {
              // Calculamos un porcentaje relativo para la barra (tomando en cuenta el total o un máximo)
              const maxQuantity = Math.max(...cartItems.map((i) => i.quantity), 1);
              const percentage = (item.quantity / maxQuantity) * 100;

              return (
                <div key={item.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                    <span style={{ fontWeight: 500, color: '#334155' }}>{item.title}</span>
                    <span style={{ fontWeight: 600, color: '#059669' }}>{item.quantity} unidades</span>
                  </div>
                  {/* Contenedor de la barra de progreso / gráfico */}
                  <div style={{ width: '100%', background: '#f1f5f9', borderRadius: '4px', height: '12px', overflow: 'hidden' }}>
                    <div 
                      style={{ 
                        width: `${percentage}%`, 
                        background: '#059669', 
                        height: '100%', 
                        borderRadius: '4px',
                        transition: 'width 0.3s ease'
                      }} 
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}