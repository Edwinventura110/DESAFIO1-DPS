// src/components/SalesChart.tsx
'use client';

import React from 'react';
import { useAppSelector } from '../redux/hooks';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import '../styles/dashboard.css';

export default function SalesChart() {
  const cartItems = useAppSelector((state) => state.cart.items);

  const chartData = cartItems.map((item) => ({
    title: item.title,
    quantity: item.quantity,
  }));

  return (
    <div className="chart-section">
      <h3 style={{ marginBottom: '1rem', color: '#0f172a' }}>Productos Agregados</h3>
      {chartData.length === 0 ? (
        <p style={{ color: '#64748b', textAlign: 'center', padding: '2rem' }}>
          No hay datos suficientes para mostrar la gráfica. Agrega productos al carrito.
        </p>
      ) : (
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="title" interval={0} tick={{ fontSize: 12 }} />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="quantity" fill="#0284c7" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}