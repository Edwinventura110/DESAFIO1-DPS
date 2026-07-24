// src/components/Navbar.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { clearCart } from '../redux/cartSlice';
import '../styles/navbar.css';

interface NavbarProps {
  searchTerm?: string;
  setSearchTerm?: (value: string) => void;
}

export default function Navbar({ searchTerm = '', setSearchTerm }: NavbarProps) {
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isOpen = isClicked || isHovered;

  const totalItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <header className="header-container">
      <div className="navbar-main">
        {/* Lado izquierdo */}
        <div className="navbar-left">
          <button className="menu-icon-btn" title="Menú">
            ☰
          </button>
          <Link href="/" className="navbar-logo">
            🌳 LA CEIBA
          </Link>
        </div>

        {/* Barra de búsqueda superior */}
        <div className="navbar-search-container">
          <span>🔍</span>
          <input 
            type="text" 
            placeholder="¿Qué necesitas?" 
            value={searchTerm}
            onChange={(e) => setSearchTerm && setSearchTerm(e.target.value)}
            className="navbar-search-input"
          />
        </div>

        {/* Lado derecho */}
        <div className="navbar-right">
          <div className="nav-item-link">
            <span>👤</span>
            <span>Invitado</span>
          </div>

          <Link href="/" className="nav-item-link">
            <span>❤️</span>
            <span>Lista</span>
          </Link>

          <Link href="/dashboard" className="nav-item-link">
            <span>📦</span>
            <span>Mis pedidos</span>
          </Link>

          {/* Carrito interactivo */}
          <div 
            className="navbar-cart-wrapper"
            onClick={() => setIsClicked(!isClicked)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="nav-item-link" style={{ fontWeight: 'bold' }}>
              <span>🛒</span>
              <span>{totalItemsCount}</span>
              <span>Total: ${totalPrice.toFixed(2)}</span>
            </div>

            {/* Desplegable del carrito */}
            <div className={`cart-dropdown ${isOpen ? 'show-dropdown' : ''}`}>
              <h4 style={{ marginBottom: '0.5rem', borderBottom: '1px solid #e5e7eb', paddingBottom: '0.4rem' }}>Tus Productos</h4>
              {cartItems.length === 0 ? (
                <p style={{ color: '#64748b', fontSize: '0.9rem', margin: '0.5rem 0' }}>El carrito está vacío</p>
              ) : (
                <>
                  {cartItems.map((item) => (
                    <div key={item.id} className="cart-item-row">
                      <img src={item.image} alt={item.title} />
                      <div style={{ flex: 1, fontSize: '0.85rem' }}>
                        <p style={{ fontWeight: 600, margin: 0 }}>{item.title}</p>
                        <p style={{ margin: 0, color: '#64748b' }}>
                          {item.quantity} x ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <span style={{ fontWeight: 'bold', fontSize: '0.85rem' }}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                  
                  <div style={{ borderTop: '1px solid #e2e8f0', marginTop: '0.5rem', paddingTop: '0.5rem' }}>
                    <p style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                      <span>Total:</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch(clearCart());
                        setIsClicked(false);
                      }}
                      style={{
                        width: '100%',
                        backgroundColor: '#ef4444',
                        color: 'white',
                        border: 'none',
                        padding: '0.4rem',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        marginTop: '0.5rem',
                        fontWeight: 500
                      }}
                    >
                      Vaciar Carrito
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}