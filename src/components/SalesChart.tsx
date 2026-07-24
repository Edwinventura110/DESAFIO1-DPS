import React from 'react';

interface CartItem {
  id: string | number;
  title: string;
  quantity: number;
  price: number;
}

interface SalesChartProps {
  cartItems: CartItem[];
}

export default function SalesChart({ cartItems }: SalesChartProps) {
  return (
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
            const maxQuantity = Math.max(...cartItems.map((i) => i.quantity), 1);
            const percentage = (item.quantity / maxQuantity) * 100;

            return (
              <div key={item.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                  <span style={{ fontWeight: 500, color: '#334155' }}>{item.title}</span>
                  <span style={{ fontWeight: 600, color: '#059669' }}>{item.quantity} unidades</span>
                </div>
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
  );
}