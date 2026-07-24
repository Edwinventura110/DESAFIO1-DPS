// src/app/layout.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Navbar from '../components/Navbar';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchTerm, setSearchTerm] = useState('');

  // Sincronizar el estado con localStorage para que la página principal lo detecte al instante
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    localStorage.setItem('userSearchTerm', value);
    
    // Disparamos un evento personalizado para forzar la actualización inmediata en la página
    window.dispatchEvent(new Event('storage-local-update'));
  };

  return (
    <html lang="es">
      <body>
        <Provider store={store}>
          <Navbar searchTerm={searchTerm} setSearchTerm={handleSearchChange} />
          <main>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
