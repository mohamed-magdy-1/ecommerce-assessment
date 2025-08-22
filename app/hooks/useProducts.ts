'use client';

import { useState, useEffect, useMemo } from 'react';
import { fetchProducts, Product } from '../../lib/graphql';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const { data } = await fetchProducts();
        setProducts(data.products);
      } catch (err) {
        setError('Failed to load products');
        console.error('Error loading products:', err);
      } finally {
        setLoading(false);
      }
    };
    
    loadProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }, [filteredProducts]);

  return {
    products: sortedProducts,
    loading,
    error,
    searchTerm,
    setSearchTerm,
  };
}