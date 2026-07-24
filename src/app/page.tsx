// src/app/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { books } from '../data/books';
import ProductGrid from '../components/ProductGrid';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Cargar valor inicial si ya había algo escrito
    const savedSearch = localStorage.getItem('userSearchTerm');
    if (savedSearch) setSearchTerm(savedSearch);

    // Escuchar los cambios en tiempo real cuando escribes en el Navbar
    const handleStorageUpdate = () => {
      const updatedSearch = localStorage.getItem('userSearchTerm') || '';
      setSearchTerm(updatedSearch);
    };

    window.addEventListener('storage-local-update', handleStorageUpdate);
    return () => {
      window.removeEventListener('storage-local-update', handleStorageUpdate);
    };
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '2rem 1.5rem', maxWidth: '1400px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#0f172a' }}>
        Catálogo de Libros
      </h1>
      
      <ProductGrid products={filteredBooks} />
    </div>
  );
}