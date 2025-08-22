'use client';

import React, { memo } from 'react';
import dynamic from 'next/dynamic';
import { Product } from '../../lib/graphql';
import LoadingSpinner from './LoadingSpinner';

const ProductCard = dynamic(() => import('../../components/ProductCard'), {
  ssr: false,
  loading: () => <ProductCardSkeleton />
});

interface ProductsGridProps {
  products: Product[];
  loading?: boolean;
  error?: string | null;
}

const ProductsGrid = memo(function ProductsGrid({ 
  products, 
  loading = false, 
  error = null 
}: ProductsGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 text-lg">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No products found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <ProductCard 
          key={product.id} 
          product={product}
          // priority={index < 4} // First 4 images get priority loading
        />
      ))}
    </div>
  );
});

function ProductCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-200 h-48 w-full rounded-lg mb-4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="h-10 bg-gray-200 rounded w-full mt-4"></div>
      </div>
    </div>
  );
}

export default ProductsGrid;